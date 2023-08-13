import { useEffect, useRef, useState } from 'react'
import { IVideoElement } from './video-player.interface'

export const usePlayer = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isShowButton, setIsShowButton] = useState(true)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)
	const [volume, setVolume] = useState(0.5)

	useEffect(() => {
		const originalDuration = videoRef.current?.duration

		if (originalDuration) setVideoTime(originalDuration)
	}, [videoRef.current?.duration])

	const toggleVideo = () => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)

			// setTimeout(() => {
			// 	setIsShowButton(true)
			// }, 1500)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}

	useEffect(() => {
		const handleVideoEnd = () => {
			setIsPlaying(false)
			console.log()
		}

		videoRef.current?.addEventListener('ended', handleVideoEnd)

		return () => {
			videoRef.current?.removeEventListener('ended', handleVideoEnd)
		}
	}, [])

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 15
	}
	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 15
	}

	const fullScreen = () => {
		const video = videoRef.current
		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullScreen) {
			video.msRequestFullScreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen()
		}
	}
	useEffect(() => {
		const video = videoRef.current

		if (video) {
			video.volume = volume // Установка начальной громкости в 0
		}
	}, [videoRef.current, volume])
	const volumeChange = (event: any) => {
		const newVolume = parseFloat(event.target.value)
		setVolume(newVolume)
		videoRef?.current && (videoRef.current.volume = newVolume)
	}

	useEffect(() => {
		const video = videoRef.current
		if (!video) return
		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((currentTime / videoTime) * 100)
		}

		videoRef.current?.addEventListener('timeupdate', updateProgress)

		return () => {
			videoRef.current?.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoRef.current?.currentTime, videoTime])

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const focusedElement = document.activeElement as HTMLElement

			if (
				videoRef.current &&
				focusedElement !== videoRef.current &&
				focusedElement.tagName !== 'INPUT' &&
				focusedElement.tagName !== 'TEXTAREA'
			) {
				switch (e.key) {
					case 'ArrowRight':
						forward()
						break
					case 'ArrowLeft':
						revert()
						break
					case ' ':
						e.preventDefault()
						toggleVideo()
						break
					case 'f':
						// e.preventDefault()
						fullScreen()
						break
					default:
						break
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [toggleVideo, forward, revert, toggleVideo, fullScreen])

	return {
		videoRef,
		video: { progress, isPlaying, currentTime, videoTime, volume },
		actions: {
			toggleVideo,
			forward,
			revert,
			fullScreen,
			volumeChange
		}
	}
}
