import * as yup from 'yup'

export const todoSchemaFactory = () => {
  return yup
    .string()
    .required('Task name is required!')
    .min(10, 'Task name must be at least 10 characters long')
}
