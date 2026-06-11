const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contato_emergencia', {
    idcontato_emergencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    parentesco: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    funcionarios_id_funcionario: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'funcionarios',
        key: 'id_funcionario'
      }
    }
  }, {
    sequelize,
    tableName: 'contato_emergencia',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcontato_emergencia" },
        ]
      },
      {
        name: "idcontato_emergencia_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcontato_emergencia" },
        ]
      },
      {
        name: "fk_contato_emergencia_funcionarios1_idx",
        using: "BTREE",
        fields: [
          { name: "funcionarios_id_funcionario" },
        ]
      },
    ]
  });
};
