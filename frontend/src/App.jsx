import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header path="/" image="https://miro.medium.com/max/1400/1*lXH0CroMTAQKIfDzn-brPw.png" />
      <div className="flex flex-row">
        <Header path="pokemon" image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" />
        <Header path="pokedex" image="https://pokefanaticos.com/pokedex/assets/images/pokedex/pokedex_mainjt_image.png" />
      </div>
    </>
  );
}

export default App;
