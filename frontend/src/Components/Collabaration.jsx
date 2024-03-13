import { useEffect } from "react";
import AOS from "aos";
import styled from "styled-components";
import "aos/dist/aos.css";
export default function Collabaration() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="main_container">
        <div className="upper_div">
          <div className="text_cont1" data-aos="fade-up-right">
            <div className="hide_cont"></div>
            <div className="show_cont">
              <h2>
                COLLAB<span>ORATIONS</span>
              </h2>
            </div>
          </div>
          <div className="imag_cont1">
            <div className="images_c" data-aos="fade-up">
              <img src="https://netpuppy.vercel.app/static/media/home9AS.af65266ab005970019eb.png" />
            </div>
            <div className="images_c" data-aos="fade-up">
              <img src="https://netpuppy.vercel.app/static/media/home9YOU.29c27ddacc0638e728e7.png" />
            </div>
            <div className="images_c" data-aos="fade-up">
              <img src="https://netpuppy.vercel.app/static/media/home9LIO.a83eda4f822a0d2e7fa9.png" />
            </div>
            <div className="images_c" data-aos="fade-up">
              <img src="https://netpuppy.vercel.app/static/media/home9PEN.21eefc054461b96eebc6.png" />
            </div>
          </div>
        </div>
        <div className="lower_div">
          <div className="text_cont2" data-aos="fade-up-left">
            <div className="para">
              <p>
                What stands out to us is the schools emphasis on individualized
                attention. Our childs teachers have been attentive.
              </p>
            </div>
          </div>
          <div className="image_cont2">
            <div className="images_bot" data-aos="fade-up">
              <img src="https://netpuppy.vercel.app/static/media/home9UN.412808f140f85a939395.png" />
            </div>
            <div className="images_bot" data-aos="fade-up">
              <img src="https://netpuppy.vercel.app/static/media/home9IN.41e653b91ad65308c37f.png" />
            </div>
            <div className="images_bot" data-aos="fade-up">
              <img src="https://netpuppy.vercel.app/static/media/home9TRI.11c3a79408d7eac516e9.png" />
            </div>
            <div className="images_bot" data-aos="fade-up">
              <img src="https://netpuppy.vercel.app/static/media/home9DAN.520ca89566a6b84a9ff3.png" />
            </div>
            <div className="images_bot" data-aos="fade-up">
              <img src="https://netpuppy.vercel.app/static/media/home9CT.5b863e636e2dbebc7c26.png" />
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  margin-top: 5%;
  .main_container {
    width: 99%;

    height: 35vh;
  }
  .upper_div {
    height: 50%;
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  .text_cont1 {
    width: 50%;

    display: flex;
    align-items: center;
  }
  .imag_cont1 {
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .images_c {
    width: 115px;
    height: 120px;
  }
  .images_c img {
    width: 100%;
  }
  .hide_cont {
    width: 10%;
  }
  .show_cont {
    width: 90%;
  }
  .show_cont h2 {
    color: #000;
    text-align: center;
    font-family: Mirador;
    font-size: 40px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
  }
  .show_cont span {
    color: #b90124;
  }
  .lower_div {
    height: 50%;
    width: 100%;

    display: flex;
  }
  .text_cont2 {
    width: 30%;

    display: flex;
    justify-content: center;
  }
  .para {
    width: 75%;
  }
  .text_cont2 p {
    /* color: #fff; */
    font-family: "TT Chocolates Trl";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.5px;
  }
  .image_cont2 {
    width: 70%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .images_bot {
    width: 130px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .images_bot img {
    width: 100%;
  }
`;
