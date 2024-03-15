<script lang="ts">
	import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronRightSolid, ChevronDownSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import type Payments from '$lib/types/payments';

    export let chart: number[]

	type gs = {
		data: number;
		revenue: number;
		calls: number;
		sms: number;
	}[];

	type Month = {
		id: number;
		name: string;
		meter: string;
		address: string;
		month: string;
		cost: number;
	}[];

	let month: Month = $page.data.info;

	let options = {
		chart: {
			height: '360px',
			maxWidth: '120%',
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: true
			},
			toolbar: {
				show: true
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: true
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#1C64F2',
				gradientToColors: ['#1C64F2']
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 5
		},
		grid: {
			show: true,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0
			}
		},
		series: [
			{
				name: 'Revenue',
				data: chart,
				color: '#1A56DB'
			}
		],
		xaxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			],
			labels: {
				show: true
			},
			axisBorder: {
				show: true
			},
			axisTicks: {
				show: true
			}
		},
		yaxis: {
			show: true
		}
	};
</script>

<Card size='xl'>
	<div class="flex justify-between">
		<div>
			<h5 class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">
				₦ {chart.reduce((acc, currentValue) => acc + currentValue, 0)}
			</h5>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">Total Revenue</p>
		</div>
		
	</div>
	<Chart {options} />
</Card>
