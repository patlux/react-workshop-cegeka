import React from 'react';
import { render } from '@testing-library/react';

import Timezones from '../Timezones';

beforeEach(() => {
  global.fetch = () => {};
});

test('should show the title', async () => {
  const fakeTimezones = ['Europe/Berlin'];
  jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeTimezones),
    });
  });

  const { findByText } = render(<Timezones />);

  const element = await findByText("Europe/Berlin")
  expect(element).toBeDefined();
});
