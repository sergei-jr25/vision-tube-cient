import { http } from '@/api/http'
import { getUserPath } from '@/config/url.config'
import { IUser } from '@/types/user.interface'

export const UserServer = {
	async getAll() {
		return await http.get<IUser[]>(getUserPath())
	},

	async getById(id: number) {
		return await http.get<IUser>(getUserPath(`/by-id/${id}`))
	}
}
