const Category = require('./Category');
const Joke = require('./Joke');
const User = require('./User');

User.hasMany(Joke, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Joke.belongsTo(Category, {
    foreignKey: 'category_id',
});


module.exports = { Category, Joke, User };