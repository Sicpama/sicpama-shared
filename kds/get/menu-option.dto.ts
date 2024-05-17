import { KdsBaseQueryDto, KdsPaginationResponse } from './base.dto';
import { KdsMenuOptionDomain } from './menu.dto';

export interface KdsListMenuOptionDto extends KdsBaseQueryDto {
  storeId: number;
}

export interface KdsMenusOptionDomainDto extends KdsPaginationResponse {
  data: KdsMenuOptionDomain[];
}
