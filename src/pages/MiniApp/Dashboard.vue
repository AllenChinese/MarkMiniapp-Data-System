<template>
  <div class="dashboard">
    <data-display/>
    <select-table/>
    <scatter-chart/>
  </div>
</template>
<script>
import DataDisplay from './components/DataDisplay'
import ScatterChart from './components/ScatterChart'
import SelectTable from './components/SelectTable'
  export default {
    name: 'Dashboard',
    components: {
      DataDisplay,
      ScatterChart,
      SelectTable
    },
    data () {
      return {

      }
    }
  }
</script>
