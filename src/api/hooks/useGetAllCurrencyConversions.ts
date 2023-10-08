import axios from 'axios';

import { useQuery, UseQueryOptions } from 'react-query';
import { CurrencyService } from '../core/application/CurrencyService';
import { apiAdapter } from './dependencies';

const useGetAllCurrencyConversions = (reactQueryConfig?: UseQueryOptions) => {
    return useQuery('conversions', async () => {
        const response = await new CurrencyService(apiAdapter).getConversions();
        return response.result;
    }, reactQueryConfig as any);
};


export default useGetAllCurrencyConversions;