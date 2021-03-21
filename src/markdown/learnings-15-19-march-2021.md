# Learnings 15-19 March 2021 <!-- omit in toc -->

![](/images/learnings-1.jpg)

## Things I've learned from work the week of 15th to 19th March 2021 <!-- omit in toc -->

- [A change is as good as a rest](#a-change-is-as-good-as-a-rest)
- [Webpack and Babel not needed for node library development](#webpack-and-babel-not-needed-for-node-library-development)

## A change is as good as a rest

I've found that moving location while working from home has improved my focus. I
spend the majority of my day working from my living room. It's lovely, and I
have a nice view out onto my front garden. I have a sit/stand desk, which has
reduced back pain and improved my stamina. When I have a long meeting that I may
not need to actively participate in, I take a walk in my local park and either
just listen, or watch on my phone. And around tea-time, when I don't have any
more Zoom calls, I move to the spare bedroom and work from there, which has
improved my ability to concentrate for longer. It's also where my wife works and
it's nice to be with her 😍.

## Webpack and Babel not needed for Node library development

I had been packaging a
[Webpack plugin I am developing](https://github.com/jondarrer/react-static-site-hydrater)
as it used
[ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015)
import/export syntax as well as
[JSX](https://reactjs.org/docs/introducing-jsx.html). I packaged this with
[Webpack](https://webpack.js.org) and used the
[babel-loader](https://github.com/babel/babel-loader) plugin to transform it.
However, this meant debugging my packaged plugin very difficult, even with
sourcemaps.

So, I reverted to [CommonJS](https://en.wikipedia.org/wiki/CommonJS)
require/module.exports syntax\*, and replaced JSX with
[React.createElement](https://reactjs.org/docs/react-without-jsx.html) calls
before ripping out Babel and Webpack. Using React.createElement was a minor
inconvenience, but as this is a library and wasn't a lot of JSX in the first
place (principally in tests), it isn't a big deal.

Now, debugging the library is easy (or easier!).

NB. \* Although Node supports [ESM](https://nodejs.org/api/esm.html) (EcmaScript
Modules and the import/export syntax), the library conditionally loads some
dependencies using require, and I preferred not to mix and match.
