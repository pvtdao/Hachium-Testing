import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { todoAPI } from '../../api/todoAPI'
import { todoSchemaFactory } from '../../utils/yup-schema/todo'
import Button from '../Button'
import TextField from '../hook-form/TextField'

TodoForm.propTypes = {
  setFilter: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
}

function TodoForm({ setLoading, fetch, setFilter }) {
  const schema = yup.object({
    task: todoSchemaFactory(),
  })
  const methods = useForm({
    defaultValues: {
      task: '',
    },
    resolver: yupResolver(schema),
  })
  const handleAddNewTodo = useCallback(async ({ task }) => {
    const payload = {
      task,
      status: -1,
    }

    setLoading(true)
    try {
      await todoAPI.add(payload)
      await fetch()
      toast.success('Your task has been added.')

      methods.reset()
    } catch (error) {
      toast.error('Something went wrong, please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  function handleSelectChange(e) {
    const value = e.target.value
    setFilter(() => ({
      status: value,
    }))
  }

  return (
    <>
      <FormProvider {...methods}>
        <form
          noValidate
          onSubmit={methods.handleSubmit(handleAddNewTodo)}
          className="mt-10 sm:max-w-[60vw] mx-auto"
        >
          <div className="flex flex-col gap-5 sm:flex-row">
            <TextField
              fullWidth
              autoComplete="off"
              className="w-full border-0 px-0 relative border-b-[2px] border-black rounded-none pr-[25px]"
              name="task"
              placeholder={'Enter a todo task'}
            />
            <div className="flex gap-5 sm:flex-row">
              <Button
                type="submit"
                className="group p-3 hover:bg-primary hover:group:text-white transition-all rounded-[6px] duration-75 px-6 border-primary"
              >
                <span className="text-primary group-hover:text-white transition-all duration-75">
                  Add
                </span>
              </Button>
              <select
                name="filter"
                className={
                  'border p-2 outline-none border-solid border-primary rounded-[6px] text-primary cursor-pointer'
                }
                onChange={handleSelectChange}
              >
                <option value="0">All</option>
                <option value="1">Completed</option>
                <option value="-1">Incomplete</option>
              </select>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default TodoForm
