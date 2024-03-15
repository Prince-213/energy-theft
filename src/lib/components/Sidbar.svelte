<script lang="ts">
	import logo from '$lib/assets/logos.jpg';
    import { fade } from 'svelte/transition';
	import {
		LayoutDashboardIcon,
		UserIcon,
		
		ReceiptIcon,
		SettingsIcon,
		LogOutIcon,
		
		SendIcon
	} from 'lucide-svelte';
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	$: pathName = $page.url.pathname;

	type links = {
		title: string;
		icon: any;
		path: string;
	}[];

	const links: links = [
		{
			title: 'Dashboard',
			icon: LayoutDashboardIcon,
			path: '/'
		},
		{
			title: 'Customers',
			icon: UserIcon,
			path: '/artists'
		},
		
		{
			title: 'Message',
			icon: SendIcon,
			path: '/sales'
		}
	];
</script>

<aside transition:fade class=" fixed min-h-full  w-[15%] bg-[#f2f2f2]">
	<div class=" pt-10 mx-auto flex h-[80vh] w-[75%] flex-col items-center justify-between">
		<div>
			<img width="200px" src={logo} alt="" />
		</div>
		<nav class=" space-y-5">
			{#each links as link, idx}
				<button
                    on:click={() => goto(link.path)}
					class={` flex w-full rounded-[4px]  px-4 py-3 ${
						pathName == link.path ? 'bg-[#739fe2] text-black' : 'bg-transparent text-[#808080]'
					} items-center space-x-4  transition-all duration-150`}
				>
					<a href={link.path} data-sveltekit-preload-code="hover"  class=" flex space-x-4 items-center">
						<svelte:component this={link.icon} />
						<p class=" text-base font-medium">{link.title}</p>
					</a>
					
				</button>
			{/each}
		</nav>
		<nav class=" space-y-5">
			

			<li
				class={` flex w-full rounded-[4px]  px-4 py-3 ${
					pathName == '/logout' ? 'bg-[#B4CD93] text-black' : 'bg-transparent text-red-500'
				} items-center space-x-4  transition-all duration-150`}
			>
				<svelte:component this={LogOutIcon} />
				<p class=" text-base font-medium">Log Out</p>
			</li>
		</nav>
	</div>
</aside>
