import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import packageJson from './package.json'

const externalDependencies = [
  ...Object.keys(packageJson.peerDependencies || {})
]

export default {
  input: './src/index.js',
  output: [
    {
      file: './build/cjs/index.js',
      format: 'cjs'
    },
    {
      file: './build/es/index.js',
      format: 'es'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ],
  external: externalDependencies
}
