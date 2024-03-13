import styled from "styled-components";

export default function Achievement() {
  return (
    <DIV>
      <div className="main_container">
        <div className="left_container">
          <div className="left_img_parent">
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
                    <img src="../../public/arrow.png" alt="Arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="left_img_parent2">
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
                    <img src="../../public/arrow.png" alt="Arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_container">
          <div className="text_area">
            <p className="para">
              Awards and achievements, gleaming in sight, Honor efforts and
              perseverance in flight.
            </p>
            <p className="heading">(Everybody Loves that)</p>
          </div>
          <div className="image1">
            <div className="image_parent">
              <div className="text_swim">
                <p>Swimming</p>
              </div>
              <div className="text_arrow">
                <div className="text_arrow_text">
                  22 Acres, Pollution- Free, World-Class.
                </div>
                <div className="text_arrow_arrow">
                  <img src="../../public/arrow.png" alt="fsd" />
                </div>
              </div>
            </div>
          </div>
          <button className="activities_btn">
            SEE ALL ACTIVITIES <img src="../../public/imagearrow2.png" />
          </button>
        </div>
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

  .main_container {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .right_container {
    width: 47%;

    padding: 20px;
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
    width: 70%;
    height: 40%;
    position: absolute;
    left: 11%;
    top: 45%;
    border-radius: 15px;
    background: url(../../public/image2.png);
    background-repeat: no-repeat;
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
    bottom: -10%;
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
    width: 47%;
  }
  .left_img_parent {
    width: 70%;
    height: 40%;
    border-radius: 15px;
    margin: auto;
    overflow: hidden;
    padding-right: 30px;
    background: url(../../public/image1.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    position: relative;
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
    color: #333;
  }

  .custom_text_arrow_arrow img {
    width: 30px;
    height: auto;
  }
  .left_img_parent2 {
    width: 72%;
    height: 40%;
    border-radius: 15px;
    margin: auto;
    margin-top: 13%;
    position: relative;
  }
  .left_img_child {
    background: url(../../public/image1.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 10%;
  }
`;