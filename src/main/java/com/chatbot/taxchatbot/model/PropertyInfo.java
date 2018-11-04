package com.chatbot.taxchatbot.model;

public class PropertyInfo {

    private String certNo;
    private String ownerName;
    private String phoneNumber;
    private Address propAdd;
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
