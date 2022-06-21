const express = require('express');
let app = express();
app.use('/c.html', express.static('./c.html'));
app.listen(4000);
