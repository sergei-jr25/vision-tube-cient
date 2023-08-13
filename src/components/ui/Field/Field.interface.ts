import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	error?: FieldError | any
}

export type TypeFiled = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeFiled {}
