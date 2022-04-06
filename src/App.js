import { useEffect, useState, useCallback } from "react";
import { getCountries, getReportByCountry } from "./apis/index";
import CountrySelector from "./components/CountrySelector/index.js";
import Highlight from "./components/Highlight/index.js";
import Summary from "./components/Summary/index.js";
import "./reset.css";
import "./style.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("vn");
  const [report, setReport] = useState([]);
  //call AIP countries
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnChange = useCallback((e) => {
    setSelectedCountryId(e.target.value);
  }, []);
  //call AIP country report
  useEffect(() => {
    if (selectedCountryId && countries.length > 0) {
      const selectedCountry = countries.find((country) => {
        console.log(country.ISO2, " ", selectedCountryId.toUpperCase());
        return country.ISO2 === selectedCountryId.toUpperCase();
      });
      getReportByCountry(selectedCountry.Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);
  // console.log("report:", report);
  return (
    <div className="App">
      <div>
        <p className="title">Số liệu COVID-19</p>
        <p className="date">5 Tháng 4 năm 2022 18:18</p>
        <CountrySelector
          countries={countries}
          handleOnChange={handleOnChange}
          value={selectedCountryId}
        />
        {report.length > 0 && (
          <Highlight countries={countries} report={report} />
        )}
        <Summary />
      </div>
    </div>
  );
}

export default App;
