<template>
  <div>
    <p>{{ userName }}</p>
  </div>
</template>

<script>
import { useUserStore } from '../stores/user.js';
import { computed } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const store = useUserStore();
    const userName = computed(() =>
      store.name ? store.name : 'User Has No Name'
    );

    return {
      userName,
      name: store.name,
    };
  },
};
</script>
