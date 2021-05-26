<template>
  <div>
    <p>Jobs</p>
    <list-item></list-item> <!-- ListView.vue 를 통한 component 공통화 --> 
    <!-- <p v-for="jobs in this.jobsList" :key="jobs.id">
      <a :href="jobs.url">{{ jobs.title }}</a><br>
      <small>{{ jobs.time_ago }} by {{ jobs.domain }}</small>
    </p> -->
  </div>
</template>

<script>
// 컴포넌트 공통화
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem
  },
  created() {
  }
}

// import { fetchJobs } from '../api/index.js';

// export default {
//   data() {
//     return {
//       jobsList: [],
//     }
//   },
//   created() {
//     // Jobs 데이터 조회.
//     this.getJobsList();
//   },
//   methods: {
//     getJobsList() {
//       return new Promise((resolve, reject) => {
//         fetchJobs()
//           .then(response => {
//             this.jobsList = response.data;
//             resolve();
//           })
//           .catch(error => {
//             reject(error);
//           });
//       });
//     }
//   },
// }
</script>

<style>

</style>