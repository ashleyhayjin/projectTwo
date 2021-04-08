const { Model, DataTypes} = require('sequelize');
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
        category_id {
            type: DataTypes.INTEGER,
            rederences: {
                model: 'category',
                key: 'id'
            },
        }    
    }
)