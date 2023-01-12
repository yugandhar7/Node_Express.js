let ap = require('express');
let app = ap();
app.use(ap.json())//it recives all the values in json formate or converts into json formate;
app.get('/ug', (req, res) => {
    res.send('<h1> hellow world</h1 >');

})


const products = [
    {
        id: 1,
        name: "yugandhar"
    },
    {
        id: 2,
        name: "prasad"
    },
    {
        id: 3,
        name: 'venkatalaxmi'
    },
    {
        id: 4,
        name: 'kishore'

    },
    {
        id: 5,
        name: 'krishna murthy'
    }

]
app.get('/products', (req, res) => {
    res.json(products)
})
app.get('/products/:id', (req, res) => {
    let id = products.filter(items => items.id.toString() === req.params.id)//here to string is used because in url it will take only integers so we need to convert it into  string to equal the id
    res.send(id)
})
app.get('/ug/:id', (req, res) => {
    const id = req.params.id;
    res.send(id);
})
app.post('/addproducts', (req, res) => {
    const { id, name } = req.body;
    console.log(id, name);
    return res.send('data stored');

})
app.listen(8080, () => console.log("server started"));
