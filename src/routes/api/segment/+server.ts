import { faker } from "@faker-js/faker";
import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  let meter_nos = [
    "65639650",
    "73504871",
    "91156181",
    "29944996",
    "47552701",
    "04678138",
    "40974192",
    "65639650",
    "04678138",
    "40974192",
    "77399632",
    "41494834",
    "62500721",
    "93188173",
    "44669891",
    "95033002",
    "72080009",
    "23818422",
    "23818472",
    "23918422",
    "93818422",
    "27808422",
    "13816420",
  ];

type payments = {
    name: string;
    meter: string;
    january: number;
    febuary: number;
    march: number;
    april: number;
    may: number;
    june: number;
    july: number;
    august: number;
    september: number;
    october: number;
    november: number;
    december: number;
    address: string;
}[];

type transpayments = {
    name: string;
    meter: string;
    month: string;
    amount: number;
    address: string;
}[];

let payments: payments = Array.from({ length: 20 }, (_, i) => ({
    name: faker.person.fullName(),
    meter: faker.finance.accountNumber(),
    january: Math.floor(Math.random() * 10000),
    febuary: Math.floor(Math.random() * 10000),
    march: Math.floor(Math.random() * 10000),
    april: Math.floor(Math.random() * 10000),
    may: Math.floor(Math.random() * 10000),
    june: Math.floor(Math.random() * 10000),
    july: Math.floor(Math.random() * 10000),
    august: Math.floor(Math.random() * 10000),
    september: Math.floor(Math.random() * 10000),
    october: Math.floor(Math.random() * 10000),
    november: Math.floor(Math.random() * 10000),
    december: Math.floor(Math.random() * 10000),
    address: faker.location.streetAddress(),
}));

let months = ['januaray', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'november', 'december']

function transformPayments(pay: payments) {
    return pay.flatMap((pay) => {
        const transformedPayments = [];
        for (const [month, amount] of Object.entries(pay)) {
            if (month !== "name" && month != 'meter' && month != 'address') {
            transformedPayments.push({
                name: pay.name,
                meter: pay.meter,
                month: month,
                amount: amount,
                
                address: pay.address,
            });
        }
    }

    return transformedPayments;
    });
}



    return json(transformPayments(payments));
};
