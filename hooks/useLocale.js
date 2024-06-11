import en from "@/locales/en";
import ar from "@/locales/ar";
import { useRouter } from "next/router";

export const useLocale = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return { t };
};
