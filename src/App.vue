<template>
  <div id="app">
    <theHeader></theHeader>
    <router-view></router-view>
    <theFooter></theFooter>
  </div>
</template>

<script>
import theHeader from '@/components/assembly/theHeader'
import theFooter from '@/components/assembly/theFooter'

export default {
  name: 'App',
  components: {
    theHeader,
    theFooter
  }
}
</script>

<style>

</style>
