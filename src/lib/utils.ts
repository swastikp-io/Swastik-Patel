import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CONTACT_EMAIL = ["dev.swastikpatel0305", "gmail.com"].join("@");
export const MAILTO_CONTACT = `mailto:${CONTACT_EMAIL}`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/swastik-patel-515b6138b/";
export const X_URL = "https://x.com/_swastik0x";
export const CV_URL = "/Swastik_Patel_CV.pdf";
export const NOTION_FORM_URL = "https://four-grenadilla-f40.notion.site/413cb488caf68078b748efafcc61353e";
