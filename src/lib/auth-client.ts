import { createAuthClient } from 'better-auth/react';
import { usernameClient } from 'better-auth/client/plugins';
import { organization } from 'better-auth/plugins/organization';

export const authClient = createAuthClient({
  plugins: [usernameClient(), organization()],
});
