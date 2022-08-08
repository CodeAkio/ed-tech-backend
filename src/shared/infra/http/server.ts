import { createConnection } from '@shared/infra/typeorm';

import { app } from './app';

createConnection();

app.listen(3000, () => {
  console.log('🚀 Server running on port 3000!');
});
