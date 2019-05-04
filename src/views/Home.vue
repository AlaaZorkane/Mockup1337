<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout align-center justify-center column fill-height>
        <v-flex md6>
          <v-text-field
            name="user[email]"
            v-model="email"
            label="Email"
            required
          ></v-text-field>
        </v-flex>

        <v-flex md6>
          <v-text-field
            v-model="password"
            type="password"
            name="user[password]"
            label="Password"
          ></v-text-field>
        </v-flex>

        <v-flex md6>
          <v-btn @click="submit" name="commit" color="black" class="white--text">Se connecter</v-btn>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
const config = require('../config.js')

export default {
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    submit(){
      this.email = this.email.toLowerCase()
      if(config.emails.includes(this.email) && config.passwords.includes(this.password)){
        window.open("/Checkin","_self")
      } else {
        alert("ERROR")
        console.log(config.emails,config.passwords)
      }
    }
  }
}
</script>
