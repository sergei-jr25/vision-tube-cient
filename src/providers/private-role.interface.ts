import { NextPage } from 'next'

export interface ICheckRole {
	isOnlyUser?: boolean
}

export type NextPageAuth = NextPage & ICheckRole

export type TypeComponentAuthFields = { Component: ICheckRole }
