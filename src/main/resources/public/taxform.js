$(document).ready(function() {
    hide_error_indicators();

    $('#certification-number-button').on("click", function() {
        var crtNum = $('#certNum').val();
        if(crtNum.trim().length > 0) {
            window.location.replace("taxreport.html?cert=" + crtNum);
        }
    });

    $('#clear-page1').on("click", function() {
        $('#salutation').val('Dr');
        $('#ownerName').val('');
        $('#phoneNumber').val('');
        $('#email').val('');
        $('#street').val('');
        $('#city').val('');
        $('#state').val('');
        $('#zipCode').val('');
        $('#certNumber').text('');
    });

    $('#submit-page1').on("click", function() {
        if (isValidPersonalContactInfo()) {
            var clnt_data = {};
            var clnt_address = {};

            clnt_address["street"] = $('#street').val();
            clnt_address["city"] = $('#city').val();
            clnt_address["state"] = $('#state').val();
            clnt_address["zipCode"] = $('#zipCode').val();

            clnt_data["propAdd"] = clnt_address;
            clnt_data["ownerName"] = $('#salutation').val() + ' ' + $('#ownerName').val();
            clnt_data["phoneNumber"] = $('#phoneNumber').val();
            clnt_data["email"] = $('#email').val();

            $.ajax({
                type: "POST",
                url: "https://taxcy.herokuapp.com/chatbot/propertyInfo",
                data: JSON.stringify(clnt_data),
                contentType: "application/json;charset=UTF-8",
                crossDomain: true,
                dataType: "json",
                success: function(info) {
                    $('#certNumber').text(info.certNo);
                },
                error: function() {
                    console.log("TaxForm: Error communicating with API (chatbot/propertyInfo)");
                    console.log(
                        "Owner Name: " + clnt_data.ownerName + "\n" +
                        "Phone Number: " + clnt_data.phoneNumber + "\n" +
                        "Email: " + clnt_data.email + "\n" +
                        "Street: " + clnt_data.propAdd.street + "\n" +
                        "City: " + clnt_data.propAdd.city + "\n" +
                        "State: " + clnt_data.propAdd.state + "\n" +
                        "Zip Code: " + clnt_data.propAdd.zipCode + "\n"
                    );
                }
            });
        }
    });

    function hide_error_indicators() {
        $('#errOwnerName').hide();
        $('#errPhoneNumber').hide();
        $('#errEmail').hide();
        $('#errStreet').hide();
        $('#errCity').hide();
        $('#errState').hide();
        $('#errZipCode').hide();

        $('#errTaxFilingYear').hide();
        $('#errPayDate').hide();
        $('#errGrossIncome').hide();
        $('#errExemptPR').hide();
        $('#errExemptCorp').hide();
        $('#errExemptLess').hide();
        $('#errExemptGov').hide();
    }

    $('#clear-page2').on("click", function() {
        $('#taxFilingMonth').val('January');
        $('#taxFilingYear').val('2018');
        $('#payDate').val('');
        $('#grossIncome').val('');
        $('#penalties').val('');
        $('#exemptPR').val('');
        $('#exemptCorp').val('');
        $('#exemptLess').val('');
        $('#exemptGov').val('');
    });

    $('#submit-page2').on("click", function() {
        if(isValidTaxInfo()) {
            var clnt_tax = {};
            var clnt_exempt = {};

            clnt_exempt["exemptPR"] = $('#exemptPR').val();
            clnt_exempt["exemptCorp"] = $('#exemptCorp').val();
            clnt_exempt["exemptLess"] = $('#exemptLess').val();
            clnt_exempt["exemptGov"] = $('#exemptGov').val();

            clnt_tax["certNo"] = $('#certNumber').text();
            clnt_tax["year"] = $('#taxFilingYear').val();
            clnt_tax["month"] = $('#taxFilingMonth').val();
            clnt_tax["payDate"] = $('#payDate').val();
            clnt_tax["grossIncome"] = $('#grossIncome').val();
            clnt_tax["exemption"] = clnt_exempt;
            clnt_tax["penalties"] = 0;
            
            $.ajax({
                type: "POST",
                url: "https://taxcy.herokuapp.com/chatbot/calculation",
                data: JSON.stringify(clnt_tax),
                contentType: "application/json;charset=UTF-8",
                crossDomain: true,
                dataType: "json",
                success: function(info) {
                    window.location.replace("taxreport.html?cert=" + info.certNo);
                },
                error: function() {
                    console.log("TaxForm: Error communicating with API (chatbot/calculation)");
                    console.log(
                        "Certification Number: " + clnt_tax.certNo + "\n" +
                        "Filing Year: " + clnt_tax.year + "\n" +
                        "Filing Month: " + clnt_tax.month + "\n" +
                        "Pay Date: " + clnt_tax.payDate + "\n" +
                        "Gross Income: " + clnt_tax.grossIncome + "\n" +
                        "Penalties: " + clnt_tax.penalties + "\n" +
                        "Exempt PR: " + clnt_tax.exemption.exemptPR + "\n" +
                        "Exempt Corp: " + clnt_tax.exemption.exemptCorp + "\n" +
                        "Exempt Less: " + clnt_tax.exemption.exemptLess + "\n" +
                        "Exempt Gov: " + clnt_tax.exemption.exemptGov
                    );
                }
            });
        }
    });

    function isValidTaxInfo() {
        var isValid = true;

        if($('#taxFilingYear').val().trim().length == 0) {
            isValid = false;
            $('#errTaxFilingYear').show();
        }

        if($('#payDate').val().trim().length == 0) {
            isValid = false;
            $('#errPayDate').show();
        }

        if($('#grossIncome').val().trim().length == 0 || !$.isNumeric($('#grossIncome').val())) {
            isValid = false;
            $('#errGrossIncome').show();
        } else {
            $('#errGrossIncome').hide();
        }

        if($('#exemptPR').val().trim().length == 0 || !$.isNumeric($('#exemptPR').val())) {
            isValid = false;
            $('#errExemptPR').show();
        } else {
            $('#errExemptPR').hide();
        }

        if($('#exemptCorp').val().trim().length == 0 || !$.isNumeric($('#exemptCorp').val())) {
            isValid = false;
            $('#errExemptCorp').show();
        } else {
            $('#errExemptCorp').hide();
        }

        if($('#exemptLess').val().trim().length == 0 || !$.isNumeric($('#exemptLess').val())) {
            isValid = false;
            $('#errExemptLess').show();
        } else {
            $('#errExemptLess').hide();
        }

        if($('#exemptGov').val().trim().length == 0 || !$.isNumeric($('#exemptGov').val())) {
            isValid = false;
            $('#errExemptGov').show();
        } else {
            $('#errExemptGov').hide();
        }

        return isValid;
    }

    function isValidPersonalContactInfo() {
        var isValid = true;
        hide_error_indicators();

        if($('#ownerName').val().trim().length == 0) {
            isValid = false;
            $('#errOwnerName').show();
        } else {
            $('#errOwnerName').hide();
        }

        if($('#phoneNumber').val().trim().length == 0 || !$.isNumeric($('#phoneNumber').val())) {
            isValid = false;
            $('#errPhoneNumber').show();
        } else {
            $('#errPhoneNumber').hide();
        }

        if($('#email').val().trim().length == 0) {
            isValid = false;
            $('#errEmail').show();
        } else {
            $('#errEmail').hide();
        }

        if($('#street').val().trim().length == 0) {
            isValid = false;
            $('#errStreet').show();
        } else {
            $('#errStreet').hide();
        }

        if($('#city').val().trim().length == 0) {
            isValid = false;
            $('#errCity').show();
        } else {
            $('#errCity').hide();
        }

        if($('#state').val().trim().length == 0) {
            isValid = false;
            $('#errState').show();
        } else {
            $('#errState').hide();
        }

        if($('#zipCode').val().trim().length == 0 || !$.isNumeric($('#zipCode').val())) {
            isValid = false;
            $('#errZipCode').show();
        } else {
            $('#errZipCode').hide();
        }

        return isValid;
    }
});