var DataTypes = require("sequelize").DataTypes;
var _ausencias = require("./ausencias");
var _contato_emergencia = require("./contato_emergencia");
var _frequencia_diaria = require("./frequencia_diaria");
var _funcionarios = require("./funcionarios");
var _jornada = require("./jornada");
var _justificativas = require("./justificativas");
var _sequelizemeta = require("./sequelizemeta");

function initModels(sequelize) {
  var ausencias = _ausencias(sequelize, DataTypes);
  var contato_emergencia = _contato_emergencia(sequelize, DataTypes);
  var frequencia_diaria = _frequencia_diaria(sequelize, DataTypes);
  var funcionarios = _funcionarios(sequelize, DataTypes);
  var jornada = _jornada(sequelize, DataTypes);
  var justificativas = _justificativas(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);

  justificativas.belongsTo(frequencia_diaria, { as: "frequencia_diaria_idfrequencia_diaria_frequencia_diarium", foreignKey: "frequencia_diaria_idfrequencia_diaria"});
  frequencia_diaria.hasMany(justificativas, { as: "justificativas", foreignKey: "frequencia_diaria_idfrequencia_diaria"});
  ausencias.belongsTo(funcionarios, { as: "funcionarios_id_funcionario_funcionario", foreignKey: "funcionarios_id_funcionario"});
  funcionarios.hasMany(ausencias, { as: "ausencia", foreignKey: "funcionarios_id_funcionario"});
  contato_emergencia.belongsTo(funcionarios, { as: "funcionarios_id_funcionario_funcionario", foreignKey: "funcionarios_id_funcionario"});
  funcionarios.hasMany(contato_emergencia, { as: "contato_emergencia", foreignKey: "funcionarios_id_funcionario"});
  frequencia_diaria.belongsTo(funcionarios, { as: "funcionarios_id_funcionario_funcionario", foreignKey: "funcionarios_id_funcionario"});
  funcionarios.hasMany(frequencia_diaria, { as: "frequencia_diaria", foreignKey: "funcionarios_id_funcionario"});
  funcionarios.belongsTo(jornada, { as: "jornada_id_jornada_jornada", foreignKey: "jornada_id_jornada"});
  jornada.hasMany(funcionarios, { as: "funcionarios", foreignKey: "jornada_id_jornada"});

  return {
    ausencias,
    contato_emergencia,
    frequencia_diaria,
    funcionarios,
    jornada,
    justificativas,
    sequelizemeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
