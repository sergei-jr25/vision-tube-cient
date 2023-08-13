import { getUserPath } from '@/config/url.config'
import { TypeRootStore } from '@/store/store'
import { IUser } from '@/types/user.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../api/http'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Video', 'Profile'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootStore).auth.accessToken

			if (token) headers.set('Authorization', `Bearer ${token}`)

			return headers
		}
	}),
	endpoints: builder => ({
		getProfile: builder.query<IUser, any>({
			query: () => getUserPath('/profile'),
			providesTags: () => [{ type: 'Profile' }]
		}),
		subscribeToChannel: builder.mutation<boolean, number>({
			query: channelId => ({
				url: getUserPath(`/subscribe/${channelId}`),
				method: 'PATCH'
			}),
			invalidatesTags: () => [{ type: 'Profile' }]
		})
	})
})
