import Head from 'next/head'
import { FC } from 'react'
import Header from './header/Header'
import SideBar from './sidebar/SideBar'

interface ILayout {
	children: any
	title: string
}

const Layout: FC<ILayout> = ({ children, title }) => {
	return (
		<Head>
			<Header />
			<main>
				<SideBar />
				{children}
			</main>
		</Head>
	)
}
export default Layout
