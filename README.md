# 📦 theme

A lightweight and versatile theme manager that allows you to set, get, and control themes across JavaScript, TypeScript, React, Next.js, and Node.js, including support for system default theme detection.

---

## 🚀 Installation

Using **npm**:

```bash
npm install theme
```
Or using **yarn**:
```bash
yarn add theme
```

## 🧠 Usage

CommonJS (Node.js)

```js
const { setTheme, getTheme } = require('theme');

setTheme("dark");
console.log(getTheme()); // "dark"

```

ES Module (if your project uses "type": "module")

```js
import { setTheme, getTheme } from 'theme';

setTheme("light");
console.log(getTheme()); // "light"

```

## 🧩 API
` square(number) `
Function | Parameter | Type | Description
| :------- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`setTheme(theme)` | `"light"` | `"dark"` | `"system"`
`getTheme()` | - | `"light"` | `"dark"`


##### Supported Themes
` "light" ` — Light mode

` "dark" ` — Dark mode

` "system" ` — Follows system preference


## 🧪 Examples

```ts
setTheme("dark");
console.log(getTheme()); // "dark"

setTheme("system");
console.log(getTheme()); // "light" or "dark" depending on system settings
```

## ⚙️ Validation Details
- ✅ Works in frontend (React, Next.js) and backend (Node.js)
- ✅ Supports CommonJS and ES Modules
- ✅ Automatically respects system dark/light mode
- ✅ Minimal and dependency-free
- ✅ Simple API for quick theme control

## 📦 Why Use This?
✅ Minimal and dependency-free
✅ Type-safe input validation
✅ Works in both CommonJS and ESM environments
✅ Great for small math utilities or teaching purposes

## 🧰 Project Structure
```bash
theme/
├── src/
│   ├── index.ts        # main entry
│   └── themeManager.ts # theme logic
├── dist/               # compiled files (CJS + ESM)
├── tests/
│   └── theme.test.ts   # tests
├── package.json
├── tsconfig.json
└── README.md
```

## 📝 License
MIT License © 2025 Syed Mohiuddin Meshal

## 🌐 Links

NPM: https://www.npmjs.com/package/theme

GitHub Repository: https://github.com/meshal10613/theme