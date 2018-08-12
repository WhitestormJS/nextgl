import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import glslify from 'rollup-plugin-glslify';

export default {
  entry: './src/index.js',

  output: {
    file: 'nextgl.js',
    format: 'umd',
    name: 'NEXT',
    dir: './build'
  },

  plugins: [
    glslify(),
    babel({runtimeHelpers: true}),
    commonjs({ignoreGlobal: true}),
    resolve(),
    ...(process.env.FXGL_SERVE ? [ // SERVE
      serve({
        open: true,
        port: 3000,
        contentBase: './'
      })
    ] : [])
  ]
};
