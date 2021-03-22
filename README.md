<h1 align='center'>windicss-craco-plugin</h1>

<p align='center'>:leaves: <a href="https://github.com/voorjaar/windicss">Windi CSS</a> for craco<br>
<sup><em>Next generation utility-first CSS framework.</em></sup>
</p>

<p align='center'>
<a href='https://www.npmjs.com/package/windicss-webpack-plugin'>
<img src='https://img.shields.io/npm/v/windicss-webpack-plugin?color=0EA5E9&label='>
</a>
</p>

## Features

- 🧩 On-demand CSS utilities (Compatible with Tailwind CSS v2)
- 📦 On-demand native elements style reseting
- 🔥 Hot module replacement (HMR)
- 🍃 Load configurations from `tailwind.config.js`
- 🤝 Framework-agnostic - Vue, React, Svelte and Angular!
- 📄 CSS `@apply` / `@screen` directives transforms (also works for Vue SFC's `<style>`)
- 🎳 Support Utility Groups - e.g. `bg-gray-200 hover:(bg-gray-100 text-red-300)`

## Install

```bash
yarn add windicss-craco-plugin -D
# npm i windicss-craco-plugin -D
```

### craco.config.js

Modify your `craco.config.js` file as below:

```js
// craco.config.js
const windiCSSCracoPlugin = require("windicss-craco-plugin");

export default {
  // ...
  plugins: [{ plugin: windiCSSCracoPlugin }],
};
```

## Migration

If you are already using Tailwind CSS for your app, please consult the [documentation](https://windicss.netlify.app/guide/migration.html) on migrating.

### All set.

That's all, fire up your app and enjoy the speed!

## Caveats

## windicss-webpack-plugin

This plugin should be used in conjunction with the [windicss-webpack-plugin](https://github.com/windicss/windicss-webpack-plugin) since it overrides Webpack configuration.

## Credits

- Windi team
- [@antfu](https://github.com/antfu) Based on his Rollup / Vite implementation & his util package

## License

MIT License © 2021 [Shannon Rothe](https://github.com/shannonrothe)
