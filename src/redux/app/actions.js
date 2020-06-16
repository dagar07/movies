export function getView (width) {
  let newView = 'MobileView'
  if (width > 1220) {
    newView = 'DesktopView'
  } else if (width > 767) {
    newView = 'TabView'
  }
  return newView
}

const actions = {
  TOGGLE_ALL: 'TOGGLE_ALL',
  toggleCollapsed: () => ({
    type: actions.COLLPSE_CHANGE
  }),
  toggleAll: (width, height) => {
    const view = getView(width)
    const collapsed = view !== 'DesktopView'
    return {
      type: actions.TOGGLE_ALL,
      collapsed,
      view,
      height
    }
  }
}
export default actions
