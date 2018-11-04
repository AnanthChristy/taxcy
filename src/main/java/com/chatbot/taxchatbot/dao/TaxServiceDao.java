package com.chatbot.taxchatbot.dao;

import com.chatbot.taxchatbot.model.PropertyInfo;

import java.util.Collection;


public interface TaxServiceDao {

    PropertyInfo savePropertyInfo(PropertyInfo propertyInfo);

    PropertyInfo getPropertyInfo(String certNo);

    Collection<PropertyInfo> getAllInfo();
}
