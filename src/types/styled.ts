export interface ITheme {
	colors: {
		primary: string;
		secondary: string;
		success: string;
		danger: string;
		warning: string;

		bg: string;
		font: string;
	};
	fontSize: {
		big: string;
		medium: string;
		normal: string;
		small: string;
	};

	mixins: {
		flexCenter: string;
	};
}
