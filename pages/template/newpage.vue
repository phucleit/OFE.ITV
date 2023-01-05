<template>
    <div>
        <el-page-header @back="goBack" title="" class="py-3 px-3 shadow-md bg-white w-full rounded-lg">
            <template #content class="w-full">
                <div class="flex w-full justify-between items-center">
                    <span class="flex-grow">
                        <span>
                            Danh sách người dùng
                        </span>
                    </span>
                    <el-button @click="create()" size="mini" type="primary">Thêm mới</el-button>
                </div>
            </template>
        </el-page-header>
        <UserList></UserList>
    </div>
</template>

<script>
export default {
    name: 'UserIndex',
    methods: {
        create() {
            this.$router.push({ name: 'users.create' })
        },
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.el-page-header__content {
    width: inherit;
}
</style>