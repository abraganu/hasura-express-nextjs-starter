import { SharedComponents } from '@clinica/shared-components';
import { WebAdminPages } from '@clinica/admin-pages';

export function Index() {
  return (
    <>
      <WebAdminPages />
      <SharedComponents />
    </>
  );
}

export default Index;
