<template>
    <!-- <img src="" alt=""> -->
    <div class=" p-3 jobs" :style="{'backgroundColor':color}">
      <div class="container">
        <div class="row">
          <JobCardVue/>
          <JobCardVue/>
          <JobCardVue/>
          <JobCardVue/>
          <JobCardVue/>
          <JobCardVue/>
          <JobCardVue/>
        </div>
      </div>
    </div>
</template>

<script>
import JobCardVue from './JobCard.vue'
export default {
  name: 'JobPanel',
  props: {
    color: String,
    msg: String
  },
  components:{
    JobCardVue
  }
}
</script>

<style scoped>
.jobs{
  position: relative;
}
</style>