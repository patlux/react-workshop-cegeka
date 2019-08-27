import React from 'react';

import Accordion from './Accordion';

function Timezones({ apiUrl = '' }) {
  const [timezones, setTimezones] = React.useState([]); // ["Asia/Aden", "America/Cuiaba", "Europe/Berlin"]
  const [times, setTimes] = React.useState([]); // ["", "2019-07-19T12:23:27.174031", ""]

  React.useEffect(() => {
    fetchAndSetTimezones();
  }, []);

  async function fetchAndSetTimezones() {
    const timezones = await fetchTimezones();
    setTimezones(timezones);
    setTimes(new Array(timezones.length).fill(''));
  }

  async function fetchTimezones() {
    return fetch(`${apiUrl}/time/timezones`).then(response => response.json());
  }

  async function fetchCurrentTimeForTimezone(timezone) {
    return fetch(`${apiUrl}/time/current`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        zoneId: timezone,
      }),
    })
      .then(response => response.json())
      .then(responseJson => responseJson.currentTime);
  }

  function setTimeAt(index, time) {
    setTimes(
      times
        .slice(0, index)
        .concat(time)
        .concat(times.slice(index + 1)),
    );
  }

  async function onOpenIndexChange(openIndex) {
    const timezone = timezones[openIndex];
    const currentTime = await fetchCurrentTimeForTimezone(timezone);
    const index = timezones.indexOf(timezone);
    setTimeAt(index, currentTime);
  }

  return (
    <div>
      <h2>Timezones</h2>
      <Accordion
        items={timezones.map((timezone, index) => {
          return {
            title: timezone,
            contents: times[index],
          };
        })}
        onOpenIndexChange={onOpenIndexChange}
      />
    </div>
  );
}

export default Timezones;
