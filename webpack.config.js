const path = require('path');

module.exports = {
  entry: './src/index.js', // 진입점
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js', // 번들 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 파일에 적용
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel을 사용하여 트랜스파일링
          options: {
            presets: ['@babel/preset-react'], // 리액트 문법 지원
          },
        },
      },
    ],
  },
  mode: 'development', // 개발 모드
};
