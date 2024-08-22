import { IBaseQueryDto, IPaginationResponse } from '../..';

import { KdsMenuOptionDomain } from './menu.dto';

export interface KdsListMenuOptionDto extends IBaseQueryDto {
  storeId: number;
}

export interface KdsMenusOptionDomainDto extends IPaginationResponse {
  data: KdsMenuOptionDomain[];
}
