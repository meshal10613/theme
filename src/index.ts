import ThemeManager from "./themeManager";

export const setTheme = (theme: "light" | "dark" | "system") =>
    ThemeManager.setTheme(theme);
export const getTheme = () => ThemeManager.getTheme();
export const themeManager = ThemeManager;
