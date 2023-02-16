const { Actor } = require("../models");

const actorsController = {

  showIndex:(req, res)=>{
  
   res.render('index.ejs', { title: 'Digital Movies' });
    
  },
  showAllActors: async (req, res)=>{
   
    console.log(Actor);
    const actors = await Actor.findAll();

    console.log(actors.name)
    return res.render("actors.ejs",{actors});
 
  },
  getNameComplete:(req, res)=>{

  }
}

module.exports = actorsController;