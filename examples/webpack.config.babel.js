import path from 'path';
import glob from 'glob';

export default {
  entry: glob.sync('./examples/src/*.js')
    .reduce((o, f) => (o[f.match(/\/([aA-zZ]*)\.js/)[1]] = f, o), {}),
  mode: 'development',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './build')
  }
}
