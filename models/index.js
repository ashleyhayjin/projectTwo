const Joke = require('./Joke');
const User = require('./User');

User.hasMany(Joke, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Joke.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Joke };
