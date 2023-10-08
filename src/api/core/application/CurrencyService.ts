import { ApiPort } from "../infraestructure/ApiPort";

export class CurrencyService{
    constructor(private readonly apiAdapter: ApiPort) {
    }

    async getCurrencies(){
        return this.apiAdapter.get<ApiResponse<Record<string, string>>>('/currencies/');
    }
    
    async getConversions(){
        return this.apiAdapter.get<ApiPaginatedResponse<CurrencyConversion[]>>('/currencies/conversions/');
    }

    async convert(from: string, to: string, quantity: number){
        return this.apiAdapter.get<ApiResponse<CurrencyConversion>>(`/currencies/${from}/convert/${to}/amount/${quantity}/`);
    }

    async getCurrencyValueChart(from: string, to: string){
        return this.apiAdapter.get<ApiResponse<number[]>>(`/currencies/${from}/chart/${to}/`);
    }
}