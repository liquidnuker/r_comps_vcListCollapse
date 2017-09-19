<template>
<nav class="vcListCollapse1-01">
  <header v-on:click="lc1_toggle()">
    <span v-if="lc1_collapse === false" class="vcListCollapse1-01_icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
    </span>
    <span v-else class="vcListCollapse1-01_icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 13H5v-2h14v2z"/></svg>
      </span>
    <p>Items:</p>
    </header>
    <ul v-show="lc1_collapse" v-for="i in items">
      <li>
        <div class="vcListCollapse1-01_content">
        {{ i.itemName }}
        </div>
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