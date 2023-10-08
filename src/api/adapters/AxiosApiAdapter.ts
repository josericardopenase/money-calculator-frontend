import { ApiPort } from "../core/infraestructure/ApiPort";
import { AxiosInstance } from 'axios'

export class AxiosApiAdapter implements ApiPort{

    constructor(private readonly axios: AxiosInstance) {
    }

    get<T>(url: string): Promise<T> {
        return this.axios.get<T>(url).then((response: { data: T; }) => response.data);
    }

    post<T>(url: string, data: any): Promise<T> {
        return this.axios.post(url, data).then((response : {data : T}) => response.data);
    }

    put<T>(url: string, data: any): Promise<T> {
        return this.axios.put(url, data).then((response : {data : T}) => response.data);
    }

    delete<T>(url: string): Promise<T> {
        return this.axios.delete(url).then((response : {data : T}) => response.data);
    }
}