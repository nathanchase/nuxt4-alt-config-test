import { $fetch, setup } from '@nuxt/test-utils/e2e';
import { describe, expect, it } from 'vitest';

describe('basic', async () => {
  await setup({
    rootDir: './app',
  });

  it('contains Welcome to Nuxt! string', async () => {
    const html = await $fetch('/');
    expect(html).toContain('Welcome to Nuxt!');
  });
});
