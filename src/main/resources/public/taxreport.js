$(document).ready(function() {
    var clnt_tax = {};
    var clnt_data = {};

    clnt_data = testDataPersonal();
    clnt_tax = testDataTax();

    getPersonalInfo();

    $('#taxFilingYear').text(clnt_tax.year);
    $('#taxFilingMonth').text(clnt_tax.month);
    $('#payDate').text(format_date(clnt_tax.payDate));
    $('#grossIncome').text(format_figures(clnt_tax.grossIncome));
    $('#exemptPR').text(format_figures(clnt_tax.exemption.exemptPR));
    $('#taxableIncome').text(format_figures(clnt_tax.taxableIncome));
    $('#exemptCorp').text(format_figures(clnt_tax.exemption.exemptCorp));
    $('#taxDue').text(format_figures(clnt_tax.taxDue));
    $('#exemptLess').text(format_figures(clnt_tax.exemption.exemptLess));
    $('#penalties').text(format_figures(clnt_tax.penalties));
    $('#exemptGov').text(format_figures(clnt_tax.exemption.exemptGov));
    $('#totalTaxDue').text(format_figures(clnt_tax.totalTaxDue));
    $('#totalExempt').text(format_figures(clnt_tax.exemption.totalExempt));

    $('#certification-number-button').on("click", function() {
        var crtNum = $('#crtNum').val();
        if(crtNum.trim().length > 0) {
            window.location.replace("taxreport.html?cert=" + crtNum);
        }
    });


    function getPersonalInfo() {
        //https://taxcy.herokuapp.com/chatbot/getInfo/T1750254
        var param = window.location.search.substring(1);
        var certNo = param.substring(5, param.length);

        $.ajax({
            type: "GET",
            url: "https://taxcy.herokuapp.com/chatbot/getInfo/" + certNo,
            timeout: 300000,
            contentType: "application/json;charset=UTF-8",
            success: function(info) {
                console.log("TaxReport: Success!");
                console.log("Certification Number: " + info.certNo);
                console.log("Owner Name: " + info.ownerName);
                console.log("Phone Number: " + info.phoneNumber);
                console.log("Email: " + info.email);
                console.log("Street: " + info.propAdd.street);
                console.log("City: " + info.propAdd.city);
                console.log("State: " + info.propAdd.state);
                console.log("Zip Code: " + info.propAdd.zipCode);

                $('#certNumber').text(info.certNo);
                $('#ownerName').text(info.ownerName);
                $('#phoneNumber').text(info.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
                $('#email').text(info.email);
                $('#street').text(info.propAdd.street);
                $('#city').text(info.propAdd.city);
                $('#state').text(info.propAdd.state);
                $('#zipCode').text(info.propAdd.zipCode);
            },
            error: function() {
                console.log("TaxReport: Error communicating with API (chatbot/getInfo)");
            }
        });

    }

    function format_date(date_value) {
        var new_date = new Date(date_value);
        return (new_date.getMonth() + 1) + "/" + (new_date.getDate() + 1) + "/" + new_date.getFullYear();
    }

    function format_figures(num_val) {
        var formatted = "";
        var decFormat = num_val.toFixed(2);
        var num_lvl = decFormat.toString().split(".");
        num_lvl[0] = num_lvl[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        formatted = "$ " + num_lvl.join(".");
        return formatted;

    }

    function testDataPersonal() {
        var clnt_data = {};
        var clnt_address = {};

        clnt_address["street"] = "2711 N 1st St";
        clnt_address["city"] = "San Jose";
        clnt_address["state"] = "CA";
        clnt_address["zipCode"] = 95134;
    
        clnt_data["propAdd"] = clnt_address;
        clnt_data["ownerName"] = "Dr. Gregory O'Brien";
        clnt_data["phoneNumber"] = "2384983488";
        clnt_data["email"] = "info@itu.edu";

        return clnt_data;
    }

    function testDataTax() {
        var clnt_tax = {};
        var clnt_exempt = {};

        clnt_exempt["exemptPR"] = 20.56;
        clnt_exempt["exemptCorp"] = 12.56;
        clnt_exempt["exemptLess"] = 123.45;
        clnt_exempt["exemptGov"] = 54.83;
        clnt_exempt["totalExempt"] = 211.39999999999998;

        clnt_tax["billId"] = 2;
        clnt_tax["certNo"] = "T1750254";
        clnt_tax["year"] = "2018";
        clnt_tax["month"] = "MAY";
        clnt_tax["payDate"] = "2018-12-27T00:00:00.000+0000";
        clnt_tax["grossIncome"] = 210000;
        clnt_tax["exemption"] = clnt_exempt;
        clnt_tax["taxableIncome"] = 209788.6;
        clnt_tax["taxDue"] = 207690.714;
        clnt_tax["penalties"] = 0;
        clnt_tax["totalTaxDue"] = 0;
        clnt_tax["status"] = "In Progress";

        return clnt_tax;
    }
});