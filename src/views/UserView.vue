<!-- UserView에서 전달된 id정보가 잘 넘어오는지 확인. -->
<template>
  <div>
      {{ userId }}
  </div>
</template>

<script>
export default {
    data() { 
        return {
            userId: "",
        }
    },
    created() {
        this.userId = this.$route.params.id;
    }
}
</script>

<style>

</style>