<template>
  <div className="monitor-page">
        <RingChart />
        <GaugeChart />
        <BarChart />
      </div>
</template>

<script>
import RingChart from './components/RingChart';
import GaugeChart from './components/GaugeChart';
import BarChart from './components/BarChart';

export default {
  name: 'Monitor',
  components: {
    RingChart,
    GaugeChart,
    BarChart,
  },
};
</script>
