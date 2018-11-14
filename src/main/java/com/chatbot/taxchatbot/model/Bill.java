package com.chatbot.taxchatbot.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "TAX_BILL")
public class Bill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "TAX_BILL_ID")
	private int billId;

	@Column(name = "CERT_NO")
	private String certNo;

	@Column(name = "YEAR")
    private String year;

	@Column(name = "MONTH")
    private String month;

	@Column(name = "PAY_DATE")
    private Date payDate;

	@Column(name = "GROSS_INCOME")
    private double grossIncome;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "EXEMPTION_D")
    private Exemption exemption;

	@Column(name = "TAXABLE_INCOME")
    private double taxableIncome;

	@Column(name = "TAX_DUE")
    private double taxDue;

	@Column(name = "PENALTY")
    private double penalties;

	@Column(name = "TOTAL_TAX_DUE")
    private double totalTaxDue;

	@Column(name = "STATUS")
	private String status;

	public int getBillId() {
		return billId;
	}

	public void setBillId(int billId) {
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
