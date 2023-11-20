const express = require('express');
const app = express();
const port = 3000;


function getApple() {
    response = "Mega iPhone "+(Math.floor(Math.random()*100)+1)+" with Colobld Eco Display and iWatch and iCare and iTouchedGrass Pro+# Ultra for 400$";
    return response;
}


let episodes = [];


app.get('/', (req, res) => {
    let th = getApple()
    episodes.push(th)
    res.json(th);
  });

app.get('/all', (req, res) => {
  res.json(episodes);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
