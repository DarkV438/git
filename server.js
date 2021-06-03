const express = require('express');

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded());
app.post("/szavazas", function(request, response) {
    console.log(request.body);

    response.redirect("/");
});
app.listen(9000);