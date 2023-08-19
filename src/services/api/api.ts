import { getUserPath } from '@/config/url.config'
import { TypeRootStore } from '@/store/store'
import { IProfileDto, IUser } from '@/types/user.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Video', 'Profile'],
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.APP_URL,
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
		editProfile: builder.mutation<IUser, IProfileDto>({
			query: ({ id, ...body }) => ({
				url: getUserPath(`/${id}`),
				method: 'PUT',
				body: body
			}),
			invalidatesTags: () => [{ type: 'Profile' }]
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
