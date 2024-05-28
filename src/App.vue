<!-- <script setup>
import CheckboxItem from '@/components/CheckboxItem.vue';
</script> -->

<script>
import CheckboxItem from '@/components/CheckboxItem.vue';
import InputName from '@/components/InputName.vue';
import Sender from '@/components/Sender.vue';
import Receiver from '@/components/Receiver.vue';

export default {
  name: 'App',
  // components: { CheckboxItem: CheckboxItem }, // 표준 프로퍼티
  components: { CheckboxItem, InputName, Sender, Receiver }, // 단축 프로퍼티 (Shorthand-property)
  data() {
    return {
      parentName: '', // ㅋㅋㅋㅋ
      nickName: '',
      items: [
        { id: 11, name: 'BTS', checked: true },
        { id: 22, name: 'Black Pink', checked: false },
        { id: 33, name: 'EXO', checked: false },
        { id: 44, name: 'ITZY', checked: false },
      ],
    };
  },
  methods: {
    nameChangedHandler(e) {
      // { name: 'ㅋㅋㅋㅋ' }
      this.parentName = e.name; //  'ㅋㅋㅋㅋ'
      this.nickName = e.name; //  'ㅋㅋㅋㅋ'
    },
  },
};
</script>

<template>
  <main>
    <!-- <CheckboxItem /> -->
    <!-- <CheckboxItem
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :checked="item.checked"
    /> -->
    <!-- <CheckboxItem
      class="m-5"
      v-for="(item, index) in items"
      :key="index"

      :name="item.name"
      :checked="item.checked"
    /> -->
    <!-- <CheckboxItem
      v-for="starcraft in items"
      :key="starcraft.id"
      :item="starcraft"
    /> -->

    <InputName @nameChanged="nameChangedHandler" />
    <br />
    <h3>App 데이터 : {{ parentName }}</h3>
    <br />

    <!-- <Sender />
    <hr />
    <Receiver /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
