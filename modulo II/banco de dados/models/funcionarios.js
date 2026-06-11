const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('funcionarios', {
    id_funcionario: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    matricula: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      unique: "matricula_UNIQUE"
    },
    nome: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: "cpf_UNIQUE"
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    data_adimissao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ativo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    jornada_id_jornada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jornada',
        key: 'id_jornada'
      }
    }
  }, {
    sequelize,
    tableName: 'funcionarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_funcionario" },
        ]
      },
      {
        name: "id_funcionario_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_funcionario" },
        ]
      },
      {
        name: "matricula_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "matricula" },
        ]
      },
      {
        name: "cpf_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "fk_funcionarios_jornada1_idx",
        using: "BTREE",
        fields: [
          { name: "jornada_id_jornada" },
        ]
      },
    ]
  });
};

