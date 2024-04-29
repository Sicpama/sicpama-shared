export interface OkPosStore {
  SHOP_CD: string;
  HD_SHOP_CD: string;
  BIZ_NO: string;
  SHOP_NM: string;
  SALE_DATE: string;
  CLS_LEVEL: string;
  LATEST_UPDATE_DATE: string;
  OKPOS_VER: string;
  OKDC_VER: string;
  CORRECTION_AMOUNT_TYPE: string;
  CORRECTION_TAX_TYPE: string;
  DOUBLE_PORTION_FLAG: string;
  KITCHEN_FLOOR_TAG: string;
  KITCHEN_FLOOR_INFO: KitchenFloorInfo[];
  SERVICE_TIP_FLAG: string;
  SERVICE_TIP_RATE: string;
  SHOP_CORNER_INFO: ShopCornerInfo[];
  SHOP_CORNER_TYPE: string;
  TAX_INCLUDED_FLAG: string;
  TIP_INCLUDED_FLAG: string;
}
export interface KitchenFloorInfo {
  FLOOR_NO: string;
  USE_YN: string;
}
export interface ShopCornerInfo {
  BIZ_NO: string;
  CORNER_CD: string;
  CORNER_NM: string;
  USE_YN: string;
}
export interface OkPosSicpamaStore extends OkPosStore {
  id: number;
  name: string;
}
