<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/dfinder">Distance Finder</router-link> |
      <router-link to="/schecker">Spell Checker</router-link>
    </div>
    <v-content transition="slide-x-transition">
      <v-alert :value="alert.on" v-bind:type="alert.type">
        {{ alert.message }}
      </v-alert>
      <router-view />
    </v-content>
  </v-app>
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  background-color: #42b983;
}
</style>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions("alert", {
      clearAlert: "clear"
    })
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      this.clearAlert();
    }
  }
};
</script>
