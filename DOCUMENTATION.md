Upon install there were many vulnerabilities and I fixed all of them, except one, which when I have more time will get more info.
```
found 1 low severity vulnerability in 10222 scanned packages
  1 vulnerability requires manual review. See the full report for details.
  https://npmjs.com/advisories/786
  ```
Add to package.json:
```
"braces": "^2.3.1",
```
Run:
```
rm -r node_modules/ package-lock.json
npm install
```
Next:[https://github.com/webpack/webpack-dev-server/issues/349]
```
npm install --save-dev webpack-dev-server@1.9.0
```
Next:[https://dev.to/tuandm/how-to-test-vue-components-with-laravel-mix-and-mocha-3kgc]
```
npm install --save-dev mochapack
npm remove mocha-webpack
```
Next:[https://webpack.js.org/guides/installation/]
```
npm install --save-dev webpack
npm install --save-dev webpack@<version>
npm install --save-dev webpack-cli
```
Next:[https://stackoverflow.com/questions/49370849/configuration-module-has-an-unknown-property-loaders/50505254]
```
loaders
to:

rules
source: https://webpack.js.org/concepts/loaders/#example

Example:

module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};
```
10:00am finally green Environment
