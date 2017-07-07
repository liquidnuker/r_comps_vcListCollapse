<template>
  <nav class="vc_listcollapse1">
    <header v-on:click="lc1_toggle()">
      <p>Items:</p>
      <span v-if="lc1_collapse === false">+</span>
      <span v-else>-</span>
    </header>
    <ul v-show="lc1_collapse" v-for="i in items">
      <li>
        {{ i.itemName }}
      </li>
    </ul>
  </nav>
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
      };
    },
    mounted: function () {

    },
    methods: {
      lc1_toggle: function() {
        this.lc1_collapse = !this.lc1_collapse;
      }
    }
  };
</script>