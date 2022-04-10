import { themeBlueColor } from './blue';
import { themeGreenColor } from './green';
import { themeOrangeColor } from './orange';
import { themePinkColor } from './pink';
import { themeVioletColor } from './violet';
import { themeYellowColor } from './yellow';
import { ThemeList, ThemeTypeEnum } from './defs';

export const themes:{ [key:string]:ThemeList } = {
  [ThemeTypeEnum.Blue]: themeBlueColor,
  [ThemeTypeEnum.Orange]: themeOrangeColor,
  [ThemeTypeEnum.Violet]: themeVioletColor,
  [ThemeTypeEnum.Pink]: themePinkColor,
  [ThemeTypeEnum.Green]: themeGreenColor,
  [ThemeTypeEnum.Yellow]: themeYellowColor,
};
