import { useAuth } from '@/hooks/useAuth'
import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { ICheckRole } from './private-role.interface'

const CheckRole: FC<PropsWithChildren<ICheckRole>> = ({
	children,
	isOnlyUser
}) => {
	const { user, isLoading } = useAuth()
	const { replace } = useRouter()
	const pathname = usePathname()
	const Children = <>{children}</>

	if (isLoading) return null

	if (user) return Children

	if (isOnlyUser) pathname === '/' && replace('/')

	return null
}
export default CheckRole
