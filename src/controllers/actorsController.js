const { Actors } = require("../models/Actor");

const actorsController = {

  showIndex:(req, res)=>{
    
    // const actors = Actors.findAll();
    // console.log(actors);

   res.render('index.ejs', { title: 'Digital Movies' });
    
  },
  getNameComplete:(req, res)=>{

  }
}

module.exports = actorsController;