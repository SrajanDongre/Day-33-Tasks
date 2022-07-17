let date = new Date()

fs.writeFile(',/current-date-Line.txt',${date},(err)=>{
    if (err)
    console.log(err)
})

fs.readFile('./current-date-time.txt',(err,data)=>{
    if(err)
    console.log(err)
    res.writeHeaad(200,{'Content-Type':'text/html'});
    res.end(data)
})
server.listen(8000,()=>console.log('Server Listene to port'+8000))