module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'Movie',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      duration: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      inTheaters: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      tableName: 'movies',
      timestamps: false
    }
  );

  return Movie;
}
