const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect('/rainbowconstructions');
});
app.get('/rainbowconstructions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});
app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contactus.html'));
});

app.get('/apartmentsonsale', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'apartmentsonsale.html'));
});
app.get('/brindavanam', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'brindavanam.html'));
});
app.get('/artlivinghomes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'artlivinghomes.html'));
});
app.get('/krishnakuteer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'krishnakuteer.html'));
});
app.get('/completedprojects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'completedprojects.html'));
});
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.use('rainbowprojpics', express.static(path.join(__dirname, 'rainbowprojpics')));

app.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000');
});