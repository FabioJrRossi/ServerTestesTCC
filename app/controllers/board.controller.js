// Database model import.
const BoardController = require("../models/board.model.js");

// Function for create new usuário.
exports.create = (req, res) => {
  const createData = new BoardController({
    clientId: req.body.clientId,
    relayFall: req.body.relayFall,
    relayFilter: req.body.relayFilter,
    relayHidro: req.body.relayHidro,
    relayHot: req.body.relayHot,
  });
  createData
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Erro ao criar usuário!",
      });
    });
};

// Function for retrieved all data.
exports.findAll = (req, res) => {
  BoardController.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Um erro ocorreu na busca dos dados!",
      });
    });
};

// Function for retrieved data from a user.
exports.findOne = (req, res) => {
  BoardController.findById(req.params.clientId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Usuário não encontrado ${req.params.clientId}!`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Erro na comunicação com o servidor!",
        });
      }
      return res.status(500).send({
        message: `Error na busca do usuário com id ${req.params.clientId}!`,
      });
    });
};

// Function for update data to a user.
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Dados para atualizar inválidos!",
    });
  }
  const clientId = req.params.clientId;
  BoardController.findByIdAndUpdate(clientId, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não podemos atualizar os dados do usuário ${clientId}. Usuário não encontrado!`,
        });
      } else res.send({ message: "Dados atualizados com sucesso!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Erro ao atualizado dados do usuário ${clientId}!`,
      });
    });
};

// Function for delete a user.
exports.delete = (req, res) => {
  BoardController.findByIdAndRemove(req.params.clientId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Usuário ${req.params.clientId} não encontrado!`,
        });
      }
      res.send({ message: "Usuário deletado com sucesso!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Usuário ${req.params.clientId} não encontrado!`,
        });
      }
      return res.status(500).send({
        message: `Usuário ${req.params.clientId} não pode ser deletado!`,
      });
    });
};
