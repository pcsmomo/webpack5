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

### Got an error

> **⚠ Error: Uncaught ReferenceError: helloWorld is not defined.**

Tried to import index.js back and solve a CORS problem on google, but did not go well. \
Maybe it needs babel?

```
npm install -g http-server
http-server
```

</details>

---

## What I have adjusted from the course

- In-Depth Look on webpack.config.js in Create-React-App

## Next Step

```

```
