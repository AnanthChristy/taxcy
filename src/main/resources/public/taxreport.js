$(document).ready(function() {
    var param = window.location.search.substring(1);
    var certNo = param.substring(5, param.length);

    getPersonalInfo(certNo);
    getTaxInfo(certNo);

    $('#certification-number-button').on("click", function() {
        var crtNum = $('#crtNum').val();
        if(crtNum.trim().length > 0) {
            window.location.replace("taxreport.html?cert=" + crtNum);
        }
    });

    function getPersonalInfo(certificationNumber) {
        //https://taxcy.herokuapp.com/chatbot/getInfo/T1750254
        $.ajax({
            type: "GET",
            url: "https://taxcy.herokuapp.com/chatbot/getInfo/" + certificationNumber,
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

    function getTaxInfo(certificationNumber) {
        //https://taxcy.herokuapp.com/chatbot/getTaxBillInfo/T1995405
        $.ajax({
            type: "GET",
            url: "https://taxcy.herokuapp.com/chatbot/getTaxBillInfo/" + certificationNumber,
            timeout: 300000,
            contentType: "application/json;charset=UTF-8",
            success: function(info) {
                $('#taxFilingYear').text(info.year);
                $('#taxFilingMonth').text(info.month);
                $('#payDate').text(format_date(info.payDate));
                $('#grossIncome').text(format_figures(info.grossIncome));
                $('#exemptPR').text(format_figures(info.exemption.exemptPR));
                $('#taxableIncome').text(format_figures(info.taxableIncome));
                $('#exemptCorp').text(format_figures(info.exemption.exemptCorp));
                $('#taxDue').text(format_figures(info.taxDue));
                $('#exemptLess').text(format_figures(info.exemption.exemptLess));
                $('#penalties').text(format_figures(info.penalties));
                $('#exemptGov').text(format_figures(info.exemption.exemptGov));
                $('#totalTaxDue').text(format_figures(info.totalTaxDue));
                $('#totalExempt').text(format_figures(info.exemption.totalExempt));
            },
            error: function() {
                console.log("TaxReport: Error communicating with API (chatbot/getTaxBillInfo)");
            }
        });
    }

    function format_date(date_value) {
        console.log("Origin date: " + date_value);
        var new_date = new Date(date_value);
        console.log("New date: " + new_date);
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
});