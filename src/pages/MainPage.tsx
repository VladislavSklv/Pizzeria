import React from 'react';
import { useGetAllProductsQuery } from '../api/mainApi';
import Grid from '@mui/material/Unstable_Grid2'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MainPage: React.FC = () => {
    const {data: products, isLoading, isError, isFetching} = useGetAllProductsQuery()

    return (
        <div>
            {products !== undefined 
                ?
                    <Grid alignContent={'center'} justifyContent={'center'} pt={3} container spacing={3}>
                        {
                            products.map(product => 
                                <Grid key={product.id}>
                                    <Card sx={{width: 250}}>
                                        <CardMedia sx={{height: 250, width: 250}} image={product.thumbnailUrl} title={product.title}/>
                                        <CardContent>
                                            <Typography sx={{textTransform: 'capitalize'}} color={'text.secondary'}>{product.title}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        }
                    </Grid>
                :
                    <div>Error</div>
            }
        </div>
    );
};

export default MainPage;