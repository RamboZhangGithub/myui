import { themeBlueColor } from './blue';
import { themeGreenColor } from './green';
import { themeOrangeColor } from './orange';
import { themePinkColor } from './pink';
import { themeVioletColor } from './violet';
import { themeYellowColor } from './yellow';

export type ObjKV = { [key:string]:string };

export const THEME_PREFIX = 'theme/';

export enum ThemeTypeEnum {
  Orange = 'orange',
  Violet = 'violet',
  Blue = 'blue',
  Pink = 'pink',
  Green = 'green',
  Yellow = 'yellow',
  Default = 'orange',
}

export type ColorType =
  | 'theme-color-0'
  | 'theme-color-1'
  | 'theme-color-2'
  | 'theme-color-3'
  | 'theme-color-4'
  | 'theme-color-5'
  | 'theme-color-6'
  | 'theme-color-7'
  | 'theme-color-8'
  | 'theme-color-9'
  | 'theme-color-n1'
  | 'theme-color-n2'
  | 'theme-color-t'
  | 'theme-color-t1'
  | 'theme-color-t3'
  | 'theme-color-t5'
  | 'theme-color-t7'
  | 'theme-color-s1-0'
  | 'theme-color-s1-1'
  | 'theme-color-s1-2'
  | 'theme-color-s2-0'
  | 'theme-color-s2-1'
  | 'theme-color-s2-2'
  | 'theme-color-c'
  | 'theme-color-c1'
  | 'theme-color-c2'
  | 'sup-color-n1-0'
  | 'sup-color-n1-1'
  | 'sup-color-n1-2'
  | 'sup-color-n2-0'
  | 'sup-color-n2-1'
  | 'sup-color-n2-2'
  | 'sup-color-n3-0'
  | 'sup-color-n3-1'
  | 'sup-color-n3-2'
  | 'sup-color-n4-0'
  | 'sup-color-n4-1'
  | 'sup-color-n4-2'
  | 'sup-color-n5-0'
  | 'sup-color-n5-1'
  | 'sup-color-n5-2'
  | 'sup-color-n6-0'
  | 'sup-color-n6-1'
  | 'sup-color-n6-2'
  | 'sup-color-n7-0'
  | 'sup-color-n7-1'
  | 'sup-color-n7-2'
  | 'sup-color-n8-0'
  | 'sup-color-n8-1'
  | 'sup-color-n8-2'
  | 'sup-color-n9-0'
  | 'sup-color-n9-1'
  | 'sup-color-n9-2';

export enum ColorEnum {
  TC0 = 'theme-color-0',
  TC1 = 'theme-color-1',
  TC2 = 'theme-color-2',
  TC3 = 'theme-color-3',
  TC4 = 'theme-color-4',
  TC5 = 'theme-color-5',
  TC6 = 'theme-color-6',
  TC7 = 'theme-color-7',
  TC8 = 'theme-color-8',
  TC9 = 'theme-color-9',
  TCN1 = 'theme-color-n1',
  TCN2 = 'theme-color-n2',
  TCYS1 = 'theme-color-ys1',
  TCYS2 = 'theme-color-ys2',
  TT = 'theme-color-t',
  TT1 = 'theme-color-t1',
  TT3 = 'theme-color-t3',
  TT5 = 'theme-color-t5',
  TT7 = 'theme-color-t7',
  TTA = 'theme-color-a1',
  TCS10 = 'theme-color-s1-0',
  TCS11 = 'theme-color-s1-1',
  TCS12 = 'theme-color-s1-2',
  TCS20 = 'theme-color-s2-0',
  TCS21 = 'theme-color-s2-1',
  TCS22 = 'theme-color-s2-2',
  TCC = 'theme-color-c',
  TCC1 = 'theme-color-c1',
  TCC2 = 'theme-color-c2',
  SCN10 = 'sup-color-n1-0',
  SCN11 = 'sup-color-n1-1',
  SCN12 = 'sup-color-n1-2',
  SCN20 = 'sup-color-n2-0',
  SCN21 = 'sup-color-n2-1',
  SCN22 = 'sup-color-n2-2',
  SCN30 = 'sup-color-n3-0',
  SCN31 = 'sup-color-n3-1',
  SCN32 = 'sup-color-n3-2',
  SCN40 = 'sup-color-n4-0',
  SCN41 = 'sup-color-n4-1',
  SCN42 = 'sup-color-n4-2',
  SCN50 = 'sup-color-n5-0',
  SCN51 = 'sup-color-n5-1',
  SCN52 = 'sup-color-n5-2',
  SCN60 = 'sup-color-n6-0',
  SCN61 = 'sup-color-n6-1',
  SCN62 = 'sup-color-n6-2',
  SCN70 = 'sup-color-n7-0',
  SCN71 = 'sup-color-n7-1',
  SCN72 = 'sup-color-n7-2',
  SCN80 = 'sup-color-n8-0',
  SCN81 = 'sup-color-n8-1',
  SCN82 = 'sup-color-n8-2',
  SCN90 = 'sup-color-n9-0',
  SCN91 = 'sup-color-n9-1',
  SCN92 = 'sup-color-n9-2',
}

export type ThemeList =
  | typeof themeYellowColor
  | typeof themeVioletColor
  | typeof themePinkColor
  | typeof themeBlueColor
  | typeof themeGreenColor
  | typeof themeOrangeColor;
