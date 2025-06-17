import type { ApiDataInterface } from '@/interfaces/ApiDataInterface'

export async function getData(): Promise<ApiDataInterface> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333'

  const locale = "pt/br"

  const res = await fetch(`${baseUrl}/api/${locale}/data.json`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
