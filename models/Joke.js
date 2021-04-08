const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Joke extends model {}

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
        username: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'username'
            },
            allowNull: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'joke',    
    }
)

module.exports = Joke;