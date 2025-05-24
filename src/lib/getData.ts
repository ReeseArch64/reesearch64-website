import type { ApiDataInterface } from "@/interfaces/ApiDataInterface";

export async function getData(): Promise<ApiDataInterface> {
  const res = await fetch(
    "https://raw.githubusercontent.com/ReeseArch64/reesearch64-api/refs/heads/main/api/pt/br/data.json",
    // { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: ApiDataInterface = await res.json();

  console.log("Data fetched:", data);

  return data;
}
