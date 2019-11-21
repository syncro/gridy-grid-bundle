import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';


export default {
  input: 'gridy-grid-index.js',
  name: 'GridyGrid',
  sourcemap: true,
  output: {
    file: 'dist/gridy-grid-legacy-bundle.js',
    format: 'iife',
    name: 'm'
  },
  external: [],
  plugins: [
    nodeResolve({jsnext: true}),
    babel({
      //exclude: 'node_modules/**'
    })
  ]
};