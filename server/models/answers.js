/* ORM model for all answers to polls */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Answers', {
        answer: DataTypes.TEXT,
        votes: DataTypes.INTEGER,
    }, {
        timestamps: false,
    });
};
