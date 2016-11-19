/* ORM model for all answers to polls */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Answers', {
        answer: DataTypes.TEXT,
        votes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        votedBy: DataTypes.ARRAY(DataTypes.TEXT),
    }, {
        timestamps: false,
    });
};
