import axios from 'axios'

export const postRequest = ({ url = '', body = {}, headers = {} }) => {
  return axios
    .post(url, { ...body }, { headers })
    .catch(error => {
      if (error.response) {
        throw error.response
      } else {
        throw error
      }
    })
    .then(response => {
      return response
    })
}

export const getRequest = ({ url = '', query = '', headers = {} }) => {
  const finalUrl = query ? `${url}${query}` : url
  return axios
    .get(finalUrl, { headers })
    .catch(error => {
      if (error.response) {
        throw error.response
      } else {
        throw error
      }
    })
    .then(response => {
      return response
    })
}
