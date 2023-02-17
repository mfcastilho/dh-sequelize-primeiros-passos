const { Actor, Character } = require("../models");

const actorsController = {

  showIndex:(req, res)=>{
  
   res.render('index.ejs', { title: 'Digital Movies' });
    
  },
  showAllActors: async (req, res)=>{
   
    const actors = await Actor.findAll();
    return res.render("actors.ejs",{title: 'Digital Movies' , actors});
  },
  showActorsList: async (req, res)=>{
    
    const actors = await Actor.findAll();
    console.log(Actor)
    return res.render("index.ejs",{title: 'Digital Movies' , actors});
  },
  showActor: async (req, res)=>{
    const {id} = req.params;

    const actor = await Actor.findByPk(id);
    console.log(actor.name);

    return res.render("showActor.ejs",{title: 'Digital Movies', actor});
  },
  searchActors:(req, res)=>{

  },
  getNameComplete:(req, res)=>{

  }
}

module.exports = actorsController;