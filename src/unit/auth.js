
const TokenKey = 'Admin-Token'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey,token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

export function getUserInfo() {
  return JSON.parse(localStorage.getItem('userinfo'))
}
