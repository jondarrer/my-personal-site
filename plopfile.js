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
        path: 'src/markdown/{{kebabCase title}}.md',
        templateFile: 'plop-templates/blog-post-file.hbs',
      },
    ],
  });
};
