import { getCommentPath } from '@/config/url.config'
import { IComment, ICommentDto } from '@/types/comment.interface'
import { api } from './api'

export const commentApi = api.injectEndpoints({
	endpoints: builder => ({
		createComment: builder.mutation<IComment, ICommentDto>({
			query: body => ({
				url: getCommentPath(''),
				method: 'POST',
				body: body
			}),
			invalidatesTags: (result, error, { videoId }) => [
				{ type: 'Video', id: videoId }
			]
		})
	})
})
