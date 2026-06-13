const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('justificativas', {
    id_justificativas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.ENUM('Atestado','Falta','Folga','Outros'),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    data_regitro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    frequencia_diaria_idfrequencia_diaria: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'frequencia_diaria',
        key: 'idfrequencia_diaria'
      }
    }
  }, {
    sequelize,
    tableName: 'justificativas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_justificativas" },
        ]
      },
      {
        name: "id_justificativas_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_justificativas" },
        ]
      },
      {
        name: "fk_justificativas_frequencia_diaria1_idx",
        using: "BTREE",
        fields: [
          { name: "frequencia_diaria_idfrequencia_diaria" },
        ]
      },
    ]
  });
};
