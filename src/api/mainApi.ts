import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type IAllPizzas = IPizza[]

export interface IPizza {
    id: number
    name: string
    veg: boolean
    price: number
    description: string
    quantity: number
    img: string
    sizeandcrust: Sizeandcrust[]
}

export interface Sizeandcrust {
    mediumPan: MediumPan[]
    mediumstuffedcrustcheesemax: Mediumstuffedcrustcheesemax[]
    mediumstuffedcrustvegkebab?: Mediumstuffedcrustvegkebab[]
    "medium stuffed crust-veg kebab"?: MediumStuffedCrustVegKebab[]
    mediumstuffedcrustchickenseekhkebab?: Mediumstuffedcrustchickenseekhkebab[]
    "medium stuffed crust kebab"?: MediumStuffedCrustKebab[]
}

export interface MediumPan {
    price: number
}

export interface Mediumstuffedcrustcheesemax {
    price: number
}

export interface Mediumstuffedcrustvegkebab {
    price: number
}

export interface MediumStuffedCrustVegKebab {
    price: number
}

export interface Mediumstuffedcrustchickenseekhkebab {
    price: number
}

export interface MediumStuffedCrustKebab {
    price: number
}

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pizza-and-desserts.p.rapidapi.com', 
        headers: {
            'X-RapidAPI-Key': '760aaa1569mshbf4adbea912de6ep1c826bjsn5030ae22f009',
            'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
        }
    }),
    endpoints: (builder) => ({
        getAllPizza: builder.query<IAllPizzas, string>({
            query: () => {
                return `/pizzas`
            },
        })
    })
})

export const { useGetAllPizzaQuery } = mainApi