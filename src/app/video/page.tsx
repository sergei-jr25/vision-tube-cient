import VideoEdit from '@/components/screens/video-edit/VideoEdit'
import { NextPageAuth } from '@/providers/private-role.interface'

const VideoEditPage: NextPageAuth = () => {
	return <VideoEdit />
}

VideoEditPage.isOnlyUser = true

export default VideoEditPage
