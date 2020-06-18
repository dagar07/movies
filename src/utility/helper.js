import { get as lodashGet } from 'lodash/object'
import { range as lodashRange } from 'lodash/util'

export function getDataFromPropsState (key) {
  return lodashGet(this.props, `location.state[${key}]`, '')
}

export function getQueryString (data) {
  return Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
}

export function getObjFromQueryString (params) {
  const urlParams = new URLSearchParams(params)
  return Object.fromEntries(urlParams)
}


export function generateYearRange (initial = 1900) {
  return lodashRange(initial, 2021).map(item => ({
    title: item,
    id: item
  })).reverse()
}
