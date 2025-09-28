module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  // Plugins
  plugins: ['prettier-plugin-tailwindcss'],
  // Overrides for specific files
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
        printWidth: 80,
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 120,
      },
    },
  ],
};
