const  express = require('express');
const app= express();

// Run Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});