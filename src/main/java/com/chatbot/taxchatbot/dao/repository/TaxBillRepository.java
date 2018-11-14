package com.chatbot.taxchatbot.dao.repository;

import com.chatbot.taxchatbot.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface TaxBillRepository extends JpaRepository<Bill, Integer> {

     List<Bill> findByCertNo(String certNo);

     List<Bill> findByCertNoAndYear(String certNo, String year);

     List<Bill> findByCertNoAndYearAndMonth(String certNo, String year, String month);

    List<Bill> findByCertNoAndStatus(String certNo, String status);

    @Modifying
    @Transactional
    @Query("update Bill t set t.status = :status where t.billId = :billId")
    int updateStatus(@Param("status") String status, @Param("billId") int billId);
}
