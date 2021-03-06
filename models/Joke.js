const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Joke extends Model {}

    Joke.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        joke_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        }, 
        category_name: {
            type: DataTypes.STRING,
        },
    },
    {   sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'joke',   
        } 
    );

module.exports = Joke;