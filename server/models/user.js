/* ORM model for a user */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
    }, {
        classMethods: {
            associate(models) {
                User.hasMany(models.poll);
            },
        },
    });

    return User;
};
