/* ORM model for a user */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        username: DataTypes.STRING,
    });
};
