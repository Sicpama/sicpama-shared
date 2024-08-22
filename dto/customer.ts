import { Gender, Nullable, SNSProviderType } from '..';

export interface ICustomerDevice {
  os: string;
  type: string;
}

export interface ICustomerResDto {
  id: string;
  sicpamaId: Nullable<string>;
  guestId: Nullable<string>;
  email: string;
  phoneNumber: string;
  fullName: string;
  nickName: Nullable<string>;
  gender: Nullable<Gender>;
  dateOfBirth: Nullable<Date>;
  sicpamaProfilePhotoKey: Nullable<string>;
  providerProfilePhoto: Nullable<string>;
  providerType: Nullable<SNSProviderType>;
  isMarketingAgreed?: Nullable<Date>;
  subscribedToSicpamaKakaoChannel?: boolean;
  isTermsAgreed?: boolean;
}
