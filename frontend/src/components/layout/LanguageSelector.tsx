import type { ChangeEvent } from 'react'
import { useI18n } from '../../i18n/I18nContext'
import { languageOptions } from '../../i18n/translations'
import type { Locale } from '../../types/i18n'

export function LanguageSelector() {
  const { locale, setLocale, t } = useI18n()

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setLocale(event.target.value as Locale)
  }

  return (
    <label className="language-selector">
      <span className="sr-only">{t.languageSelector.label}</span>
      <select aria-label={t.languageSelector.label} value={locale} onChange={handleChange}>
        {languageOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.flag} {option.shortLabel}
          </option>
        ))}
      </select>
    </label>
  )
}
