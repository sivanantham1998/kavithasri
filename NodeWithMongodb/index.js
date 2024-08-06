const express=require("express")
const cors=require("cors")
const app=express();
// middleware
app.use(express.json())
app.use(cors())
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://root:root@cluster0.fxpqzae.mongodb.net/kavithasri_demo?retryWrites=true&w=majority&appName=Cluster0",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("mongodb connect")
}).catch((err)=>{
    console.log(err);
})
const collection=mongoose.model("testing",{
    name:String,
    age:Number
})
// app.get("/",(req,res)=>{
//     res.send("working")
// })
app.get("/getdata",async(req,res)=>{
    let data=await collection.find();
    res.json(data)
})

app.post("/postdata",async(req,res)=>{
    let {name,age}=req.body;
    try{
        let data=new collection({name,age});
        await data.save();
        res.status(200).json({msg:"Data saved",data})
    }catch(err){
        console.log(err.message);
        
    }
})

app.get("/getsingledata/:id",async(req,res)=>{
    try{
        let {id}=req.params;
        let data=await collection.findById(id);
        res.status(201).json({msg:data})
    }catch(err){
        res.status(500).json(err.message)
    }
})

app.put("/updatedata/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let data = await collection.findById(id);
        
        if (!data) {
            return res.status(404).json({ msg: "Data not found" });
        }

        data.name = req.body.name;
        data.age = req.body.age;
        await data.save();
        
        res.status(200).json({ msg: "Data updated", data });
    } catch (err) {
        res.status(500).json({ msg: err.message });
        console.log(err.message);
        
    }
});

app.delete("/deletedata/:id",async(req,res)=>{
    let {id}=req.params;
    await collection.findByIdAndDelete(id)
    res.status(200).json("data delted")
})

app.listen(2000,()=>{
    console.log("server running");
})