module.exports = {
  presets: [
    '@babel/preset-env', // Fazer o navegador entender as funcionalidades do js
    '@babel/preset-react', // Fazer o navegador entender as funcionalidades do react
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
