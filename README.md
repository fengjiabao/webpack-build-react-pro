# webpack-build-react-pro

1：安装git环境,cnpm

2：安装node.js
  npm install node.js 或cnpm install node.js	
  
3: 安装react,webpack

  cnpm install react --save-dev 
  cnpm install webpack --save-dev
  
4:创建webpack.config.js

	var path = require('path');

	module.exports = {
	  entry: path.resolve(__dirname, './app/main.js'),
	  output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
	  }
	};
	
	
5: 安装依赖

6：webpack module 配置需注意loaders配置项

module: {
    loaders: [{
      test: /\.(jsx|js)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  }
  
7: npm run build //编译项目
