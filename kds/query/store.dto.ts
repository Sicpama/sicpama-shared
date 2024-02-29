import { KdsBaseQueryDto } from './base.dto';

export enum StoreSortBy {
  DISPLAY_NAME_ASCENDING = 'display_name_asc',
  DISPLAY_NAME_DESCENDING = 'display_name_desc',
}

export interface KdsGetStoresQueryDto extends KdsBaseQueryDto {
  name: string;
  displayName: string;
  sortBy: StoreSortBy;
}
