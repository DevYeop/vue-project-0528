<template>
  <!-- props를 바꾸려 하면 안된다 -->
  <!-- <li><input type="checkbox" v-model="checked" /> {{ name }}</li> -->
  <!-- <li><input type="checkbox" :checked="checked" /> {{ name }}</li> -->
  <li><input type="checkbox" :checked="item.checked" /> {{ item.name }}</li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  // props: ['name', 'checked'],
  props: {
    item: Object,
    id: [Number, String],
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // data() {
  //   return {
  //     checked: false,
  //   };
  // },
};
</script>

<style scoped></style>
