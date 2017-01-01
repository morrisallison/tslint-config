# tslint-config

A shared TSLint configuration.

[![npm Version][badge-npm]][npm]
[![MIT License][badge-license]][license]
[![bitHound][badge-bithound]][bithound]
[![TSLint Version][badge-tslint]][tslint]
[![TypeScript Version][badge-typescript]][typescript]

[badge-bithound]: https://img.shields.io/bithound/dependencies/github/morrisallison/tslint-config.svg?style=flat-square
[badge-license]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[badge-npm]: https://img.shields.io/npm/v/@morrisallison/tslint-config.svg?style=flat-square
[badge-tslint]: https://img.shields.io/badge/TSLint-v4.2-blue.svg?style=flat-square
[badge-typescript]: https://img.shields.io/badge/TypeScript-v2.1-blue.svg?style=flat-square
[bitHound]: https://bithound.io/github/morrisallison/tslint-config
[license]: https://github.com/morrisallison/tslint-config/raw/master/LICENSE
[npm]: https://www.npmjs.com/package/@morrisallison/tslint-config
[tslint]: https://github.com/palantir/tslint
[typescript]: https://github.com/Microsoft/TypeScript

## Installation

Node.js via [Yarn][yarnpkg]

```bash
yarn add -D @morrisallison/tslint-config
```

Node.js via [npm][npmjs]

```bash
npm install @morrisallison/tslint-config --save-dev
```

[npmjs]: https://www.npmjs.com/
[yarnpkg]: https://yarnpkg.com/

## Usage

Create a file in the project root named `tslint.json` containing the following:

```json
{
    "extends": "@morrisallison/tslint-config",
    "rulesDirectory": [
        "node_modules/@morrisallison/tslint-config/rules",
        "node_modules/tslint-eslint-rules/dist/rules",
        "node_modules/tslint-microsoft-contrib",
        "node_modules/vrsource-tslint-rules/rules"
    ]
}
```

## License

Copyright &copy; 2016 [Morris Allison III](http://morris.xyz).
<br>Released under the [MIT license][license].
