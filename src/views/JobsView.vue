<template>
  <div>
    <p>Jobs</p>
    <p v-for="jobs in this.jobsList" :key="jobs.id">
      <a :href="jobs.url">{{ jobs.title }}</a><br>
      <small>{{ jobs.time_ago }} by {{ jobs.domain }}</small>
    </p>
  </div>
</template>

<script>
import { fetchJobs } from '../api/index.js';

export default {
  data() {
    return {
      jobsList: [],
    }
  },
  created() {
    // Jobs 데이터 조회.
    this.getJobsList();
  },
  methods: {
    getJobsList() {
      return new Promise((resolve, reject) => {
        fetchJobs()
          .then(response => {
            this.jobsList = response.data;
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
}
</script>

<style>

</style>