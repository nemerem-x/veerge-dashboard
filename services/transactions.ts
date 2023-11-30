import { Selection } from "@nextui-org/react";

interface Info {
  amount: number;
  date: string;
  metadata?: {
    name: string;
    type: string;
    email: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: string;
}

export async function transactions() {
  const response = await fetch(
    "https://fe-task-api.mainstack.io/transactions"
  );
  const data = await response.json();
  return (data as Info[]);
}

export async function transactionsFilter(startDate: string, endDate: string, selectedType?: Selection, selectedStatus?: Selection) {

  const type = [
    "store_transaction",
    "get_tipped",
    "withdrawal",
    "deposit",
    "chargeback",
    "cashback",
  ];
  const status = ["successful", "pending", "failed"];

  const response = await fetch(
    "https://fe-task-api.mainstack.io/transactions"
  );
  const data = await response.json();

  const start = new Date(startDate);
  const end = new Date(endDate);

  const resultByDate = data.filter((a: Info) => {
    const date = new Date(a.date);
    return date >= start && date <= end;
  });

  const array = Array.from(selectedType ?? []).map(Number).map(i => type[i]);

  const result = resultByDate.filter((a: Info) => {
    const values = Object.values(a);
    if (array.length > 0) {
      return array?.some(q => values.includes(q));
    } else {
      return resultByDate
    }
  });

  const array2 = Array.from(selectedStatus ?? []).map(Number).map(i => status[i]);

  const result2 = result.filter((a: Info) => {
    const values = Object.values(a);
    if (array2.length > 0) {
      return array2?.some(q => values.includes(q));
    } else {
      return result
    }
  });

  return result2;
}
