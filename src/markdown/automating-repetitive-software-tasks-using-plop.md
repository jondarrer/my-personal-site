# Automating repetitive software tasks using plop

## Repeating the same thing over and over again, copying and pasting, converting text from kebab-case to camel-case, etc. may indicate a task suitable for automation. I integrated plop into my node project to help me with such a task, adding a new blog post, and here I describe my journey

### The problem

When adding a new blog post to my site (which I currently do through code) -
although I have refined the process to be as quick and easy as possible - I end
up having to create/edit a number of different files, copying and pasting the
same pieces of text over and over again, sometimes having to change the case
from kebab-case to camel-case, plus boiler-plate. Given I have to do this each
and every time I create a blog post (twice actually, as I have two translations
of each post, one in English and one in Romanian), this seemed to me like a task
ripe for automation.

### Automating with plop

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
  “scripts”: {
    “plop”: “plop”
  }
}
```

I got another error, so I added a basic `plopfile.js` to the root of my project,
as per instructions:

#### Basic plopfile

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

### Prompts

I already remembered that prompts are the questions that get asked, and allow
for the gathering of user input. (I'll address actions later.)

I’ve boiled down the questions I want plop to ask, each time I want it to
scaffold up a new blog post to these:

#### The questions

- Language
- TItle
- Description
- Tags
- Picture url

They are all for free text, except language, which is a choice between either
en/English or ro/Romanian. Free text questions can be defined as input prompts
and are easy to add as they are described in the README. However to get a
choice, I had to read the Inquirer repo docs at
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

#### My prompts

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

### Let's see some action

Now for the actions! This is where the results from the prompts are used to
perform things like adding files based on the input, modifying existing files,
etc.

(It's at this point I realise I’ve done things the wrong way round, that I
should have focused on getting the actions working with dummy input, and then
wired things up with prompts afterwards. Oh, well! I decide I'll use the input
anyway.)

I want to start with files that need to be created, as this seems the easiest
thing, and the example already given in the README.

#### Files to be created

I come up with a list of files to be created, which ends up being pretty short,
just the one file! It needs to be named dynamically, using the title from the
questions asked in kebab-case (lowercase-with-hyphens-between-words), as well as
the title and description in the contents.

`./src/markdown/{title-in-kebab-case}.md`

##### Required input

- title (both kebab-case version and original)
- description

##### Template

I create a template in the suggested folder `./plop-templates`:

`./plop-templates/blog-post-file.hbs`

```hbs
# {{title}}

## {{description}}
```

##### The action

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
        templateFile: ‘./plop-templates/blog-post-file.hbs',
      },
```

Having already written the template, I run plop; the file is created and things
look fine:

`./src/markdown/how-to-automate-some-things.md`:

```hbs
# How to automate some things

## Automating things can be really useful, so we can look at automating something

```

#### Files to be edited

I find that the files I need to edit are the following two:

- `./src/markdown/index.js`
- `./src/utils/i18n/resources.json`

##### Working out how to edit an exiting file

I tried searching the README for _update_, _insert_ and _add_, but nothing.
Finally, _[Modify](https://github.com/plopjs/plop#modify)_ turns out to be what
I want. It's similar to add, but with pattern to help locate the text within the
file to modify.

I want to do a couple of things:

- Regex to find start of file
- Regex to find end of a piece of text

I can write some inline, but others need the template file.

I’m going to need to add these to both en and ro! My regex needs to be specific
for each language routes/blog-posts section

Trial and error to fix non-capturing groups which aslant threw up (?:

Tried prettier config, no joy.

Add .vscode settings to stop it from formatting on save my plop-templates (I
want spaces and new lines - they’re fragments of code)

https://stackoverflow.com/questions/44831313/how-to-exclude-files-from-format-on-save-in-vscode

```json
“[handlebars]”: {
    "editor.formatOnSave": false
}
```

I have to have a separate template for routes, but not for blog-posts sections.
This is because … actually, I can use data instead!

Having tried looking at data: {isForRO: true/false}, I found a blog post on
adding a handlebars helper called if_eq to do an if based on comparing two
variables. I will then be able to do `{{#if_eq name 'Foo'}}` along with data:
{forLanguage: ‘ro’}

https://github.com/plopjs/plop#sethelper Handlebars.registerHelper directly
corresponds to Plop.setHelper

Got error if_eq doesn't match if - 2:10 which I discovered meant I had coded
{{#eq_if}}{{/if}}! Didn’t work it out immediately though. Perhaps saying that
{{/if}} didn’t match the opening {{#if_eq}} I might have got it sooner!

To try to fix a problem between eslint and prettier, I installed
https://github.com/prettier/eslint-config-prettier#installation. I configured my
eslint extends as:

```json
  "extends": [
    "eslint:recommended", — already
    "plugin:react/recommended", — already
    "prettier",
    "prettier/react"
  ],
```

https://github.com/prettier/prettier-vscode/issues/318

So, I disabled it via eslint-disable tag, and just allowed prettier to do it’s
thing.

Adding a blog post

Add the markdown version of the blog post in new file under ./src/markdown

Import it and export it within ./src/markdown/index.js

Add it as a route within ./src/utils/i18n/resources.json under [lang]/routes for
each language

Add metadata within ./src/utils/i18n/resources.json under [lang]/blog-posts for
each language • title (the post title, e.g. A new way to cook soup) •
description (a brief summary of the post, e.g Think you know how to cook soup?
Well, I'm going to tell you a new way that you'll love) • author (name of the
author, e.g. Jonathan Darrer) • date-posted (format YYYY-MM-DD, e.g. 2020-08-18)
• tags (comma separated list of tags, e.g. food,soup) • picture (a url to the
image, e.g. for a local image /images/IMG_1126.jpg) • language (e.g. en or ro)

Touching 4 files for each language
