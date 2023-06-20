declare type SingleNavItem = { title: string; href: string; outlined?: boolean };

declare type NavItems = SingleNavItem[];

declare type SingleArticle = {
	slug: string;
	content: string;
	meta: {
		title: string;
		description: string;
		date: string;
		tags: string;
		imageUrl: string;
	};
};

declare type NonNullableChildren<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };

declare type NonNullableChildrenDeep<T> = {
	[P in keyof T]-?: NonNullableChildrenDeep<NonNullable<T[P]>>;
};

declare type TextStyle = {
	size?:				string
	color?:				string
}

declare type TextForm = {
	content:			string | JSX.Element
	opts?:				TextStyle
}