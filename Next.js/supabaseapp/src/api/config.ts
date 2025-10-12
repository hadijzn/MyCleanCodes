import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

// export const supabaseServerClient = () => {
//   const cookieStore = cookies()
//   return createServerClient<Database>(
//     process.env.SUPABASE_URL!,
//     process.env.SUPABASE_KEY!,
//     {
//       cookies: {
//         get(name: string) {
//           return  cookieStore.get(name)?.value
//         }
//       }
//     }
//   )
// }


export const supabaseServerClient = () => {
  const cookiesStore = cookies()
  return createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookiesStore.get(name)?.value
        }
      }
    }
  )
}

