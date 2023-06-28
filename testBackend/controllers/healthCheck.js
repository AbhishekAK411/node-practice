export const ping = (req, res) => {
    try {
      return res.send("pong");
    } catch (err) {
      return res.status(500).send(err);
    }
  };