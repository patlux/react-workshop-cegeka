import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Accordion from '../Accordion';

test('can open accordion items to see the contents', () => {
  const item1 = { title: 'Item1', contents: 'Item1 is so cool' };
  const item2 = { title: 'Item2', contents: 'Item2 is better' };

  const { getByText, queryByText } = render(
    <Accordion items={[item1, item2]} />,
  );

  // both should not be visible
  expect(queryByText(item1.contents)).toBeNull();
  expect(queryByText(item2.contents)).toBeNull();

  // clicking on the first accordion item
  fireEvent.click(getByText(item1.title));

  // now the content of item1 should be visible
  expect(getByText(item1.contents)).toBeInTheDocument();

  // item2 should still not be visible
  expect(queryByText(item2.contents)).toBeNull();
});
