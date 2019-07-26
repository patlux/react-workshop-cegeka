import React from 'react';
import { render, act } from '@testing-library/react';

import Timezones from '../Timezones';

beforeEach(() => {
  global.fetch = () => {};
});

test('should show the title', () => {
  const fakeTimezones = ['Europe/Berlin'];
  jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeTimezones),
    });
  });

  const { getByText } = render(<Timezones />);
  expect(getByText('React Basics Cegeka Workshop')).toBeInTheDocument();
});
