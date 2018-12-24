<template>
  <div className="basic-page">
    <DataDisplay />
    <SelectTable />
    <!-- <TabTable /> -->
  </div>
</template>

<script>
import DataDisplay from './components/DataDisplay';
import SelectTable from './components/SelectTable';
import TabTable from './components/TabTable';

export default {
  name: 'Basic',
  components: {
    DataDisplay,
    SelectTable,
    TabTable,
  },
};
</script>
