import { Contact } from "../Modals/contact.js";
//addContact

export const addContact = async(req,res)=>{
    // console.log("addcontact is working");
    // console.log(req.body)
    const {name,gmail,phone,cytpe}=req.body;
    let contact=await Contact.findOne({gmail});
    let phoneNo = await Contact.findOne({phone})
    if(contact || phoneNo)return res.json({message:"Contact Already Exist...!"});
       contact = await Contact.create({
        name,
        gmail,
        phone,
        cytpe
      })
      res.json({message:"Contact Saved",contact});
}

export const getcontacts=async(req, res) => {
    const contact = await Contact.find() ;
  
    res.json({message:'Fetched all contacts',contact});
  }

export const updateContact=async(req,res)=>{
    // console.log(req.params.id);
    const contactId=req.params.id;

    let contact =await Contact.findById(contactId);

    if(!contact) return res.json({message:'Invalid Id'});
      const {name,gmail,phone,ctype}=req.body;
      contact.name = name;
      contact.gmail =gmail;
      contact.phone = phone;
      contact.ctype = ctype;

      await contact.save();
      
    res.json({message:'Updated',contact})
}

export const deleteContact=async(req,res)=>{
    // console.log("Delete route is working");
    const id= req.params.id;
  
    let contact=await Contact.findById(id);
    if(!contact) return res.json({message:"id already deleted....!"});
  
    await contact.deleteOne();
  
    res.json({
      success:true,
      message:"Your Contact has been deleted"
    })
  }