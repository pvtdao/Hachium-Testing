import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import TodoForm from './components/todos/TodoForm'
import TodoList from './components/todos/TodoList'
import { React } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { todoAPI } from './api/todoAPI'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const [filter, setFilter] = useState({
    status: 0,
  })
  const [filterList, setFilterList] = useState(() => list)

  useEffect(() => {
    getListTodo()
  }, [])

  useEffect(() => {
    if (+filter.status === 0) {
      setFilterList(list)
    } else {
      const newList = list.filter((item) => item.status === +filter.status)
      setFilterList(newList)
    }
  }, [filter, list])

  async function getListTodo() {
    try {
      setLoading(true)
      const data = await todoAPI.getAll()
      setList(data)
    } catch (error) {
      toast.error('Error when get list todo. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="container mx-auto p-2">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      ></ToastContainer>
      <h1 className="text-center text-3xl mt-20 font-bold text-primary">
        Todo List
      </h1>
      {loading && <Loading />}
      <TodoForm
        setLoading={setLoading}
        fetch={getListTodo}
        setFilter={setFilter}
      />
      <TodoList setLoading={setLoading} fetch={getListTodo} list={filterList} />
    </div>
  )
}

export default App
