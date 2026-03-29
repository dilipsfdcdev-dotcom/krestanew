import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppUrl(message: string, phone = '919888932555') {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
