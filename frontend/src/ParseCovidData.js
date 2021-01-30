/*

first line of csv:
date, state, fips, cases, deaths, confirmed_cases, confirmed_deaths, probable_cases, probable_deaths


output is an object composed of the following
{
    State: {Date:x, fips:x, cases:x, deaths:x, confirmed_cases:x, probable_cases:x, probable_deaths:x}
}
*/

const parseCovidData = (rawData) => {
  console.log(rawData);

  let result = {};

  rawData = rawData.split("\n");

  //get rid of the first line with the CSV info
  rawData.filter((line, index) => {
    return index !== 0;
  });

  rawData.forEach((line) => {
    const [
      _date,
      _state,
      _fips,
      _cases,
      _deaths,
      _confirmed_cases,
      _confirmed_deaths,
      _probable_cases,
      _probable_deaths,
    ] = line.split(",");

    result[_state] = {
      date: _date,
      fips: _fips,
      cases: _cases,
      deaths: _deaths,
      confirmed_cases: _confirmed_cases,
      confirmed_deaths: _confirmed_deaths,
      probable_cases: _probable_cases,
      probable_deaths: _probable_deaths,
    };

    result[_state]["color_ratio"] = _cases / (25971202 * 0.02);
  });

  console.log(result);

  return result;
};

export default parseCovidData;
