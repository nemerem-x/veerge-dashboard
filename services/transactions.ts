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

export async function transactionsFilter(startDate: string, endDate: string) {
  const response = await fetch(
    "https://fe-task-api.mainstack.io/transactions"
  );
  const data = await response.json();

  const start = new Date(startDate);
  const end = new Date(endDate);

  const resultProductData = data.filter((a:Info) => {
    const date = new Date(a.date);
    return date >= start && date <= end;
  });

  return resultProductData;
}
