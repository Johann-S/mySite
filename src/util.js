const getCurrentLocal = () => {
  const currentUrl = window.location.href

  if (currentUrl.indexOf('/fr/') !== -1) {
    return 'fr'
  } else {
    return 'en'
  }
}

export {
  getCurrentLocal
}
