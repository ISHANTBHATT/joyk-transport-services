"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentPath = usePathname();

  const handleLanguageChange = (lang) => {
    router.push(`/${lang}${currentPath}`);
  };

  return (
    <div className="ml-6 relative group">
      <span className="text-black cursor-pointer text-sm">
        {router.locale?.toUpperCase()}
      </span>
      <div className="absolute w-32 -right-4 hidden group-hover:block bg-white shadow-lg py-2">
        <ul>
          <li>
            <button
              onClick={() => handleLanguageChange("en")}
              className="w-full text-left"
            >
              <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                <img
                  src="/images/en.png"
                  alt="English"
                  className="w-6 h-4 mr-2 rounded-sm"
                />
                English
              </div>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLanguageChange("fr")}
              className="w-full text-left"
            >
              <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                <img
                  src="/images/fr.png"
                  alt="French"
                  className="w-6 h-4 mr-2 rounded-sm"
                />
                Français
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
