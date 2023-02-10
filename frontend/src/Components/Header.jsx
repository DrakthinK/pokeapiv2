import { Link } from "react-router-dom";
function Header({ image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png", path="/" }) {
  return (
    <Link to={path}>
      <div className="flex flex-col justify-center items-center m-10">
        <img className="max-w-md w-2/3" src={image} />
      </div>
    </Link>
  );
}

// https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png

export default Header;
