<template>
    <div>
        <p>Ask</p>
        <list-item></list-item> <!-- ListView.vue 를 통한 component 공통화 --> 
        <!-- <p v-for="ask in this.askList" :key="ask.id">
            <a :href="ask.url">{{ ask.title }}</a><br>
            <small>{{ ask.time_ago }} by {{ ask.domain }}</small>
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

// import { fetchAsk } from '../api/index.js';

// export default {
//     data() {
//     return {
//       askList: [],
//     }
//   },
//   created() {
//     // Jobs 데이터 조회.
//     this.getAskList();
//   },
//   methods: {
//     getAskList() {
//       return new Promise((resolve, reject) => {
//         fetchAsk()
//           .then(response => {
//             this.askList = response.data;
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