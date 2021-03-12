const express =require('express');
const animelistController =require('./../controllers/animelistController');

const animelistRouter=express.Router();

// Router.route('/top-5-cheap')
//     .get(tourController.aliasTopTours,tourController.getAllTours);

// animelistRouter.route('/no-null').get(animelistController.getanimeList,animelistController.noNullSort);

animelistRouter.route('/top-rated').
    get(animelistController.toprated,animelistController.getanimeList);


animelistRouter.route('/top-ranked').
    get(animelistController.topranked,animelistController.getanimeList);  

animelistRouter.route('/popular').
    get(animelistController.popularity,animelistController.getanimeList);


animelistRouter.route('/get').
    get(animelistController.getanimeList);

animelistRouter.route('/').
    get(animelistController.getAllanimeList);
    //post(middleware,tourController.createTour)
    // .post(tourController.createTour)

animelistRouter.route('/:id').
    get(animelistController.getanime);
    // .patch(tourController.updateTour).
    // delete(tourController.deleteTour)


module.exports =animelistRouter;