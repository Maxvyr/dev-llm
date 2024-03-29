<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="text-6xl font-bold text-blue-600 mb-8">
      {{ formatTime(timeLeft) }}
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      @click="startTimer"
      :disabled="isTimerRunning"
    >
      Start Timer
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from "vue";

const totalSeconds = 60;
const timeLeft = ref(totalSeconds);
const isTimerRunning = ref(false);
let interval: number | undefined;

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const startTimer = () => {
  isTimerRunning.value = true;
  interval = setInterval(() => {
    if (timeLeft.value === 0) {
      clearInterval(interval);
      isTimerRunning.value = false;
      timeLeft.value = totalSeconds;
    } else {
      timeLeft.value--;
    }
  }, 1000);
};

onUnmounted(() => {
  clearInterval(interval);
});
</script>
