import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function FOCUS() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="main_contaner">
        <div className="focus_text" data-aos="fade-right">
          <div className="up">FIND YOUR </div>
          <div className="dn">FOCUS</div>
        </div>
        <div className="lists" data-aos="fade-up">
          <ul>
            <li>
              <span></span>Faq
            </li>
            <li>
              <span></span>Calendar
            </li>
            <li>
              <span></span>E-Prospectus
            </li>
          </ul>
        </div>
        <div className="lists" data-aos="fade-up">
          {" "}
          <ul>
            <li>
              <span></span>Registration Form
            </li>
            <li>
              <span></span>Blogs
            </li>
            <li>
              <span></span>Privacy Policy
            </li>
          </ul>
        </div>
        <div className="lists" data-aos="fade-up">
          <ul>
            <li></li>
            <li>
              <span></span>Terms & Conditions
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  margin-top: 3%;
  height: 25vh;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  .main_contaner {
    width: 70%;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
  .focus_text {
    width: 30%;
    height: 100%;
  }
  .up {
    height: 50%;
    color: #000;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    float: left;
    display: flex;
    align-items: end;
  }
  .dn {
    height: 50%;
    color: #a60028;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    float: right;
  }
  .lists {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul li {
    color: #000;
    text-align: center;
    font-family: "TT Chocolates";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8;
    list-style: none;
    display: flex;
    align-items: center;
    padding: 3px;
  }
  ul li span {
    width: 15px;
    height: 1px;
    background: #000;
  }
`;
