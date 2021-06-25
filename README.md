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

// Can change
publicPath: 'dist/';
// <img alt="js-ninja" width="300" src="dist/ff77c1b019b1daac4225.jpeg">
publicPath: 'https://some-cdn.com/';
```

### 12. Asset/inline Module Type

```js
type: 'asset/inline';
```

It generates bigger size of bundle.js as the assets are injected to the bundle.

- Use case : For very small size of images or icons to reduce http request.
- Reason : Without this option, Webpack generates separated files for all assets and it makes the browser to make separate http requests for every asset and it could cost higher.

### 13. General Asset Type

```js
type: 'asset';
```

This option make Webpack automatically to choose the policy whether 'asset/inline' or 'asset/resource'

As default, \
Bigger than 8kb -> asset/resource \
Smaller than 8kb -> asset/inline

### 16. Handling CSS With Webpack

```
npm install --save-dev css-loader style-loader
```

</details>

---

## What I have adjusted from the course

- In-Depth Look on webpack.config.js in Create-React-App

## Next Step

```

```
