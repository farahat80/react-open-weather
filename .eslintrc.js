module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  globals: {},
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        allowChildren: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        img: ['button'],
      },
    ],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/*',
          '**/test-utils/*',
          '**/test-utils.js',
          '**/*.stories.*',
        ],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',

    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
      },
    ],

    'prettier/prettier': 'error',

    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
  },
};