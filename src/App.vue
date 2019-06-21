<template>
  <div id="app">
    <theHeader></theHeader>
    <router-view></router-view>
    <contactUs></contactUs>
    <theFooter></theFooter>
  </div>
</template>

<script>
import theHeader from '@/components/assembly/theHeader'
import theFooter from '@/components/assembly/theFooter'
import contactUs from '@/components/assembly/contactUs'

export default {
  name: 'App',
  components: {
    theHeader,
    theFooter,
    contactUs
  }
}
</script>

<style>

</style>
