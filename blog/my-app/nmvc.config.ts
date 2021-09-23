// import path from 'path'
// import ares from 'ares-cdn'
// import pkg from './package.json'
// import appConfig from './app.config'

// import { Config } from 'react-imvc'
// import { Env, EnvMapper, ExtConfig } from 'type'

// const isDeploy = process.env.IS_DEPLOY === '1'
// // const isProd = process.env.NODE_ENV === 'production'
// const port = process.env.PORT || pkg.config.port || 3000
// const basename = pkg.config.vd
// const env = pkg.config.env.toLowerCase() as Env
// // 只在部署到服务器上时，使用 cdn 地址
// const publicPath = isDeploy
// 	? ares.getPublicPathByEnv({
// 			targetDirectory: __dirname,
// 			env: env
// 	  })
// 	: ''

// type EnvConfig = {
// 	publicPath: string,
// 	restapi: string,
// 	serverRestapi: string
// }
// const envConfigMap: EnvMapper<EnvConfig> = {
// 	fat: {
// 		publicPath: publicPath,
// 		restapi: '//gateway.m.fws.qa.nt.ctripcorp.com/restapi/soa2',
// 		serverRestapi: '//gateway.m.fws.qa.nt.ctripcorp.com/restapi/soa2'
// 	},
// 	uat: {
// 		publicPath: publicPath,
// 		restapi: '//gateway.m.uat.qa.nt.ctripcorp.com/restapi/soa2',
// 		serverRestapi: '//gateway.m.uat.qa.nt.ctripcorp.com/restapi/soa2'
// 	},
// 	prod: {
// 		publicPath: publicPath,
// 		restapi: '//sec-m.ctrip.com/restapi/soa2',
// 		serverRestapi: '//apigateway.ctripcorp.com/restapi/soa2'
// 	}
// }

// const envConfig = envConfigMap[env] || envConfigMap.prod

// const config: Config & ExtConfig = {
// 	...envConfig,
// 	/**
// 	 * appType 配置，将 app 的域名入口按 pc 和 h5 进行分类
// 	 * 没有匹配上时，走 defualt 配置
// 	 * 没有 default 时，默认为 pc
// 	 * pc 或 h5 会走不同的 ubt 文件，在 ctrip 主 app 里自动添加 bridge.js 等行为
// 	 */
// 	AppType: {
// 		default: 'h5',
// 		h5: ['localhost', 'm.ctrip'],
// 		pc: ['vacations.ctrip']
// 	},
// 	layout: 'Layout',
// 	routes: 'routes',
// 	env: env,
// 	port: port,
// 	basename: basename,
// 	title: 'react-imvc-starter',
// 	description: 'Ctrip react-imvc starter supports PC and H5',
// 	keywords: 'react react-imvc starter ctrip',
// 	// 预填充的 context 上下文，会出现在所有 controller.context 里，应该是静态数据
// 	context: {
// 		env: env,
// 		appId: appConfig.AppID,
// 		h5Version: pkg.version
// 	},
// 	// 是否开启 webpack 可视化分析
// 	bundleAnalyzer: false,
// 	// 需要添加的 webpack plugin 配置
// 	webpackPlugins: [],
// 	gulp: {
// 		// 指定要拷贝到 publish 目录的文件列表
// 		publishCopy: [path.join(__dirname, '.ares.json')]
// 	}
// }

// export default config