# webpack 5

Webpack 5: The Complete Guide by Viktor Pyskunov

---

## Details

<details open>
  <summary>Click to Contract/Expend</summary>

### 3. Why Do We Need Webpack

- Grunt + Gulp : Cannot figure out the dependencies
- Require.js : Not as strong as Webpack
- Webpack : Great

### 5. Install Webpack and Integrate It With NPM

```
npm init -y
npm install --save-dev webpack webpack-cli
```

### 7. Integrating Webpack Into Our Js Application

```
<!-- It will generate main.js into dist folder -->
npx webpack
```

```
<!-- Executes with detailed stats including Endpoint -->
npx webpack --stats detailed
```

### 8. Custom Webpack Configuration

```
npx webpack
```

#### Got an error

> **⚠ Error: Uncaught ReferenceError: helloWorld is not defined.**

Tried to import index.js back and solve a CORS problem on google, but did not go well. \
Maybe it needs babel?

```
npm install -g http-server
http-server
```

#### Darn... It was a typo............ it works fine.

### 10. Handling Images With Webpack 07:00

```js
type: 'asset/resource';
```

### 11. publicPath

```js
// Webpack 4 - Default
publicPath: '';

// Webpack 5 - Default
publicPath: 'auto';
// <img alt="js-ninja" width="300" src="file:///Users/noah/Documents/Study/Study_devops/udemy/webpack5/webpack5-git/tutorial/dist/ff77c1b019b1daac4225.jpeg">

// Can be changed
publicPath: 'dist/';
// <img alt="js-ninja" width="300" src="dist/ff77c1b019b1daac4225.jpeg">
publicPath: 'https://some-cdn.com/';
```

### 12. Asset/inline Module Type

```json
type: 'asset/inline'
```

It generates bigger size of bundle.js as the assets are injected to the bundle.

- Use case : For very small size of images or icons to reduce http request.
- Reason : Without this option, Webpack generates separated files for all assets and it makes the browser to make separate http requests for every asset and it could cost higher.

### 13. General Asset Type

```json
type: 'asset'
```

This option make Webpack automatically to choose the policy whether 'asset/inline' or 'asset/resource'

As default, \
Bigger than 8kb -> asset/resource \
Smaller than 8kb -> asset/inline

### 16. Handling CSS With Webpack

```
npm install --save-dev css-loader style-loader
```

### 17. Handling SASS

> Webpack processes loaders inside 'use' from the right side first \
> sass-loader → css-loader → style-loader

```json
use: ['style-loader', 'css-loader', 'sass-loader']
```

```
npm install --save-dev sass-loader sass
```

### 18. Using Latest JavaScript Features With Babel

```
npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties
```

> Unlike the lecture, webpack 5 build class properties without babel, \
> Moreover, babel works without '@babel/plugin-proposal-class-properties' \
> Apparently, updated versions includs some stuff.

```json
"webpack": "^5.40.0",
"@babel/core": "^7.14.6"
```

```json
presets: ['@babel/env']
presets: ['@babel/preset-env']
```

> Babel already knows that it is a preset since it is in the presets array, so it will add the preset- into the module name automatically.

### 20. Minification of the Resulting Webpack Bundle

#### [Terser Plugin](https://webpack.js.org/plugins/terser-webpack-plugin/)

This plugin uses [terser](https://github.com/terser/terser) to minify bundle.js

In my case, 16,562 bytes became 4,526 bytes

> Note: Webpack v5 comes with the latest terser-webpack-plugin, no need to install

```sh
npm install --save-dev terser-webpack-plugin
```

### 21. Extracting CSS Into a Separate Bundle With mini-css-extract-plugin, Part 1

#### [Mini Css Extract Plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)

This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

```sh
npm install --save-dev mini-css-extract-plugin
```

### 22. Extracting CSS Into a Separate Bundle, Part 2

> Note: styles.css is generated in order of imports in in index.js

### 23. Browser Caching

#### [contenthash](https://webpack.js.org/guides/caching/#output-filenames)

The [contenthash] substitution will add a unique hash based on the content of an asset.

```json
filename: 'bundle.[contenthash].js'
filename: 'styles.[contenthash].css'
```

</details>

---

## What I have adjusted from the course

- In-Depth Look on webpack.config.js in Create-React-App

## Next Step

```

```
