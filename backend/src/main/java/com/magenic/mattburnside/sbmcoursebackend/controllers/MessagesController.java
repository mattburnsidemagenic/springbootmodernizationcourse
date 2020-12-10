package com.magenic.mattburnside.sbmcoursebackend.controllers;

import com.magenic.mattburnside.sbmcoursebackend.models.Message;
import com.magenic.mattburnside.sbmcoursebackend.models.MessageCreateRequest;
import org.apache.commons.collections4.queue.CircularFifoQueue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Queue;
import java.util.stream.Collectors;

@RestController
public class MessagesController {
    static Queue<Message> MESSAGES = new CircularFifoQueue<Message>(10);
    static {
        for(int messageCounter = 0; messageCounter < 10; messageCounter++) {
            Message message = new Message();
            message.setMessageText("Message " + messageCounter);
            MESSAGES.add(message);
        }
    }

    @GetMapping("/messages")
    List<Message> getMessages() {
        return new ArrayList<>(MESSAGES);
    }

    @PostMapping("/messages")
    List<Message> addNewMessageAndReturnAll(@RequestBody MessageCreateRequest request) {
        Message newMessage = new Message();
        newMessage.setMessageText(request.getMessageText());
        MESSAGES.add(newMessage);
        return new ArrayList<>(MESSAGES);
    }


}
