<template>
  <div class="field">
    <div class="control">
      <input class="input is-medium" 
             :type="type" 
             :value="value"
             v-model="model"
             @input="$emit('inputChanged', model)" :placeholder="name">
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputCmp',
  props: {
    name: {
      type: String,
      require: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      model: ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
