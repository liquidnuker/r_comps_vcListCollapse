<template>
  <div>
    <!-- vcListCollapse1 -->
    <vcListCollapse101 />
    <!-- end vcListCollapse1 -->
  </div>
</template>
<script>
const vcListCollapse101 = () => import ('./vcListCollapse1.vue');
  export default {
    data () {
      return {    
      };
    },
    components: {
      vcListCollapse101: vcListCollapse101
    },
    mounted: function () {
    },
    methods: {
    }
  };
</script>