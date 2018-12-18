<template>
  <div class="dashboard">
    <data-display />
    <select-table />
    <scatter-chart />
  </div>
</template>
<script>
import DataDisplay from './components/DataDisplay'
import ScatterChart from './components/ScatterChart'
import SelectTable from './components/SelectTable'
  export default {
    components: {
      DataDisplay,
      ScatterChart,
      SelectTable
    },
    name: 'Dashboard',
    data () {
      return {

      }
    }
  }
</script>
