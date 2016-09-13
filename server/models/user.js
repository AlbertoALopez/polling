/* ORM model for a user */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        username: DataTypes.STRING,
    });
};
