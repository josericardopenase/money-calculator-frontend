import { useQuery, QueryOptions, UseQueryOptions } from 'react-query';
import axios from 'axios';
import { CurrencyService } from '../core/application/CurrencyService';
import { apiAdapter } from './dependencies';

const useGetSupportedCurrencies = (reactQueryConfig?: UseQueryOptions) => {
    return useQuery('supportedCurrencies', async () => {
        const response = await new CurrencyService(apiAdapter).getCurrencies();
        return response.result;
    }, reactQueryConfig as any);
};


export default useGetSupportedCurrencies;
