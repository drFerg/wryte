<script lang="ts">
	import type { Picture } from "vite-imagetools";

	export let src: Picture;
	export let alt: string;
	console.log(src)
</script>

<picture >
	{#each Object.entries(src.sources) as [format, images]}
		<source {...$$restProps} srcset={images.map((i) => `${i.src}`).join(', ')} type={'image/' + format} /> 
	{/each}
	<img {...$$restProps} src={src.fallback.src} {alt} />
</picture>