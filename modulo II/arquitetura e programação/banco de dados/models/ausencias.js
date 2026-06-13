const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ausencias', {
    id_ausencias: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    funcionarios_id_funcionario: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'funcionarios',
        key: 'id_funcionario'
      }
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    data_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_fim: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ausencias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ausencias" },
        ]
      },
      {
        name: "id_ausencias_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ausencias" },
        ]
      },
      {
        name: "fk_ausencias_funcionarios1_idx",
        using: "BTREE",
        fields: [
          { name: "funcionarios_id_funcionario" },
        ]
      },
    ]
  });
};
