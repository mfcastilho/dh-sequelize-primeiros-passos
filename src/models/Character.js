

module.exports = (sequelize, DataTypes) =>{
  const Character = sequelize.define("Character",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      character_name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      main_actor_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      }
    },
    {
      tableName: "characters",
      timestamps: false
    }
  )

  return Character;
}