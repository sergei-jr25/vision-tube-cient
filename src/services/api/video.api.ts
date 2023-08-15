import { getVideoPath } from '@/config/url.config'
import { IVideo, IVideoDto } from '@/types/video.interface'
import { api } from './api'

export const videoApi = api.injectEndpoints({
	endpoints: builder => ({
		getVideosBySearchTerm: builder.query<IVideo[], string>({
			query: searchTerm => ({ url: getVideoPath(''), params: { searchTerm } })
		}),
		getVideoById: builder.query<IVideo, number>({
			query: videoId => ({ url: getVideoPath(`/${videoId}`) }),
			providesTags: (result, error, videoId) => [{ type: 'Video', id: videoId }]
		}),
		getVideoPrivate: builder.query<IVideo, number>({
			query: videoId => ({
				url: getVideoPath(`/get-private/${videoId}`)
			}),
			providesTags: (result, error, videoId) => [{ type: 'Video', videoId }]
		}),
		createVideo: builder.mutation<IVideo, void>({
			query: body => ({
				url: getVideoPath(''),
				method: 'POST'
			}),
			invalidatesTags: () => [{ type: 'Profile' }]
		}),
		updateVideo: builder.mutation<IVideo, IVideoDto>({
			query: ({ id, ...body }) => ({
				url: getVideoPath(`/${id}`),
				method: 'PUT',
				body
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Video', id },
				{ type: 'Profile' }
			]
		}),
		updateViews: builder.mutation<IVideo, number>({
			query: id => ({
				url: getVideoPath(`/update-views/${id}`),
				method: 'PUT'
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Video', id }]
		}),
		updateLikes: builder.mutation<IVideo, number>({
			query: id => ({
				url: getVideoPath(`/update-likes/${id}`),
				method: 'PUT'
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Video', id }]
		}),
		deleteVideo: builder.mutation<void, number>({
			query: id => ({
				url: getVideoPath(`/${id}`),
				method: 'DELETE'
			}),
			invalidatesTags: () => [{ type: 'Video' }, { type: 'Profile' }]
		})
	})
})
