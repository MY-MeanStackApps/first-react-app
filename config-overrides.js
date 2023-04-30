// config-overrides.js
module.exports = function override(config, env) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        url: require.resolve('url/'),
    };

    return config;
};
