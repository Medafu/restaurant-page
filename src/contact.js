import "./styles/contact.css";

const Contact = () => {
  const contact = document.createElement("div");
  contact.id = "contact";
  const h1 = document.createElement("h1");
  h1.textContent = "Contact";
  const p = document.createElement("p");
  p.innerText = "just-some-numbers";

  contact.appendChild(h1);
  contact.appendChild(p);
  return contact;
};

export default Contact;
