const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { hour, duration } = req.body;
    const { client_id, professional_id, address_id } = req.headers;

    await connection("orders").insert({
      hour,
      duration,
      client_id,
      professional_id,
      address_id,
    });

    return res.json({ evento: "criou" });
  },

  async list(req, res) {
    const addresses = await connection("orders").select("*");
    return res.json(addresses);
  },
};
