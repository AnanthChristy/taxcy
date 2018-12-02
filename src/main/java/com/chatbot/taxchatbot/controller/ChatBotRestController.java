package com.chatbot.taxchatbot.controller;


import com.chatbot.taxchatbot.dao.TaxServiceDao;
import com.chatbot.taxchatbot.model.Bill;
import com.chatbot.taxchatbot.model.Exemption;
import com.chatbot.taxchatbot.model.PropertyInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/chatbot")
public class ChatBotRestController {

    @Autowired
    private TaxServiceDao taxServiceDao;

    @RequestMapping(value = "/propertyInfo",
            method = RequestMethod.POST,
            produces = { "application/json" },
            consumes = { "application/json" })
    public PropertyInfo personalInformation(@RequestBody PropertyInfo propertyInfo) throws Exception {
        return taxServiceDao.savePropertyInfo(propertyInfo);
    }

    @RequestMapping(value = "/getAllPropertyInfo",
    produces = { "application/json" })
    public Collection<PropertyInfo> getAllPropertyInfo() {
        return taxServiceDao.getAllInfo();
    }

    @RequestMapping(value = "/getInfo/{certNo}", produces = {"application/json"})
    public PropertyInfo getInfo(@PathVariable("certNo") String certNo) {
        return taxServiceDao.getPropertyInfo(certNo);
    }

    @RequestMapping(value = "/calculation",
            method = RequestMethod.POST,
            produces = { "application/json" },
            consumes = { "application/json" })
    public Bill taxBill(@RequestBody Bill bill) throws Exception{
        Bill calculatedBill = calculateTaxBill(bill);
        calculatedBill.setStatus("In Progress");
        return taxServiceDao.saveTaxBillInfo(bill);
    }

    @RequestMapping(value = "/getTaxBillInfo/{certNo}", produces = {"application/json"})
    public List<Bill> getTaxBillInfo(@PathVariable("certNo") String certNo) {
        return taxServiceDao.getTaxBillInfo(certNo);
    }

    @RequestMapping(value = "/getTaxBillInfo/{certNo}/{year}", produces = {"application/json"})
    public List<Bill> getTaxBillInfoForYear(@PathVariable("certNo") String certNo, @PathVariable("year") String year) {
        return taxServiceDao.getTaxBillInfo(certNo, year);
    }

    @RequestMapping(value = "/getTaxBillInfo/{certNo}/{billId}", produces = {"application/json"})
    public Bill getTaxBillInfo(@PathVariable("certNo") String certNo, @PathVariable("billId") int billId) {
        return taxServiceDao.getTaxBillInfo(billId);
    }


    @RequestMapping("/submit/{billId}")
    public int submitTaxBill(@PathVariable("billId") int billId) {
        return taxServiceDao.updateStatusOfTaxBill("DONE", billId);
    }

    private Bill calculateTaxBill(Bill bill) {
        Exemption exemption = bill.getExemption();
        double exemptionPR= exemption.getExemptPR();
        double exemptionCorp= exemption.getExemptCorp();
        double exemptionLess= exemption.getExemptLess();
        double exemptionGov= exemption.getExemptGov();
        double totalExemption = exemptionPR + exemptionCorp +exemptionLess + exemptionGov;
        exemption.setTotalExempt(totalExemption);
        double grossIncome = bill.getGrossIncome();
        double taxableIncome = grossIncome - exemption.getTotalExempt() ;
        bill.setTaxableIncome(taxableIncome);
        bill.setTaxDue((taxableIncome * 0.08));
        bill.setTotalTaxDue((taxableIncome * 0.08));
        return bill;
    }
}
