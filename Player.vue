<template>
  <aplayer
    autoplay
    mini
    :music="music"
  />
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  name: 'HskyAplayer',
  components:{
    Aplayer
  },
  data(){
    return {
      music:MUSIC_SETTING
    }
  },
}
</script>

<style></style>
