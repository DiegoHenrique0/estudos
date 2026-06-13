const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jornada', {
    id_jornada: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hora_entrada: {
      type: DataTypes.TIME,
      allowNull: false
    },
    hora_saida: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jornada',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_jornada" },
        ]
      },
      {
        name: "id_jornada_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_jornada" },
        ]
      },
    ]
  });
};
