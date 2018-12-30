<template>
  <div className="monitor-page">
    <DataDisplay />
    <el-row>
      <el-col :span="12"><PieChart /></el-col>
      <el-col :span="12"><RadarChart /></el-col>
    </el-row>
    <HistogramChart />
  </div>
</template>

<script>
import DataDisplay from './components/DataDisplay'
import HistogramChart from './components/HistogramChart'
import PieChart from './components/PieChart'
import RadarChart from './components/RadarChart'

export default {
  name: 'Monitor',
  components: {
    DataDisplay,
    HistogramChart,
    PieChart,
    RadarChart
  },
};
</script>
