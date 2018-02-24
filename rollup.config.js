import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default {
  input: 'src/context-menu.js',
  plugins: [
    postcss({
      plugins: [
        autoprefixer(),
      ],
      minimize: true,
    }),
    buble(),
    uglify(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.moduleName,
      sourcemap: true,
    },
  ],
};
