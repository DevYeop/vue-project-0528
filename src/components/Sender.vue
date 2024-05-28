<template>
  <div style="border: solid 1px gray; margin: 5px; padding: 5px">
    <h2>Sender</h2>
    <hr />
    <button @click="sendMessage">이벤트 발신</button>
    <button @click="sendMessage2">이벤트 발신</button>
  </div>
</template>

<script>
export default {
  name: 'Sender',
  methods: {
    sendMessage() {
      this.emitter.emit('message', Date.now() + '에 발신된 메시지');
    },
    sendMessage2() {
      this.star2.emit('message', Date.now() + '에 발신된 메시지 (starII)');
    },
  },
};
</script>
