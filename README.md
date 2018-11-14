# taxcy
TAXCY (pronounced Taxi) is a software project developed and intended to help users file their occupancy taxes using a chatbot as an Interface.

The service is built based on Spring boot java framework and integrated with in memory database H2.

Spring will do all the set up for database for us and will be up and running after service is started.

You can access H2 console using below url:

https://taxcy.herokuapp.com/H2/console



taxcy-service offers following resources

1.`` POST- chatbot/propertyInfo

    Store the  property information in database and generate certNo.

    Request- {
             	"propAdd": {
             		"street": "2711 N 1st St",
             		"city": "San Jose",
             		"state": "CA",
             		"zipCode": 95134 
             	},
             	"ownerName":"Dr. Gregory O'Brien",
             	"phoneNumber": "2384983488",
             	"email": "info@itu.edu"
             }
             
    Response - {
                 "certNo": "50e1f1a3-e165-4bda-a291-35a024177c33",
                 "ownerName": "Dr. Gregory O'Brien",
                 "phoneNumber": "2384983488",
                 "propAdd": {
                     "street": "2711 N 1st St",
                     "city": "San Jose",
                     "state": "CA",
                     "zipCode": 95134
                 },
                 "email": "info@itu.edu"
             }
             
2.``   GET- chatbot/getAllPropertyInfo/certNo

    Retrieve all the bill for that property based on certNo.
    
    Response- [
                 {
                         "billId": 2,
                         "certNo": "aeef8044-9fda-4dfe-b92c-b4017a82a187",
                         "year": "2018",
                         "month": "MAY",
                         "payDate": "2018-12-27T00:00:00.000+0000",
                         "grossIncome": 210000,
                         "exemption": {
                             "exemptionId": 2,
                             "exemptPR": 20.56,
                             "exemptCorp": 12.56,
                             "exemptLess": 123.45,
                             "exemptGov": 54.83,
                             "totalExempt": 211.39999999999998
                         },
                         "taxableIncome": 209788.6,
                         "taxDue": 207690.714,
                         "penalties": 0,
                         "totalTaxDue": 0,
                         "status": "In Progress"
                     }
              ]

3.``  GET - chatbot/getInfo/certNO

    Get the property information for the given certNo.
    
    Response - {
                   "certNo": "50e1f1a3-e165-4bda-a291-35a024177c33",
                   "ownerName": "Dr. Gregory O'Brien",
                   "phoneNumber": "2384983488",
                   "propAdd": {
                       "street": "2711 N 1st St",
                       "apt": "234",
                       "city": "San Jose",
                       "state": "CA",
                       "zipCode": 95134
                   },
                   "email": "info@itu.edu"
               }
    
4``. POST - chatbot/calculation

    Store the tax bill in database with calculated exmpetion,taxable income,taxdue.
    
    Request - {
              "certNo":"50e1f1a3-e165-4bda-a291-35a024177c33",
              "year": "2014",
              "month":"novmber",
              "payDate": "2017-12-27",
              "grossIncome": 210000.0,
              "exemption":{
              	"billId": "24355",
              	 "exemptPR": 20.56,
              	 "exemptCorp": 12.56,
              	 "exemptLess": 123.45,
              	 "exemptGov": 54.83,
                   "totalExempt": 0
              },
                  "penalties": 0
              }
    Response - {
                   "billId": "24355",
                   "certNo": "50e1f1a3-e165-4bda-a291-35a024177c33",
                   "year": "2014",
                   "month": "novmber",
                   "payDate": "2017-12-27T00:00:00.000+0000",
                   "grossIncome": 210000,
                   "exemption": {
                       "billId": "24355",
                       "exemptPR": 20.56,
                       "exemptCorp": 12.56,
                       "exemptLess": 123.45,
                       "exemptGov": 54.83,
                       "totalExempt": 211.39999999999998
                   },
                   "taxableIncome": 209788.6,
                   "taxDue": 207690.714,
                   "penalties": 0,
                   "totalTaxDue": 0
               }

 
5``. GET- chatbot/getTaxBillInfo/certNo/billId   
        
    Get the tax bill information for the given certNo.
     
     Response- {
                   "billId": "24355",
                   "certNo": "50e1f1a3-e165-4bda-a291-35a024177c33",
                   "year": "2014",
                   "month": "novmber",
                   "payDate": "2017-12-27T00:00:00.000+0000",
                   "grossIncome": 210000,
                   "exemption": {
                       "billId": "24355",
                       "exemptPR": 20.56,
                       "exemptCorp": 12.56,
                       "exemptLess": 123.45,
                       "exemptGov": 54.83,
                       "totalExempt": 211.39999999999998
                   },
                   "taxableIncome": 209788.6,
                   "taxDue": 207690.714,
                   "penalties": 0,
                   "totalTaxDue": 0
               }
6 GET - chatbot/submit/billId

   Submit the bill and status will be changed to done in DB.