module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    'Actor',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'actors',
      timestamps: false
    }
  )

  return Actor;
}
