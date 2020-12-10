import React from 'react';
import MessageResponse from "./MessageResponse";

interface MessageEntryProps {
    message: MessageResponse
}


export const MessageEntry: React.FunctionComponent<MessageEntryProps> = (props) => {
    return (
        <div>
            <div className="messageText">{props.message.messageText}</div>
            <div className="messageDate">Date: {props.message.createdDate.valueOf()}</div>
        </div>
    )
}