import { SharedComponents } from '@clinica/shared-components';
import { WebAdminPages } from '@clinica/web-admin-pages';

export function Index() {
  return (
    <>
      <WebAdminPages />
      <SharedComponents />
    </>
  );
}

export default Index;
