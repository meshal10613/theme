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
export {
  getTheme,
  setTheme,
  themeManager
};
