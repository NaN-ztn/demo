const express = require('express');
let app = express();
app.use('/a.html', express.static('./a.html'));
app.use('/b.html', express.static('./b.html'));
app.listen(3000);
