import { useMemo } from "react";
import ar from "../../lang/ar.js";
import en from "../../lang/en.js";
import { useLanguage } from "@/context/language_themeProvider.js";

export default function useLang() {
  const { language } = useLanguage();

  const localLang = language
    ? language
    : localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : "ar";
  const languages = { ar, en };
  const lang = useMemo(() => {
    const value = languages[localLang];
    return value;
  }, [localLang]);

  return typeof window !== "undefined" ? lang : null;
}
