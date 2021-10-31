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

  // NOTE: storybook requires to include `*.stories.tsx` in transpilation.
  // But in the final build we don't need `*.stories.tsx`, so this files ignored in package.json script via `--ignore`
  // I think there is a workaround with different babel envs, but for now I using this method
  const ignore = [
    '**/__mocks__',
    '**/*.spec.js',
    '**/*.spec.ts',
    '**/*.test.js',
    '**/*.test.ts',
    '**/cypress',
    '**/app.tsx',
  ];

  return {
    plugins,
    presets,
    ignore,
  };
};
