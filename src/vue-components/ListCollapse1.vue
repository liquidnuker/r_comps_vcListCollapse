<template>
  <div class="vc_listcollapse1">
    
  </div>
</template>
<script>
  export default {
    data () {
      return {    
        items: [
          {
            itemName: "item1"
          },
          {
            itemName: "item2"
          },
          {
            itemName: "item3"
          }
        ]
      }
    },
    mounted: function () {
      console.log("ListCollapse1.vue mounted");
    }
  }
</script>