package com.chatbot.taxchatbot.controller;


import com.chatbot.taxchatbot.dao.TaxServiceDao;
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

    @RequestMapping(value = "/getAllInfo",
    produces = { "application/json" })
    public Collection<PropertyInfo> getAllInfo() {
        return taxServiceDao.getAllInfo();
    }

    @RequestMapping(value = "/getInfo/{certNo}", produces = {"application/json"})
    public PropertyInfo getInfo(@PathVariable("certNo") String certNo) {
        return taxServiceDao.getPropertyInfo(certNo);
    }

    @RequestMapping("/income")
    public String income() {

        return "Your Income";
    }

    @RequestMapping("/taxreturn")
    public String taxReturn() {
        return "Your Tax Return";
    }
}
