import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Map() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="main_contaer">
        <div className="content">
          <div className="bold_text">
            <div className="become">BECOME A PART OF THE...</div>{" "}
            <div className="family">TULA’S FAMILY</div>
            <div className="paragraph">
              VILL.DHOOLKOT, NEAR TULAS INSTITUTE SELAQUI NEAR MANDIR Dehradun,
              Uttarakhand, 248197
            </div>
            <div className=" phoneemail">
              <p>(+91) 9458311000 </p>
              <p>info@tis.edu.in</p>
            </div>
          </div>

          <div className="button_area">
            <button>VIRTUAL TOUR</button>
            <button>APPLY NOW</button>
            <button>fedena LOGIN</button>
          </div>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(https://netpuppy.vercel.app/static/media/map.7ab82a085bd7b2515c07.png);
  .main_contaer {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 40%;
    height: 50%;
    margin: auto;
    border: 1px solid green;
  }
  .button_area {
    width: 45%;
    height: 10%;
    margin: auto;
    border: 1px solid green;
  }
  .bold_text {
    border: 1px solid green;
  }
  .bold_text .become {
    color: #fff;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 80%;
  }
  .bold_text .family {
    color: #a60028;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 70%;
    float: right;
  }
  .bold_text .paragraph {
    color: #fff;
    text-align: center;
    font-family: "TT Chocolates";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 70%;
    border: 1px solid green;
    margin: 65px auto !important ;
  }

  .phoneemail {
    display: flex;
    justify-content: space-around;
    margin-top: -40px !important;
    color: #fff;
    text-align: center;
    font-family: "TT Chocolates";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 70%;
    border: 1px solid green;
    margin: auto;
  }
  .button_area {
    width: 100%;
    border: 1px solid green;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    height: 13% !important;
  }
  .button_area button {
    width: 125px;
    padding: 10px 25px;
    flex-shrink: 0;
    background: #a60028;
    border: none;
    color: white;
    color: #fff;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
