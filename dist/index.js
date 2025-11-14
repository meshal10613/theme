var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  getTheme: () => getTheme,
  setTheme: () => setTheme,
  themeManager: () => themeManager
});
module.exports = __toCommonJS(index_exports);

// src/themeManager.ts
var ThemeManager = class {
  currentTheme = "system";
  constructor(initialTheme) {
    if (initialTheme) this.currentTheme = initialTheme;
  }
  setTheme(theme) {
    this.currentTheme = theme;
    if (typeof window !== "undefined" && window.document) {
      document.body.dataset.theme = theme;
    }
    return this.currentTheme;
  }
  getTheme() {
    if (this.currentTheme === "system") {
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return "light";
    }
    return this.currentTheme;
  }
};
var themeManager = new ThemeManager();

// src/index.ts
var setTheme = (theme) => themeManager.setTheme(theme);
var getTheme = () => themeManager.getTheme();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getTheme,
  setTheme,
  themeManager
});
