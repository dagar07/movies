import { get as lodashGet} from 'lodash/object'

export function getDataFromPropsState (key) {
  return lodashGet(this.props, `location.state[${key}]`, '')
}

export function getQueryString (data) {
  return Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
}
