module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genre',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primarykey: true
      },
      genreType: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'genres',
      timestamps: false
    }
  )

  return Genre;
}
