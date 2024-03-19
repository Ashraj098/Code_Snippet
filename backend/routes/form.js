const express = require('express')
const router =  express.Router()
const {createSnippet, getSnippets} = require('../controllers/formController')

router.post('/submit', createSnippet)

router.get('/entries', getSnippets)

module.exports =router