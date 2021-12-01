export default ({ Vue, isServer }) => {
  if (!isServer) {
    import('./Player').then((HskyAplayer) => {
      Vue.component('HskyAplayer', HskyAplayer)
    })
  }
}
