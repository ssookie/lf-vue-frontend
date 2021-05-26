<template>
  <ul class="news-list">
    <li v-for="items in listItems" :key="items.id" class="post">
      <div class="points">
        {{ items.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="items.domain">
            <a :href="items.url">{{ items.title }}</a><small class="link-text" v-if="items.domain">({{ items.domain }})</small>
          </template>
          <template v-else>
            <router-link :to="`/item/${items.id}`">{{ items.title }}</router-link><small><a class="link-text" :href="items.domain" v-if="items.domain">({{ items.domain }})</a></small>
          </template>
        </p>
        <small v-if="items.user" class="link-text">
          by
          <router-link :to="`/user/${items.user}`" class="link-text">{{ items.user }}</router-link>
        </small>
        <small v-if="items.time_ago" class="link-text">
          {{ items.time_ago }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
import { fetchNews, fetchAsk, fetchJobs } from '../api/index.js';

export default {
  data() {
    return {
      listItems: [],
    }
  },
  created() {
    if (this.$route.path === "/news") {
      this.getNewsList();
    } else if (this.$route.path === "/ask") {
      this.getAskList();
    } else if (this.$route.path === "/jobs") {
      this.getJobsList();
    }
  },
  methods: {
    getNewsList() {
      return new Promise((resolve, reject) => {
        fetchNews()
          .then(response => {
            this.listItems = response.data;
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getAskList() {
      return new Promise((resolve, reject) => {
        fetchAsk()
          .then(response => {
            this.listItems = response.data;
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getJobsList() {
      return new Promise((resolve, reject) => {
        fetchJobs()
          .then(response => {
            this.listItems = response.data;
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
  }
}
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>