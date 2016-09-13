/* ORM model for a poll */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Poll', {
        question: DataTypes.STRING,
    });
};
