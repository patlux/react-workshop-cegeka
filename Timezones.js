import React from 'react';

import Accordion from './Accordion';

function Timezones({ apiUrl = '' }) {
  const [timezones, setTimezones] = React.useState([]); // ["Asia/Aden", "America/Cuiaba", "Europe/Berlin"]
  const [times, setTimes] = React.useState([]); // ["", "2019-07-19T12:23:27.174031", ""]

  React.useEffect(() => {
    fetchTimezones().then(timezones => {
      setTimezones(timezones);
      setTimes(new Array(timezones.length).fill(''));
    });
  }, []);

  function fetchTimezones() {
    return fetch(`${apiUrl}/api/time/timezones`).then(response => response.json());
  }

  function fetchCurrentTimeForTimezone(timezone) {
    return fetch(`${apiUrl}/api/time/current`, {
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

  function onOpenIndexChange(openIndex) {
    const timezone = timezones[openIndex];
    fetchCurrentTimeForTimezone(timezone).then(currentTime => {
      const index = timezones.indexOf(timezone);
      setTimes(
        times
          .slice(0, index)
          .concat(currentTime)
          .concat(times.slice(index + 1)),
      );
    });
  }

  return (
    <div>
      <h1>React Basics Cegeka Workshop</h1>
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
