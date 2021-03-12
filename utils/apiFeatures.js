class APIFeatures{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString;
    }


    filter(){
        //1) filtering
        const queryObj={...this.queryString};
        const excludedFields =['page','sort','limit','fields','search'];
        excludedFields.forEach(el => delete queryObj[el]);

        //2) advance filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match =>'$$(match)');        
        
        this.query= this.query.find(JSON.parse(queryStr));

        return this;
    }

    sort(){
         //3) sorting
         if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query=this.query.sort(sortBy);
            //console.log(sortBy);
            //sort('price ratingsAverage')
        }
        else{
            this.query = this.query.sort('-createdAt');
        }

        return this;
    }

    limitFields(){
        if(this.queryString.fields){
            const   fields=this.queryString.fields.spit(',').join('');
            this.query=this.query.select(fields);
        }
        else{
            this.query=this.query.select('-__v');//- means exclude
    
            
        }
        return this;
    }
        paginate(){
            //5) pagination

        const page = this.queryString.page*1 || 1;
        const limit = this.queryString.limit*1 ||   100;
        const skip =(page-1)* limit;

       this.query=this.query.skip(skip).limit(limit);

        // if(this.queryString.page){
        //     const numAnimeList = await Anime.countDocuments();
        //     if(skip>= numAnimeList) throw new Error('This Page does not exsist');
        //     }
            return this;
            
        }

        paginate2(){
            //5) pagination

        const page = this.queryString.page*1 || 1;
        const limit = this.queryString.limit*1 ||   100;
        const skip =(page-1)* limit;

       this.query=this.query.skip(skip).limit(limit);

        // if(this.queryString.page){
        //     const numAnimeList = await Anime.countDocuments();
        //     if(skip>= numAnimeList) throw new Error('This Page does not exsist');
        //     }
            return this;
            
        }

}

module.exports=APIFeatures;