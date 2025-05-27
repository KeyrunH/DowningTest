import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    video: 'on', // records video for every test
  },
});
