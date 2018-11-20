package com.chatbot.taxchatbot.model;

import javax.persistence.*;

@Entity
@Table(name = "EXEMPTION")
public class Exemption {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "EXEMPTION_ID")
	private int exemptionId;

	@Column(name = "EXEMPT_PR")
	private double exemptPR;

	@Column(name = "EXEMPT_CORP")
	private double exemptCorp;

	@Column(name = "EXEMPT_LESS")
	private double exemptLess;

	@Column(name = "EXEMPT_GOV")
	private double exemptGov;

	@Column(name = "TOTAL_EXEMPT")
	private double totalExempt;


	public int getExemptionId() {
		return exemptionId;
	}

	public void setExemptionId(int exemptionId) {
		this.exemptionId = exemptionId;
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
