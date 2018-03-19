# remarkable-youtube 🔗
[![npm version](https://badge.fury.io/js/remarkable-youtube.svg)](https://badge.fury.io/js/remarkable-youtube)
[![npm](https://img.shields.io/npm/dt/remarkable-youtube.svg)](https://github.com/vitaliy-bobrov/remarkable-youtube)

[Remarkable](https://github.com/jonschlinkert/remarkable) plugin renders YouTube links as iframe.

## Installation
- npm:
  `npm install --save-dev remarkable-youtube`

- yarn:
  `yarn add -D remarkable-youtube`

## Usage
```js
const Remarkable = require('remarkable');
const youtube = require('remarkable-youtube');
const md = new Remarkable();

md
  .use(youtube, {
    className: 'youtube-iframe'
  });
```

## Options

### className {String}

Additional class name to add on iframe element.

