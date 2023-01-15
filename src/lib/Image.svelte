<script lang="ts">
	import type { Picture } from "vite-imagetools";

	export let src: Picture | Promise<Picture>;
	export let alt: string;

	$: img = async () => await Promise.resolve(src);
</script>

{#await img() then image}
	<picture >
		{#each Object.entries(image.sources) as [format, images]}
			<source {...$$restProps} srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} /> 
		{/each}
		<img {...$$restProps} src={image.fallback.src} {alt} />
	</picture>
{/await}