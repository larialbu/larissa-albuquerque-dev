interface LanguageSelectorProps {
  currentLanguage: 'pt' | 'en';
  onLanguageChange: (lang: 'pt' | 'en') => void;
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="lang-selector-container">
      <select 
        id="lang-select" 
        value={currentLanguage} 
        onChange={(e) => onLanguageChange(e.target.value as 'pt' | 'en')}
      >
        <option value="pt">PT-BR</option>
        <option value="en">EN-US</option>
      </select>
    </div>
  );
}
