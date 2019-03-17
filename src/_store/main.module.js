import EditDistance from "../_helpers/algorithms";
import dictionary from "../_helpers/dictionary";

const state = {
  isIncluded: false,
  resultMessage: "",
  result: "",
  loading: false,
  timer: 0
};

const getters = {
  isIncluded: state => {
    return state.isIncluded;
  },
  getResultMessage: state => {
    return state.resultMessage;
  },
  getResult: state => {
    return state.result;
  },
  getLoading: state => {
    return state.loading;
  },
  getTimer: state => {
    return state.timer;
  }
};

const actions = {
  checkWord({ commit, dispatch }, payload) {
    if (!payload) {
      dispatch("alert/error", "Type any word to input", { root: true });
      commit("deleteResult");
    } else {
      dispatch("alert/clear", null, { root: true });
      commit("checkWordRequest");
      setTimeout(() => {
        var t0 = window.performance.now();
        const words = dictionary();
        var response;
        if (words.includes(payload)) {
          var t1 = window.performance.now();
          response = {
            result: "INCLUDES",
            timer: (t1 - t0) / 1000
          };
        } else {
          const calculatedList = new Array();
          words.forEach(x => {
            const editDistance = new EditDistance(payload, x);
            const calculated = {
              word: x,
              result: editDistance.result
            };
            calculatedList.push(calculated);
          });
          calculatedList.sort((a, b) =>
            a.result > b.result ? 1 : b.result > a.result ? -1 : 0
          );
          t1 = window.performance.now();
          response = {
            result: calculatedList.slice(0, 10),
            timer: (t1 - t0) / 1000
          };
        }

        commit("checkWordSuccess", response);
      }, 500);
    }
  },
  checkWords({ commit, dispatch }, payload) {
    if (!payload.firstWord || !payload.secondWord) {
      dispatch("alert/error", "Type any words to inputs", { root: true });
      commit("deleteResult");
    } else {
      dispatch("alert/clear", null, { root: true });
      commit("checkWordsRequest");
      setTimeout(() => {
        const t0 = window.performance.now();
        const editDistance = new EditDistance(
          payload.firstWord,
          payload.secondWord
        );
        const t1 = window.performance.now();
        const response = {
          result: editDistance.result,
          timer: t1 - t0
        };

        commit("checkWordsSuccess", response);
      }, 500);
    }
  },
  checkResult({ commit }) {
    commit("deleteResult");
  }
};

const mutations = {
  checkWordRequest(state) {
    state.isIncluded = false;
    state.resultMessage = "";
    state.result = "";
    state.loading = true;
    state.timer = 0;
  },
  checkWordSuccess(state, response) {
    if (response.result === "INCLUDES") {
      state.isIncluded = true;
    } else {
      state.result = response.result;
      state.isIncluded = false;
    }
    state.loading = false;
    state.timer = response.timer;
  },
  checkWordsRequest(state) {
    state.loading = true;
    state.result = "";
  },
  checkWordsSuccess(state, response) {
    state.loading = false;
    state.result = response.result;
    state.timer = response.timer;
  },
  deleteResult(state) {
    state.isIncluded = false;
    state.resultMessage = "";
    state.result = "";
    state.loading = false;
    state.timer = 0;
  }
};

export const main = {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
};
