import languages from '../shared/dictionaries/Languages.json';

export function getLanguageNameByCode(code: string): string | undefined {
  let language = languages.filter(l => {
    return l.code === code.toUpperCase()
  });
  let languageName = language.length > 0 ? language[0].name : 'Unknown language';

  return languageName;
}
