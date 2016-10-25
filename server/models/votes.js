/* ORM model for votes on individual poll answers */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Votes', {
        votes: DataTypes.INTEGER,
    }, {
        timestamps: false,
    });
};
