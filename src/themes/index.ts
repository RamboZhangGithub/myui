import { parseToSvg } from '../common/util';
import { ColorEnum, ThemeList, ThemeTypeEnum, THEME_PREFIX } from './defs';
import { themes } from './themeColor';
import { themeSupColor } from './supColor';
import { themeGreyColor } from './greyColor';

export * from './defs';

export function setTheme(theme:ThemeTypeEnum):void {
  if (typeof window !== 'undefined') {
    document.body.setAttribute('data-theme', `${THEME_PREFIX}${theme}`);
  }
  injectFilterDef(theme);
}

export function getTheme():string {
  if (typeof window !== 'undefined') {
    return document?.body?.getAttribute('data-theme')?.replace(THEME_PREFIX, '') ?? ThemeTypeEnum.Default;
  }
  return ThemeTypeEnum.Default;
}

export function getThemeColorSet(theme:ThemeTypeEnum):ThemeList {
  return themes[theme];
}

function __formatColor__(color:string, type:'rgb' | '16' = 'rgb'):string {
  if (!color) {
    return '';
  }
  if (type === 'rgb') {
    return color;
  } else {
    return color.split(',').reduce((str:string, value:string) => (str += Number(value).toString(16)), '');
  }
}

function __getColor__(setType:'sup' | 'grey') {
  /**
   * @description 获取色集中的某个颜色色值
   * @param {string} name 色名
   * @param {'rgb' | '16'} type 色值进制
   * @return {string} 色值结果，如果色名不存在，返回空字符串
   */
  return function(name:string, type:'rgb' | '16' = 'rgb'):string {
    const set = setType === 'sup' ? themeSupColor : themeGreyColor;
    const color = set[name];
    return __formatColor__(color, type);
  };
}

/* 获取补充色 */
export const getSupColor = __getColor__('sup');

/* 获取灰色 */
export const getGreyColor = __getColor__('grey');

/**
 * @description 获取指定主题色下某个颜色的色值
 * @param {string} theme 主题
 * @param {string} name 色名
 * @param {'rgb' | '16'} type 色值进制
 * @returns {string} 返回指定进制下的色值，如果颜色不存在，返回空字符串
 */
export function getColor(theme:ThemeTypeEnum, name:string, type:'rgb' | '16' = 'rgb'):string {
  const colorSet = themes[theme];
  if (!colorSet) {
    return '';
  }
  const color = colorSet[name];
  return __formatColor__(color, type);
}

/**
 * @description 16进制色值转10进制rgb格式
 * @param {string} color 16进制色值
 * @returns {string | undefined} 转化结果，失败则 undefined
 */
export function colorHex2DecRgb(color:string):string | undefined {
  return color
    .replace('#', '')
    .match(/(.{2})/g)
    ?.map((value:string) => parseInt(value, 16))
    .join(',');
}

/**
 * @description 10进制rgb格式色值转16进制格式
 * @param {string} color 10进制rgb色值，要求格式为：R,G,B
 * @returns {string} 转化结果
 */
export function colorDecRgb2Hex(color:string):string | undefined {
  return color
    .split(',')
    .map((value:string) => Number(value).toString(16))
    .join('');
}

const COMMON_THEME_FILTER = 'cui_common_theme_filter';
const SVG_CONTAINER = 'cui_filter_svg';

function injectFilterDef(theme:ThemeTypeEnum) {
  let filterContainer = document.getElementById(SVG_CONTAINER);
  if (!filterContainer) {
    filterContainer = document.createElement('svg');
    filterContainer.id = SVG_CONTAINER;
    filterContainer.style.display = 'block';
    filterContainer.setAttribute('width', '0');
    filterContainer.setAttribute('height', '0');
    filterContainer.innerHTML = '<defs></defs>';
    document.body.insertBefore(filterContainer, document.body.childNodes[0]);
  }
  if (!filterContainer) {
    return;
  }
  const defs = filterContainer.querySelector('defs');
  if (defs) {
    const prevCommonFilter = defs.querySelector(`#${COMMON_THEME_FILTER}`);
    prevCommonFilter && prevCommonFilter.remove();
    const newCommonFilter = parseToSvg(getFilterDom(`#${theme === ThemeTypeEnum.Yellow ? getColor(theme, ColorEnum.TCYS2, '16') : getColor(theme, ColorEnum.TC1, '16')}`));
    defs.appendChild(newCommonFilter);
  }
}

const getFilterDom = (color:string) => `<filter id="${COMMON_THEME_FILTER}" x="0" y="0" width="100%" height="100%">
  <feFlood result="floodFill" flood-color=${color} flood-opacity="1"></feFlood>
  <feBlend in="SourceGraphic" in2="floodFill" mode="luminosity" result="blend"></feBlend>
  <feComposite in="blend" in2="SourceAlpha" operator="in"></feComposite>
</filter>`;

