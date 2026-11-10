import { defineShikiSetup } from '@slidev/types'

// a near-monochrome highlighter: code is read, not decorated
export default defineShikiSetup(() => ({
  themes: { light: 'min-light', dark: 'min-light' },
}))
