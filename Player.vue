<template>
  <div class="vpa" ref="vpa"></div>
</template>

<script>
export default {
  name: 'HskyAplayer',
  data() {
    return {
      music: MUSIC_SETTING
    }
  },
  mounted() {
    if (!this.$isServer) {
      this.$nextTick(() => {
        import('aplayer').then(({default:aplayer}) => {
          this.ap = new aplayer({
            container: this.$refs.vpa,
            preload: 'auto',
            autoplay: true,
            audio: [
              {
                ...this.music
              }
            ]
          })
        })
      })
    }
  }
}
</script>

<style></style>
