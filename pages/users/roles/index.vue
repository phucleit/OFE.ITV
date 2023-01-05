<template>
    <div>
        <el-page-header @back="goBack" title="" class="mb-3 py-3 px-3 shadow-md bg-white w-full rounded-lg">
            <template #content class="w-full">
                <div class="flex w-full justify-between items-center">
                    <span class="flex-grow">
                        <span>
                            Danh sách quyền
                        </span>
                    </span>
                    <el-button @click="create()" size="mini" type="primary">Thêm mới</el-button>
                </div>
            </template>
        </el-page-header>
        <UserRoleList></UserRoleList>
    </div>
</template>

<script>
export default {
    name: 'UserRolesIndex',
    methods: {
        create() {
            this.$router.push("/users/roles/add")
        },
        goBack() {
            this.$router.go(-1)
        }
    },
    async mounted(){
        this.$store.dispatch('userRole/init')
    }
}
</script>

<style>
.el-page-header__content {
    width: inherit;
}
</style>