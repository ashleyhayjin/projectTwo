const Category = require('./Category');
const Joke = require('./Joke');
const User = require('./User');

User.hasMany(Joke, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Joke.belongsTo(User, {
    foreignKey: 'user_id',
});


Joke.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Joke, {
    foreignKey: 'category_id'
});

module.exports = { User, Joke, Category };
