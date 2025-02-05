app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.stutus(500).send('something broke!') 
})