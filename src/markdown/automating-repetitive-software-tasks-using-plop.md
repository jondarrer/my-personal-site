# Automating repetitive software tasks using plop

## Repeating the same thing over and over again, copying and pasting, converting text from kebab-case to camel-case, etc. may indicate a task suitable for automation. I integrated plop into my node project to help me with such a task, adding a new blog post, and here I describe my journey

## The problem

When adding a new blog post to my site (which I currently do through code) -
although I have refined the process to be as quick and easy as possible - I end
up having to create/edit a number of different files, copying and pasting the
same pieces of text over and over again, sometimes having to change the case
from kebab-case to camel-case, plus boiler-plate.

Given I have to do this each and every time I create a blog post (twice
actually, as I have two translations of each post, one in English and one in
Romanian), this seemed to me like a task ripe for automation.

## Automating with plop

[Plop](https://github.com/plopjs/plop) is a popular framework for automating
tasks involving creating files based on templates and user input, using a
command-line, user-friendly wizard based approach, perfect what what I want to
do. In fact, it describes itself thus:

> basically glue code between inquirer prompts and handlebar templates

_Confession: I have actually used plop briefly for work before, so I'm not a
complete newbie, but I had only copied and pasted what someone had already done.
Here I'm going to follow the project README as if I were new to it._

I installed it in my project as a dev dependency:

```bash
npm i —save-dev plop
```

I tried running `plop` from the command line to test it, but got a message that
the command couldn't be found, so quickly added a npm script in `package.json`
so I can run it (which I did discover was in the README already, but which I
hadn't seen it).

```json
{
  "scripts": {
    "plop": "plop"
  }
}
```

I got another error, so I added a basic `plopfile.js` to the root of my project,
as per instructions:

### Basic plopfile

```js
module.exports = (plop) => {
  plop.setGenerator('blog-post', {
    description: 'Creating a new blog post',
    prompts: [],
    actions: [],
  });
};
```

I purposely left prompts and actions empty, so I could fill them in myself.
However, I was able to run plop without getting any errors (or any other
messages!)

## Prompts

I already remembered that prompts are the questions that get asked, and allow
for the gathering of user input. (I'll address actions later.)

I’ve boiled down the questions I want plop to ask, each time I want it to
scaffold up a new blog post to these:

### The questions

- Language
- TItle
- Description
- Tags
- Picture url

They are all for free text, except language, which is a choice between either
en/English or ro/Romanian. Free text questions can be defined as input prompts
and are easy to add as they are described in the README.

However to get a choice, I had to read the Inquirer repo docs at
[https://github.com/SBoudrias/Inquirer.js/#prompt-types](https://github.com/SBoudrias/Inquirer.js/#prompt-types).
I find [list](https://github.com/SBoudrias/Inquirer.js/#list---type-list) is the
one I want (allowing one response, rather than checkbox which allows multiple),
and I can pass in the list of choices for language like this:

```js
{
  type: 'list',
  name: 'language',
  message: 'Language',
  choices: [
    { name: 'English', value: 'en' },
    { name: 'Romanian', value: 'ro' },
  ],
  default: 0,
}
```

I could have given a list of strings for **choices**, but objects allow me to
display the language in a more user-friendly way, while at the same time being
able to get the language code for use in the actions. Also, **default** has to
be the index of the item in the list to default to.

### My prompts

So, my prompts look like this:

```js
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
```

I run though these with `npm run plop` and things work as expected, with a nice
summary once finished:

```bash
? Blog post title How to automate some things
? Language English
? Description Automating things can be really useful, so we can look at automating something
? Tags (comma separated list, e.g. food,soup) automation,things
? Picture url (e.g. /images/123.jpg) /images/automation.jpg
```

## Let's see some action

Now for the actions! This is where the results from the prompts are used to
perform things like adding files based on the input, modifying existing files,
etc.

(It's at this point I realise I’ve done things the wrong way round, that I
should have focused on getting the actions working with dummy input, and then
wired things up with prompts afterwards. Oh, well! I decide I'll use the input
anyway.)

I want to start with files that need to be created, as this seems the easiest
thing, and the example already given in the README.

### Files to be created

I come up with a list of files to be created, which ends up being pretty short,
just the one file! It needs to be named dynamically, using the title from the
questions asked in kebab-case (lowercase-with-hyphens-between-words), as well as
the title and description in the contents.

`./src/markdown/{title-in-kebab-case}.md`

#### Required input

- title (both kebab-case version and original)
- description

#### Template

I create a template in the suggested folder `./plop-templates`:

`./plop-templates/blog-post-file.hbs`

```hbs
# {{title}}

## {{description}}
```

#### Stopping Prettier interfering with my template

I noticed that my handlebars template was removing the first blank line when I
saved the file. At first I thought I could prevent this by configuring Prettier,
but I couldn't find how.

Instead, I added .vscode settings to stop it from formatting on save (I want
spaces and new lines - they’re fragments of code, not fully code). Found the
solution here
[https://stackoverflow.com/questions/44831313/how-to-exclude-files-from-format-on-save-in-vscode](https://stackoverflow.com/questions/44831313/how-to-exclude-files-from-format-on-save-in-vscode).

Here's the additional configuration:

```json
"[handlebars]": {
  "editor.formatOnSave": false
}
```

#### The action

One of the first questions I have is "How do I get kebab-case?" From the docs, I
see it's with using the
[inbuilt handlebars helper](https://github.com/plopjs/plop#built-in-helpers)
**kebabCase**, but how?

I had to google to find out how to use it, and found
[Nicolas Carlo's site where he describes how](https://www.nicoespeon.com/en/2015/11/plop-micro-generator-boilerplate-yeoman-alternative/#helpers)
(although afterwards I found there were examples in the README, but not it
wasn't obvious, and I hadn't read through things very carefully!):

`{{kebabCase title}}`

With this in hand, I have the following action in my plopfile:

```js
{
  type: 'add',
  path: './src/markdown/{{kebabCase title}}.md',
  templateFile: './plop-templates/blog-post-file.hbs',
},
```

Having already written the template, I run plop; the file is created and things
look fine:

`./src/markdown/how-to-automate-some-things.md`:

```hbs
# How to automate some things

## Automating things can be really useful, so we can look at automating something

```

### Files to be edited

I find that the files I need to edit are the following two:

- `./src/markdown/index.js`
- `./src/utils/i18n/resources.json`

#### Working out how to edit an exiting file

I tried searching the README for _update_, _insert_ and _add_, but nothing.
Finally, _[Modify](https://github.com/plopjs/plop#modify)_ turns out to be what
I want. It's similar to add, but with the `pattern` option to help locate the
text within the file to modify.

I want to do a couple of things, and I'll need regexs for them:

- Find start of file
- Find end of a piece of text

A regex for the start of a file is super easy in JavaScript, simply:

```js
/^/u;
```

I put this into [https://regex101.com/](https://regex101.com/r/L1VM6w/1/) to
check it works, and then write my first modify action, with an inline template:

```js
{
  type: 'modify',
  path: './src/markdown/index.js',
  pattern: /^/u, // The start of the file
  template:
    "import {{camelCase title}} from './{{kebabCase title}}.md';\n",
},
```

But I'm not done with this file, and need to modify it a little further down,
_after_ the text `export default {`.

I need a regex for this, and come up with
[positive lookbehind](https://www.regular-expressions.info/lookaround.html#lookbehind)
by playing with the regex on
[https://regex101.com/](https://regex101.com/r/bkCEf1/1):

```js
/(?<=export default \{)/u;
```

So my template now includes the following action:

```js
{
  type: 'modify',
  path: './src/markdown/index.js',
  pattern: /(?<=export default \{)/u, // After export default \{
  template: "\n  '{{kebabCase title}}': {{camelCase title}},",
},
```

I run `npm run plop` again to check everything is working as expected, and it
does 😅!

#### To transform or to template

Having finished with `./src/markdown/index.js`, I turn my attention to the last
file to modify, `./src/utils/i18n/resources.json`. This is a _JSON_ file, and I
need to find certain sections/nodes within it.

I have a few options here: I consider using the _transform_ option to read the
file in and convert it to an object, locate what I want to modify, and then
stringify it again. However, after a little way down this route, I decide
against it, as I loose the ability to take advantage of the handlebars templates
and the helpers provided, and this seems to big a trade-off.

I turn back to using templates again. The trade off with templates will be that
I will need a regex and will need to modify the file four times: once for each
of the two sections and again for each of the two languages.

My regexs will be to find the paths:

- "en"->"routes"
- "en"->"blog-posts"
- "ro"->"routes"
- "ro"->"blog-posts"

```json
{
  "en": {
    "routes": {
      "/blog/how-to-automate-some-things": "/blog/how-to-automate-some-things",
    },
    "blog-posts": {
      "how-to-automate-some-things-title": "How to automate some things",
      "how-to-automate-some-things-description": "Automating things can be really useful, so we can look at automating something",
      ...
    }
  },
  "ro": {
    "routes": {
      "/blog/how-to-automate-some-things": "/blog/how-to-automate-some-things",
    },
    "blog-posts": {
      "how-to-automate-some-things-title": "How to automate some things",
      "how-to-automate-some-things-description": "Automating things can be really useful, so we can look at automating something",
      ...
    }
  }
}
```

I searched for a regex for JSON node, but only came up
[/\{._\:\{._\:.\*\}\}/](https://www.regextester.com/95560). I adapted this
initially to:

```js
/"ro":\s\{/u // Locate the language
/"ro":\s\{(?:(?:.|\n)*)"routes":\s\{/u // Locate the language and section, here routes
/(?<="ro":\s\{(?:(?:.|\n)*)"routes":\s\{)/u // Wrap this in the positive lookbehind I used earlier
```

I had to use non-capturing groups as I was getting eslint errors
_prefer-named-capture-group_.

#### Conditionals within handlebars templates

When the language is _en_, I want the template to be:

```hbs
"/blog/{{kebabCase title}}": "/blog/{{kebabCase title}}"
```

But when it is _ro_, it should be:

```hbs
"/ro/blog/{{kebabCase title}}": "/ro/blog/{{kebabCase title}}"
```

I try handlebars conditional
[#if](https://handlebarsjs.com/guide/builtin-helpers.html#if):

```hbs
"{{#if language === 'ro'}}/ro{{/if}}/blog/{{kebabCase title}}": "{{#if language === 'ro'}}/ro{{/if}}/blog/{{kebabCase title}}"
```

But this fails, as the built in if helper only takes one truthy parameter 😞.

So, I investigate the _[data](https://github.com/plopjs/plop#modify)_ option as
an alternative. But this falls flat, as it can only be a static object, and I
would need it to be a function to take into consideration the user's input.

After a few other dead ends, I search for a way to compare variable within a
handlebars _if_, and find a blog post on adding a handlebars helper called
[if_eq](https://code-maven.com/handlebars-conditionals), which does an _if_
based on comparing two variables. I will then be able to do
`{{#if_eq language 'ro'}}`.

Combining this with Plop's [setHelper](https://github.com/plopjs/plop#sethelper)
(basically Handlebars.registerHelper), gives me what I want.

I hit a snag, and get an error:

```bash
if_eq doesn't match if - 2:10
```

Which I discovered meant I had coded `{{#eq_if}}{{/if}}`! I didn’t work it out
immediately though. Perhaps saying that {{/if}} didn’t match the opening
{{#if_eq}} might have got me there sooner!

#### Eslint and Prettier at war :(

Now, I've got an eslint error _Missing space before function parentheses
eslintspace-before-function-paren_.

```js
function ifEq(a, b, opts) {
  ...
}
```

Prettier kept removing the space between the function name and the opening
parentheses, but eslint didn't like this.

To try to fix the problem between eslint and prettier, I installed
[https://github.com/prettier/eslint-config-prettier#installation](https://github.com/prettier/eslint-config-prettier#installation).
I configured my eslint extends as:

```json
"extends": [
  "eslint:recommended", — already
  "plugin:react/recommended", — already
  "prettier",
  "prettier/react"
],
```

But this had no effect.
[https://github.com/prettier/prettier-vscode/issues/318](https://github.com/prettier/prettier-vscode/issues/318)

So, I disabled it via eslint-disable tag, and just allowed prettier to do it’s
thing.

Now, all that remains is putting in todays date in one of the handlebars
template. I decide to do this with another handlebars helper:

```js
// eslint-disable-next-line prefer-arrow-callback
plop.setHelper('dateNow', function dateNow() {
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
});
```

And use this like so:

```hbs
"{{kebabCase title}}-date-posted": "{{dateNow}}",
```

## The end

Done! I run `npm run plop` and scaffold up a new blog post - about
[writing a post about software automation using plop](https://github.com/jondarrer/my-personal-site/commit/fbce0f3202bff71a9433c179bfe63e9d979daa09)!
