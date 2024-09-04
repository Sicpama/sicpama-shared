export enum StoreReviewStatus {
  DRAFT = 'draft',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export enum STORE_ATTRIBUTE_NAME {
  PRICE_INCLUDED_VAT = 'priceIncludedVat',
  SERVICE_CHARGE_PERCENT = 'serviceChargePercent',
  BANNER_IMAGE = 'bannerImage',
  DISCLAIMER_CONTENT = 'disclaimerContent',
  PAYMENT_TYPE = 'paymentType',
  PAYMENT_METHOD = 'paymentMethod',
  POST_PAID_PERIOD = 'postPaidGracePeriod',
  ORDER_INSTRUCTION = 'orderInstruction',
  CANCELLATION_FEE = 'cancellationFee',
  REFUNDABLE = 'refundable',
  REFUNDABLE_PERIOD = 'refundablePeriod',
  NON_CANCELLABLE = 'nonCancellable',
  NON_CANCELLABLE_PERIOD = 'nonCancellablePeriod',
  SICPAMA_COMMISSION_RATE = 'sicpamaCommissionRate',
  TIMEZONE = 'timezone',
  PRICE_NOTE = 'priceNote',
  TABLE_SORTING_CRITERIA = 'tableSortingCriteria',
  IS_DISCOUNTED_FOR_FIRST_LOGIN = 'isDiscountedForFirstLogin',
  DAILY_SALES_STATUS_FILE_URL = 'dailySalesStatusFileUrl',
  NUMBER_WORKING_DAYS_TO_SEND_SETTLEMENT = 'numberWorkingDaysToSendSettlement',
  PRINT_ONCE_PAID = 'printOncePaid',
  AUTO_TABLE_CLEAR_SCHEDULE = 'autoTableClearSchedule',
  AUTO_TABLE_CLEAR_GREEN = 'autoTableClearGreen',
  AUTO_TABLE_CLEAR_ORANGE = 'autoTableClearOrange',
  NOTIFICATION_REQUIRED = 'notificationRequired',
  DASHBOARD_ALERT = 'dashboardAlert',
  PAYMENT_METHODS = 'paymentMethods',
  PAYMENT_OPTIONS = 'paymentOptions',
  PAYMENT_GATEWAY = 'paymentGateway',
  NEEDS_INTEGRATION_ENABLED = 'needsIntegrationEnabled',
  MENU_CAROUSEL_HIDDENNESS = 'menuCarouselHiddenness',
  ORDER_HISTORY__CAROUSEL_HIDDENNESS = 'orderHistoryCarouselHiddenness',
  DATA_REPORT_URL = 'dataReportUrl',
  SINGLE_CLICK = 'singleClick',
  IS_INVENTORY_ENABLED = 'isInventoryEnabled',
  PAYMENT_GATEWAY_MODE = 'paymentGatewayMode', // test || live
  MARKETING_POPUP_ENABLED = 'marketingPopupEnabled',
  COUNT_NUMBER_OF_SENT_PICK_UP_ENABLED = 'countNumberOfSentPickUpEnabled',
  KDS_HOME_PAGE_PATH = 'kdsHomePagePath',
}
