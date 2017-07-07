<template>
  <div class="vc_listcollapse1">
    <p v-on:click="lc1_toggle()">Items:</p>
    <span>+</span>
    <span>-</span>
    <ul v-show="lc1_collapse" v-for="i in items">
      <li>
        {{ i.itemName }}
      </li>
    </ul>
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
        ],
        lc1_collapse: false
      }
    },
    mounted: function () {
      console.log("ListCollapse1.vue mounted");
    },
    methods: {
      lc1_toggle: function() {
        this.lc1_collapse = !this.lc1_collapse;
      }
    }
  }
</script>