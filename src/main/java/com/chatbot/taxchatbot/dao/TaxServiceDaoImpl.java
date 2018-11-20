package com.chatbot.taxchatbot.dao;

import com.chatbot.taxchatbot.dao.repository.PropertyRepository;
import com.chatbot.taxchatbot.dao.repository.TaxBillRepository;
import com.chatbot.taxchatbot.model.Bill;
import com.chatbot.taxchatbot.model.PropertyInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@Repository
public class TaxServiceDaoImpl implements TaxServiceDao {

    HashMap<String,PropertyInfo> listOfInfo = new HashMap<>();

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private TaxBillRepository taxBillRepository;

    @Override
    public PropertyInfo savePropertyInfo(PropertyInfo propertyInfo) {
        String certNo = generateUUID();
        propertyInfo.setCertNo(certNo);
        propertyRepository.save(propertyInfo);
        return propertyInfo;
    }

    @Override
    public PropertyInfo getPropertyInfo(String certNo) {
        return propertyRepository.getOne(certNo);
    }

    @Override
    public Collection<PropertyInfo> getAllInfo() {
        return listOfInfo.values();
    }


    private String generateUUID(){
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }

    public Bill saveTaxBillInfo(Bill taxBill){
        //listOfTaxBilInfo.put(taxBill.getCertNo(), taxBill);
        return taxBillRepository.save(taxBill);

    }
    public List<Bill> getTaxBillInfo(String certNo) {
        return taxBillRepository.findByCertNo(certNo);
    }

    @Override
    public List<Bill> getTaxBillInfo(String certNo, String year) {
        return taxBillRepository.findByCertNoAndYear(certNo, year);
    }

    @Override
    public List<Bill> getTaxBillInfo(String certNo, String year, String month) {
        return taxBillRepository.findByCertNoAndYearAndMonth(certNo, year, month);
    }

    @Override
    public List<Bill> getTaxBillInfoByStatus(String certNo, String status) {
        return taxBillRepository.findByCertNoAndStatus(certNo, status);
    }

    @Override
    public int updateStatusOfTaxBill(String status, int billId) {
        return taxBillRepository.updateStatus(status, billId);
    }

    @Override
    public Bill getTaxBillInfo(int billId) {
        return taxBillRepository.getOne(billId);
    }


}
