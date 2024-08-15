const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

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
      app: '/Users/rodrigorossetitozatti/Repositorio-Mac/Automacao-mobile-iOS/App-iOS/qazandoapp.app',
      desiredCapabilities: {
        platformName: 'iOS',
        platformVersion: '16.2', // Versão do sistema oper
        deviceName: 'iPhone 14 Pro Max', // Nome do dispositivo
        automationName: 'XcUiTest',
      },
      path: '/'
    }
  },
  include: {
    I: './steps_file.js', // Local do arquivo de etapas

    loginPage: "./pages/login_page.js"
  },
};