<template>
  <!-- props를 바꾸려 하면 안된다 -->
  <!-- <li><input type="checkbox" v-model="checked" /> {{ name }}</li> -->
  <!-- <li><input type="checkbox" :checked="checked" /> {{ name }}</li>
  <li><input type="text" v-model="item.checked" /> {{ name }}</li> -->
  <!-- <li><input type="checkbox" :checked="item.checked" /> {{ item.name }}</li> -->
</template>
{ id: 11, name: 'BTS', checked: true },
<script>
export default {
  name: 'CheckboxItem444',
  props: ['name', 'checked'],
  props: {
    item: Object,
    // name: String,
    // id: [Number, String],
    // checked: {
    //   type: Boolean,
    //   required: false,
    //   default: false,
    // },
  },
  // data() {
  //   return {
  //     checked: false,
  //   };
  // },
};
</script>

<style scoped></style>
