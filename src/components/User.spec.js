import { describe, it, expect, vi } from 'vitest';
import { render } from '../../test-utils';

describe('BaseLayout', () => {
  it('should render the component', () => {
    const { html } = render(BaseLayout, {
      global: {
        stubs: ['BaseSidebar'],
      },
    });

    expect(html()).toMatchSnapshot();
  });
});
