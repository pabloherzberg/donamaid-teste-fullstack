const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { name, cpf, email, address_id } = req.body;

    const professional = await connection("professionals").insert({
      name,
      cpf,
      email,
      address_id,
    });

    return res.json(professional);
  },

  async list(req, res) {
    const professionals = await connection("professionals").select("*");
    return res.json(professionals);
  },

  async index(req, res) {
    const { id } = req.headers;

    const professional = await connection("professionals")
      .where("id", id)
      .select("*");

    return res.json(professional);
  },
};
