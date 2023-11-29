interface Wallet {
  balance: number;
  ledger_balance: number;
  pending_payout: number;
  total_payout: number;
  total_revenue: number;
}

export async function balance() {
  const response = await fetch(
    "https://fe-task-api.mainstack.io/wallet"
  );
  const data = await response.json();
  return (data as Wallet);
}
