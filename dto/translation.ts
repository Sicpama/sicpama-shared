import { Nullable } from '..';

export interface IAdditionalLanguageDto {
  name: string;
  description?: Nullable<string>;
  localeCode: string;
}
