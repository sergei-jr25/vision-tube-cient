import { useAuth } from '@/hooks/useAuth'
import { IComment } from '@/types/comment.interface'
import { FC } from 'react'
import AddComment from './AddComment'
import CommentItem from './CommentItem'
import styles from './Comments.module.scss'

const Comments: FC<{ comments: IComment[]; videoId: number }> = ({
	comments,
	videoId
}) => {
	const { user } = useAuth()
	return (
		<div className={styles.comments}>
			<h3 className={styles.comments__title}>Комментарии</h3>
			<div className={styles.comments__items}>
				{comments.length ? (
					comments.map(comment => (
						<CommentItem key={comment.id} comment={comment} />
					))
				) : (
					<div className={styles.comments__value}>Комментариев не найдено</div>
				)}
			</div>
			<div>{user && <AddComment videoId={videoId} />}</div>
		</div>
	)
}
export default Comments
