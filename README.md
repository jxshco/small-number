<h1 align="center">
  small-number
</h1>

<p align="center">
  <a href="https://travis-ci.org/jxshco/small-number"><img src="https://travis-ci.org/jxshco/small-number.svg?branch=master" alt="travis"></a>
  <a href="https://www.npmjs.com/package/small-number"><img src="https://img.shields.io/npm/v/small-number.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/small-number"><img src="https://img.shields.io/npm/dt/small-number.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<p align="center">Easily turn large values into their corresponding number and letter value - 1,300,000 -> 1.3m</p>

## Why?

[![Greenkeeper badge](https://badges.greenkeeper.io/jxshco/small-number.svg)](https://greenkeeper.io/)

While working on freelance/agency work I would tend to come accross situations where this was needed. I re-wrote this script each and every time I had a project that needed it, each being different, better and worse.


## Table of Contents

- Quick start
  - [Install](#install)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Licence](#usage)

## Install

Add small-number to your project using npm or yarn.

Install (NPM):
```bash
$ npm install small-number --save
```

Install (Yarn):
```bash
$ yarn add small-number
```

## Usage

Import SmallNumber into Your Project

```js
import SmallNumber from 'small-number'
```

Use Small Number
```js
smallNumber(123456)
// 123.5k

smallNumber(123456, 0)
// 124k

smallNumber(123456, 2)
// 123.46k

let messages = 9831324
let message = `You have ${smallNumber(messages)} unread emails`
//You have 9.8m unread emails
```

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!

## License

[MIT](https://github.com/jxshco/small-number/blob/master/LICENSE)
