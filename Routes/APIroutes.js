const path = require('path');
const fs = require('fs');
const dbJSON = require('../db/db.json')

module.exports = app => {
     app.get('/api/notes', (req, res) => {
         fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err, data) => {
             if (err) throw err 
             return res.json(JSON.parse(data))
         }) 
     })
     app.post('/api/notes', (req, res) => {
         console.log(req.body)
         dbJSON.push(req.body)
         fs.writeFile(path.join(__dirname,'../db/db.json'), JSON.stringify(dbJSON), (err, data) => {
             if (err) throw err 
             return res.json(dbJSON)
         }) 
     })   
}