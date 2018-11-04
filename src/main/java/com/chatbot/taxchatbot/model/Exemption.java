package com.chatbot.taxchatbot.model;

public class Exemption {
	
	private String billId;
	private String exemptPR;
	private String exemptCorp;
	private String exemptLess;
	private String exemptGov;
	private String totalExempt;
	public String getBillId() {
		return billId;
	}
	public void setBillId(String billId) {
		this.billId = billId;
	}
	public String getExemptPR() {
		return exemptPR;
	}
	public void setExemptPR(String exemptPR) {
		this.exemptPR = exemptPR;
	}
	public String getExemptCorp() {
		return exemptCorp;
	}
	public void setExemptCorp(String exemptCorp) {
		this.exemptCorp = exemptCorp;
	}
	public String getExemptLess() {
		return exemptLess;
	}
	public void setExemptLess(String exemptLess) {
		this.exemptLess = exemptLess;
	}
	public String getExemptGov() {
		return exemptGov;
	}
	public void setExemptGov(String exemptGov) {
		this.exemptGov = exemptGov;
	}
	public String getTotalExempt() {
		return totalExempt;
	}
	public void setTotalExempt(String totalExempt) {
		this.totalExempt = totalExempt;
	}

}
