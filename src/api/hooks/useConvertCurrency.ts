import { useMutation } from 'react-query';
import { CurrencyService } from '../core/application/CurrencyService';
import { apiAdapter } from './dependencies';

interface ConvertCurrencyParams {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
}

const useConvertCurrency = () => {
    const convertCurrencyMutation = useMutation(
        async ({ fromCurrency, toCurrency, amount }: ConvertCurrencyParams) => {
            const response = await new CurrencyService(apiAdapter).convert(fromCurrency, toCurrency, amount);
            return response.result;
        }
    );

    return convertCurrencyMutation;
};

export default useConvertCurrency;
