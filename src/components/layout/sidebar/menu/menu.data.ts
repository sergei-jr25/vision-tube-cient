import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi'
import { IMenuItem } from './menu.interface'

export const menuData: IMenuItem[] = [
	{
		name: 'Главная',
		link: '/',
		icon: HiHome
	},
	{
		name: 'Тренды',
		link: '/trending',
		icon: HiChartBar
	},
	{
		name: 'Мой канал',
		link: '/my-channel',
		icon: HiStar
	},
	{
		name: 'Мои подписки',
		link: '/subscription',
		icon: HiCollection
	}
]
