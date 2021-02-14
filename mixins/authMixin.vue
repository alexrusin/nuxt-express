<script>
import { mapGetters } from 'vuex'
export default {
  middleware: 'isAuthenticated',
  computed: {
    // Map `auth` state to a local property so we can access it locally.
    ...mapGetters(['loggedInUser'])
  },
  watch: {
    loggedInUser (newValue) {
      if (newValue.id === -1) {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>
