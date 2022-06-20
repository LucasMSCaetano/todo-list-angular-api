import app from './config/App';
import { db } from './database/db';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  db.sync();
  console.log(`Listening at http://[::]:${PORT}`);
});
