## Welcome to the Banking API

Our API allows easy and secure access to bank accounts, customer data, many payment methods, and much more.

Our APIs are RESTful. We use JSON format and OAuth authorization based on JSON Web Token.

This API is a sandbox version, and its purpose is to make developers familiar with the upcoming API production releases. Moreover, it allows the developers to experiment and build applications, which can use the API, before its official release. See sandbox for more information regarding the sandbox and what it is.

The purpose of this documentation is to give an overview of all the APIs, which are included in API sandbox. There is separate documentation for each API, which includes the full API reference of the particular API and any specific information which is not presented in this overview.

### Getting Started

To start working with our API, you need information about:
- apiAddress - address of Your sanbox
```
https://cbp-api.asseco.pl/banking-service-swagger
```
- jwtToken - authorization token which is provided by our organization
- customerId - internal customer's identificator in the bank
- accessProfileId - internal customer's profile identificator in the bank

***Test data:***

***Customer 1***


- jwtToken

``` 
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNlIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDU5Iiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMjY3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.BDG474G1M7FDdGRxOAVxXYhplnoWgr0YSn6WEVOhg6Y 
```

- customerId

```
328059
```

- accessProfileId

```
2267
```  

***Customer 2***


- jwtToken

``` 
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNVIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDcyIiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMzA3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.cQRnONmhv4WR8p3tTSjXZXYo45Xt46R_OptL-2Nj2Mg
```
- customerId

```
328072
``` 

- accessProfileId

```
2307
```  


Below is a simple curl GET request to our API:
Before use, please fill required parameters: jwtToken, apiAddress, customerId.

``` 
curl -k -X GET --header "Accept: application/json" --header "Authorization: jwtToken" "https://apiAddress/api/user/get/user_personal_details.json?customerId=customerId"
```

### Security issue

Production security flow is based on the OAuth2 flow and it's described below:

     ----------------------Production--------------------------
     +--------+                               +---------------+
     |        |--(A)- Authorization Request ->|   Resource    |
     |        |                               |     Owner     |
     |        |<-(B)-- Authorization Grant ---|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant -->| Authorization |
     | Client |                               |     Server    |
     |        |<-(D)----- Access Token -------|               |
     |        |                               +---------------+
     |        |
     ------------------------Sandbox---------------------------
     |        |                               +---------------+
     |        |--(E)----- Access Token ------>|    Resource   |
     |        |                               |     Server    |
     |        |<-(F)--- Protected Resource ---|               |
     +--------+                               +---------------+

In the sandbox, we provide for you ready to use JWT token, which will not expire.

### Bussiness domain

#### /user
This resource describes personal information about bank's customers. The user is in relation with following financial resources.

***Endpoint URL***
```
/api/user/get/user_personal_details.json
```

***Curl***
```
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNVIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDcyIiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMzA3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.cQRnONmhv4WR8p3tTSjXZXYo45Xt46R_OptL-2Nj2Mg' 'https://cbp-api.asseco.pl/retail-banking-swagger/api/user/get/user_personal_details.json?customerId=328072'
```
***Response body***
```json
{
  "customerId": "328072",
  "firstName": "JAN",
  "lastName": "KOWAL",
  "personalIdentificationNumber": "55010842827",
  "emailAddress": null,
  "phoneNumber": "48507507507",
  "documentType": null,
  "documentNumber": "DD5609234",
  "domicileStreetAddress": "ul. NOWA 11/11",
  "domicileApartmentNo": null,
  "domicilePostalCode": "34-456",
  "domicileCity": "RZESZÓW",
  "domicileCountry": null,
  "correspondenceStreetAddress": null,
  "correspondencePostalCode": null,
  "correspondenceCity": null,
  "correspondenceCountry": null,
  "fullName": "KOWAL JAN|ul. NOWA 11/11|34-456 RZESZÓW",
  "employe": false,
  "type": "I"
}
```

#### /account
This resource describe a basic banking product - account. It's the financial registry closely related to a bank customer. Main property of this resource is an account's balance.

***Endpoint URL***
```
/retail-banking-swagger/api/account
```

