$(document).ready(function() {
    var clnt_tax = {};
    var clnt_data = {};

    var param = window.location.search.substring(1);
    var certNo = param.substring(5, param.length);

    clnt_data = testDataPersonal();
    clnt_tax = testDataTax();

    $('#ownerName').text(clnt_data.ownerName);
    $('#certNumber').text(certNo);
    $('#phoneNumber').text(clnt_data.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    $('#email').text(clnt_data.email);
    $('#street').text(clnt_data.propAdd.street);
    $('#city').text(clnt_data.propAdd.city);
    $('#state').text(clnt_data.propAdd.state);
    $('#zipCode').text(clnt_data.propAdd.zipCode);

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

        $.get("https://taxcy.herokuapp.com/chatbot/getAllPropertyInfo/" + certNo, function(data, status) {
            alert("Data!");
            alert(data);
            alert("Status: " + status);
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