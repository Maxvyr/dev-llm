<template>
  <Timer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./components/Timer.vue";

export default defineComponent({
  name: "App",
  components: {
    Timer,
  },
});
</script>
