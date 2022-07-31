import { render } from '@testing-library/react';

import WebAdminPages from './web-admin-pages';

describe('WebAdminPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebAdminPages />);
    expect(baseElement).toBeTruthy();
  });
});
