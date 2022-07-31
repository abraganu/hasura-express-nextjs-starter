import { webAdminApiTestEndpoint } from './web-admin-api-test-endpoint';

describe('webAdminApiTestEndpoint', () => {
  it('should work', () => {
    expect(webAdminApiTestEndpoint()).toEqual('web-admin-api-test-endpoint');
  });
});
