module.exports = {
    presets: [
        ['@babel/preset-env', { debug: Boolean(process.env.DEBUG) }],
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-transform-runtime', { regenerator: true }],
    ],
};
