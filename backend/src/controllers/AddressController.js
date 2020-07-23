const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const {
      street,
      number,
      address_complement,
      cep,
      city,
      uf,
      country,
    } = req.body;

    const address = await connection("address").insert({
      street,
      number,
      address_complement,
      cep,
      city,
      uf,
      country,
    });

    return res.json(address);
  },

  async list(req, res) {
    const addresses = await connection("address").select("*");
    return res.json(addresses);
  },
};
