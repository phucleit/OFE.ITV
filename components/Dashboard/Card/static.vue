<template>
  <span class="transition-all duration-200 bg-blue-50 rounded-lg p-3 shadow-md shadow-blue-500 cursor-pointer" :class="{'selected-item': isSelected}">
        <span>
            <slot name="icon">
                <img src="/images/domain.png"/>
            </slot>
        </span>
        <span class="px-1 font-semibold">
            <slot>
                Tên miền
            </slot>
        </span>
        <div class="border-t my-2 w-full grid grid-cols-1 gap-3">
        <span class="flex justify-between mt-3">
            <slot name="1">
                <span class="text-sm">
                    Đã đăng ký
                </span>
                <span class="text-sm">
                    0
                </span>
            </slot>
        </span>
        <span class="flex justify-between">
            <slot name="2">
                <span class="text-sm">
                    Đang chờ
                </span>
                <span class="text-sm">
                    0
                </span>
            </slot>
        </span>
        <span class="flex justify-between">
            <slot name="3">
                <span class="text-sm">
                    Đã hết hạn
                </span>
                <span class="text-sm">
                    0
                </span>
            </slot>
        </span>
        </div>
    </span>
</template>

<script>
export default {
    props: {
        isSelected: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>