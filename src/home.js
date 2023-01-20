import "./styles/home.css"

const Home = () => {
  const home = document.createElement("div");
  home.id = "home";
  const h1 = document.createElement("h1");
  h1.innerText = "Medafu's Cool Restaurant";
  const p = document.createElement("p");
  p.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus sapien id ligula suscipit dignissim. Etiam egestas sem tortor, eget sagittis odio maximus porttitor. Curabitur feugiat in leo vel consectetur. Proin eleifend felis at elementum scelerisque. Ut non nulla consectetur, ullamcorper libero fermentum, luctus eros. Mauris justo ligula, consequat pretium nulla in, condimentum scelerisque mi. Vestibulum eros neque, tempor eu fermentum vitae, mattis ut nisi. Curabitur maximus tortor vel sem malesuada ornare eget vel magna. Aliquam erat volutpat. ";

  home.appendChild(h1);
  home.appendChild(p);
  return home;
};

export default Home;
