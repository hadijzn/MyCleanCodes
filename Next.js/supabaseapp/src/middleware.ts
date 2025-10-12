
import { NextRequest, NextResponse } from 'next/server'
import { supabaseServerClient } from '@/api/config'         

export async function middleware(request: NextRequest) {
  const supabase = supabaseServerClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],     
}
