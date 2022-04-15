import { ITheme } from "../types/styled";

export const baseTheme: ITheme = {
	colors: {
		primary: "#73009B",
		secondary: "#2b2b2b",
		success: "#4caf50",
		danger: "#f44336 ",
		warning: "#ffbc00",

		bg: "#FF965A",
		font: "#FFFFFF",
	},
	fontSize: {
		big: "1,5625",
		medium: "1.5rem",
		normal: "0.9375rem",
		small: ".8rem",
	},
	mixins: {
		flexCenter: `
        display: flex;
        align-items: center;
        justify-content: center;
        `,
	},
};
