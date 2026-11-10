import { defineMermaidSetup } from '@slidev/types'

// neutral greys and the slide's serif: diagrams carry structure, not colour
export default defineMermaidSetup(() => ({
  theme: 'neutral',
  fontFamily: '"TeX Gyre Pagella", Palatino, Georgia, serif',
  themeVariables: { fontSize: '20px' }, // diagrams render in a shadow root, out of reach of the theme's CSS
}))
