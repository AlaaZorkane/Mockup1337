<template>
  <v-container>
    <h3>1337 | CANDIDATURE</h3>
    <v-layout row align-center justify-start class="my-3" fill-height>
      <div v-for="link in links" :key="link.text">
        <v-chip
          label
          depressed
          :color="link.name === 'Check-in' ? 'black' : null "
          :class="link.name === 'Check-in' ? 'white--text' : null "
        >{{link.name}}</v-chip>
      </div>
    </v-layout>
    <h1 class="display-3">1337 veut te voir</h1>
    <v-card flat color="grey lighten-3">
      <div class="py-3 px-3 font-weight-light">{{card_text}}</div>
    </v-card>
    <v-divider class="my-4"></v-divider>
    <div v-if="!status">
      <p
        class="font-weight-light"
      >De nouveaux creneaux ouvriront prochainement. Pour être au courant dès qu'un nouveau creneau s'ouvrira, tu peux nous follow sur twitter :</p>
      <v-chip color="blue" label flat class="white--text font-weight-light">Suivre @1337FIL</v-chip>
    </div>
    <div v-else>
      <h2>Check ins are open!</h2>
      <v-layout column align-space-between justify-start fill-height>
        <div v-for="place in places" :key="place.text">
          <v-layout row align-center justify-start>
            <div>
              <h3 class="font-weight-light">{{place.name}}</h3>
            </div>
            <v-spacer></v-spacer>
            <div>
              <v-btn
                :class="'font-weight-light white--text ' +  'js-meeting-' + places.indexOf(place)"
                @click="checkin"
                depressed
                small
                color="black"
              >CHECK IN</v-btn>
            </div>
          </v-layout>
          <v-divider class="my-1" v-if="place.name != 'Mars' "></v-divider>
        </div>
      </v-layout>
    </div>

    <p class="mt-4 font-weight-light caption">
      Copyright © Alaa Zorkane 2019. Tous droits réservés.
      <br>Made to test the gink script.
      <br>This p tag loves you.
    </p>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      status: Boolean,
      links: [
        { name: "Profil" },
        { name: "Skillz" },
        { name: "Admissibilité" },
        { name: "Check-in" }
      ],
      places: [
        { name: "Khouribga" },
        { name: "Benguerir" },
        { name: "Mars" }
      ],
      card_text:
        "Il est temps de faire ta connaissance. Choisis maintenant un créneau de rendez-vous pour la réunion à laquelle tout étudiant admissible à 1337 est tenu de participer. Note bien que c’est ta présence à ce rendez-vous qui conditionne ton accès à la Piscine et donc la suite du processus d’admission à 1337. Tu peux venir accompagné d’une personne au maximum. Prévois environ deux heures."
    };
  },
  computed: {
  },
  mounted(){
    axios.get('http://cad39dee.ngrok.io/status').then(res => (this.status = res.data))
  },
  methods: {
    checkin: function(){
      window.open("/Pool","_self")
    },
  }
};
</script>
