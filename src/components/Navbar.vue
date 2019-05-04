<template>
  <nav>
    <v-toolbar color="tranparent">
      <v-chip :v-for="links in link" label :color="link.name === 'Check-in' ? 'black' : null"
        :class="link.name === 'Check-in' ? 'text--white' : null"
      >
        {{link.name}}
      </v-chip>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      links: ["Profil","Conditions", "Skillz", "Admissibilité", "Check-in"]
    }
  }
}
</script>
