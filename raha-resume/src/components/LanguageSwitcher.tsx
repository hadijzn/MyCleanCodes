"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (locale: string) => {
    const newPath = pathname.replace(/^\/(en|fa)/, `/${locale}`);
    if (newPath !== pathname) {
      router.replace(newPath);
    }
  };

  return (
    <div className="flex  flex-col">
      <button className="text-violet-700" onClick={() => switchTo("fa")}>
        فارسی
      </button>
      <p className="text-violet-700">——</p>
      <button className="text-violet-700" onClick={() => switchTo("en")}>
        English
      </button>
    </div>
  );
}
// TODO :  make it work 
// TODO : Give best style for language