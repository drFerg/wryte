<script lang="ts">
  import { inject } from '@vercel/analytics';
  import { onMount } from 'svelte';

  onMount(() =>inject());
</script>