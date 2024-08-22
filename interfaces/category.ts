import { CategoryPosData, IMenu, IStore, Nullable } from '..';

export interface ILocale {
  id: number;
  name: string;
  code: string;
  nativeName: string;
}

export interface ITranslatedText {
  id: string;
  groupedTextId: string;
  localeCode: string;
  name: string;
  description: Nullable<string>;
}

export interface IGroupedText {
  id: string;
  originalLocaleCode: string;
  translatedTexts: ITranslatedText[];
  locale: ILocale;
}

export interface ICategory {
  id: number;
  name: string;
  description: Nullable<string>;
  priority: Nullable<number>;
  isAvailable: boolean;
  storeId: number;
  groupedTextId: Nullable<string>;
  posData: Nullable<CategoryPosData>;
  store: IStore;
  menus: IMenu[];
  groupedText: Nullable<IGroupedText>;
}
