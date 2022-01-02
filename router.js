import express from "express";
import {PersonSchema} from './schema.js'
const route = express.Router();


export const create = route.post('/',async(req,res)=>{
    console.log('req', req.body)
    const post = await new PersonSchema({
        Name : req.body.Name,
        Age : req.body.Age
    })
    const save = await post.save()
    res.json(save)
    // res.json('working')
})

export const fetch = route.get('/',async(req,res)=>{
    const getprofiles = await PersonSchema.find()
    res.json(getprofiles)
    // res.json('working')
})

export const update = route.put('/:Name',async(req,res)=>{
    const update = await PersonSchema.updateOne({Name:req.body.Name},{$set : {Name:req.body.Name,Age:req.body.Age}})
    res.json(update)
    // res.json('working')
})

export const deletePerson = route.delete('/:Name',async(req,res)=>{
    const deleteProfile = await PersonSchema.remove({Name:req.body.Name})
    res.json(deleteProfile)
    // res.json('working')
})