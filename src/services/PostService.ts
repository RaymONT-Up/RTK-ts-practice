import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IPost} from "../models/IPost";

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: build => ({

        // query для получения данных
        // mutation для изменения данных
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {_limit: limit}
            })
        })
    })

})

