import { IBase } from './base.interface'
import { IVideo } from './video.interface'

export interface IUser extends IBase {
	email: string

	password: string

	name: string

	isVerified: boolean

	subscriberCount?: number

	description: string

	avatarPath: string

	videos: IVideo[]

	subscriptions: ISubscription[]

	subscribers: ISubscription[]
}

export interface ISubscription {
	toChannel: IUser
}

export interface IUserResponce {
	id: number | undefined
	email: string
	name: string
	description: string
	isVerified: boolean
	subscriberCount: number
	avatarPath: string
}

export interface IProfileDto {
	id: number
	email: string
	name: string
	description: string
	avatarPath: string
}
