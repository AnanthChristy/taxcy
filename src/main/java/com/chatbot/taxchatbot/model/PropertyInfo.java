package com.chatbot.taxchatbot.model;

import javax.persistence.*;

@Entity
@Table(name = "PROPERTY_INFO")
public class PropertyInfo {

    @Id
    @Column(name = "CERT_NO")
    private String certNo;

    @Column(name = "OWNER_NAME")
    private String ownerName;

    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "ADDRESS_ID")
    private Address propAdd;

    @Column(name = "EMAIL")
    private String email;

    public String getCertNo() {
        return certNo;
    }

    public void setCertNo(String certNo) {
        this.certNo = certNo;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNo(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Address getPropAdd() {
        return propAdd;
    }

    public void setPropAdd(Address propAdd) {
        this.propAdd = propAdd;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
