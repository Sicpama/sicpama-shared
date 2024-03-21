export interface KdsStoreLoginBodyDto {
  email: string;
  password: string;
}

export interface KdsLoginResponseDto {
  storeId: number;
  token: string;
}
