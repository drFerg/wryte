<script lang="ts">
  import { inject } from '@vercel/analytics';
  import { onMount } from 'svelte';
  import { webVitals } from '$lib/vitals';
  import { browser } from "$app/environment";
	import { page } from '$app/stores';

  const analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    })
  }
  onMount(() => inject());
</script>