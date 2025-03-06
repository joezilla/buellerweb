import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

// You should store this in an environment variable
const WEBHOOK_SECRET = process.env.CONTENTFUL_WEBHOOK_SECRET

export async function POST(request: NextRequest) {
  try {
    // Verify the webhook secret
    const headersList = await headers()
    const signature = headersList.get('x-contentful-webhook-signature')
    
    if (!signature || signature !== WEBHOOK_SECRET) {
      return NextResponse.json(
        { message: 'Invalid signature' },
        { status: 401 }
      )
    }

    // Parse the webhook body
    const body = await request.json()
    
    // Get the slug from the entry
    const slug = body.fields?.slug?.['en-US'] || ''
    
    console.log(`Revalidating ${slug}.`);

    // Revalidate both the specific page and the home page
    // (in case the content is used on the home page)
    revalidatePath(`/${slug}`)
    revalidatePath('/')

    return NextResponse.json(
      { 
        message: `Revalidation of ${slug} successful`,
        revalidated: true,
        now: Date.now()
      },
      { status: 200 }
    )
  } catch (err) {
    console.error('Revalidation error:', err)
    return NextResponse.json(
      { 
        message: 'Error revalidating',
        error: err instanceof Error ? err.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 