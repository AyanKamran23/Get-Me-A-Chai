
import React from 'react'
import PaymentPage from '@/components/PaymentPage'

const Username = async ({ params }) => {
const resolvedParams = await params;
const username = resolvedParams.username;
return (
  <>
<PaymentPage username={username}/>
    </>
  )
}

export default Username

export async function generateMetadata ({params}) {
  const resolvedParams = await params;
  const username = resolvedParams.username;
  return {
    title: `${username} - Get Me A Chai`

  }
}
