import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/projects", (req, res) => {
  res.render("projects");
});

router.post("/contact/gmail", (req, res) => {
  const {email,user,txtEmail} = req.body

  const contentHTML = `
  <h1>User Information</h1>
  <ul>
    <li>User: ${user}}</li>
    <li>Email: ${email}}</li>
  </ul>
   <p>${txtEmail}</p>
  `;

  console.log(contentHTML)
  res.send("Enviado");
});

export default router;
