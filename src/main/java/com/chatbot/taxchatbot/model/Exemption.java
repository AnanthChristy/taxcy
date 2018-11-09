package com.chatbot.taxchatbot.model;

public class Exemption {
	
	private String billId;
	private double exemptPR;
	private double exemptCorp;
	private double exemptLess;
	private double exemptGov;
	private double totalExempt;
	public String getBillId() {
		return billId;
	}
	public void setBillId(String billId) {
		this.billId = billId;
	}
	public double getExemptPR() {
		return exemptPR;
	}
	public void setExemptPR(double exemptPR) {
		this.exemptPR = exemptPR;
	}
	public double getExemptCorp() {
		return exemptCorp;
	}
	public void setExemptCorp(double exemptCorp) {
		this.exemptCorp = exemptCorp;
	}
	public double getExemptLess() {
		return exemptLess;
	}
	public void setExemptLess(double exemptLess) {
		this.exemptLess = exemptLess;
	}
	public double getExemptGov() {
		return exemptGov;
	}
	public void setExemptGov(double exemptGov) {
		this.exemptGov = exemptGov;
	}
	public double getTotalExempt() {
		return totalExempt;
	}
	public void setTotalExempt(double totalExempt) {
		this.totalExempt = totalExempt;
	}

}
