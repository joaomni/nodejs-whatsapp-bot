const stages = {
    0: {
      description: "Boas vindas",
      obj: require("./stages/welcome")
    },
    1: {
      description: "Pedido",
      obj: require("./stages/orders")
    },
    2: {
      description: "Endereço",
      obj: "arquivo0.js"
    },
    3: {
      description: "Encerramento",
      obj: "arquivo0.js"
    }
}

module.exports = stages