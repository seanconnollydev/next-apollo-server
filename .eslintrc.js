module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint', // Allows us to use es7 features
  rules: {
    'max-len': ['error', 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }], // Best Practices group decided to alter this
    'no-underscore-dangle': 'off', // Some keys returned from GraphQL may have dangling underscores
    'react/jsx-filename-extension': 'off',
    'react/no-danger': 'off', // The term dangerouslySetInnerHTML should be enough warning
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    }],
    'no-use-before-define': ['error', { functions: false, classes: false }],
  },
};
