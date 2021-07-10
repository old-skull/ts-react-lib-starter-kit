const BABEL_ENV = process.env.BABEL_ENV;

const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

module.exports = function (api) {
  api.cache(true);

  const plugins = ['const-enum'];

  const presets = [
    [
      '@babel/env',
      {
        loose: true,
        modules: isCommonJS ? 'commonjs' : false,
        targets: {
          esmodules: isESM ? true : undefined,
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ];

  const ignore = ['**/__mocks__', '**/*.spec.js', '**/*.spec.ts', '**/*.test.js', '**/*.test.ts'];

  return {
    plugins,
    presets,
    ignore,
  };
};
