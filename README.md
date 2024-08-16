# jondarrer.com

The website for [jondarrer.com](https://jondarrer.com). Deployed using
a [Github Action for deployment](./.github/workflows/firebase.yml) and hosted by
[Firebase](https://firebase.google.com).

## Development

### Clone the repo

```bash
git clone git@github.com:jondarrer/my-personal-site
cd my-personal-site
```

### Install

```bash
yarn
```

### Run locally

```bash
NODE_OPTIONS=--openssl-legacy-provider yarn start
```

You can also try out how it will work when deployed to Firebase with:

```bash
NODE_OPTIONS=--openssl-legacy-provider yarn start:fb
```

Which will run the following commands:

```bash
NODE_OPTIONS=--openssl-legacy-provider yarn build
firebase serve --only hosting
```

### Test

```bash
NODE_OPTIONS=--openssl-legacy-provider yarn test
```

### Build

```bash
NODE_OPTIONS=--openssl-legacy-provider yarn build
```

### Deploy

```bash
git push
```

### Adding a blog post

Run the following on the command line and answer the question prompts:

```bash
npm run plop
```

#### Add the markdown version of the blog post in new file under `./src/markdown`

#### Import it and export it within `./src/markdown/index.js`

#### Add it as a route within `./src/utils/i18n/resources.json` under **[lang]/routes** for each language

#### Add metadata within `./src/utils/i18n/resources.json` under **[lang]/blog-posts** for each language

- title (the post title, e.g. **A new way to cook soup**)
- description (a brief summary of the post, e.g **Think you know how to cook
  soup? Well, I'm going to tell you a new way that you'll love**)
- author (name of the author, e.g. **Jonathan Darrer**)
- date-posted (format YYYY-MM-DD, e.g. **2020-08-18**)
- tags (comma separated list of tags, e.g. **food,soup**)
- picture (a url to the image, e.g. for a local image **/images/IMG_1126.jpg**)
- language (e.g. **en** or **ro**)
