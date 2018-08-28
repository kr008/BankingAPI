## Welcome to the Banking API

Our API allows easy and secure access to bank accounts, customer data, many payment methods, and much more.

Our APIs are RESTful. We use JSON format and OAuth authorization based on JSON Web Token.

This API is a sandbox version, and its purpose is to make developers familiar with the upcoming API production releases. Moreover, it allows the developers to experiment and build applications, which can use the API, before its official release. See sandbox for more information regarding the sandbox and what it is.

The purpose of this documentation is to give an overview of all the APIs, which are included in API sandbox. There is separate documentation for each API, which includes the full API reference of the particular API and any specific information which is not presented in this overview.

### Getting Started

To start working with our API, you need information about:
- jwtToken - authorization token which is provided by our organization
```
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsicmViLWN1c3RvbWVyLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiTUIxQk1PNlIiLCJpZGVudGl0eSI6eyJvcmdfdW5pdCI6Im91PTk0NixvPVNHQi1CQU5LLGRjPUFDUCxkYz11ZmUsZGM9Y29tIiwicGVyc29uX2lkIjoiMzI4MDM4Iiwicm9sZSI6IkNVU1RPTUVSIiwiYWNjZXNzX3Byb2ZpbGVfaWQiOiIyMDA3In0sInNjb3BlIjpbIndyaXRlIiwicmVhZCJdLCJpc3MiOiJpc3N1ZXIiLCJqdGkiOiJlYmY0ZGZmYS00ZWU2LTQ4NGUtODdiMy1hYzc5MDk3ZWRmZjUiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXX0.W3ZMfIHLu401I3CKG0lv0Om3xPoZqeVn2DdJQEzPtyQ
```
- apiAddress - address of Your sanbox
```
https://cbp-api.asseco.pl/banking-service
```

- customerId - internal customer's identificator in the bank
```
328038
```

- accessProfileId - internal customer's profile identificator in the bank
```
2007
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

#### /account
This resource describe a basic banking product - account. It's the financial registry closely related to a bank customer. Main property of this resource is an account's balance.

#### /payments
This resource is created after the bank's customer decides to make some transaction on his/her account (e.g. money transfer to internal or external account). Every payment has at least its amount, currency and status. Status decides about the payment's state. Not every payment has effect on account's balance, because of possibility of payment rejection by the system or user cancellation.

#### /transaction
This resource is created after the customer made some payments and these payments were booked in Core Banking System (in other words - payment was executed and this operation had influence on account's balance).
Particular transaction is connected with payment, from which it was created.

#### /credit
This resource reflects customer's financial liabilities towards the bank.

#### /deposit
This resource is connected with customers savings.

#### /card
This resource reflects a customer's payment cards (credit/debit). Every card is connected to customer's account.

#### /card_transaction
This resource contains all information about financial operations within the card (e.g. withdrawing cash from an ATM, internet payments or payments in traditional shops).

### Tools

To integrate with our RESTful API you can use your favourite tool. We suggest:  
[PostMan](https://www.getpostman.com)  
[SoapUI](https://www.soapui.org) or simply  
[Curl](https://curl.haxx.se)
