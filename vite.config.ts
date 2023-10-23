import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/

export default ({ mode }) => {
  console.log('mode: ', mode)
  console.log(`process.cwd(): ${process.cwd()}`)
  console.log(`__dirname: ${__dirname}`)
  console.log(`__filename: ${__filename}`)
  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    // resolve: {
    //   alias: [
    //     //find에는 절대 경로의 별칭, replacement에는 해당 절대 경로를 입력
    //     { find: '@', replacement: path.resolve(__dirname, 'src') },
    //     { find: '@data', replacement: './data' },
    //     { find: '@components', replacement: './components' },
    //     { find: '@hooks', replacement: './hooks' },
    //     { find: '@layouts', replacement: './layouts' },
    //     { find: '@styles', replacement: './styles' },
    //     { find: '@pages', replacement: './pages' },
    //     { find: '@utils', replacement: './utils' },
    //     { find: '@typings', replacement: './typings' },
    //   ],
    // },
  })
}
