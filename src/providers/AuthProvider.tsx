'use client'
import { FC, PropsWithChildren } from 'react'
import CheckRole from './CheckRole'
import { ICheckRole } from './private-role.interface'

// const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<ICheckRole>> = ({
	isOnlyUser,
	children
}) => {
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<CheckRole isOnlyUser={isOnlyUser}>{children}</CheckRole>
	)
}
export default AuthProvider
