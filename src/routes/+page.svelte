<script lang="ts">
	
	import profile from '$lib/assets/karsten-winegeart-uNVjLyA3xu8-unsplash.jpg';
	// @ts-ignore
	import { BellIcon, ListFilterIcon } from 'lucide-svelte';

	import { Avatar, WidgetPlaceholder, Skeleton } from 'flowbite-svelte';
	import Chart from '$lib/components/Chart.svelte';
	import Radar from '$lib/components/Radar.svelte';
	import Line from '$lib/components/Line.svelte';
	import { navigating } from '$app/stores';

	import { page } from '$app/stores';

	type Payments =  {
        name: string
        meter: string
        january: number
        febuary: number
        march: number
        april: number        
        may: number
        june : number
        july : number
        august : number
        september : number
        october: number
        november: number
        december: number
        address : string
        status : string
        graph: number[]
    }[];

	let payments: Payments = $page.data.info;


	
	

	

	let suspects = payments.filter((item) => item.status == 'suspect')
	

	export let data;



</script>


{#if $navigating}
	<div class=" space-y-8">
		<Skeleton />
		<WidgetPlaceholder />
	</div>
{:else}
	<div class=" w-[99%] pb-10">
		
		<div class="  flex w-full space-x-5">
			<div class=" w-[80%]">
				<h1 class=" font-bold text-4xl uppercase">market strategy analysis platform</h1>

				<div class=" flex w-full items-start justify-between pt-10">
					<div class=" w-[50%]">
						<Line values={$page.data.info}  />
					</div>
					<div class=" w-[50%] translate-x-2">
						<Chart values={$page.data.info}  />
					</div>
				</div>
			</div>
			<div class=" mt-10 w-[30%]">
				<h1 class=" text-2xl font-semibold">Statistics</h1>
				<br />
				<Radar suspect={suspects.length} non_suspect={payments.length - suspects.length}  />
			</div>
		</div>
	</div>
{/if}
