export interface OkPosStore {
  SHOP_CD: string;
  HD_SHOP_CD: string;
  BIZ_NO: string;
  SHOP_NM: string;
  EXTERNAL_KEY?: string;
  EXTERNAL_SERVICE?: string;
}

export interface OkPosSicpamaStore extends OkPosStore {
  id: number;
  name: string;
}
