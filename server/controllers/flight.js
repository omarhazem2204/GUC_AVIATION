import FlightData from '../models/flight.js';
export const getFlights = async(req,res)=>{
    try{
        const allFlights=await FlightData.find();
        res.status(200).json(allFlights);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};
export const createFlights = async (req,res)=>{
     //req from user
     const flight=req.body;
     //model..variable
     const newFlight= new FlightData(flight);
    try{
        await newFlight.save();
        res.status(201).json(newFlight);
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

export const deleteFlight = async (req,res)=>{
   const id =req.params.id;

   try{
       await FlightData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted')
   }catch(error){
       console.log(error);
   }
}


