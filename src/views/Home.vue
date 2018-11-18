<template>
  <div class="container">
    <div class="column is-4 is-offset-4">
      <LoginCmp/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginCmp from '@/components/LoginCmp'

export default {
  name: 'home',
  components: {
    LoginCmp
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.container {
    
}


</style>


