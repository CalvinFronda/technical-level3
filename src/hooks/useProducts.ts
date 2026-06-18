import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProduct } from '../services/api';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
};

export const useSingleProduct = (id: string) => {
    return useQuery({
        queryKey: ['product'],
        queryFn: () => fetchProduct(id),
    })
}