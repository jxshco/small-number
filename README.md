# [small-number](https://github.com/jxshco/small-number) [![Build Status](https://travis-ci.org/jxshco/small-number.svg?branch=master)](https://travis-ci.org/jxshco/small-number)

Easily turn large values into their corresponding number and letter value - 1,300,000 -> 1.3m

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!

## Usage

Install The Package
```
npm install small-number --save
or
yarn add small-number
```

Import SmallNumber into Your Project
```js
import SmallNumber from 'small-number'
```

Use Small Number
```js
smallNumber(123456)
// 123.5k

let messages = 9831324
let message = `You have ${smallNumber(messages)} unread emails`
//You have 9.8m unread emails
```

## License

[MIT](https://github.com/jxshco/small-number/blob/master/LICENSE)
