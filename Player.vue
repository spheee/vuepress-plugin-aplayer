<template>
  <div class="vpa" ref="vpa"></div>
</template>

<script>
// import 'aplayer/dist/APlayer.min.css'
import aplayer from 'aplayer'
export default {
  name: 'HskyAplayer',
  data() {
    return {
      music: MUSIC_SETTING
    }
  },
  mounted() {
    this.$nextTick(() => {
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
  }
}
</script>

<style></style>
