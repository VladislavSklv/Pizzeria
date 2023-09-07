import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IProduct {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com', 
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], void>({
            query: () => {
                return `/photos`
            },
        })
    })
})

export const { useGetAllProductsQuery } = mainApi