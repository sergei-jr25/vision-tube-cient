import { http } from '@/api/http'
import { getVideoPath } from '@/config/url.config'
import { IVideo } from '@/types/video.interface'

export const VideoServer = {
	async getAll() {
		return await http.get<IVideo[]>(getVideoPath())
	},
	async getMostPopular() {
		return await http.get<IVideo>(getVideoPath('/most-popular'))
	}
}
