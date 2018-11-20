package com.chatbot.taxchatbot.dao.repository;

import com.chatbot.taxchatbot.model.PropertyInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<PropertyInfo, String> {

}
