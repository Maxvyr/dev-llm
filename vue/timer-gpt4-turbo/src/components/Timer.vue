<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div
      class="text-4xl font-bold text-center"
      :class="{ 'text-red-500': timeLeft <= 10 }"
    >
      {{ timeLeft }}
    </div>
    <button
      class="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      @click="startTimer"
      :disabled="timer !== null"
    >
      Start Timer
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "Timer",
  setup() {
    const timeLeft = ref(60); // 60 seconds countdown
    let timer: ReturnType<typeof setInterval> | null = null;

    function startTimer() {
      if (timer !== null) return;

      timer = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--;
        } else {
          clearInterval(timer);
          timer = null;
        }
      }, 1000);
    }

    onMounted(() => {
      // Optional: Start the timer when the component is mounted
      // startTimer();
    });

    onUnmounted(() => {
      if (timer) {
        clearInterval(timer);
      }
    });

    return {
      timeLeft,
      startTimer,
      timer,
    };
  },
});
</script>
