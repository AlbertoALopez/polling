/* ORM model for a user */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });
};
