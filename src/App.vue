<template>
  <v-app class="bg">
    <v-content>
      <v-container fluid>
        <router-view class="containerbg"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style>

.bg{
  background: url(https://candidature.1337.ma/assets/site42-bg-0ce5af53a694c08312abe56a184b815a632343377988f4b6e9237b71e53b3331.gif) repeat center top !important;
}
.containerbg{
  background-color: white !important;
}

</style>

