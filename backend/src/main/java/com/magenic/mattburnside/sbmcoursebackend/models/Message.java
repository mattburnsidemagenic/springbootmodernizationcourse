package com.magenic.mattburnside.sbmcoursebackend.models;

import java.util.Date;

public class Message {
    private String messageText;
    private Date createdDate = new Date();

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public Date getCreatedDate() {
        return createdDate;
    }
}
