<template>
    <div>
        <p>News</p>
        <list-item></list-item>
<!--         <p v-for="news in this.newsList" :key="news.id">
            <a :href="news.url">{{ news.title }}</a><br>
            <small>{{ news.time_ago }} by  -->
              <!-- {{ news.domain }} -->
              <!-- NewsView에서 User정보를 클릭시 UserView로 이동하게끔 처리. -->
<!--               <router-link :to="'/user/' + news.user">{{ news.user }}</router-link>
            </small>
        </p> -->
    </div>
</template>

<script>
// ListItem.vue를 통한 컴포넌트 공통화
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem
  },
  created() {
  }
}

// import { fetchNews } from '../api/index.js';

// export default {
//   data() {
//     return {
//       newsList: [],
//     }
//   },
//   created() {
//     // News 데이터 조회.
//     this.getNewsList();
//   },
//   methods: {
//     getNewsList() {
//       return new Promise((resolve, reject) => {
//         fetchNews()
//           .then(response => {
//             this.newsList = response.data;
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