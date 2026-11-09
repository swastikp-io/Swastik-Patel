import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CONTACT_EMAIL = ["dev.swastikpatel0305", "gmail.com"].join("@");
export const MAILTO_CONTACT = `mailto:${CONTACT_EMAIL}`;
