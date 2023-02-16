
module.exports = (sequelize, DataTypes) => {
  const Actors = sequelize.define("Actors",
    {
      id:{
        type:DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: "actors",
      timestamps: false
    }
  )

  return Actors;
}