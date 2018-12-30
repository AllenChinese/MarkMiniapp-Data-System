<template>
  <div className="account-page">
    <D2Crud />
  </div>
</template>

<script>
import D2Crud from './components/D2Crud';

export default {
  name: 'Account',
  components: {
    D2Crud,
  },
};
</script>
