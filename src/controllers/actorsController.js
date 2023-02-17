const session = require("express-session");
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
  
    const actorFound = session.actorFound;

    const actors = await Actor.findAll();
   
    return res.render("index.ejs",{title: 'Digital Movies' , actors, actor:actorFound});
  },
  showActor: async (req, res)=>{
    const {id} = req.params;

    const actor = await Actor.findByPk(id);
    console.log(actor.name);

    return res.render("showActor.ejs",{title: 'Digital Movies', actor});
  },
  searchActors: async (req, res)=>{
    const { character } = req.body;

    if(character == ""){

      return res.redirect("/actors/index");
    }

    const characters = await Character.findAll();


    let characterFound = undefined;

    for(let i = 0; i < characters.length; i++){
     
      if(characters[i].character_name == character){
        characterFound = characters[i];
      }
    }

    
   
    console.log(characterFound.character_name)
    let actorFound = await Actor.findOne({
      where:{
        id:characterFound.main_actor_id
      }
    });

    console.log(actorFound.name);

    session.actorFound = actorFound;


    return res.redirect("/actors/index");

  },
  getNameComplete:(req, res)=>{

  }
}

module.exports = actorsController;