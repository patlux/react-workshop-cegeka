import React from 'react';
import ReactDOM from 'react-dom';

import Timezones from './Timezones';

var mountNode = document.getElementById('app');
ReactDOM.render(<Timezones apiUrl={process.env.API_URL} />, mountNode);
