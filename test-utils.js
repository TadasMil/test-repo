import { createTestingPinia } from '@pinia/testing';
import { render } from '@testing-library/vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const customRender = (ui, options) =>
  render(ui, {
    ...options,
    global: {
      ...options?.global,
      plugins: [
        router,
        createTestingPinia(),
        ...(options?.global?.plugins || []),
      ],
    },
  });

export * from '@testing-library/vue';
export { customRender as render, router };
