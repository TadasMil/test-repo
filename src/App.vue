<template>
  <div id="app">
    <User />
    <button type="button" @click="setName">Set Random Name</button>
  </div>
</template>

<script>
import User from './components/User.vue';
import { useUserStore } from './stores/user.js';

export default {
  name: 'App',
  components: {
    User,
  },
  setup() {
    const store = useUserStore();

    const setName = () => {
      const randomCharName = (Math.random() + 1).toString(36).substring(7);
      store.setName(randomCharName);
    };

    return {
      setName,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
