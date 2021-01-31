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
  let max_cases = 0;

  rawData = rawData.split("\n");

  //determine which state has the largest number of cases to
  //shade in the other states as a percentage of that
  rawData.forEach((line, index) => {
    if (index === 0) return;
    const currCases = parseInt(line.split(",")[3], 10);
    console.log(currCases);
    max_cases = Math.max(currCases, max_cases);
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

    console.log(max_cases);

    result[_state]["color_ratio"] = _cases / max_cases;
  });

  console.log(result);

  return result;
};

export default parseCovidData;
