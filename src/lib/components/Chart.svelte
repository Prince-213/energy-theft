<script lang="ts">
	import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronRightSolid, ChevronDownSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	

	type gs = {
		data: number;
		revenue: number;
		calls: number;
		sms: number;
	}[];

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
				data: [
					month.reduce((acc, currentValue) => acc + currentValue.january, 0),
					month.reduce((acc, currentValue) => acc + currentValue.febuary, 0),
					month.reduce((acc, currentValue) => acc + currentValue.march, 0),
					month.reduce((acc, currentValue) => acc + currentValue.april, 0),
					month.reduce((acc, currentValue) => acc + currentValue.may, 0),
					month.reduce((acc, currentValue) => acc + currentValue.june, 0),
					month.reduce((acc, currentValue) => acc + currentValue.july, 0),
					month.reduce((acc, currentValue) => acc + currentValue.august, 0),
					month.reduce((acc, currentValue) => acc + currentValue.september, 0),
					month.reduce((acc, currentValue) => acc + currentValue.october, 0),
					month.reduce((acc, currentValue) => acc + currentValue.november, 0),
					month.reduce((acc, currentValue) => acc + currentValue.december, 0)

				],
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

<Card size='lg'>
	<div class="flex justify-between">
		<div>
			
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">Total Revenue Analysis</p>
		</div>
		<div
			class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500"
		>
			12%
			<ChevronRightSolid class="ms-1 h-3 w-3" />
		</div>
	</div>
	<Chart {options} />
</Card>
