<script lang="ts">
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';

	export let data;

	let dog = 'go';

	let { info } = data;

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch,
		ListPlaceholder,
		Button,
		Card,
		Label,
		Input
	} from 'flowbite-svelte';

	import UserChart from '$lib/components/UserChart.svelte';
	import image from '$lib/pexels-google-deepmind-17483811.jpg';

	/*payments.forEach((info) => {
		const { meter, amount, address } = info;

		if (nameData[meter]) {
			nameData[meter].totalAmount += amount;
			nameData[meter].count += 1;
			nameData[meter].address = address;
		} else {
			nameData[meter] = { totalAmount: amount, count: 1, address: address };
		}
	});

	

	

	const averages = Object.entries(nameData).map(([meter, data]: [string, { address: string; totalAmount: number; count: number }]) => ({
		meter,
		address: data.address,
		averageAmount: data.totalAmount / data.count,
		count: data.count,
		totalAmount: data.totalAmount
		
	}));*/

	import { ImagePlaceholder, Modal } from 'flowbite-svelte';
	import { slide } from 'svelte/transition';
	import { CheckCheckIcon, AlertCircle, SearchIcon } from 'lucide-svelte';

	let openRow: number | null;
	let details: {
		name?: any;
		meter?: string;
		averageAmount?: number;
		count?: any;
		totalAmount?: any;
	};

	const toggleRow = (i: number) => {
		openRow = openRow === i ? null : i;
	};

	const calcSum = (i: number[]) => {
		let sum = 0;

		for (let index = 0; index < i.length; index++) {
			sum += i[index];
		}

		return sum;
	};

	const calcAverage = (i: number[]) => {
		let sum = calcSum(i);

		return sum / i.length;
	};

	let searchTerm: string = '';

	$: filteredItems = info?.filter((item) => item.meter.indexOf(searchTerm.toLowerCase()) !== -1);
</script>

<Label>
	<Input bind:value={searchTerm} placeholder=" Search Info.." class=" mb-5 w-[20em]"></Input>
</Label>

<Table class=" py-8">
	<TableHead>
		<TableHeadCell>Meter No.</TableHeadCell>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Average Amount</TableHeadCell>
		<TableHeadCell>Total Amount</TableHeadCell>
		<TableHeadCell>No. Payments</TableHeadCell>
		<TableHeadCell>Status</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each filteredItems as item, i}
			<TableBodyRow on:click={() => toggleRow(i)}>
				<TableBodyCell>{item.meter}</TableBodyCell>
				<TableBodyCell>{item.name}</TableBodyCell>
				<TableBodyCell>{Math.floor(calcAverage(item.graph))}</TableBodyCell>
				<TableBodyCell>{calcSum(item.graph)}</TableBodyCell>
				<TableBodyCell>{item.graph.length}</TableBodyCell>
				<TableBodyCell>
					{#if item.status == 'suspect'}
						<button
							class=" flex items-center space-x-2 rounded-full border-2 border-red-500 px-4 py-2 text-red-500"
						>
							<AlertCircle />
							<h4>Suspect</h4>
						</button>
					{:else}
						<button
							class=" flex items-center space-x-2 rounded-full border-2 border-green-500 px-4 py-2 text-green-500"
						>
							<CheckCheckIcon />
							<h4>Non Suspect</h4>
						</button>
					{/if}
				</TableBodyCell>
			</TableBodyRow>
			{#if openRow === i}
				<TableBodyRow class=" py-8" on:dblclick={() => (details = item)}>
					<TableBodyCell colspan="4" class="p-0">
						<div
							class="grid grid-cols-2 gap-x-5 px-2 py-3"
							transition:slide={{ duration: 300, axis: 'y' }}
						>
							<div class=" ">
								<UserChart chart={item.graph} />
							</div>

							<div class=" space-y-5">
								<div class=" grid grid-cols-2 gap-x-5">
									<div
										class=" w-fit rounded-lg border-2 border-gray-300 px-6 py-4 text-lg font-semibold"
									>
										Meter No: {item.meter}
									</div>
									<div
										class=" w-fit rounded-lg border-2 border-gray-300 px-6 py-4 text-lg font-semibold"
									>
										Meter Name: {item.name}
									</div>
								</div>
								<div class="w-full space-y-4">
									<Card img={image} href="/" horizontal size="lg">
										<h5
											class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
										>
											{item.address}
										</h5>
										<p class="mb-3 w-[50%] font-normal text-gray-700 dark:text-gray-400">
											Lorem ipsum dolor sit amet
										</p>
									</Card>
								</div>
								{#if item.status == 'suspect'}
									<button
										class=" flex items-center space-x-5 rounded-full border-2 border-red-500 px-8 py-4 text-red-500"
									>
										<AlertCircle />
										<h4>Suspect</h4>
									</button>
								{:else}
									<button
										class=" flex items-center space-x-5 rounded-full border-2 border-green-500 px-8 py-4 text-green-500"
									>
										<CheckCheckIcon />
										<h4>Non Suspect</h4>
									</button>
								{/if}
							</div>
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/if}
		{/each}
	</TableBody>
</Table>
<Modal title={details?.name} open={!!details} autoclose outsideclose>
	<ImagePlaceholder />
</Modal>
