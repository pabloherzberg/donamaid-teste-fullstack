const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { name, cpf, email, address_id } = req.body;

    const client = await connection("clients").insert({
      name,
      cpf,
      email,
      address_id,
    });
    return res.json(client);
  },
  async list(req, res) {
    const clients = await connection("clients").select("*");
    return res.json(clients);
  },

  async index(req, res) {
    const { email, cpf } = req.headers;

    const client = await connection("clients")
      .where({ email: email, cpf: cpf })
      .select("*");

    return res.json(client);
  },
};
