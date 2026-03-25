const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const listing =require("./models/listing.js");
const path = require("path");
const  methodoverride = require("method-override");
const ejsMate = require("ejs-mate");
main()
.then(() =>{
    console.log("Connecion Successfull");
})
.catch(err=>{
    console.log(err);
});

async function main() {
   
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>
{
    res.send("Hi, Mentor  How are you.")
    // res.redirect("/listings");
})




// INDEX ROUTE.
app.get("/listings",async(req,res)=>{
 const allListing =  await  listing.find({})

 res.render("listing/index.ejs", { allListing })
})


// New route
app.get("/listings/new",(req,res)=>{
    res.render("listing/new.ejs");
})


// SHOW ROUTE.
app.get("/listings/:id", async(req,res)=>{
    const { id } = req.params;
    const Listing = await listing.findById(id);
    res.render("listing/show.ejs", { Listing });
} )


// Create Route
app.post("/listings", async (req,res)=>{
  const newListing = new listing(req.body.Listing);

  await newListing.save();
 res.redirect("/listings");
});


//edit route
app.get("/listings/:id/edit" ,async (req ,res)=>{
       const { id } = req.params;
    const Listing = await listing.findById(id);
    res.render("listing/edit.ejs" , { Listing });
})



//update Route
app.put("/listings/:id", async (req,res)=>{
    let { id } = req.params;
    await listing.findByIdAndUpdate(id, { ...req.body.Listing });
    res.redirect(`/listings/${id}`)
});



app.delete("/listings/:id", async (req,res)=>{
    let { id } = req.params;
    let deletedListings = await listing.findByIdAndDelete(id);
    console.log(deletedListings)
    res.redirect("/listings");
})











// app.get("/testlisting",async(req,res)=>{
//     let sampleListing = new listing({
//             title:"My new villa",
//             description:"By the beach",
            
//             price: 1200,
//             location:"Goa",
//             country:"India",
//     })
   
//     await sampleListing.save();
//     console.log("Sample is Saved.");
//     res.send("Listing is successfull.");
// })























app.listen("8080",()=>{
    console.log("Sserver is listening to port 8080.")
})