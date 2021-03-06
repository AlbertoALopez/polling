/* ORM model for a poll */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Poll', {
        question: DataTypes.STRING,
        votes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
};
