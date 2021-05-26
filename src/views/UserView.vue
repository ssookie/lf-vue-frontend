<!-- UserView에서 전달된 id정보가 잘 넘어오는지 확인. -->
<template>
    <div class="container">
        <h2>Usert Profile</h2>
        <div class="user-container">
            <div>
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="user-description">
                <div>{{userInfo.id}}</div>
                <div class="time">
                    {{ userInfo.time_ago || 'Joined ' + userInfo.created + ','}}
                    <span v-if="userInfo.points">, {{ userInfo.points }} points</span>
                    <span>{{ userInfo.karma }} karma</span>
                </div>
            </div>
        </div>
    </div>
  <!-- <div>
      {{ userId }}
  </div> -->
</template>

<script>
import { fetchUser } from "../api/index.js";

export default {
  data() {
    return {
      userId: "",
      userInfo: {},
    };
  },
  created() {
    this.userId = this.$route.params.id;
    this.getUserInfo(this.userId);
  },
  methods: {
    getUserInfo(userId) {
      return new Promise((resolve, reject) => {
        fetchUser(userId)
          .then((response) => {
            this.userInfo = response.data;
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
// export default {
//     data() { 
//         return {
//             userId: "",
//         }
//     },
//     created() {
//         this.userId = this.$route.params.id;
//     }
// }
</script>

<!-- style 태그에 scoped 속성: CSS는 현재 컴포넌트의 엘리먼트에만 적용됨 -->
<style scoped>
.container {
  padding: 0 0.5rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
  color: #828282;
}
</style>