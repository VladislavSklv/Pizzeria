import React from 'react';
import { useGetAllProductsQuery } from '../api/mainApi';

const MainPage: React.FC = () => {
    const {data: products, isLoading, isError, isFetching} = useGetAllProductsQuery()

    return (
        <div>
            {products !== undefined 
                ?
                    products.map(product => 
                        <div key={product.id}>
                            <div><img src={product.thumbnailUrl} alt="thumbnail" /></div>
                            <div>{product.title}</div>
                        </div>
                    )
                :
                    <div>Error</div>
            }
        </div>
    );
};

export default MainPage;