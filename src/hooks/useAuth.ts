import { TypeSelector } from './useTypedSelector'

export const useAuth = () => TypeSelector(state => state.auth)
