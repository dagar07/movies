import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function saveToCookie (key, value) {
  return cookies.set(key, value)
}

export function getFromCookie (key) {
  return cookies.get(key)
}

export function removeFromCookie (key) {
  return cookies.remove(key)
}
