import React from 'react';
import { useGetAllProductsQuery } from '../api/mainApi';

const PizzasPage: React.FC = () => {
    const {data: products, isLoading, isError, isFetching} = useGetAllProductsQuery()

    return (
        <div>
            {products !== undefined 
                ?
                    products.map(product => 
                        <div>{product.title}</div>
                    )
                :
                    <div>Error</div>
            }
        </div>
    );
};

export default PizzasPage;