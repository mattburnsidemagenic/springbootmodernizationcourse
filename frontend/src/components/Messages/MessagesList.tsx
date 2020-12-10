import React from 'react';
import SbmApiClient from '../../services/api/SbmApiClient';
import MessageCreateRequest from './MessageCreateRequest';
import { MessageEntry } from './MessageEntry';
import MessageResponse from "./MessageResponse";

interface Props {}
interface State {
    messagesList: MessageResponse[] | null;
    error: any | null;
    newMessageText: string;
}

export default class MessagesList extends React.Component<Props, State> {
    client: SbmApiClient = new SbmApiClient();
    constructor(props: Props) {
        super(props);
        this.state = {messagesList: null, error: null, newMessageText : ''};
    }
    
    componentDidMount() {
        this.client.getMessages().then(response => {
            this.setState({messagesList: response.data})
        }).catch(err => {
            this.setState({error: err});
            console.log(`ERROR! ${err}`);
        });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.newMessageText);
        this.client.createNewMessageAndGetList(new MessageCreateRequest(this.state.newMessageText))
        .then(response => {
            this.setState({messagesList: response.data, newMessageText: ''})
        });
    }

    messageChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({newMessageText: event.target.value});
    }

    

    render () {
        if(this.state.error != null) {
            return <div>{this.state.error.toString()}</div>;
        } else if(this.state.messagesList == null) {
            return <div>Loading...</div>;
        } 
        // return (<div>
        //     {this.state.messagesList.map((value, index) => <div key={index}>{value.messageText} {value.createdDate.toLocaleDateString()}</div>)}
        // </div>)
        return <div>
            {this.state.messagesList.map((value, index) => <MessageEntry message={value}></MessageEntry>)}
            <div>
                <fieldset><legend>Create a new one</legend>
                <form onSubmit={this.handleSubmit}>
                    <textarea style={{width: 500}} rows={5} onChange={this.messageChanged} value={this.state.newMessageText}></textarea><br/>
                    <input type="submit" disabled={this.state.newMessageText.length < 3}></input>
                    </form>
                    </fieldset>
            </div>
        </div>
    }
}