***Curl***
```
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNlIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDU5Iiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMjY3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.BDG474G1M7FDdGRxOAVxXYhplnoWgr0YSn6WEVOhg6Y' 'https://cbp-api.asseco.pl/retail-banking-swagger/api/account?customerId=328059&accessProfileId=2267&pageNumber=1&pageSize=10'
```
***Response body***
```json
{
  "totalElements": 2, 
  "pageNumber": 1,
  "pageSize": 10,
  "totalPages": 1,
  "sortOrder": null,
  "sortDirection": null,
  "content": [
    {
      "accountId": "750879",
      "productType": "ACCOUNT",
      "accountName": "Rachunek oszczędnościowo-rozliczeniowy osób prywatnych",
      "accountNo": "41161011332016015000200001",
      "accessibleAssets": 49999.99,
      "currentBalance": 50000,
      "allowedLimit": 0,
      "description": null,
      "openDate": 1490997600000,
      "blockAssets": null,
      "arrearAmount": 0,
      "ownerName": "NOWAK KONRAD",
      "accountInterest": 0.5,
      "creditInterest": 44,
      "currency": "PLN",
      "settlementPeriodDtType": null,
      "settlementPeriodCtType": null,
      "settlementPeriodDt": null,
      "settlementPeriodCt": null,
      "nextCapitalizationDtDate": null,
      "nextCapitalizationCtDate": null,
      "lastTransactionBookingDate": 1490997600000,
      "accountStatementDetails": null,
      "ownersList": [
        {
          "customerId": "328059",
          "relationType": "OWNER",
          "name": "NOWAK KONRAD",
          "addressStreetPrefix": "ul.",
          "addressStreet": "POKĄTNA",
          "houseNo": "1",
          "apartmentNo": "11",
          "postCode": "47-200",
          "town": "PRZEMYŚL",
          "country": "POLAND",
          "fullName": null,
          "originalOwner": false
        }
      ],
      "category": null,
      "subProduct": null,
      "relation": null,
      "statementDistributionType": "other",
      "modulo": "1500020",
      "commissionPackage": null,
      "unitId": 946,
      "spareAmount": null,
      "ownerEntityCode": 282,
      "accountVatId": null,
      "accountType": "RB",
      "customName": null
    },
    {
      "accountId": "750881",
      "productType": "ACCOUNT",
      "accountName": "Rachunek bieżący walutowy dla firm.",
      "accountNo": "14161011332016015000200002",
      "accessibleAssets": 50000,
      "currentBalance": 50000,
      "allowedLimit": 0,
      "description": null,
      "openDate": 1490997600000,
      "blockAssets": null,
      "arrearAmount": 0,
      "ownerName": "NOWAK KONRAD",
      "accountInterest": 0.1,
      "creditInterest": 0,
      "currency": "EUR",
      "settlementPeriodDtType": null,
      "settlementPeriodCtType": null,
      "settlementPeriodDt": null,
      "settlementPeriodCt": null,
      "nextCapitalizationDtDate": null,
      "nextCapitalizationCtDate": null,
      "lastTransactionBookingDate": 1490997600000,
      "accountStatementDetails": null,
      "ownersList": [
        {
          "customerId": "328059",
          "relationType": "OWNER",
          "name": "NOWAK KONRAD",
          "addressStreetPrefix": "ul.",
          "addressStreet": "POKĄTNA",
          "houseNo": "1",
          "apartmentNo": "11",
          "postCode": "47-200",
          "town": "PRZEMYŚL",
          "country": "POLAND",
          "fullName": null,
          "originalOwner": false
        }
      ],
      "category": null,
      "subProduct": null,
      "relation": null,
      "statementDistributionType": "other",
      "modulo": "1500020",
      "commissionPackage": null,
      "unitId": 946,
      "spareAmount": null,
      "ownerEntityCode": 282,
      "accountVatId": null,
      "accountType": "RB",
      "customName": null
    }
  ],
  "numberOfElements": 2,
  "firstPage": true,
  "lastPage": true
}
```

#### /payments
This resource is created after the bank's customer decides to make some transaction on his/her account (e.g. money transfer to internal or external account). Every payment has at least its amount, currency and status. Status decides about the payment's state. Not every payment has effect on account's balance, because of possibility of payment rejection by the system or user cancellation.

