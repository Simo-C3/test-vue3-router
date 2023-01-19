<script setup lang="ts"></script>

<template>
  <router-link
    to="/slide/:id"
    class="card block rounded-lg overflow-hidden max-w-fit cursor-pointer hover:shadow"
  >
    <div
      class="relative w-[28vw] max-w-[350px] min-w-[280px] h-[20vw] max-h-[250px] min-h-[200px] m-0 rounded-lg border border-gray-100 box-border overflow-hidden"
    >
      <img
        src="@/assets/test1.png"
        alt=""
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
    <div class="px-5 py-3 m-0">
      <div class="card__title text-gray-600">hoge</div>
      <div class="card__updated w-full text-end text-gray-500">
        2022/01/23 13:32:21
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.card {
  &__title {
    font-size: clamp(20px, 2vw, 26px);
  }

  &__updated {
    font-size: clamp(14px, 1.4vw, 18px);
  }
}
</style>
