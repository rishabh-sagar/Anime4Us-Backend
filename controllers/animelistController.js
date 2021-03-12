

const APIFeatures = require('./../utils/apiFeatures');
const Anime = require('./../models/animelistModel');


exports.toprated=(req,res,next)=>{
    req.query.sort='-mean'
    next();
};

exports.topranked=(req,res,next)=>{
    req.query.sort='rank'
    next();
};

exports.popularity=(req,res,next)=>{
    req.query.sort='popularity'
    next();
};

//{$and: [{rank: { $gt: 0} },{popularity: { $gt: 0} },{mean: { $gt: 0} }]},

exports.getanimeList= async (req,res)=>{
    try{
        //execute query

        const features=new APIFeatures(
            Anime.find({$and: [{rank: { $gt: 0} },{popularity: { $gt: 0} },{mean: { $gt: 0} }]} ),req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate2();
        const animes = await features.query;
        
        //send response
        res.status(200).json({
            status:'success',
            result: animes.length,
            data:{
               animes 
            }
        });
    }
    catch (err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
    
}





exports.getAllanimeList= async (req,res)=>{
    let a =req.query.search;

    try{
        //execute query

        const features=new APIFeatures(Anime.find({$or :[{ "alternative_titles.en": { "$regex": a, "$options": "i" }},{ "title": { "$regex": a, "$options": "i" }}]}),req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()
        
        const animes = await features.query;
        
        //send response
        res.status(200).json({
            status:'success',
            result: animes.length,
            data:{
               animes 
            }
        });
    }
    catch (err){
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
    
}

exports.getanime =async (req,res)=>{
    try{
        const anime = await Anime.findById(req.params.id);
        //Tour.findOne({_id:req.params.id})
        res.status(200).json({
            status:'success',
            data:{
                anime
            }
        });
    
    } catch(err){
        res.status(400).json({
            status:'fail',
            //message:err
            message:err   
          });
    }


  
};








// exports.noNullSort = async(req,res)=>{
//     try {
//         const stats = Anime.aggregate([
//             {
//                $match: { mean : {$gte: 1 } }
//             }
//         ]);
//     }
//     catch(err){
//         res.status(400).json({
//             status:'fail',
//             //message:err
//             message:err   
//           });
//     }
// }