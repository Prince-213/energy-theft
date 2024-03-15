<script lang="ts">
	import { page } from '$app/stores';
	import type Payments from '$lib/types/payments';
	import { Chart, Card } from 'flowbite-svelte';
	import {
		UserGroupSolid,
		ArrowUpSolid,
		
	} from 'flowbite-svelte-icons';

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

	let month: Payments = $page.data.info;

	

	
	
	const options = {
		colors: ['#1ADB84', ],
		series: [
			{
				name: 'Units Sold',
				color: '#1ADB5A',
				data: [
					{ x: 'Jan', y: month.reduce((acc, currentValue) => acc + currentValue.january, 0)},
					{ x: 'Feb', y: month.reduce((acc, currentValue) => acc + currentValue.febuary, 0) },
					{ x: 'Mar', y: month.reduce((acc, currentValue) => acc + currentValue.march, 0) },
					{ x: 'Apr', y: month.reduce((acc, currentValue) => acc + currentValue.april, 0) },
					{ x: 'May', y: month.reduce((acc, currentValue) => acc + currentValue.may, 0) },
					{ x: 'Jun', y: month.reduce((acc, currentValue) => acc + currentValue.june, 0) },
					{ x: 'Juy', y: month.reduce((acc, currentValue) => acc + currentValue.july, 0) },
					{ x: 'Aug', y: month.reduce((acc, currentValue) => acc + currentValue.august, 0) },
					{ x: 'Sep', y: month.reduce((acc, currentValue) => acc + currentValue.september, 0)},
					{ x: 'Oct', y: month.reduce((acc, currentValue) => acc + currentValue.october, 0)},
					{ x: 'Nov', y: month.reduce((acc, currentValue) => acc + currentValue.november, 0) },
					{ x: 'Dec', y: month.reduce((acc, currentValue) => acc + currentValue.december, 0)},
				]
			},
			
		],
		chart: {
			type: 'bar',
			height: '320px',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '80%',
				borderRadiusApplication: 'end',
				borderRadius: 8
			}
		},
		tooltip: {
			shared: false,
			intersect: false,
			style: {
				fontFamily: 'Inter, sans-serif'
			}
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 0,
			colors: ['transparent']
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -14
			}
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		xaxis: {
			floating: true,
			labels: {
				show: false,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
				}
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		},
		fill: {
			opacity: 1
		}
	};
</script>

<Card>
	<div class="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
		<div class="flex items-center">
			<div
				class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
			>
				<UserGroupSolid class="h-6 w-6 text-gray-500 dark:text-gray-400" />
			</div>
			<div>
				
				<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
					Consumed Units Analysis
				</p>
			</div>
		</div>
		<div>
			<span
				class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
			>
				<ArrowUpSolid class="me-1.5 h-2.5 w-2.5" />
				42.5%
			</span>
		</div>
	</div>
	<div class="grid grid-cols-2">
		<dl class="flex items-center">
			<dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Units Sold</dt>
		
		</dl>
		
	</div>
	<Chart {options} />
	
</Card>
