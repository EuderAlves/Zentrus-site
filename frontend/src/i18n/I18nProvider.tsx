import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Locale } from '../types/i18n'
import { I18nContext } from './I18nContext'
import { defaultLocale, translations } from './translations'

const storageKey = 'zentrus-locale'

function isLocale(value: string | null): value is Locale {
  return Boolean(value && value in translations)
}

function getInitialLocale() {
  const savedLocale = window.localStorage.getItem(storageKey)

  if (isLocale(savedLocale)) {
    return savedLocale
  }

  const browserLocale = window.navigator.language

  if (browserLocale.startsWith('es')) {
    return 'es-ES'
  }

  if (browserLocale.startsWith('en')) {
    return 'en-US'
  }

  return defaultLocale
}

type I18nProviderProps = {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    window.localStorage.setItem(storageKey, nextLocale)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
