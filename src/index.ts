import { themeManager } from "./themeManager";

export const setTheme = (theme: "light" | "dark" | "system") =>
    themeManager.setTheme(theme);

export const getTheme = () => themeManager.getTheme();

export { themeManager };