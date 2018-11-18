<template>
  <div class="login">
    <div class="box">
      <h3 class="title has-text-grey has-text-centered">Jest Testing</h3>
      <form @submit.prevent="onSubmit">
        <div class="field">
          <InputCmp name="Username" :value="username" @inputChanged="updateUsername" />
        </div>
        <div class="field">
          <InputCmp name="Password" type="password" :value="password" @inputChanged="updatePassword" />
        </div>
        <div class="field">
          <label class="checkbox">
            <input type="checkbox"><span class="checkbox-title">Remember me</span>
          </label>
        </div>
        <button class="button is-block is-info is-medium is-fullwidth" 
                :class="{'is-loading': isLoading}"
                :disabled="!isSubmitAllowed">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import InputCmp from '@/components/InputCmp'

export default {
  name: 'LoginCmp',
  components: {
    InputCmp
  },
  data() {
    return {
      isLoading: false,
      username: "",
      password: ""
    }
  },
  computed: {
    isSubmitAllowed() {
      return this.username !== '' && this.password !== ''
    }
  },
  methods: {
    updateUsername(username) {
      this.username = username
    },
    updatePassword(password) {
      this.password = password
    },
    onSubmit() {
      const {username, password} = this
      this.$store.dispatch('authenticate', {username, password})
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  .checkbox-title {
    margin: 0 0 0 5px;
  }
}
</style>
