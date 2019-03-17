<template>
  <v-layout justify-center row wrap>
    <v-flex lg3 md4 sm6 xs8>
      <v-form ref="form" v-on:submit.prevent="handleSubmit">
        <v-text-field
          v-model="word"
          label="Word"
          :disabled="loading"
          required
          clearable
        ></v-text-field>
        <v-btn small color="primary" :disabled="loading" dark type="submit">
          Check
        </v-btn>
      </v-form>
      <img v-if="loading" src="../assets/loader.gif" />
      <v-layout justify-center column wrap v-if="timer">
        <v-flex xs3>
          <h6 class="title" v-if="isIncluded">This word is <b>CORRECT</b> !</h6>
          <h6 class="title" v-else>
            This word is <b>not correct.</b><br />Did you mean,
          </h6>
        </v-flex>

        <v-flex xs6 v-if="result">
          <v-card class="pa-4 ma-4" color="blue-grey lighten-5">
            <v-card-text
              v-for="(item, index) in result"
              :key="index"
              class="pa-0"
            >
              {{ item.word }}
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs3 class="pt-4">
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
  name: "schecker",
  data() {
    return {
      word: ""
    };
  },
  computed: {
    ...mapGetters("main", {
      isIncluded: "isIncluded",
      resultMessage: "getResultMessage",
      result: "getResult",
      loading: "getLoading",
      timer: "getTimer"
    })
  },
  mounted() {
    this.checkResult();
  },
  methods: {
    ...mapActions("main", ["checkWord", "checkResult"]),
    handleSubmit(e) {
      console.log("A");
      e.preventDefault();
      this.checkWord(this.word);
    }
  }
};
</script>
