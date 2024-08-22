import { IBaseQueryDto, InventorySortBy, IPaginationResponse } from '../../';

export interface KdsInventoryDomainDto extends IPaginationResponse {
  data: KdsInventoryDomain[];
}

export class InventoryDomain implements KdsInventoryDomain {
  id: number;
  name: string;
  quantity: number;
  storeId: number;
  menuAndMenuQuantities: KdsInventoryMenuAndMenuQuantities[];

  constructor(params: {
    id: number;
    name: string;
    quantity: number;
    storeId: number;
    menuAndMenuQuantities: KdsInventoryMenuAndMenuQuantities[];
  }) {
    this.id = params.id;
    this.name = params.name;
    this.quantity = params.quantity;
    this.storeId = params.storeId;
    this.menuAndMenuQuantities = params.menuAndMenuQuantities;
  }
}

export interface KdsInventoryDomain {
  id: number;
  name: string;
  quantity: number;
  storeId: number;
  menuAndMenuQuantities: KdsInventoryMenuAndMenuQuantities[];
}

export interface KdsInventoryMenuAndMenuQuantities {
  id: number;
  menuId: number;
  menuName: string;
  menuQuantityRequired: number;
}

export interface KdsGetInventoryQueryDto extends IBaseQueryDto {
  name: string;
  sortBy: InventorySortBy;
}
