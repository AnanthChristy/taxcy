package com.chatbot.taxchatbot.controller;


import com.chatbot.taxchatbot.dao.TaxServiceDao;
import com.chatbot.taxchatbot.model.Bill;
import com.chatbot.taxchatbot.model.Exemption;
import com.chatbot.taxchatbot.model.PropertyInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/chatbot")
public class ChatBotRestController {

    @Autowired
    private TaxServiceDao taxServiceDao;

    @RequestMapping(value = "/personalInfo",
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
        bill.setTaxDue(taxableIncome - (taxableIncome * 0.01));
        return taxServiceDao.saveTaxBillInfo(bill);
    }

    @RequestMapping(value = "/getAllTaxBillInfo", produces= {"application/json"})
    public Collection<Bill> getAllTaxBillInfo(){return taxServiceDao.getAllTaxBillInfo();}

    @RequestMapping(value = "/getTaxBillInfo/{certNo}", produces = {"application/json"})
    public Bill getTaxBillInfo(@PathVariable("certNo") String certNo) {
        return taxServiceDao.getTaxBillInfo(certNo);
    }

    @RequestMapping("/taxreturn")
    public String taxReturn() {
        return "Your Tax Return";
    }
}
