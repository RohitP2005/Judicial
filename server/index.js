const { setEngine } = require('crypto')
const express = require('express')
const app = express()
const port = 3000
// Multer 
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'))

// Server Live
app.get('/', (req, res) => {
  res.send('Server Fucntioning')
})
 app.get('/test',(req,res)=>{
    res.render('pages/index.ejs')
 })
 app.post('/test', upload.single('inputFile'), async (req, res, next) => {
  if (req.file) {
    console.log("File uploaded:", req.file);
  } else {
    console.log("No file uploaded.");
  }

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})