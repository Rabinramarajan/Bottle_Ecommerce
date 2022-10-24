export class entAuditLogSearch {
  auditLogId = 0; 
  tableName = ''; 
  columnName = ''; 
  idtmCreatedDatefrom = ''; 
  idtmreatedDateTo = ''; 
  isortcolumn = ''; 
  isortorder = false; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  primaryKey = 0; 
 
}

export class MsgDetail {
  msgID = 0; 
  msgType = 0; 
  msgDescription = ''; 
 
}

export class Message {
  infoMessage = new MsgDetail(); 
  errorMessage: any = []; 
  hasError = false; 
 
}

export class entAuditlog {
  auditLogId = 0; 
  tableName = ''; 
  primaryKey = 0; 
  primaryKey2 = ''; 
  primaryKey3 = ''; 
  changeModeId = 0; 
  changeModeValue = ''; 
  machineIpAddress = ''; 
  referenceId = 0; 
  changeModeDescription = ''; 
  lstAuditLogDetail: any = []; 
  msg = new Message(); 
  modifiedBy = ''; 
  modifiedDate = ''; 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entAuditLogDetail {
  auditLogDetailId = 0; 
  auditLogId = 0; 
  columnName = ''; 
  oldValue = ''; 
  newValue = ''; 
  referenceId = 0; 
  iAuditLog = new entAuditlog(); 
  msg = new Message(); 
  modifiedBy = ''; 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entAuditLogDetailSearchResult {
  result: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class ListString {
  data: any = []; 
 
}

export class entCredential {
  username = ''; 
  password = ''; 
  token: any = []; 
  clientcode = ''; 
  mPin = 0; 
  emailId = ''; 
  newPassword = ''; 
  confirmPassword = ''; 
  urlDate = ''; 
  confirmMPin = 0; 
  otp = 0; 
 
}

export class entUserTeam {
  userTeamId = 0; 
  userSerialId = 0; 
  statusId = 0; 
  statusValue = ''; 
  locationId = 0; 
  locationValue = ''; 
  branchId = 0; 
  branchValue = ''; 
  teamId = 0; 
  teamValue = ''; 
  statusDescription = ''; 
  locationDescription = ''; 
  teamDescription = ''; 
  branchDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entResource {
  resourceId = 0; 
  viewNameId = 0; 
  viewNameValue = ''; 
  resourceName = ''; 
  resourceTypeId = 0; 
  resourceTypeValue = ''; 
  resourceTypeDescription = ''; 
  resourceDescription = ''; 
  viewNameDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entRoleResource {
  resourceId = 0; 
  resourceName = ''; 
  resourceTypeValue = ''; 
  resourceType = 0; 
  permissionValue = ''; 
  roleId = 0; 
  viewName = ''; 
  roleResourceId = 0; 
  permissionId = 0; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientResource = new entResource(); 
 
}

export class entRole {
  statusDescription = ''; 
  roleId = 0; 
  roleName = ''; 
  beginDate = ''; 
  endDate = ''; 
  statusValue = ''; 
  statusId = 0; 
  moduleValue = ''; 
  moduleId = 0; 
  moduleDescription = ''; 
  lstentRoleResource: any = []; 
  lstentUser: any = []; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientRoleResource = new entRoleResource(); 
  screenname = ''; 
 
}

export class entUserGroup {
  userGroupId = 0; 
  userSerialId = 0; 
  groupId = 0; 
  beginDate = ''; 
  endDate = ''; 
  statusId = 0; 
  statusValue = ''; 
  status = ''; 
  statusDescription = ''; 
  userId = 0; 
  userLoginId = ''; 
  fullName = ''; 
  userStatus = ''; 
  groupName = ''; 
  ientGroup = new entGroup(); 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientUser = new entUser(); 
 
}

export class entGroup {
  groupId = 0; 
  groupName = ''; 
  beginDate = ''; 
  endDate = ''; 
  statusId = 0; 
  statusValue = ''; 
  statusDescription = ''; 
  lstentRoleGroup: any = []; 
  lstentUserGroup: any = []; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entRoleGroup {
  roleGroupId = 0; 
  groupId = 0; 
  roleId = 0; 
  beginDate = ''; 
  endDate = ''; 
  statusId = 0; 
  statusValue = ''; 
  roleName = ''; 
  statusDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientRole = new entRole(); 
  ientGroup = new entGroup(); 
  lstentRole: any = []; 
 
}

export class entGroupn {
  groupId = 0; 
  groupName = ''; 
  beginDate = ''; 
  endDate = ''; 
  statusId = 0; 
  statusValue = ''; 
  statusDescription = ''; 
  lstentRoleGroup: any = []; 
  lstentUserGroup: any = []; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entUserGroupn {
  userGroupId = 0; 
  userSerialId = 0; 
  groupId = 0; 
  beginDate = ''; 
  endDate = ''; 
  statusId = 0; 
  statusValue = ''; 
  status = ''; 
  statusDescription = ''; 
  userId = 0; 
  userLoginId = ''; 
  fullName = ''; 
  userStatus = ''; 
  groupName = ''; 
  ientGroup = new entGroupn(); 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientUser = new entUser(); 
 
}

export class entAddress {
  line1 = ''; 
  line2 = ''; 
  line3 = ''; 
  fullAddress = ''; 
  addressId = 0; 
  addressTypeId = 0; 
  addressTypeValue = ''; 
  addressTypeDescription = ''; 
  beginDate = ''; 
  city = ''; 
  countryId = 0; 
  countryValue = ''; 
  district = ''; 
  endDate = ''; 
  pinCode = 0; 
  referenceId = 0; 
  referenceTypeId = 0; 
  referenceTypeValue = ''; 
  statusId = 0; 
  statusValue = ''; 
  statusDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entCustomer {
  customerId = 0; 
  customerNumber = 0; 
  typeId = 0; 
  typeValue = ''; 
  referenceId = 0; 
  statusId = 0; 
  statusValue = ''; 
  beginDate = ''; 
  endDate = ''; 
  levelId = 0; 
  levelValue = ''; 
  customerPoints = 0; 
  customerName = ''; 
  contactNumber = ''; 
  emailId = ''; 
  fullName = ''; 
  typeDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entCashCounter {
  cashCounterId = 0; 
  counterNumber = 0; 
  officeId = 0; 
  statusId = 0; 
  statusValue = ''; 
  statusDescription = ''; 
  cashier = ''; 
  counterPrefix = ''; 
  odometer = 0; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entOfficeBank {
  officeBankId = 0; 
  officeId = 0; 
  bankName = ''; 
  bankCode = ''; 
  accountNo = ''; 
  swiftCode = ''; 
  routingNo = ''; 
  statusId = 0; 
  statusValue = ''; 
  countryId = 0; 
  countryValue = ''; 
  statusDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  branchDescription = ''; 
 
}

export class entCashierCounterLink {
  cashierCounterLinkId = 0; 
  cashCounterId = 0; 
  userId = 0; 
  beginDate = ''; 
  endDate = ''; 
  statusId = 0; 
  statusValue = ''; 
  statusDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientCashCounter = new entCashCounter(); 
 
}

export class entOffice {
  officeId = 0; 
  officeName = ''; 
  typeId = 0; 
  typeValue = ''; 
  branchCode = ''; 
  branchDescription = ''; 
  phoneNo = ''; 
  beginDate = ''; 
  endDate = ''; 
  statusId = 0; 
  statusValue = ''; 
  ientAddress = new entAddress(); 
  ientCashCounter = new entCashCounter(); 
  ientOfficeBank = new entOfficeBank(); 
  lstentAddress: any = []; 
  lstentCashCounter: any = []; 
  lstentOfficeBank: any = []; 
  statusDescription = ''; 
  typeDescription = ''; 
  branchName = ''; 
  lstentCashierCounterLink: any = []; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entUserEmployment {
  userEmploymentId = 0; 
  userSerialId = 0; 
  officeId = ''; 
  officeName = ''; 
  statusId = 0; 
  statusValue = ''; 
  status = ''; 
  statusDescription = ''; 
  beginDate = ''; 
  endDate = ''; 
  ientUser = new entUser(); 
  ientOffice = new entOffice(); 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entDailyRate {
  dailyRateId = 0; 
  currencyTypeId = 0; 
  currencyTypeValue = ''; 
  currencyTypeDescription = ''; 
  buyingNoteRate = ''; 
  buyingTcRate = ''; 
  inwardTtRate = ''; 
  outwardTtRate = ''; 
  midRate = ''; 
  cutOffRate = ''; 
  effectiveDate = ''; 
  approvalStatus = ''; 
  lentDailyRate: any = []; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entTransxnReceivable {
  transactionReceivableDetailId = 0; 
  cashFlag = ''; 
  chequeNumber = ''; 
  chequeDate = ''; 
  recievedAmount = ''; 
  bankName = ''; 
  statusId = 0; 
  statusValue = ''; 
  statusDescription = ''; 
  depositOfficeBankId = 0; 
  cashTransactionId = 0; 
  bouncedDate = ''; 
  clearedDate = ''; 
  clearedRate = ''; 
  clearingCharge = ''; 
  clearedAmount = ''; 
  countryId = 0; 
  countryValue = ''; 
  actionStatusDescription = ''; 
  actionStatusValue = ''; 
  transactionDate = ''; 
  transactionId = 0; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  tabflag = ''; 
 
}

export class entReversedPaymentDetail {
  reversedPaymentDetailId = 0; 
  transactionPayableDetailId = 0; 
  paymentModeId = 0; 
  paymentModeValue = ''; 
  chequeNumber = ''; 
  officeBankId = 0; 
  newTransactionId = 0; 
  amount = ''; 
  bankName = ''; 
  paymentModeDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entTransxnPayable {
  transactionPayableDetailId = 0; 
  transactionId = 0; 
  bankTransactionNo = ''; 
  receiverName = ''; 
  bankName = ''; 
  countryId = 0; 
  countryValue = ''; 
  accountNo = ''; 
  routingNo = ''; 
  swiftCode = ''; 
  transferDate = ''; 
  transferRate = ''; 
  transactionCharges = ''; 
  transferAmount = ''; 
  statusId = 0; 
  statusValue = ''; 
  statusDescription = ''; 
  reversedAmount = ''; 
  reversedDate = ''; 
  clearedDate = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientReversedPaymentDetail = new entReversedPaymentDetail(); 
  lstentReversedPaymentDetail: any = []; 
  flagtab = ''; 
 
}

export class entTransxnRequest {
  transactionRequestId = 0; 
  transactionId = 0; 
  requestAmount = ''; 
  requestRate = ''; 
  previousAmount = ''; 
  previousRate = ''; 
  recommendedAmount = ''; 
  recommendedRate = ''; 
  recommendedBy = ''; 
  recomndModeId = 0; 
  recomndModeValue = ''; 
  authorizationId = 0; 
  authorizationValue = ''; 
  authorizationDescription = ''; 
  statusId = 0; 
  statusValue = ''; 
  statusDescription = ''; 
  recomndModeDescription = ''; 
  transactionDate = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entNotes {
  notesId = 0; 
  tableName = ''; 
  primaryKey = 0; 
  notes = ''; 
  notesBy = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  modifiedDate = ''; 
 
}

export class entCommunicationTracking {
  mailContent = ''; 
  sentStatusDescription = ''; 
  sentDatetime = ''; 
  sentDate = ''; 
  toEmailId = ''; 
  communicationTrackingId = 0; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  fromEmailId = ''; 
 
}

export class entCommunicationHistory {
  communicationTrackingId = 0; 
  customerId = 0; 
  communicationHistoryId = 0; 
  firstName = ''; 
  ientCommunicationTracking = new entCommunicationTracking(); 
  ientTransaction = new entTransaction(); 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entPerson {
  personId = 0; 
  firstName = ''; 
  middleName = ''; 
  lastName = ''; 
  genderId = 0; 
  genderValue = ''; 
  dob = ''; 
  emailId = ''; 
  contactNo = ''; 
  altContactNo = ''; 
  tin = ''; 
  drivingLicenseNo = ''; 
  passportNo = ''; 
  nationalityId = 0; 
  nationalityValue = ''; 
  nationalityDescription = ''; 
  fatherName = ''; 
  motherName = ''; 
  mailFlag = ''; 
  designation = ''; 
  statusId = 0; 
  statusValue = ''; 
  ientAddress = new entAddress(); 
  ientCustomer = new entCustomer(); 
  lstentTransaction: any = []; 
  ientNotes = new entNotes(); 
  lstentNotes: any = []; 
  lstentCommunicationHistory: any = []; 
  lstentAddress: any = []; 
  statusDescription = ''; 
  fullName = ''; 
  notesby = ''; 
  id = ''; 
  narration = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  beingdate = ''; 
  designationId = 0; 
  genderDescription = ''; 
  designationDescription = ''; 
 
}

export class entContact {
  contactId = 0; 
  customerId = 0; 
  contactPersonId = 0; 
  typeId = 0; 
  typeValue = ''; 
  designationId = 0; 
  designationValue = ''; 
  beginDate = ''; 
  endDate = ''; 
  statusId = 0; 
  statusValue = ''; 
  fullName = ''; 
  contactNo = ''; 
  emailId = ''; 
  typeDescription = ''; 
  designationDescription = ''; 
  statusDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entOrganization {
  orgId = 0; 
  orgName = ''; 
  tin = ''; 
  businRegNo = ''; 
  operationId = 0; 
  operationValue = ''; 
  emailId = ''; 
  contactNo = ''; 
  orgPhoneNo = ''; 
  mailFlag = ''; 
  ientAddress = new entAddress(); 
  ientCustomer = new entCustomer(); 
  lstentTransaction: any = []; 
  lstentNotes: any = []; 
  ientContact = new entContact(); 
  ientNotes = new entNotes(); 
  lstentCommunicationHistory: any = []; 
  lstentAddress: any = []; 
  lstentContact: any = []; 
  id = ''; 
  narration = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entTransaction {
  transactionId = 0; 
  transactionNumber = 0; 
  customerId = 0; 
  cashRegisterId = 0; 
  dailyRateId = 0; 
  typeId = 0; 
  typeValue = ''; 
  modeId = 0; 
  modeValue = ''; 
  statusId = 0; 
  statusValue = ''; 
  actionStatusId = 0; 
  actionStatusValue = ''; 
  receivableCurrencyId = 0; 
  receivableCurrencyValue = ''; 
  receivableModeId = 0; 
  receivableModeValue = ''; 
  receivableAmount = ''; 
  applicableRate = ''; 
  allowedDlaPercentage = ''; 
  applicableDlaPercentage = ''; 
  dlaPoints = ''; 
  finalRate = ''; 
  inverseFinalRate = ''; 
  payableCurrencyId = 0; 
  payableCurrencyValue = ''; 
  dlaLimits = ''; 
  payableModeId = 0; 
  payableModeValue = ''; 
  payableAmount = ''; 
  transactionCharges = ''; 
  otherCharges = ''; 
  totalPayableAmount = ''; 
  totalReceivableAmount = ''; 
  allowedDlaPoint = ''; 
  receiptNo = ''; 
  ientDailyRate = new entDailyRate(); 
  ientCustomer = new entCustomer(); 
  ientTransactionReceivableDetail = new entTransxnReceivable(); 
  ientTransactionPayableDetail = new entTransxnPayable(); 
  ientTransactionRequest = new entTransxnRequest(); 
  lstentTransactionRequest: any = []; 
  lstentTransactionPayableDetail: any = []; 
  lstentTransactionReceivableDetail: any = []; 
  ientPerson = new entPerson(); 
  ientOrganization = new entOrganization(); 
  ientUSer = new entUser(); 
  ientAddress = new entAddress(); 
  lstentNotes: any = []; 
  ientNotes = new entNotes(); 
  typeDescription = ''; 
  statusDescription = ''; 
  payableCurrencyDescription = ''; 
  receivableCurrencyDescription = ''; 
  deletedFlag = ''; 
  lstentCommunicationHistory: any = []; 
  custName = ''; 
  isChecked = false; 
  completeMailFlag = false; 
  counterNumber = ''; 
  cashierName = ''; 
  office = ''; 
  bankName = ''; 
  chequeNo = ''; 
  accountNo = ''; 
  receivableModeDescription = ''; 
  payableModeDescription = ''; 
  xpinNo = 0; 
  transactionCodes = 0; 
  transactionCodeId = 0; 
  transactionCodeValue = ''; 
  transactionPrintCode = ''; 
  narration = ''; 
  transactionCodeDescription = ''; 
  ttDraftCodes = ''; 
  transactionDate = ''; 
  customerNumber = 0; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  totalAmount = ''; 
  previousRate = ''; 
  errormsg = ''; 
 
}

export class entEmploymentHistory {
  userId = 0; 
  employmentHistoryId = 0; 
  designationId = 0; 
  designationValue = ''; 
  statusId = 0; 
  statusValue = ''; 
  beginDate = ''; 
  endDate = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entUser {
  msg = new Message(); 
  userSerialId = 0; 
  userLoginId = ''; 
  firstName = ''; 
  middleName = ''; 
  lastName = ''; 
  fullName = ''; 
  fatherName = ''; 
  motherName = ''; 
  genderId = ''; 
  dob = ''; 
  contactNumber = ''; 
  alternateNumber = ''; 
  addressLine1 = ''; 
  addressLine2 = ''; 
  addressLine3 = ''; 
  beginDate = ''; 
  endDate = ''; 
  status = ''; 
  isActiveRole = false; 
  branchValue = ''; 
  genderValue = ''; 
  statusId = 0; 
  statusValue = ''; 
  statusDescription = ''; 
  locationValue = ''; 
  locationDescription = ''; 
  branchDescription = ''; 
  emailId = ''; 
  lstentUserTeam: any = []; 
  lstentUserGropu: any = []; 
  departmentValue = ''; 
  departmentDescription = ''; 
  lstentAddress: any = []; 
  lstentCustomer: any = []; 
  lstentUserEmployment: any = []; 
  ilistUserGroupRoles: any = []; 
  listOfTransxn: any = []; 
  updateSeq = ''; 
  idoObjState = ''; 
  keyToken = ''; 
  keyword = ''; 
  webSession = ''; 
  designationId = 0; 
  designationValue = ''; 
  locationId = 0; 
  branchId = 0; 
  employeeCode = ''; 
  departmentId = 0; 
  teamId = 0; 
  teamValue = ''; 
  ientAddress = new entAddress(); 
  ientCustomer = new entCustomer(); 
  userDefaultLandingPage = ''; 
  defaultLandingValueDescription = ''; 
  lstentEmploymentHistory: any = []; 
 
}

export class LongData {
  data = 0; 
 
}

export class ByteDate {
  byteDate_: any = []; 
 
}

export class DDLClass {
  id = 0; 
  code = ''; 
  description = ''; 
  name = ''; 
  constant = ''; 
  fullName = ''; 
  vendorContactNo = ''; 
  vendorCode = ''; 
  vendorLegacyCode = ''; 
  stritemtype = ''; 
  ledgerId = 0; 
  lstDDLClass: any = []; 
 
}

export class DDL {
  key = ''; 
  value: any = []; 
 
}

export class DDLData {
  data: any = []; 
 
}

export class entCashierBalanceSheetChequeDetail {
  cashierBalanceSheetChequeDetailId = 0; 
  cashierBalanceSheetDetailId = 0; 
  transactionReceivableDetailId = 0; 
  bankName = ''; 
  chequeNo = ''; 
  chequeAmount = ''; 
  chequeDate = ''; 
  countryId = ''; 
  countryValue = ''; 
  transactionId = 0; 
  customerName = ''; 
  customerId = 0; 
  isChecked = false; 
  countryDescription = ''; 
  currrencyValue = ''; 
  transactionNumber = ''; 
  transactionDate = ''; 
  actionStatusId = ''; 
  actionStatusDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entCashierBalanceSheetCashDetail {
  cashierBalanceSheetCashDetailId = 0; 
  cashierBalanceSheetDetailId = 0; 
  currencyNoteId = 0; 
  currencyNoteValue = ''; 
  totalCount = 0; 
  totalAmount = ''; 
  quantitySign = ''; 
  equalSign = ''; 
  balance = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entCashierBalanceSheetDetail {
  cashierBalanceSheetDetailId = 0; 
  cashierBalanceSheetId = 0; 
  currencyId = 0; 
  currencyValue = ''; 
  currencyTypeId = 0; 
  currencyTypeValue = ''; 
  balanceTypeId = 0; 
  balanceTypeValue = ''; 
  balanceAmount = ''; 
  openCash = ''; 
  closeCash = ''; 
  openCheque = ''; 
  closeCheque = ''; 
  closingBalance = ''; 
  openStatus = ''; 
  closedStatus = ''; 
  statusValue = ''; 
  effectiveDate = ''; 
  openStatusDescription = ''; 
  closedStatusDescription = ''; 
  currencyDescription = ''; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientCashierBalanceSheetChequeDetail = new entCashierBalanceSheetChequeDetail(); 
  ientCashierBalanceSheetCashDetail = new entCashierBalanceSheetCashDetail(); 
  lstentCashierBalanceSheetChequeDetail: any = []; 
  lstentCashierBalanceSheetCashDetail: any = []; 
  isValidate = ''; 
  denomination = 0; 
  amount = 0; 
  index = 0; 
  computedTotalAmt = ''; 
 
}

export class entCashierBalanceSheet {
  msg = new Message(); 
  cashierBalanceSheetId = 0; 
  cashCounterId = 0; 
  openingBalanceValidated = ''; 
  closingBalanceValidated = ''; 
  openingBalance = ''; 
  closingBalance = ''; 
  statusId = 0; 
  statusValue = ''; 
  currency = ''; 
  cashierName = ''; 
  officeName = ''; 
  counterNumber = 0; 
  validateFlag = ''; 
  createdDate = ''; 
  updateSeq = ''; 
  idoObjState = ''; 
  ientCashierBalanceSheetDetail = new entCashierBalanceSheetDetail(); 
  lstentCashierBalanceSheetDetail: any = []; 
  statusDescription = ''; 
 
}

export class entCashierBalanceSheetSearch {
  cashierBalanceSheetId = 0; 
  cashCounterId = 0; 
  openingBalValidated = ''; 
  closingBalValidated = ''; 
  statusId = 0; 
  statusValue = ''; 
  fromDate = ''; 
  toDate = ''; 
  registeredBy = 0; 
  officeId = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entCashierBalanceSheetSearchSet {
  cashierBalanceSheetId = 0; 
  createdDate = ''; 
  counterNumber = 0; 
  cashierName = ''; 
 
}

export class entCashierBalanceSheetSearchResult {
  lstentCashierBalanceSheetSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class DDLstring {
  data = ''; 
  data1: any = []; 
 
}

export class entOfficeSearch {
  isrchOfficeName = ''; 
  isrchTyprValue = ''; 
  isrchBranchDesc = ''; 
  isrchFromBeginDate = ''; 
  isrchToBeginDate = ''; 
  isrchFromEndDate = ''; 
  isrchToEndDate = ''; 
  isrchBranchCode = ''; 
  isrchStatus = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entOfficeSearchSet {
  officeId = 0; 
  officeName = ''; 
  type = ''; 
  branchDescription = ''; 
  status = ''; 
 
}

export class entOfficeSearchResult {
  lstentOfficeSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entConfigMetaData {
  configMetaDataId = 0; 
  metaDataName = ''; 
  metaDataType = ''; 
  metaDataValue = ''; 
  configValueSerialId = 0; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entConfigValue {
  configId = 0; 
  configConstant = ''; 
  configConstDescription = ''; 
  configValueSerialId = 0; 
  lstentConfigMetaData: any = []; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientConfigMetaData = new entConfigMetaData(); 
 
}

export class entConfigValueList {
  lstentConfigValue: any = []; 
 
}

export class entTransactionSearch {
  customerId = ''; 
  createdDateFrom = ''; 
  createdDateTo = ''; 
  statusValue = ''; 
  typeValue = ''; 
  personContactNo = ''; 
  orgContactNo = ''; 
  firstName = ''; 
  orgName = ''; 
  createdBy = ''; 
  transactionNumber = 0; 
  receivableModeValue = ''; 
  payableModeValue = ''; 
  officeId = ''; 
  counterNumber = ''; 
  transactiondate = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
  cashier = 0; 
 
}

export class entTransactionSearchSet {
  transactionId = 0; 
  transactionNumber = 0; 
  type = ''; 
  customerName = ''; 
  customerNumber = 0; 
  contactNo = ''; 
  emailId = ''; 
  fromCurrency = ''; 
  fromAmount = ''; 
  toCurrency = ''; 
  toAmount = ''; 
  transactionDate = ''; 
  status = ''; 
 
}

export class entTransactionSearchResult {
  lstentTransactionSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entDlaLimit {
  dlaLimitId = 0; 
  roleId = 0; 
  roleName = ''; 
  effectiveDate = ''; 
  currencyId = 0; 
  currencyValue = ''; 
  dlaPercentage = ''; 
  dlaPoints = ''; 
  currencyDescription = ''; 
  lentDlaLimit: any = []; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entDlaLimitList {
  lstentDlaLimit: any = []; 
 
}

export class entReq {
  from = ''; 
  to = ''; 
  status = ''; 
  searchFlag = ''; 
 
}

export class entTransactionList {
  lstentTransaction: any = []; 
 
}

export class entCashierBalanceChequeDetailsSearch {
  fromDate = ''; 
  toDate = ''; 
  isrchStatus = ''; 
  fromAmount = ''; 
  toAmount = ''; 
  currencyvalue = ''; 
  cashierBalanceSheetId = 0; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entCashierBalanceChequeDetailsSearchSet {
  chequeId = 0; 
  chequeNo = ''; 
  chequeAmount = ''; 
  currency = ''; 
  handoverStatus = ''; 
  bankName = ''; 
  customerName = ''; 
  transactionNumber = ''; 
  transactonDate = ''; 
  ischecked = ''; 
 
}

export class entCashierBalanceChequeDetailsSearchResult {
  listentCashierBalanceChequeSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entPendingAuthorisationSearch {
  statusID = 0; 
  statusValue = ''; 
  idtmDateFrom = ''; 
  idtmDateTo = ''; 
  isortcolumn = ''; 
  isortorder = false; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  modifiedBy = ''; 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entCashierCounterLinkList {
  plistentCashierCounterLink: any = []; 
 
}

export class entCommunicationHistorySearch {
  emailId = ''; 
  fromSentDate = ''; 
  toSentDate = ''; 
  customerNumber = 0; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entCommunicationHistorySearchSet {
  communicationTrackingId = 0; 
  toEmailId = ''; 
  fromEmailId = ''; 
  customerId = 0; 
  custumerName = ''; 
  mailContent = ''; 
  status = ''; 
  sentDate = ''; 
 
}

export class entCommunicationHistorySerachResult {
  lstentCommunicationHistorySearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entCommunicationTrackingSearch {
  toMailId = ''; 
  statusValue = ''; 
  fromDate = ''; 
  toDate = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entCommunicationTrackingSearchSet {
  fromEmailId = ''; 
  toEmailId = ''; 
  sentDate = ''; 
  mailContent = ''; 
  status = ''; 
  ccEmailIds = ''; 
 
}

export class entCommunicationTrackingSearchResult {
  listentCommunicationTrackingSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entConfigSearch {
  configSerialId = 0; 
  configId = 0; 
  configValue = ''; 
  configDescription = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entConfigSearchSet {
  configSerialId = 0; 
  configId = 0; 
  configValue = ''; 
  configDescription = ''; 
 
}

export class entConfigSearchResult {
  lstentConfigSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entConfig {
  configSerialId = 0; 
  configId = 0; 
  configValue = ''; 
  configDescription = ''; 
  lstentConfigValues: any = []; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
  ientConfigValue = new entConfigValue(); 
 
}

export class intdata {
  data = 0; 
 
}

export class entPersonSearch {
  isrchCustomerName = ''; 
  isrchTIN = ''; 
  isrchDrivingLicenseNo = ''; 
  isrchContactNo = ''; 
  isrchEmailId = ''; 
  isrchPassportNo = ''; 
  isrchDOB = ''; 
  isrchCustomerID = 0; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entPersonSearchSet {
  personId = 0; 
  customerId = 0; 
  firstName = ''; 
  lastName = ''; 
  contactNo = ''; 
  emailId = ''; 
  status = ''; 
  customerNumber = 0; 
  fullName = ''; 
  tinNumber = ''; 
 
}

export class entPersonSearchResult {
  lstentPersonSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entOrgSearch {
  isrchOrgName = ''; 
  isrchBRN = ''; 
  isrchEmailId = ''; 
  isrchTIN = ''; 
  isrchContactNo = ''; 
  isrchOrgPhoneNo = ''; 
  isrchCustomerID = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
  istrcustomerno = ''; 
 
}

export class entOrgSearchSet {
  orgId = 0; 
  customerId = 0; 
  orgName = ''; 
  contactNo = ''; 
  emailId = ''; 
  customerNumber = 0; 
 
}

export class entOrgSearchResult {
  lstentOrgSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entDailyRateSearch {
  istrCurrencyType = ''; 
  iCreatedDate = ''; 
  iModifiedDate = ''; 
  iDailyRateId = 0; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entDailyRateSearchSet {
  dailyRateId = 0; 
  description = ''; 
  code = ''; 
  inwardTtRate = ''; 
  cheque = ''; 
  buyingNoteRate = ''; 
  outwardTtRate = ''; 
  midRate = ''; 
  cutOffRate = ''; 
 
}

export class entDailyRateResult {
  lstentDailyRateSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entDailyRateList {
  msg = new Message(); 
  lstentDailyRate: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entDlaLimitSearch {
  roleId = ''; 
  fromEffectiveDate = ''; 
  toEffectiveDate = ''; 
  currencyValue = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entDlaLimitSearchSet {
  dlaLimitId = 0; 
  effectiveDate = ''; 
  roleName = ''; 
  currency = ''; 
  dlaPercentage = ''; 
  dlaPoints = ''; 
 
}

export class entDlaLimitSearchResult {
  lstentDlaLimitSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class StringData {
  data = ''; 
 
}

export class entGroupSearch {
  istrgroupId = 0; 
  istrgroupName = ''; 
  istrgroupBeginDateFrom = ''; 
  istrgroupBeginDateTo = ''; 
  istrgroupEndDateFrom = ''; 
  istrgroupEndDateTo = ''; 
  istrgroupStatusid = 0; 
  istrgroupStatusvalue = ''; 
  istrRoleId = 0; 
  isortcolumn = ''; 
  isortorder = false; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  modifiedBy = ''; 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entGroupSearchSet {
  groupId = 0; 
  groupName = ''; 
  beginDate = ''; 
  endDate = ''; 
  status = ''; 
 
}

export class entGroupSearchResults {
  listentGroupSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entMessageSearch {
  message = ''; 
  messageId = 0; 
  messageNo = 0; 
  messageTypeId = 0; 
  messageTypeValue = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entMessage {
  messageId = 0; 
  messageNo = 0; 
  message = ''; 
  messageTypeValue = ''; 
  messageTypeId = 0; 
  msg = new Message(); 
  updateSeq = ''; 
  idoObjState = ''; 
 
}

export class entMessageList {
  lstenrMessage: any = []; 
 
}

export class entResourceSearch {
  resourceId = 0; 
  viewNameId = 0; 
  viewNameValue = ''; 
  resourceName = ''; 
  resourceTypeId = 0; 
  resourceTypeValue = ''; 
  resourceDescription = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entResourceSearchSet {
  resourceId = 0; 
  viewName = ''; 
  type = ''; 
  resourceName = ''; 
  resourceDescription = ''; 
 
}

export class entResourceSearchResults {
  listentResourceSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entRoleSearch {
  roleId = 0; 
  roleName = ''; 
  moduleId = 0; 
  moduleValue = ''; 
  fromBeginDate = ''; 
  toBeginDate = ''; 
  fromEndDate = ''; 
  toEndDate = ''; 
  roleStatusId = 0; 
  roleStatusValue = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entRoleSearchSet {
  roleId = 0; 
  roleName = ''; 
  beginDate = ''; 
  endDate = ''; 
  status = ''; 
 
}

export class entRoleSearchResult {
  lentRoleSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class Commonparam {
  stringparam = ''; 
  longparam = 0; 
  intparam = 0; 
  dateparam = ''; 
  boolparam = false; 
 
}

export class entRoleResourceList {
  lstentRoleResource: any = []; 
  msg = new Message(); 
 
}

export class entUserSearch {
  istrUserName = ''; 
  istrFirstName = ''; 
  istrLastName = ''; 
  istrDesignation = ''; 
  ilngRoleId = 0; 
  istrStatus = ''; 
  ibeginDateFrom = ''; 
  ibeginDateTo = ''; 
  iendDateFrom = ''; 
  iendDateTo = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entUserSearchSet {
  userSerialId = 0; 
  userLoginId = ''; 
  firstName = ''; 
  lastName = ''; 
  beginDate = ''; 
  endDate = ''; 
  status = ''; 
  location = ''; 
  branch = ''; 
  fullname = ''; 
  contactNumber = ''; 
  emailId = ''; 
  customerId = 0; 
 
}

export class entUserSearchResult {
  listentUserSearchSet: any = []; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
 
}

export class entEmploymentHistorySearch {
  istrEmplymentHistory = 0; 
  istrDesigntion = 0; 
  istrDesignVal = ''; 
  istrStatusId = 0; 
  istrStatusValue = ''; 
  istrBeginDate = ''; 
  istUserSerialId = 0; 
  istrEndDate = ''; 
  totalCount = 0; 
  pageSize = 0; 
  pageNumber = 0; 
  orderByColumnName = ''; 
  ascending = false; 
  isortcolumn = ''; 
  isortorder = false; 
 
}

export class entEmploymentHistoryList {
  lstentEmploymentHistory: any = []; 
 
}

export class entRoleList {
  ientRole: any = []; 
 
}

export class entResourceList {
  lstentResource: any = []; 
 
}




