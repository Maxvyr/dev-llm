<script lang="ts">
  import { onDestroy } from 'svelte';

  let countdown = 0;
  let countdownInput = 0;
  let countdownInterval: NodeJS.Timer;
  let isRunning = false;

  function startCountdown() {
    countdown = countdownInput;
    isRunning = true;
    countdownInterval = setInterval(() => {
      countdown--;
      if (countdown <= 0) {
        stopCountdown();
      }
    }, 1000);
  }

  function stopCountdown() {
    clearInterval(countdownInterval);
    isRunning = false;
  }

  function resetCountdown() {
    countdown = 0;
    countdownInput = 0;
    stopCountdown();
  }

  onDestroy(() => {
    clearInterval(countdownInterval);
  });
</script>

<div class="flex flex-col items-center">
  <h1 class="text-4xl font-bold mb-4">Countdown Timer</h1>
  
  <div class="text-6xl mb-8">
    {#if countdown > 0}
      {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')}
    {:else}
      0:00
    {/if}
  </div>

  <div class="mb-4">
    <label for="countdown-input" class="mr-2">Set Countdown (seconds):</label>
    <input 
      type="number" 
      id="countdown-input" 
      bind:value={countdownInput}
      class="border border-gray-300 rounded px-2 py-1"
    >
  </div>

  <div class="space-x-4">
    <button 
      on:click={startCountdown} 
      disabled={isRunning}
      class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
    >
      Start
    </button>
    <button
      on:click={stopCountdown}
      disabled={!isRunning} 
      class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
    >
      Stop
    </button>
    <button
      on:click={resetCountdown}
      class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"  
    >
      Reset
    </button>
  </div>
</div>