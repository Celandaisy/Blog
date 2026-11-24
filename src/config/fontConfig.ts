/**
 * 字体配置（统一入口）
 *
 * 当前站点只用两个字体：Abel（标题） + Source Code Pro（等宽小字）。
 * 两者都通过 Layout.astro <head> 里的 Google Fonts <link> 加载，
 * 所以这里不再注册 Astro Font API 字体，避免重复下载。
 *
 * 以后想换字体：
 * 1. 在 Layout.astro <head> 换 Google Fonts 链接
 * 2. 在 src/styles/theme.css 里改 font-family
 * 3. 或者在这里注册 Font API 字体，并把下面 regions 指向对应 cssVariable
 */
import type { FontDefinition, FontSelectionConfig } from "@/types/fontConfig";

// ─── Astro Font API 字体定义（当前为空，字体走 Google Fonts link）────
export const fontsList: FontDefinition[] = [];

// ─── 字体选择与区域覆盖 ─────────────────────────────────────
export const fontConfig: FontSelectionConfig = {
	// 是否启用自定义字体功能
	enable: true,
	// 使用系统字体组合，不额外下载
	selected: ["system"],

	// 各区域独立字体（留空 = 使用 body 默认，由 theme.css 统一控制）
	bannerTitleFont: "",
	bannerSubtitleFont: "",
	navbarTitleFont: "",
	// 代码块字体留空 → 走 ui-monospace 系统等宽栈
	codeFont: "",

	// 本地字体子集化配置（当前无本地字体）
	subsetFonts: {},
};
