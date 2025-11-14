import { describe, it, expect } from "vitest";
import { setTheme, getTheme } from "../src/index";

describe("Theme Manager", () => {
    it("should set and get theme", () => {
        setTheme("light");
        expect(getTheme()).toBe("light");

        setTheme("dark");
        expect(getTheme()).toBe("dark");

        setTheme("system");
        const theme = getTheme();
        expect(["light", "dark"]).toContain(theme);
    });
});
