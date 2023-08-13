import { FC, useEffect } from 'react'
import { BsFullscreen } from 'react-icons/bs'
import { IoMdPause, IoMdPlay } from 'react-icons/io'
import styles from './VideoPlayer.module.scss'
import { usePlayer } from './usePlayer'

const VideoPlayer: FC<{ videoPath: string }> = ({ videoPath }) => {
	const { videoRef, actions, video } = usePlayer()

	useEffect(() => {
		const videoPlayer = videoRef.current

		if (videoPlayer) {
			videoPlayer.volume = video.volume // Установка начальной громкости в 0
		}
	}, [videoRef.current, video.volume])

	return (
		<div className={styles.video}>
			<div className={`video-player ${styles.video__body}`}>
				<video
					className={styles.video__player}
					ref={videoRef}
					src={`${videoPath}#t=8`}
					preload='metadata'
					onClick={actions.toggleVideo}
				></video>
			</div>
			<div className={styles.video__control}>
				<div className={styles.video__left}>
					<button className={styles.video__play} onClick={actions.toggleVideo}>
						{video.isPlaying ? <IoMdPause /> : <IoMdPlay />}
					</button>
					<div className={styles.video__timeBar}>
						<div
							className={styles.video__progress}
							style={{ width: `${video.progress}%` }}
						></div>
					</div>
				</div>
				<div className={styles.video__right}>
					<div className={styles.video__volume}>
						<span
							style={{ width: `${video.volume * 100}%` }}
							className={styles.video__volumeThamb}
						></span>
						<input
							type='range'
							min='0'
							max='1'
							step='0.01'
							value={video.volume}
							onChange={actions.volumeChange}
						/>
					</div>
					<div className={styles.video__currentTime}>
						<p>
							{Math.floor(video.currentTime / 60) +
								':' +
								('0' + Math.floor(video.currentTime % 60)).slice(-2)}
						</p>
						<p> / </p>
						<p>
							{Math.floor(video.videoTime / 60) +
								':' +
								Math.floor(video.videoTime % 60)}
						</p>
					</div>

					<button className={styles.video__screen} onClick={actions.fullScreen}>
						<BsFullscreen />
					</button>
				</div>
			</div>
		</div>
	)
}
export default VideoPlayer
