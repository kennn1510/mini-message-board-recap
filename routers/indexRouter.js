const Router = require("express");
const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("indexView", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
