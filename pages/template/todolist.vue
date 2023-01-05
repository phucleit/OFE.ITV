<template>
  <div class="grid grid-cols-1 gap-4">
    <el-button @click="add">
        Add
    </el-button>
    <span v-for="(item,index) in model.items" :key="index">
        <el-input v-model="item.name"></el-input>
        <el-input v-model="item.value"></el-input>
        <el-button @click="remove(item)">
            Remove
        </el-button>
    </span>
  </div>
</template>

<script>
export default {
    data(){
        return {
            model: {
                items: [
                    { name: '1',value: '1'}
                ]
            }
        }
    },
    methods: {
        add(){
            this.model.items.push({ name: '',value: ''})
        },
        remove(item){
            alert(this.model.items.findIndex(p=>p  == item))
            this.model.items.splice(this.model.items.findIndex(p=>p == item),1)
        }
    }
}
</script>

<style>

</style>