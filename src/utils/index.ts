import MobileDetect from 'mobile-detect'

/**
 * This function is used to tell if the viewing device is a mobile device or not.
 */
export const isMobile = (): boolean => {
  const md = new MobileDetect(window.navigator.userAgent)
  return !!md.mobile() || !!md.versionStr('Mobile')
}
