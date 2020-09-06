/* eslint-env node */
module.exports = (plop) => {
  plop.setGenerator('blog-post', {
    description: 'Creating a new blog post',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Blog post title',
      },
      {
        type: 'list',
        name: 'language',
        message: 'Language',
        choices: [
          { name: 'English', value: 'en' },
          { name: 'Romanian', value: 'ro' },
        ],
        default: 0,
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
      },
      {
        type: 'input',
        name: 'tags',
        message: 'Tags (comma separated list, e.g. food,soup)',
      },
      {
        type: 'input',
        name: 'pictureUrl',
        message: 'Picture url (e.g. /images/123.jpg)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/markdown/{{kebabCase title}}.md',
        templateFile: './plop-templates/blog-post-file.hbs',
      },
      {
        type: 'modify',
        path: './src/markdown/index.js',
        pattern: /^/u, // The start of the file
        template:
          "import {{camelCase title}} from './{{kebabCase title}}.md';\n",
      },
      {
        type: 'modify',
        path: './src/markdown/index.js',
        pattern: /(?<=export default \{)/u, // After export default \{
        template: "\n  '{{kebabCase title}}': {{camelCase title}},",
      },
      {
        type: 'modify',
        path: './src/utils/i18n/resources.json',
        pattern: /(?<="en":\s\{(?:(?:.|\n)*)"routes":\s\{)/u, // After "en": { "routes": {
        data: { forLanguage: 'en' },
        templateFile: './plop-templates/i18n-resources-routes-snippet.hbs',
      },
      {
        type: 'modify',
        path: './src/utils/i18n/resources.json',
        pattern: /(?<="ro":\s\{(?:(?:.|\n)*)"routes":\s\{)/u, // After "ro": { "routes": {
        data: { forLanguage: 'ro' },
        templateFile: './plop-templates/i18n-resources-routes-snippet.hbs',
      },
      {
        type: 'modify',
        path: './src/utils/i18n/resources.json',
        pattern: /(?<="en":\s\{(?:(?:.|\n)*)"blog-posts":\s\{)/u, // After "en": { "blog-posts": {
        templateFile: './plop-templates/i18n-resources-blog-posts-snippet.hbs',
      },
      {
        type: 'modify',
        path: './src/utils/i18n/resources.json',
        pattern: /(?<="ro":\s\{(?:(?:.|\n)*)"blog-posts":\s\{)/u, // After "ro": { "blog-posts": {
        templateFile: './plop-templates/i18n-resources-blog-posts-snippet.hbs',
      },
    ],
  });
};
