<template>
  <div class="w-full flex flex-wrap bg-white rounded-lg p-4 shadow-lg">
    <div class="flex w-full border-b pb-2">
        <div class="flex-grow text-gray-500 text-lg font-semibold">
            <slot name="title">
                Thống kê
            </slot>
        </div>
        <div class="flex">
            <slot name="top-right">
                
            </slot>
        </div>
    </div>
    <div class="flex flex-wrap w-full mt-3">
        <slot>

        </slot>
    </div>
    <div class="flex flex-wrap w-full mt-3">
        <slot name="footer">

        </slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>