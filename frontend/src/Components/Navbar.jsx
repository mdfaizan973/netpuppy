import styled from "styled-components";
export default function Navbar() {
  return (
    <DIV>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src="https://netpuppy.vercel.app/static/media/logo.97a624e2bdb9ac7ef027.png" />
          </div>
          <div className="links">
            <a href="#">APPLY</a>
            <a href="#">WHY CHOOSE US </a>
            <a href="#">REGISTRATION</a>
            <a href="#">AWARD</a>
            <a href="#">VIRTUL TURE</a>
          </div>
          <div className="logo">
            <img
              className="humburger"
              src="https://i.ibb.co/47xFMgt/download-7.png"
            />
          </div>
        </div>{" "}
      </nav>
    </DIV>
  );
}
const DIV = styled.div`
  width: 99.9%;
  margin: auto;
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 95%;
    margin: auto;
  }

  .logo {
    height: 100%;
    width: 80px;
    cursor: pointer;
  }
  .logo img {
    width: 100%;
  }

  .links {
    display: flex;
    width: 45%;
    justify-content: space-between;
  }

  .links a {
    text-decoration: none;
    margin-left: 20px;
    font-weight: 800;
    color: black;
  }

  .links a:first-child {
    margin-left: 0;
  }
  /* .humburger {
    width: 70% !important;
  } */
`;
