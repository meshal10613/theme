type Theme = "light" | "dark" | "system";
declare class ThemeManager {
    private currentTheme;
    constructor(initialTheme?: Theme);
    setTheme(theme: Theme): Theme;
    getTheme(): Theme;
}
declare const themeManager: ThemeManager;

declare const setTheme: (theme: "light" | "dark" | "system") => "light" | "dark" | "system";
declare const getTheme: () => "light" | "dark" | "system";

export { getTheme, setTheme, themeManager };
