const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.resolve(__dirname, 'public')));

const dadosExemplo = {
    doughnut: {
        labels: ['Mobile', 'Desktop', 'Tablet'],
        values: [55,19,10]
    },
}

app.get('/', (req,res) =>{
    res.render('index',{
        titulo: 'Aprendendo Gráficos no SENAI',
        data: dadosExemplo
    })
})

const porta = 3000;
app.listen(porta, () => console.log(`🚀 Servidor rodando em http://localhost:${porta}`))