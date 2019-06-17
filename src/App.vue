<template>
  <div id="app">
    <theHeader></theHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import theHeader from '@/components/assembly/theHeader'

export default {
  name: 'App',
  components: {
    theHeader,
  }
}
</script>

<style>

</style>
