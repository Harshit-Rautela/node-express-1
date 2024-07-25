const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

router.get('/api/people',(req,res)=>{
    
    res.send(people)
})

router.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name, image } = product;
        return{id, name, image}
   })
    res.json(newProduct)
})

router.post('/api/people',(req,res)=>{
    const {name} =req.body;
    if(!name){
        return res.status(400)
        .send({success:false,msg:'pls provide a name'})
    }
    res.status(201).send({success:true,person:name})
})
//we are setting up route paramters using : (produtId is a route parameter)
router.get('/api/products/:productId',(req,res)=>{
    const {productId} = req.params;
//here product Id returns as a string so we have to convert it to a number
    const singleProduct = products.find((product)=> product.id===Number(productId))
    if(!singleProduct){
        return res.status(404).send('product does not exist')
    }
    res.json(singleProduct)
})

module.exports = router
