import { defineConfig } from 'vite'
import { cpSync } from 'node:fs'

// Images live in work/ and logos/ at the repo root, so the page also works
// when GitHub Pages serves the repo as plain files. The build copies them.
const copyStatic = {
  name: 'copy-static',
  closeBundle() {
    for (const dir of ['work', 'logos']) cpSync(dir, `dist/${dir}`, { recursive: true })
    cpSync('.nojekyll', 'dist/.nojekyll')
  },
}

export default defineConfig({
  base: './',
  publicDir: false,
  plugins: [copyStatic],
})
