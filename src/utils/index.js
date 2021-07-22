export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === 'Rachid' && password === '123456') {
      setTimeout(() => {
        resolve('success')
      }, 1000)
    } else {
      setTimeout(() => {
        reject('failure')
      }, 1000)
    }
  })
}
