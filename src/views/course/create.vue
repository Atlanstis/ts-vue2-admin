<template>
  <div class="course-create">
    <create-or-update />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CreateOrUpdate from './components/create-or-update.vue'

export default Vue.extend({
  name: 'CourseCreate',
  components: {
    CreateOrUpdate,
  },
})
</script>

<style lang="scss" scoped></style>
