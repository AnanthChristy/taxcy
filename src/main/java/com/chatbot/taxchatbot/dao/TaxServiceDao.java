package com.chatbot.taxchatbot.dao;

import com.chatbot.taxchatbot.model.Bill;
import com.chatbot.taxchatbot.model.PropertyInfo;

import java.util.Collection;
import java.util.List;


public interface TaxServiceDao {

    PropertyInfo savePropertyInfo(PropertyInfo propertyInfo);

    PropertyInfo getPropertyInfo(String certNo);

    Collection<PropertyInfo> getAllInfo();

    Bill saveTaxBillInfo(Bill taxBill);

    List<Bill> getTaxBillInfo(String certNo);

    List<Bill> getTaxBillInfo(String certNo, String year);

    List<Bill> getTaxBillInfo(String certNo, String year, String month);

    List<Bill> getTaxBillInfoByStatus(String certNo, String status);

    int updateStatusOfTaxBill(String status, int billId);

    Bill getTaxBillInfo(int billId);

}
