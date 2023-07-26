import countries from '../shared/dictionaries/Countries.json'

export function getCountryNameByCode(code: string): string | undefined {
  let country = countries.filter(c => {
    return c.code === code.toUpperCase()
  });
  let countryName = country.length > 0 ? country[0].name : 'Unknown country';

  return countryName;
}