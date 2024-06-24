import { NextResponse } from 'next/server'
import { push, ref, set } from '@firebase/database'
import { database } from '@/app/lib/fireabaseConfig'

export async function POST(req: Request): Promise<NextResponse<{ message: string }>>  {

  const body = await req.json()

  const ordersRef = ref(database, 'orders')
  const newDataRef = push(ordersRef)

  await set(newDataRef, body)

  return NextResponse.json({
    message: 'Order added successfully'
  })
}
