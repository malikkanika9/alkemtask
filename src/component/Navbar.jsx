import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="flex" style={ {
    display:"flex",
    gap: "10px",
  justifyContent :"center",
  marginBottom:"20px"
    }}>
      <div>
        <Link to={"/"}>Login</Link>
      </div>
      <div>
        <Link to={"/Landing"}> Landing </Link>
      </div>
      <div>
        <Link to={"/Landing"}> Landing </Link>
      </div>
      
    </div>
  );
};