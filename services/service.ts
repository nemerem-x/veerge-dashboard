interface Data {
  // ...
}

export async function balance() {
  const response = await fetch(
    "https://..."
  );
  const data = await response.json();
  return (data as Data);
}
