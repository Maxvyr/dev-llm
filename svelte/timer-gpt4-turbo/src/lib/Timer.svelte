<script lang="ts">
  import { onMount } from 'svelte';

  let duration: number = 120; // Duration in seconds
  let remaining: number = duration;

  const countdown = () => {
    const interval = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  onMount(() => {
    countdown();
  });
</script>

<div class="timer bg-blue-500 text-white font-bold rounded-lg p-4 flex justify-center items-center">
  {remaining} seconds
</div>

<style>
  .timer {
    /* Additional styling if needed */
  }
</style>