const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automation_appium',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      url: 'http://127.0.0.1:4723/', // URL do servidor Appium
      app: process.env.APP,
      desiredCapabilities: {
        platformName: process.env.PLATFORM,
        platformVersion: process.env.VERSION, // Versão do sistema oper
        deviceName: process.env.DEVICE, // Nome do dispositivo
        automationName: 'XcUiTest',
      },
      path: '/'
    }
  },
  include: {
    I: './steps_file.js' // Local do arquivo de etapas
  },
};