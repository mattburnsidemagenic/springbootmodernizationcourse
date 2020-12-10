import MessageCreateRequest from '../../components/Messages/MessageCreateRequest';
import MessageResponse from '../../components/Messages/MessageResponse';
import HttpClient from './HttpClient';
export default class SbmApiClient extends HttpClient {

    public constructor() {
        super(process.env.REACT_APP_SBM_API_ROOT_URL ?? 'http://nosuchhost');
    }
    public getMessages = () => this.instance.get<MessageResponse[]>('/messages');

    public createNewMessageAndGetList = (req: MessageCreateRequest) => {
        return this.instance.post<MessageResponse[]>('/messages', req);
    }
}