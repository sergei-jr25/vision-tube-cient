import { http } from '@/api/http'
import { getAuthPath } from '@/config/url.config'
import { IAuth } from './auth.helper'

export const AuthServer = {
	async login(email: string, password: string) {
		const { data } = await http.post<IAuth>(getAuthPath('/login'), {
			email,
			password
		})
		return data
	},

	async register(email: string, password: string) {
		const { data } = await http.post<IAuth>(getAuthPath('/register'), {
			email,
			password
		})
		return data
	}
}
