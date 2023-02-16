
module.exports = (sequelize, DataTypes) => {
  const Actors = sequelize.define("Actors",
    {
      id:{
        type:DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      }
    }
  )
}