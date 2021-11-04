<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" @open="openHandle">
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-form-item label="资源名称：" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="资源路径：" prop="url">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item label="资源分类：" prop="categoryId">
        <el-select v-model="form.categoryId">
          <el-option
            v-for="category of resourceCategories"
            :key="category.id"
            :value="category.id"
            :label="category.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述：">
        <el-input v-model="form.description" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelHandle">取 消</el-button>
      <el-button
        type="primary"
        :loading="confirmLoading"
        @click="confirmHandle"
      >
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, ModelSync } from 'vue-property-decorator'
import { resourceSaveOrUpdate } from '@/services/resource'
import { Form } from 'element-ui'

@Component
export default class ResourceDialog extends Vue {
  @ModelSync('visible', 'change', { type: Boolean })
  dialogVisible!: boolean

  @Prop({ default: 'create' }) readonly type!: string
  @Prop({ default: () => [] }) readonly resourceCategories!: any[]
  @Prop({ default: () => ({}) }) readonly editVal!: any

  form = {
    id: undefined,
    name: '',
    categoryId: undefined,
    url: '',
    description: '',
  }

  rules = {
    name: [{ required: true, message: '请输入资源名称', trigger: 'blur' }],
    url: [{ required: true, message: '请输入资源路径', trigger: 'blur' }],
    categoryId: [
      { required: true, message: '请选择资源分类', trigger: 'change' },
    ],
  }

  confirmLoading = false

  get title(): string {
    return this.type === 'create' ? '添加资源' : '编辑资源'
  }

  openHandle(): void {
    if (this.type === 'create') {
      if (this.resourceCategories.length) {
        this.form.categoryId = this.resourceCategories[0].id
      }
    } else {
      this.form = this.editVal
    }
  }

  cancelHandle(): void {
    this.closeDialog()
  }

  async confirmHandle(): Promise<void> {
    await (this.$refs.form as Form).validate()
    this.confirmLoading = true
    const { data } = await resourceSaveOrUpdate(this.form)
    if (data.code === '000000') {
      const operation = this.type === 'create' ? '添加' : '修改'
      this.$message.success(`${operation}成功`)
      this.$emit('refresh')
      this.closeDialog()
    } else {
      this.$message.error(data.mesg)
    }
    this.confirmLoading = false
  }

  closeDialog(): void {
    ;(this.$refs.form as Form).resetFields()
    this.dialogVisible = false
  }
}
</script>
