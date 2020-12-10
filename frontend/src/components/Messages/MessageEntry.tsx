import React from 'react';
import MessageResponse from "./MessageResponse";

interface MessageEntryProps {
    message: MessageResponse
    index: number
}


export const MessageEntry: React.FunctionComponent<MessageEntryProps> = (props) => {
    return (
        <div key={props.index} style={{border: '1px solid black', padding: "10px", margin: "5px"}}>
            <div className="messageText">{props.message.messageText}</div>
            <div className="messageDate">Date: {props.message.createdDate.valueOf()}</div>
        </div>
    )
}