import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//ه راه ساده برای جابه‌جا شدن بین صفحه‌ها توی پروژه‌ با use navigate 
export default function Register() {
    const [Loading,setLoading] = useState(false)
    const navigate= useNavigate()

    const handleSubmit = async (e) => {
         e.preventDefault()
         setLoading(true)

        await new Promise((r) => setTimeout(r,2000)) //"صبر کن ۲ ثانیه، بعد ادامه بده."//

        // setTimeout(r, 2000) یعنی بعد از ۲ ثانیه تابع r رو صدا بزن.
 //// کاربردش چیه ؟ شبیه‌سازی تأخیر سرور بدون نیاز به API واقعی


// new Promise(...) یه پرامیس می‌سازه که بعد از اون ۲ ثانیه resolve می‌شه.

// await باعث می‌شه کد منتظر بمونه تا اون پرامیس resolve بشه، یعنی یه تأخیر ۲ ثانیه‌ای ایجاد می‌کنه.
        setLoading(false)
        navigate('/success')
    }
  return (
    <div>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter your name'></input>
            <button type='submit' disabled={Loading}> {Loading ? 'send' : 'sending...'}</button>
        </form>
    </div>
  )
}
