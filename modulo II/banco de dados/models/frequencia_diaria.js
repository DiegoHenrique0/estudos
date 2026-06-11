const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('frequencia_diaria', {
    idfrequencia_diaria: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data_referencia: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    entrada: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "07:00:00"
    },
    saida: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "17:00:00"
    },
    preenchimento_automatico: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    'observação': {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tableName: 'frequencia_diaria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idfrequencia_diaria" },
        ]
      },
      {
        name: "idfrequencia_diaria_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idfrequencia_diaria" },
        ]
      },
      {
        name: "fk_frequencia_diaria_funcionarios1_idx",
        using: "BTREE",
        fields: [
          { name: "funcionarios_id_funcionario" },
        ]
      },
    ]
  });
};
