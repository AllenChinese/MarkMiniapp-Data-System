<template>
  <div :style="style.editDialog">
    <el-button
      v-if="keyStatus === 'action'"
      type="primary"
      size="mini"
      round
      @click="handleColumnClick(row)">编辑</el-button>
    <el-dialog
      :visible.sync="dialogFormVisible"
      title="编辑">
      <el-form
        ref="ruleForm"
        :model="formRow"
        :rules="rules">
        <el-form-item
          :label-width="formLabelWidth"
          label="标题"
          prop="title">
          <el-input v-model="formRow.title"/>
        </el-form-item>
        <el-form-item
          :label-width="formLabelWidth"
          label="作者"
          prop="author">
          <el-input v-model="formRow.author"/>
        </el-form-item>
        <el-form-item
          :label-width="formLabelWidth"
          label="状态"
          prop="status">
          <el-input v-model="formRow.status"/>
        </el-form-item>
        <el-form-item
          :label-width="formLabelWidth"
          label="发布时间"
          prop="date">
          <el-input v-model="formRow.date"/>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="handleSubmit('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      default: {},
    },
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
      style: {
        editDialog: {
          display: 'inline-block',
          marginRight: '5px',
        },
      },
      dialogFormVisible: false,
      rules: {
        title: [
          { required: true, message: '必填选项', trigger: 'blur' },
        ],
        author: [
          { required: true, message: '必填选项', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '必填选项', trigger: 'blur' }
        ],
        date: [
          { required: true, message: '必填选项', trigger: 'blur' }
        ],
      },
      formLabelWidth: '80px',
    };
  },
  computed: {
    formRow() {
      return Object.assign({}, this.row);
    },
  },
  methods: {
    handleColumnClick(row) {
      this.dialogFormVisible = true;
    },
    handleSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false;
        }
        this.$emit('handleMod', this.formRow, this.index, this.tabKey);
        this.dialogFormVisible = false;
      });
    },
  },
};
</script>
