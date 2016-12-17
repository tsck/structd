import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/dstruct',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'dstruct'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include }
    ]
  }
}