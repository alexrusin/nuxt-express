<template>
  <form @submit.prevent="login">
    <input v-model="username" type="text">
    <input v-model="password" type="password">
    <button type="submit">
      Login
    </button>
  </form>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    login () {
      this.$axios.$post('/api/login', {
        username: this.username,
        password: this.password
      })
        .then(({ data }) => {
          this.$store.commit('setLoggedInUser', data)
          this.$router.push({
            path: '/users'
          })
        }).catch(error => console.log(error))
    }
  }

}
</script>
