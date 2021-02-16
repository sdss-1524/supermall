<template>
 <div class="recommend">
  <div v-for="item in recommend" class="recommend-item">
    <a :herf="item.link">
      <img :src="item.image">
      <div>{{item.title}}</div>
    </a>
  </div>
 </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 15px 0 30px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
