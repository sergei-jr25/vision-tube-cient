import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall'
import { IComment } from '@/types/comment.interface'
import { FC } from 'react'

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
	console.log(comment)

	return (
		<div>
			<ChannelInfoSmall channel={comment.user} message={comment.message} />
		</div>
	)
}
export default CommentItem
