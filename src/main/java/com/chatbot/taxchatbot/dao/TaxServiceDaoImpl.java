package com.chatbot.taxchatbot.dao;

import com.chatbot.taxchatbot.model.Bill;
import com.chatbot.taxchatbot.model.PropertyInfo;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.UUID;

@Service
public class TaxServiceDaoImpl implements TaxServiceDao {

    HashMap<String,PropertyInfo> listOfInfo = new HashMap<>();

    @Override
    public PropertyInfo savePropertyInfo(PropertyInfo propertyInfo) {
        String certNo = generateUUID();
        propertyInfo.setCertNo(certNo);
        listOfInfo.put(propertyInfo.getCertNo(), propertyInfo);
        return propertyInfo;
    }

    @Override
    public PropertyInfo getPropertyInfo(String certNo) {
        return listOfInfo.get(certNo);
    }

    @Override
    public Collection<PropertyInfo> getAllInfo() {
        return listOfInfo.values();
    }


    private String generateUUID(){
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }

    HashMap<String,Bill> listOfTaxBilInfo = new HashMap<>();

    public Bill saveTaxBillInfo(Bill taxBill){
        listOfTaxBilInfo.put(taxBill.getCertNo(), taxBill);
        return taxBill;

    }
    public Bill getTaxBillInfo(String certNo) {
        return listOfTaxBilInfo.get(certNo);
    }
    public Collection<Bill> getAllTaxBillInfo() {
        return listOfTaxBilInfo.values();
    }





}
