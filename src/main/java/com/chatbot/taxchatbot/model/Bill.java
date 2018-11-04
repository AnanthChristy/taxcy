package com.chatbot.taxchatbot.model;

import java.util.Date;

public class Bill {
	
	private String billId;
	private String certNo;
    private String year;
    private String month;
    private Date payDate;
    private String grossIncome;
    private Exemption exemption;
    private String taxableIncome;
    private String taxDue;
    private String penalties;
    private String totalTaxDue;
	public String getBillId() {
		return billId;
	}
	public void setBillId(String billId) {
		this.billId = billId;
	}
	public String getCertNo() {
		return certNo;
	}
	public void setCertNo(String certNo) {
		this.certNo = certNo;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public Date getPayDate() {
		return payDate;
	}
	public void setPayDate(Date payDate) {
		this.payDate = payDate;
	}
	public String getGrossIncome() {
		return grossIncome;
	}
	public void setGrossIncome(String grossIncome) {
		this.grossIncome = grossIncome;
	}
	public Exemption getExemption() {
		return exemption;
	}
	public void setExemption(Exemption exemption) {
		this.exemption = exemption;
	}
	public String getTaxableIncome() {
		return taxableIncome;
	}
	public void setTaxableIncome(String taxableIncome) {
		this.taxableIncome = taxableIncome;
	}
	public String getTaxDue() {
		return taxDue;
	}
	public void setTaxDue(String taxDue) {
		this.taxDue = taxDue;
	}
	public String getPenalties() {
		return penalties;
	}
	public void setPenalties(String penalties) {
		this.penalties = penalties;
	}
	public String getTotalTaxDue() {
		return totalTaxDue;
	}
	public void setTotalTaxDue(String totalTaxDue) {
		this.totalTaxDue = totalTaxDue;
	}
    

}
