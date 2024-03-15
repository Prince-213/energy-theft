import type { PageServerLoad } from './$types';
import { faker } from '@faker-js/faker';
import { page } from '$app/stores' 

export const load = (async ({ locals, fetch }) => {


    type Payments = {
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
    
    let response = await fetch("/api/payments");
    let data: Payments = await response.json();
    
    return {
        info: data
    };
}) satisfies PageServerLoad;