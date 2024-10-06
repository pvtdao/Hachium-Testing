import React from 'react'
import { toast } from 'react-toastify'
import { todoAPI } from '../../api/todoAPI'
import Button from '../Button'
import PropTypes from 'prop-types'

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  setLoading: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
}

function TodoItem({ item, setLoading, fetch }) {
  async function handleCheckboxChange(e) {
    const checked = e.target.checked
    setLoading(true)

    try {
      await todoAPI.updateStatus(item.id, {
        status: checked ? 1 : -1,
      })
      await fetch()

      switch (checked) {
        case true:
          toast.success('Your task is done.')
          break
        case false:
          toast.success(`Let's finish your task.`)
          break
        default:
          break
      }
    } catch (error) {
      toast.error('Something went wrong, please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteTask() {
    setLoading(true)
    try {
      await todoAPI.delete(item.id)
      await fetch()
      toast.success(`Your task is gone.`)
    } catch (error) {
      toast.error('Something went wrong, please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="flex gap-5">
      <input
        className="cursor-pointer scale-125"
        type="checkbox"
        checked={+item.status === 1}
        onChange={handleCheckboxChange}
      />
      <p
        className={`${
          +item.status === 1 && 'line-through text-secondary '
        } flex-1`}
      >
        {item.task}
      </p>
      <div className="flex items-center justify-center">
        <Button
          className="group border-error hover:bg-error hover:group:text-white transition-all rounded-[6px] duration-75 px-3"
          onClick={handleDeleteTask}
        >
          <span className="text-error text-sm group-hover:text-white transition-all duration-75">
            Delete
          </span>
        </Button>
      </div>
    </div>
  )
}

export default TodoItem
