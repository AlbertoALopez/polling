/* ORM model for a poll */
module.exports = (sequelize, DataTypes) => {
    const Poll = sequelize.define('Poll', {
        question: DataTypes.STRING,
    }, {
        classMethods: {
            associate(models) {
                Poll.belongsTo(models.user);
            },
        },
    });

    return Poll;
};
