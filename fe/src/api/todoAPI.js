import axiosClient from './axiosClient'

const baseTodoURL = '/tasks'

export const todoAPI = {
  getAll() {
    const url = `${baseTodoURL}`
    return axiosClient.get(url)
  },

  getDetail(id) {
    const url = `${baseTodoURL}/${id}`
    return axiosClient.get(url)
  },

  add(payload) {
    const url = `${baseTodoURL}`
    return axiosClient.post(url, payload)
  },

  delete(id) {
    const url = `${baseTodoURL}/${id}`
    return axiosClient.delete(url)
  },

  updateStatus(id, payload) {
    const url = `${baseTodoURL}/${id}`
    return axiosClient.patch(url, payload)
  },
}
