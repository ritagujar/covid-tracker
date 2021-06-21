import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/covid.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  // componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model).
  // componentDidMount() is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle.
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <br />
        <text>
          <b>Global and country wise cases of corona virus</b>
        </text>
        <br />
        <text>
          <i>(For a particular country, select a country from below)</i>
        </text>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
