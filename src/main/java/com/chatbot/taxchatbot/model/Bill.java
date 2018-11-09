package com.chatbot.taxchatbot.model;

import java.util.Date;

public class Bill {
	
	private String billId;
	private String certNo;
    private String year;
    private String month;
    private Date payDate;
    private double grossIncome;
    private Exemption exemption;
    private double taxableIncome;
    private double taxDue;
    private double penalties;
    private double totalTaxDue;
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
	public double getGrossIncome() {
		return grossIncome;
	}
	public void setGrossIncome(double grossIncome) {
		this.grossIncome = grossIncome;
	}
	public Exemption getExemption() {
		return exemption;
	}
	public void setExemption(Exemption exemption) {
		this.exemption = exemption;
	}
	public double getTaxableIncome() {
		return taxableIncome;
	}
	public void setTaxableIncome(double taxableIncome) {
		this.taxableIncome = taxableIncome;
	}
	public double getTaxDue() {
		return taxDue;
	}
	public void setTaxDue(double taxDue) {
		this.taxDue = taxDue;
	}
	public double getPenalties() {
		return penalties;
	}
	public void setPenalties(double penalties) {
		this.penalties = penalties;
	}
	public double getTotalTaxDue() {
		return totalTaxDue;
	}
	public void setTotalTaxDue(double totalTaxDue) {
		this.totalTaxDue = totalTaxDue;
	}
    

}
