export const GTM_ID = "GTM-P64MXQH"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}