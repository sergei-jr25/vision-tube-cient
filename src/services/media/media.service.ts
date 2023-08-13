import { http } from '@/api/http'
import { IMediaResponse } from './media.interface'

export const MediaServer = {
	async upload(
		media: FormData,
		folder?: string,
		setValue?: (val: number) => void
	) {
		return http.post<IMediaResponse>('/file', media, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: progressEvent => {
				if (setValue) {
					const progress =
						(progressEvent.loaded / (progressEvent.total || 1)) * 100
					setValue(Math.ceil(progress))
				}
			}
		})
	}
}
