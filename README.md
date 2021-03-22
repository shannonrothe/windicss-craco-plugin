<h1 align='center'>windicss-craco-plugin</h1>

<p align='center'>:leaves: <a href="https://github.com/voorjaar/windicss">Windi CSS</a> for craco<br>
<sup><em>Next generation utility-first CSS framework.</em></sup>
</p>

<p align='center'>
<a href='https://www.npmjs.com/package/windicss-craco-plugin'>
<img src='https://img.shields.io/npm/v/windicss-craco-plugin?color=0EA5E9&label='>
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

module.exports = {
  // ...
  plugins: [
    {
      plugin: windiCSSCracoPlugin,
      options: {
        scan: {
          dirs: ["./"],
          exclude: ["node_modules", ".git", "public/index.html"],
        },
      },
    },
  ],
};
```

Make sure you have installed `windicss` and add the virtual module to your `index.(j|t)sx?` file:

```tsx
import "windi.css";
```

## Migration

If you are already using Tailwind CSS for your app, please consult the [documentation](https://windicss.netlify.app/guide/migration.html) on migrating.

## Notes

This plugin comes with [windicss-webpack-plugin](https://github.com/windicss/windicss-webpack-plugin) integrated already. Options passed via the `options` property as above will be passed directly to the `windicss-webpack-plugin` constructor.

By default, the following directories and files are excluded: `node_modules`, `.git`, and `public/index.html`.

## Credits

- Windi team
- [@antfu](https://github.com/antfu) Based on his Rollup / Vite implementation & his util package

## License

MIT License © 2021 [Shannon Rothe](https://github.com/shannonrothe)
