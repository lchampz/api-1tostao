import { Router } from 'express'
const routes = Router()

import getInfo from '../firebase/getInfo.mjs'


//ver as informações
routes.get('/faq', (req, res) => {
    getInfo(res, 'faq')
})


//adicionar
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).end()
    }
 
    return res.json(body)
})

//deletar
routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDb = filter(item => {
        if(!item[id]) return item
    })

    //no banco de dados seria usado db = newDb

    return res.send(newDb)
})


export default routes