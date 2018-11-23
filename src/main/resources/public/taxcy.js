$(document).ready(function() {
    //cert='T1564679'
    if($('#page').val() == 'detail') {
        var param = window.location.search.substring(1);
        certNo = param.substring(8, param.length - 3);
        $('#CertNumber').text(certNo);
    } else if($('#page').val() == 'form') {
        var certNo = getCertNo();
    }

    $('.next-link').on("click", function(){
        var data = {};
        var address = {};

        address["street"] = $('#street').val();
        address["city"] = $('#city').val();
        address["state"] = $('#state').val();
        address["zipCode"] = $('#zipCode').val();

        data["propAdd"] = address;
        data["ownerName"] = $('#title').val() + '. ' + $('#firstname').val() + ' ' + $('#middle-initial').val() + '. ' + $('#lastname').val();
        data["phoneNumber"] = $('#phoneNumber').val();
        data["email"] = $('#email').val();

        /*
        var certNo = "T1564679";
        window.location.replace("detail.html?cert='" + certNo + "'");
        */

        $.ajax({
            type: "POST",
            url: "https://taxcy.herokuapp.com/chatbot/propertyInfo",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            dataType: "json",
            success: function(info) {
                alert("Certificate Number: " + info.certNo + ', Name: ' + info.ownerName + ', Street: ' + info.propAdd.street + ', City: ' + info.propAdd.city + ', State: ' + info.propAdd.state + ', ZipCode: ' + info.propAdd.zipCode + ', Phone Number: ' + info.phoneNumber + ', Email: ' + info.email);

                window.location.replace("detail.html?cert='" + info.certNo + "'");
            },
            error: function(jqXHR, status) {
                alert('Error! ' + status.code);
            }
        });
    });

    $('.submit-button').on("click", function(){
        var data = {};
        var exempt = {};
        var file_date = new Date($('#pay-date').val());
        var file_month = file_date.getMonth() + 1;

        exempt["billId"] = $('#bill-id').val();
        exempt["exemptPR"] = $('#exempt-pr').val();
        exempt["exemptCorp"] = $('#exempt-corp').val();
        exempt["exemptLess"] = $('#exempt-less').val();
        exempt["exemptGov"] = $('#exempt-gov').val();
        exempt["totalExempt"] = $('#total-exempt').val();

        data["certNo"] = certNo;
        data["year"] = file_date.getFullYear();
        data["month"] = getMonth(file_month);
        data["payDate"] = $('#pay-date').val();
        data["grossIncome"] = $('#gross-income').val();
        data["exemption"] = exempt;
        data["penalties"] = $('#penalties').val();

        /*
        alert("Bill ID: " + data.billId + ', Cert No: ' + data.certNo + ', Year: ' + data.year + ', Month: ' + data.month + ', Pay Date: ' + data.payDate + ', Gross Income: ' + data.grossIncome + ', Exemption Bill ID: ' + data.exemption.billId + ', Exempt PR: ' + data.exemption.exemptPR + ', Exempt Corp: ' + data.exemption.exemptCorp + ', Exempt Less: ' + data.exemption.exemptLess + ', Exempt Gov: ' + data.exemption.exemptGov + ', Total Exempt: ' + data.exemption.totalExempt + ', Taxable Income: ' + data.taxableIncome + ', Tax Due: ' + data.taxDue + ', Penalties: ' + data.penalties + ', Total Tax Due: ' + data.totalTaxDue);

        window.location.replace("form.html?cert='" + data.certNo + "'");
        */

        $.ajax({
            type: "POST",
            url: "https://taxcy.herokuapp.com/chatbot/calculation",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            dataType: "json",
            success: function(info) {
                alert("Bill ID: " + info.billId + ', Cert No: ' + info.certNo + ', Year: ' + info.year + ', Month: ' + info.month + ', Pay Date: ' + info.payDate + ', Gross Income: ' + info.grossIncome + ', Exemption Bill ID: ' + info.exemption.billId + ', Exempt PR: ' + info.exemption.exemptPR + ', Exempt Corp: ' + info.exemption.exemptCorp + ', Exempt Less: ' + info.exemption.exemptLess + ', Exempt Gov: ' + info.exemption.exemptGov + ', Total Exempt: ' + info.exemption.totalExempt + ', Taxable Income: ' + info.taxableIncome + ', Tax Due: ' + info.taxDue + ', Penalties: ' + info.penalties + ', Total Tax Due: ' + info.totalTaxDue);

                window.location.replace("form.html?cert='" + info.certNo + "'");
            },
            error: function(jqXHR, status) {
                alert('Error! ' + status.code);
            }
        });
    });

    function getCertNo() {
        var param = window.location.search.substring(1);
        certNo = param.substring(8, param.length - 3);
        return certNo;
    }

    function getMonth(numeric_month) {
        switch(numeric_month) {
            case 1:
                return "January";
            case 2:
                return "February";
            case 3:
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
        }
    }
});