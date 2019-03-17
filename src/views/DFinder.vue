<template>
  <v-layout justify-center row wrap>
    <v-flex lg3 md4 sm6 xs8>
      <v-form ref="form" v-on:submit.prevent="handleSubmit">
        <v-text-field
          v-model="firstWord"
          label="First Word"
          :disabled="loading"
          required
          clearable
        ></v-text-field>
        <v-text-field
          v-model="secondWord"
          label="Second Word"
          :disabled="loading"
          required
          clearable
        ></v-text-field>
        <v-btn small color="primary" :disabled="loading" dark type="submit">
          Calculate
        </v-btn>
      </v-form>
      <img v-if="loading" src="../assets/loader.gif" />
      <v-layout justify-center column wrap v-if="result">
        <v-flex xs8>
          <h6 class="title">
            According to <br />Levenshtein Distance Algorithm,<br /><br />
            lev({{ firstWord }}, {{ secondWord }}) = <b>{{ result }}</b>
          </h6>
        </v-flex>

        <v-flex xs4 class="pt-4">
          <span class="body-2">
            execution time = <b>{{ timer }}</b> sec
          </span>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "dfinder",
  data() {
    return {
      loader: null,
      firstWord: "",
      secondWord: ""
    };
  },
  computed: {
    ...mapGetters("main", {
      result: "getResult",
      loading: "getLoading",
      timer: "getTimer"
    })
  },
  mounted() {
    this.checkResult();
  },
  methods: {
    ...mapActions("main", ["checkWords", "checkResult"]),
    handleSubmit(e) {
      e.preventDefault();
      const words = {
        firstWord: this.firstWord,
        secondWord: this.secondWord
      };
      this.checkWords(words);
    }
  }
};
</script>
