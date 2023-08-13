import { TypeRootStore } from '@/store/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const TypeSelector: TypedUseSelectorHook<TypeRootStore> = useSelector
