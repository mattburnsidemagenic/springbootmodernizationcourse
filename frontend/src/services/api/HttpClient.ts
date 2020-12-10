import axios, { AxiosInstance } from "axios";

abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseUrl: string) {
        this.instance = axios.create({baseURL: baseUrl});
    }
}

export default HttpClient;