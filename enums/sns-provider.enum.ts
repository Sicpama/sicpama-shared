export enum SNSProviderType {
  KAKAO = 'kakao',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  APPLE = 'apple',
  TIKTOK = 'tiktok',
  THREADS = 'threads',
  NAVER = 'naver',
  LINE = 'line',
  TWITTER = 'twitter', // Renamed X
}

export enum SnsNotificationProviderEnum {
  BIZTALK = 'biztalk',
  WHATSAPP = 'whatsapp',
}

export type BiztalkButtonType = 'WL' | 'AL' | 'BK' | 'MD' | 'AC' | 'BT';
