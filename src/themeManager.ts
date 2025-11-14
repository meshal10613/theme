type Theme = "light" | "dark" | "system";

class ThemeManager {
    private currentTheme: Theme = "system";

    constructor(initialTheme?: Theme) {
        if (initialTheme) this.currentTheme = initialTheme;
    }

    setTheme(theme: Theme) {
        this.currentTheme = theme;
        // For frontend usage: update document body class
        if (typeof window !== "undefined" && window.document) {
            document.body.dataset.theme = theme;
        }
        return this.currentTheme;
    }

    getTheme(): Theme {
        if (this.currentTheme === "system") {
            if (typeof window !== "undefined" && window.matchMedia) {
                return window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
            }
            return "light"; // fallback
        }
        return this.currentTheme;
    }
}

// ✅ Named export of instance
export const themeManager = new ThemeManager();
export default themeManager;
