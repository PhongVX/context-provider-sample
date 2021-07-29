export type LanguageTypeString = 'vn' | 'en'
export interface LanguageType {
    language: LanguageTypeString,
    updateLanguage?: (event: any) => void
}

