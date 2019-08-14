const isWebTarget = caller => {
  return Boolean(caller && caller.target === 'web');
};

const isWebpack = caller => {
  return Boolean(caller && caller.name === 'babel-loader');
};

module.exports = api => {
  const web = api.caller(isWebTarget);
  const webpack = api.caller(isWebpack);

  const babelStyledComponentPlugin =
    process.env.NODE_ENV !== 'production'
      ? [
          'babel-plugin-styled-components',
          {
            displayName: true,
          },
        ]
      : 'babel-plugin-styled-components';

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          // useBuiltIns: web ? 'entry' : undefined,
          targets: !web ? { node: 'current' } : undefined,
          modules: webpack ? false : 'commonjs',
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [babelStyledComponentPlugin],
  };
};
