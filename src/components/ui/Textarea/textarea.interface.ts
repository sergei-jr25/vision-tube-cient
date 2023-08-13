import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface ITextareaProps {
	error?: FieldError | any
}

export type TypeTextarea = InputHTMLAttributes<HTMLTextAreaElement> &
	ITextareaProps

export interface ITextarea extends TypeTextarea {}
