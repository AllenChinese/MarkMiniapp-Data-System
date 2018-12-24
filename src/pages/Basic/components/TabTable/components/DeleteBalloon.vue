<template>
  <el-popover
    v-model="visible"
    placement="bottom"
    width="160">
    <p>确认删除？</p>
    <div style="text-align: left; margin: 0">
      <el-button
        type="danger"
        size="mini"
        round
        @click="handleHide(1)">确认</el-button>
      <el-button
        size="mini"
        round
        @click="handleHide(0)">关闭</el-button>
    </div>
    <el-button
      v-if="keyStatus === 'action'"
      slot="reference"
      type="danger"
      size="mini"
      round>删除</el-button>
  </el-popover>
</template>

<script>
export default {
  props: {
    keyStatus: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
    tabKey: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleHide(code) {
      if (parseInt(code) === 1) {
        this.$emit('handleRemove', this.index, this.tabKey);
      }
      this.visible = false;
    },
  },
};
</script>
