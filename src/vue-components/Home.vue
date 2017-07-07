<template>
  <div>
    <!-- ListCollapse1 mount -->
    <div id="listCollapse1_mount">
    </div>
    <!-- end ListCollapse1 mount -->
  </div>
</template>
<script>
  export default {
    data () {
      return {    
      }
    },
    mounted: function () {
      this.mountListCollapse();
    },
    methods: {
      mountListCollapse: function() {
        const ListCollapse1 = resolve => {
          require.ensure(['ListCollapse1.vue'], () => {
            resolve(require('ListCollapse1.vue'))
          })
        };
        inject("#ListCollapse1_mount", ListCollapse1);
      }
    }
  }
</script>