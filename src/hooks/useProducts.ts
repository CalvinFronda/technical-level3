import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProduct } from '../services/api';


export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
};

export const useProduct = (id: string) => {
    return useQuery({
        queryKey: ['product'],
        queryFn: () => fetchProduct(id),
    });
}
