import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Achievement() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <DIV>
      <div className="main_container">
        <div className="left_container">
          <div className="left_img_parent" data-aos="fade-up-right">
            <div className="image2">
              <div className="custom_text_area">
                <div className="custom_text_swim">
                  <p>Swimming</p>
                </div>
                <div className="custom_text_arrow">
                  <div className="custom_text_arrow_text">
                    22 Acres, Pollution-Free, World-Class.
                  </div>
                  <div className="custom_text_arrow_arrow">
                    <img
                      src="https://i.ibb.co/0mHkgyR/download-6.png"
                      alt="Arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="left_img_parent2" data-aos="fade-up-right">
            <div className="left_img_child">
              <div className="custom_text_area">
                <div className="custom_text_swim">
                  <p>Swimming</p>
                </div>
                <div className="custom_text_arrow">
                  <div className="custom_text_arrow_text">
                    22 Acres, Pollution-Free, World-Class.
                  </div>
                  <div className="custom_text_arrow_arrow">
                    <img
                      src="https://i.ibb.co/0mHkgyR/download-6.png"
                      alt="Arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_container">
          <div className="text_area" data-aos="fade-up-left">
            <p className="para">
              Awards and achievements, gleaming in sight, Honor efforts and
              perseverance in flight.
            </p>
            <p className="heading">(Everybody Loves that)</p>
          </div>
          <div className="image1" data-aos="fade-up">
            <div className="image_parent">
              <div className="text_swim">
                <p>Swimming</p>
              </div>
              <div className="text_arrow">
                <div className="text_arrow_text">
                  22 Acres, Pollution- Free, World-Class.
                </div>
                <div className="text_arrow_arrow">
                  <img
                    src="https://i.ibb.co/0mHkgyR/download-6.png"
                    alt="fsd"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="activities_btn" data-aos="fade-up">
            SEE ALL ACTIVITIES{" "}
            <img src="https://i.ibb.co/BCVWMM8/imagearrow2.png" />
          </button>
        </div>
      </div>

      <div className="center_image">
        <img src="https://netpuppy.vercel.app/static/media/seemore.e8d2da45eb2413106ab9.png" />
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  position: relative;
  .center_image {
    width: 110px;
    height: 110px;
    position: absolute;
    top: 50%;
  }
  .center_image img {
    width: 100%;
  }
  .main_container {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;

    justify-content: space-between;
  }
  .right_container {
    padding: 20px;
    width: 45%;
    position: relative;
  }

  .text_area {
    width: 95%;
  }
  .text_area .para {
    color: #000;
    font-family: Mirador;
    font-size: 38px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.8px;
    padding: 10px;
  }
  .text_area .heading {
    color: #60bdbb;

    font-family: "TT Chocolates Trl";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.4px;
    padding: 8px;
  }
  .image1 {
    width: 75%;
    height: 40%;
    position: absolute;
    left: 11%;
    top: 45%;
    border-radius: 15px;
    background: url(https://netpuppy.vercel.app/static/media/home62.7f4d5672b08220c83366.png);
    background-repeat: no-repeat;
    color: white;
    background-size: 100% auto;
    opacity: 0.7;
  }

  .image_parent {
    position: relative;
    width: 80%;
    margin: auto;
  }

  .text_swim {
    position: absolute;
    top: 200px;
    left: 0;
    font-size: 25px;
    width: 100%;
    font-family: "TT Chocolates Trl";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    color: white;
    line-height: normal;
    letter-spacing: 0.8px;
  }

  .text_arrow {
    position: absolute;
    width: 100%;
    top: 230px;
    padding: 2px;
    display: flex;
    justify-content: space-between;
  }

  .text_arrow_text {
    font-size: 12px;
    width: 40%;
  }

  .text_arrow_arrow {
    width: 10%;
    height: 100%;
    overflow: hidden;
  }
  .text_arrow_arrow img {
    width: 100%;
    height: 100%;
  }
  .activities_btn {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    font-size: 13px;
    border: none;
    border-radius: 5px;
    background-color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 34.5px;
    background-color: #fff;
    border: 2.5px solid #dbc79f;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    cursor: pointer;
    border-radius: 34.5px;
    border: 2.5px solid #dbc79f;
    position: absolute;
    bottom: -8px;
    left: 15%;
  }
  .activities_btn:hover {
    background-color: #dbc79f;
    color: #fff;
    border-color: #dbc79f;
  }
  .activities_btn img {
    margin-left: 40px;
    width: 20%;
  }
  /* for-left */
  .left_container {
    width: 45%;
    margin-top: 50px;
  }
  .left_img_parent {
    width: 75%;

    height: 40%;
    border-radius: 15px;
    margin: auto;
    overflow: hidden;
    padding-right: 30px;
    background: url(https://netpuppy.vercel.app/static/media/home61.c100006451514b9106a1.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    position: relative;
    color: white;
    margin-top: 13%;
  }

  .custom_text_swim {
    font-family: "TT Chocolates Trl";
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.8px;
  }
  .custom_text_area {
    align-items: center;
    border-radius: 10px;
    width: 80%;
    margin: auto;
    position: absolute;
    top: 190px;
    left: 10%;
  }

  .custom_text_swim,
  .custom_text_arrow {
    flex: 1;
  }

  .custom_text_arrow {
    display: flex;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .custom_text_arrow_text {
    font-size: 12px;
    width: 40%;
    color: white;
  }

  .custom_text_arrow_arrow img {
    width: 30px;
    height: auto;
  }
  .left_img_parent2 {
    width: 75%;
    height: 40%;
    border-radius: 15px;
    margin: auto;
    margin-top: 17%;
    position: relative;
  }
  .left_img_child {
    background: url(https://netpuppy.vercel.app/static/media/home63.10defa3b4076ee616c14.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;
    left: 10%;
  }
`;
