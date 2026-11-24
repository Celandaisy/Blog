import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "tools",
		name: "工具文档",
		icon: "material-symbols:build-outline-rounded",
		desc: "每天要翻的那几个",
		weight: 100,
		items: [
			{
				title: "Blender Manual",
				url: "https://docs.blender.org/manual/zh-hans/latest/",
				desc: "Blender 官方手册（中文）",
				weight: 10,
			},
			{
				title: "Toon Boom Harmony",
				url: "https://docs.toonboom.com/",
				desc: "Harmony 官方文档",
				weight: 9,
			},
			{
				title: "After Effects",
				url: "https://helpx.adobe.com/cn/after-effects/user-guide.html",
				desc: "AE 用户指南",
				weight: 8,
			},
		],
	},
	{
		id: "reference",
		name: "参考",
		icon: "material-symbols:palette-outline-rounded",
		desc: "找灵感、看别人怎么做",
		weight: 90,
		items: [
			{
				title: "ArtStation",
				url: "https://www.artstation.com",
				desc: "美术作品参考",
				weight: 10,
			},
			{
				title: "Motionographer",
				url: "https://motionographer.com",
				desc: "动态设计作品集散地",
				weight: 9,
			},
		],
	},
];