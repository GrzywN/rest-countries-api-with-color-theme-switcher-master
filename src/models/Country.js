import PropTypes from "prop-types";
import countries from "i18n-iso-countries";
import english from "i18n-iso-countries/langs/en.json";

const NOT_FOUND = "Not found.";
const NO_BORDER_COUNTRIES = "This country has no border countries.";

countries.registerLocale(english);

class Country {
  constructor(data) {
    this.data = data;

    this.flag = this.extractFlag();
    this.name = this.extractName();
    this.nativeName = this.extractNativeName();
    this.population = this.extractPopulation();
    this.region = this.extractRegion();
    this.subregion = this.extractSubregion();
    this.capital = this.extractCapital();
    this.topLevelDomain = this.extractTopLevelDomain();
    this.currencies = this.extractCurrencies();
    this.languages = this.extractLanguages();
    this.borderCountries = this.extractBorderCountries();
  }

  extractFlag() {
    if (
      this.data?.flags.svg == null &&
      this.data?.flags.png == null &&
      this.data?.flag == null
    ) {
      return NOT_FOUND;
    }

    return this.data.flags.svg || this.data.flags.png || this.data.flag;
  }

  extractName() {
    if (this.data.name.common == null && this.data.name.official == null) {
      return NOT_FOUND;
    }

    return this.data.name.common || this.data.name.official;
  }

  extractNativeName() {
    if (this.data.nativeName == null && this.data.name.nativeName == null) {
      return NOT_FOUND;
    }

    return (
      this.data.nativeName ||
      Object.values(this.data.name.nativeName)[0].official
    );
  }

  extractPopulation() {
    if (this.data.population == null) {
      return NOT_FOUND;
    }

    return this.data.population.toLocaleString("en-GB");
  }

  extractRegion() {
    if (this.data.region == null) {
      return NOT_FOUND;
    }

    return this.data.region;
  }

  extractSubregion() {
    if (this.data.subregion == null) {
      return NOT_FOUND;
    }

    return this.data.subregion;
  }

  extractCapital() {
    if (this.data.capital == null) {
      return NOT_FOUND;
    }

    return this.data.capital[0];
  }

  extractTopLevelDomain() {
    if (this.data.tld == null) {
      return [NOT_FOUND];
    }

    return this.data.tld;
  }

  extractCurrencies() {
    if (this.data.currencies == null) {
      return NOT_FOUND;
    }

    const currencies = Object.values(this.data.currencies);
    const currencyNames = currencies.map((currency) => currency.name);
    const joinedCurrencyNames = currencyNames.join(", ");

    return joinedCurrencyNames;
  }

  extractLanguages() {
    if (this.data.languages == null) {
      return NOT_FOUND;
    }

    const languagesNames = Object.values(this.data.languages);
    const joinedLanguagesNames = languagesNames.join(", ");

    return joinedLanguagesNames;
  }

  extractBorderCountries() {
    if (this.data.borders == null) {
      return [NO_BORDER_COUNTRIES];
    }

    const language = "en";
    const options = {
      select: "alias",
    };

    const borderCountriesCodes = this.data.borders;
    const borderCountriesNames = borderCountriesCodes.map((code) => {
      const countryName = countries.getName(code, language, options);

      return countryName;
    });

    return borderCountriesNames;
  }
}

const CountryPropTypes = PropTypes.shape({
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  topLevelDomain: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  borderCountries: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export { CountryPropTypes };
export default Country;