***Endpoint URL***
```
/api/payments/create_domestic_transfer
```

***Curl***
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNVIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDcyIiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMzA3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.cQRnONmhv4WR8p3tTSjXZXYo45Xt46R_OptL-2Nj2Mg' -d '{ \ 
   "amount": 3, \ 
   "currency": "PLN", \ 
   "description": [ \ 
     "Opłata za prąd" \ 
   ], \ 
   "intent": "realize", \ 
   "realizationDate": "2018-09-17T10:52:43.589Z", \ 
   "recipientAccountNo": "80249000059984455911456320", \ 
   "recipientAddress": [ \ 
     "ul.Dworcowa, Poznań" \ 
   ], \ 
   "recipientName": [ \ 
     "Aleksander Sas" \ 
   ], \ 
   "remitterAccountId": "750888" \ 
 }' 'https://cbp-api.asseco.pl/retail-banking-swagger/api/payments/create_domestic_transfer'
```

***Response body***
```json
{
  "content": "3697364",
  "_links": {}
}
```

#### /transaction
This resource is created after the customer made some payments and these payments were booked in Core Banking System (in other words - payment was executed and this operation had influence on account's balance).
Particular transaction is connected with payment, from which it was created.

***Endpoint URL***
```
/api/transaction
```

***Curl***
```
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNVIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDcyIiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMzA3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.cQRnONmhv4WR8p3tTSjXZXYo45Xt46R_OptL-2Nj2Mg' 'https://cbp-api.asseco.pl/retail-banking-swagger/api/transaction?accountId=750888&dateFrom=2018-09-17T10%3A00%3A43.589Z&dateTo=2018-09-17T11%3A52%3A43.589Z&pageNumber=1&pageSize=10'
```

***Response body***
```json
{
  "totalElements": 1,
  "pageNumber": 1,
  "pageSize": 10,
  "totalPages": 1,
  "sortOrder": null,
  "sortDirection": null,
  "content": [
    {
      "id": 3697364,
      "referenceNumber": null,
      "accountId": 750888,
      "accountNo": "87161011332016015000250001",
      "transactionDate": 1537183642000,
      "bookingDate": 1537183642000,
      "transactionTypeDesc": null,
      "transactionType": "DOMESTIC_TRANSFER",
      "transactionSubType": "1",
      "balanceAfterOperation": 49997,
      "oppositeAccountNo": "80249000059984455911456320",
      "remitterBank": null,
      "remitter": [
        "JAN KOWAL"
      ],
      "beneficiaryBank": null,
      "beneficiary": [
        "Aleksander Sas"
      ],
      "description": [
        "Opłata za prąd"
      ],
      "title": null,
      "amountInAccountCurrency": null,
      "accountCurrency": "PLN",
      "amount": 3,
      "currency": "PLN",
      "side": "DEBIT",
      "remitterSwift": null,
      "beneficiarySwift": null,
      "foreignBank": null,
      "transactionUsDetails": null,
      "transactionZusDetails": null,
      "decreeType": null
    }
  ],
  "numberOfElements": 1,
  "firstPage": true,
  "lastPage": true
}
```

#### /credit
This resource reflects customer's financial liabilities towards the bank.

***Endpoint URL***
```
/api/credit
```

***Curl***
```
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNVIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDcyIiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMzA3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.cQRnONmhv4WR8p3tTSjXZXYo45Xt46R_OptL-2Nj2Mg' 'https://cbp-api.asseco.pl/retail-banking-swagger/api/credit?customerId=328072&pageNumber=1&pageSize=10'
```
***Response body***
```json
{
  "totalElements": 1,
  "pageNumber": 1,
  "pageSize": 10,
  "totalPages": 1,
  "sortOrder": null,
  "sortDirection": null,
  "content": [
    {
      "creditId": "750893",
      "accountNo": "41161011331016015000250001",
      "currency": "PLN",
      "creditAmount": 30000,
      "creditName": "Kredyt mieszkaniowy",
      "maturedCapitalAmount": 0,
      "unmaturedCapitalAmount": 30000,
      "nextInstallmentAmount": 1014.2,
      "nextInstallmentDate": 1537740000000,
      "overpaymentAmount": 0,
      "overpaymentCurrency": "PLN",
      "outstandingLiabilitiesAmount": 0,
      "outstandingLiabilitiesCurrency": "PLN",
      "interestRate": 11,
      "openDate": 1490997600000,
      "closeDate": 1584918000000,
      "ownersList": [
        {
          "customerId": "328072",
          "relationType": "OWNER",
          "name": "KOWAL JAN",
          "addressStreetPrefix": null,
          "addressStreet": null,
          "houseNo": null,
          "apartmentNo": null,
          "postCode": null,
          "town": null,
          "country": null,
          "fullName": null,
          "originalOwner": false
        }
      ],
      "lastTransactionBookingDate": null
    }
  ],
  "numberOfElements": 1,
  "firstPage": true,
  "lastPage": true
}
```

#### /deposit
This resource is connected with customers savings.

***Endpoint URL***
```
/api/deposit
```

***Curl***
```
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNVIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDcyIiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMzA3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.cQRnONmhv4WR8p3tTSjXZXYo45Xt46R_OptL-2Nj2Mg' 'https://cbp-api.asseco.pl/retail-banking-swagger/api/deposit?customerId=328072&pageNumber=1&pageSize=10'
```
***Response body***
```json
{
  "totalElements": 1,
  "pageNumber": 1,
  "pageSize": 10,
  "totalPages": 1,
  "sortOrder": null,
  "sortDirection": null,
  "content": [
    {
      "depositId": "750892",
      "depositName": "Depozyt \"Pewniak\"",
      "description": null,
      "accountNo": "36161011333016015000250001",
      "currency": "PLN",
      "depositBalance": 555,
      "nextCapitalizationDate": 1506895200000,
      "maturityDate": 1506895200000,
      "openingAccountNo": "87161011332016015000250001",
      "settlementAccountNo": null,
      "settlementAccountIntNo": null,
      "renewalOptionType": "RENEWAL_WITH_INTEREST",
      "depositPeriodType": "MONTH",
      "period": 6,
      "interest": 0,
      "interestRateType": "FIXED",
      "openDate": 1490997600000,
      "productType": "DEPOSIT",
      "isSurcharge": false,
      "nextSurchargeDate": null,
      "nextSurchargeAmount": 0,
      "lastSurchargeAmount": null,
      "ownersList": [
        {
          "customerId": "328072",
          "relationType": "OWNER",
          "name": "KOWAL JAN",
          "addressStreetPrefix": null,
          "addressStreet": null,
          "houseNo": null,
          "apartmentNo": null,
          "postCode": null,
          "town": null,
          "country": null,
          "fullName": null,
          "originalOwner": false
        }
      ],
      "contractStatus": "ACTIVE",
      "unfinishedDisposition": false,
      "typeCapableToBreak": true,
      "lastTransactionBookingDate": 1490997600000,
      "profitAmount": null,
      "commentary": null,
      "dispositionStatus": null,
      "settlementAccountId": "8442",
      "surcharge": false
    }
  ],
  "numberOfElements": 1,
  "firstPage": true,
  "lastPage": true
}
```

#### /card
This resource reflects a customer's payment cards (credit/debit). Every card is connected to customer's account.

***Endpoint URL***
```
/api/card
```

***Curl***
```
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNVIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDcyIiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMzA3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.cQRnONmhv4WR8p3tTSjXZXYo45Xt46R_OptL-2Nj2Mg' 'https://cbp-api.asseco.pl/retail-banking-swagger/api/card?customerId=328072&accessProfileId=2307&cardStatus=ALL&pageNumber=1&pageSize=10'
```
***Response body***
```json
{
  "totalElements": 2,
  "pageNumber": 1,
  "pageSize": 10,
  "totalPages": 1,
  "sortOrder": null,
  "sortDirection": null,
  "content": [
    {
      "id": "2443",
      "name": "KREDYT",
      "cardNo": "22xx xxxx xxxx 6739",
      "availableFunds": 5000,
      "accountId": "750895",
      "accountNo": "14161011331016015000250002",
      "cardOwnerName": "JAN KOWAL",
      "cardOwnerLastName": null,
      "status": "ACTIVE",
      "active": true,
      "cardType": "CREDIT",
      "cardSubType": "MAIN",
      "currency": "PLN",
      "blockedFunds": 0,
      "dateExpirationEnd": 1607727600000,
      "settlmntDate": 1492725600000,
      "limitLeft": null,
      "cardDetails": {
        "dateExpirationStart": null,
        "dailyTrxLimit": null,
        "dailyCashLimit": null,
        "dailyTrxLimitCount": 0,
        "dailyCashLimitCount": 0,
        "maxDailyTrxLimit": null,
        "maxDailyCashLimit": null,
        "maxDailyTrxLimitCount": 0,
        "maxDailyCashLimitCount": 0,
        "cardLimits": [
          {
            "code": "SBI_LIMIT",
            "description": "Opis typu",
            "value": 12,
            "valueMax": 300
          },
          {
            "code": "SBI5_LIMIT",
            "description": "Opis typu",
            "value": 13,
            "valueMax": 300
          },
          {
            "code": "SBI4_LIMIT",
            "description": "Opis typu",
            "value": 12,
            "valueMax": 300
          },
          {
            "code": "SBI1_LIMIT",
            "description": "Opis typu",
            "value": 12,
            "valueMax": 300
          }
        ]
      },
      "lastOperationDate": null,
      "balance": null,
      "holders": null,
      "owner": null,
      "customName": null,
      "embossedName": null
    },
    {
      "id": "2463",
      "name": "KREDYT",
      "cardNo": "11xx xxxx xxxx 6739",
      "availableFunds": 50000,
      "accountId": "750888",
      "accountNo": "87161011332016015000250001",
      "cardOwnerName": "JAN KOWAL",
      "cardOwnerLastName": null,
      "status": "ACTIVE",
      "active": true,
      "cardType": "DEBIT",
      "cardSubType": "MAIN",
      "currency": "PLN",
      "blockedFunds": 0,
      "dateExpirationEnd": 1607727600000,
      "settlmntDate": null,
      "limitLeft": null,
      "cardDetails": {
        "dateExpirationStart": null,
        "dailyTrxLimit": null,
        "dailyCashLimit": null,
        "dailyTrxLimitCount": 0,
        "dailyCashLimitCount": 0,
        "maxDailyTrxLimit": null,
        "maxDailyCashLimit": null,
        "maxDailyTrxLimitCount": 0,
        "maxDailyCashLimitCount": 0,
        "cardLimits": [
          {
            "code": "SBI_LIMIT",
            "description": "Opis typu",
            "value": 12,
            "valueMax": 300
          }
        ]
      },
      "lastOperationDate": null,
      "balance": null,
      "holders": null,
      "owner": null,
      "customName": null,
      "embossedName": null
    }
  ],
  "numberOfElements": 2,
  "firstPage": true,
  "lastPage": true
}
```

#### /card_transaction
This resource contains all information about financial operations within the card (e.g. withdrawing cash from an ATM, internet payments or payments in traditional shops).

***Endpoint URL***
```
/api/card_transaction
```

***Curl***
```
curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNVIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDcyIiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMzA3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJjbGllbnRfaWQiOiJyZWJSZXRhaWwiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.cQRnONmhv4WR8p3tTSjXZXYo45Xt46R_OptL-2Nj2Mg' 'https://cbp-api.asseco.pl/retail-banking-swagger/api/card_transaction?customerId=328072&accessProfileId=2307&cardId=2443&dateFrom=2018-09-16T10%3A00%3A43.589Z&dateTo=2018-09-17T11%3A00%3A43.589Z&pageNumber=1&pageSize=10'
```

***Response body***
```json
{
  "totalElements": 0,
  "pageNumber": 1,
  "pageSize": 10,
  "totalPages": 0,
  "sortOrder": null,
  "sortDirection": null,
  "content": [],
  "numberOfElements": 0,
  "firstPage": true,
  "lastPage": false
}
```

### Tools

To integrate with our RESTful API you can use your favourite tool. We suggest:  
[PostMan](https://www.getpostman.com)  
[SoapUI](https://www.soapui.org) or simply  
[Curl](https://curl.haxx.se)

### Sandbox

[Try API](https://cbp-api.asseco.pl/retail-banking-swagger/index.html)


<details><summary>Show all</summary>details</details>
