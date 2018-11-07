# taxcy
TAXCY (pronounced Taxi) is a software project developed and intended to help users file their occupancy taxes using a chatbot as an Interface.

taxcy-service offers following resources

1.`` POST - chatbot/personalInfo

    Store the  property information in database and generate certNo.

    Request- {
             	"propAdd": {
             		"street": "2711 N 1st St",
             		"apt": "234" ,
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
                     "apt": "234",
                     "city": "San Jose",
                     "state": "CA",
                     "zipCode": 95134
                 },
                 "email": "info@itu.edu"
             }
             
2.``   GET- chatbot/getAllPropertyInfo

    Retrieve all the property information from database.
    
    Response- [
                  {
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
              "billId": "24355",
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
                "taxableIncome": 0,
                  "taxDue": 0,
                  "penalties": 0,
                  "totalTaxDue": 0
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

 
5``. GET- chatbot/getTaxBillInfo/certNo   
        
    Get the tax bill information for the given certNo.
     
     Responce- {
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
    