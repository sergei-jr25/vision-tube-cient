export interface IVideoPlayer {
	videoSource: string
	id: number
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullScreen?: () => void
	webkitRequestFullScreen?: () => void
	mozRequestFullScreen?: () => void
}
