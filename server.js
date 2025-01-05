import { PORT } from './app.js';
import {app } from './app.js';

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
