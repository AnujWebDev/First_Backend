import express from "express";
import { addContact } from "../Controllers/contact.js";
import { getcontacts } from "../Controllers/contact.js";
import { updateContact } from "../Controllers/contact.js";
import { deleteContact } from "../Controllers/contact.js";
const router= express.Router();

//home route
router.get('/home',(req,res)=>{
    res.json({message:'Converting to MVC structure....!'});
})
// @route - '/addcontact'
router.post('/addcontact',addContact)

// @route - '/getcontacts'
router.get("/getcontacts", getcontacts);

//@route -/:id
router.put("/:id",updateContact)

//route - "/:id"
router.delete('/:id',deleteContact)

export default router;