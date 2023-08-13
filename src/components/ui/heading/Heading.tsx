import { FC } from 'react'

const Heading: FC<{ title: string }> = ({ title }) => {
	return <h2>{title}</h2>
}
export default Heading
