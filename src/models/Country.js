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
    try {
      return (
        this.data.flags.svg ||
        this.data.flags.png ||
        this.data.flag ||
        NOT_FOUND
      );
    } catch (error) {
      return NOT_FOUND;
    }
  }

  extractName() {
    try {
      return this.data.name.common || this.data.name.official || NOT_FOUND;
    } catch (error) {
      return NOT_FOUND;
    }
  }

  extractNativeName() {
    try {
      return (
        this.data.nativeName ||
        Object.values(this.data.name.nativeName)[0].official ||
        NOT_FOUND
      );
    } catch (error) {
      return NOT_FOUND;
    }
  }

  extractPopulation() {
    try {
      return this.data.population.toLocaleString("en-GB") || NOT_FOUND;
    } catch (error) {
      return NOT_FOUND;
    }
  }

  extractRegion() {
    try {
      return this.data.region || NOT_FOUND;
    } catch (error) {
      return NOT_FOUND;
    }
  }

  extractSubregion() {
    try {
      return this.data.subregion || NOT_FOUND;
    } catch (error) {
      return NOT_FOUND;
    }
  }

  extractCapital() {
    try {
      return this.data.capital[0] || NOT_FOUND;
    } catch (error) {
      return NOT_FOUND;
    }
  }

  extractTopLevelDomain() {
    try {
      return this.data.tld || [NOT_FOUND];
    } catch (error) {
      return [NOT_FOUND];
    }
  }

  extractCurrencies() {
    try {
      const currencies = Object.values(this.data.currencies);
      const currencyNames = currencies.map((currency) => currency.name);
      const joinedCurrencyNames = currencyNames.join(", ");

      return joinedCurrencyNames;
    } catch (error) {
      return NOT_FOUND;
    }
  }

  extractLanguages() {
    try {
      const languagesNames = Object.values(this.data.languages);
      const joinedLanguagesNames = languagesNames.join(", ");

      return joinedLanguagesNames;
    } catch (error) {
      return NOT_FOUND;
    }
  }

  extractBorderCountries() {
    try {
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
    } catch (error) {
      return [NO_BORDER_COUNTRIES];
    }
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
