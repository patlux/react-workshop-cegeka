import React from 'react';
import ReactDOM from 'react-dom';

import Timezones from './src/Timezones';

var mountNode = document.getElementById('app');
ReactDOM.render(<Timezones apiUrl={process.env.API_URL || '/api'} />, mountNode);
