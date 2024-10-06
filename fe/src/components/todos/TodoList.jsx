import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  setLoading: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
}

function TodoList({ setLoading, list, fetch }) {
  return (
    <div className="mt-20 sm:max-w-[60vw] mx-auto">
      {list.length === 0 ? (
        <h1 className="text-2xl text-primary text-center">
          There is no task here... Please add more!
        </h1>
      ) : (
        <div className="flex flex-col gap-4">
          {list.map((todo) => (
            <TodoItem
              item={todo}
              key={todo.id}
              setLoading={setLoading}
              fetch={fetch}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TodoList
