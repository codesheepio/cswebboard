export const get = async url => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .catch(err => Promise.reject(err))
}

export const post = async (url, json) => {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(json),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .catch(err => Promise.reject(err))
}
