const state = {
  on: false,
  type: null,
  message: null
};

const actions = {
  error({ commit }, message) {
    commit("error", message);
  },
  clear({ commit }) {
    commit("clear");
  }
};

const mutations = {
  error(state, message) {
    state.on = true;
    state.type = "error";
    state.message = message;
  },
  clear(state) {
    state.on = false;
    state.type = null;
    state.message = null;
  }
};

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations
};
