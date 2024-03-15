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
      status: string;
  }[];

  type transpayments = {
      name: string;
      meter: string;
      month: string;
      amount: number;
      address: string;
  }[];

  let payments: payments = [{
    name: 'Okonkwo Jacobs',
    meter: '099887',
    january: 8000,
    febuary: 8000,
    march: 4000,
    april: 4000,
    may: 4000,
    june: 4000,
    july: 0,
    august: 0,
    september: 500,
    october: 0,
    november: 0,
    december: 500,
    address: 'Zoo Estate',
    status: 'suspect'
  }, {
    name: 'Maduabuchi Daniel',
    meter: '079884',
    january: 8000,
    febuary: 8000,
    march: 8000,
    april: 8000,
    may: 6000,
    june: 6000,
    july: 6000,
    august: 1000,
    september: 200,
    october: 1000,
    november: 0,
    december: 0,
    address: 'New Haven',
    status: 'suspect'
  }, {
    name: 'Joel Somto',
    meter: '020784',
    january: 6000,
    febuary: 6000,
    march: 4000,
    april: 2000,
    may: 500,
    june: 500,
    july: 500,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
    address: 'New Haven',
    status: 'suspect'
  }, {
    name: 'Anthony Edward',
    meter: '030984',
    january: 8000,
    febuary: 6000,
    march: 5000,
    april: 5000,
    may: 7000,
    june: 5000,
    july: 9000,
    august: 9000,
    september: 8000,
    october: 9000,
    november: 8000,
    december: 7000,
    address: 'New Haven',
    status: 'Non Suspect'
  }, {
    name: 'Chime Ike',
    meter: "93188173",
    january: 9000,
    febuary: 8000,
    march: 8000,
    april: 8000,
    may: 8000,
    june: 8000,
    july: 8000,
    august: 8000,
    september: 7000,
    october: 6000,
    november: 8000,
    december: 8000,
    address: 'Ogui Road',
    status: 'Non Suspect'
  }, {
    name: 'Okonkwo John',
    meter: "54188163",
    january: 8000,
    febuary: 8000,
    march: 8000,
    april: 8000,
    may: 8000,
    june: 8000,
    july: 8000,
    august: 8000,
    september: 7000,
    october: 6000,
    november: 8000,
    december: 8000,
    address: 'Ogui Road',
    status: 'Non Suspect'
  }, {
    name: 'Samuel Uche',
    meter: "85188375",
    january: 9000,
    febuary: 9000,
    march: 9000,
    april: 9000,
    may: 9000,
    june: 6000,
    july: 8000,
    august: 9000,
    september: 9000,
    october: 8000,
    november: 9000,
    december: 9000,
    address: 'Ogui Road',
    status: 'Non Suspect'
  },];

  let months = ['januaray', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'november', 'december']

  payments = payments.map(payment => ({
    ...payment,
    graph: [payment.january, payment.febuary, payment.march, payment.april, payment.may, payment.june, payment.july, payment.august, payment.september, payment.october, payment.november, payment.december],
  }));
  


  return json(payments);
};
