import { IVideo } from '@/types/video.interface'

export interface IVideoItem {
	video: IVideo
	removeHandler?: (videoId: number) => void
	isUpdateLink?: boolean
	isSmall?: boolean
}
