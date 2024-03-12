import styled from "styled-components";

export default function WhyTis() {
  return (
    <DIV>
      <div className="main_container">
        <div className="whytis">
          <p>
            Why <span>TIS ?</span>
          </p>
        </div>
        <div className="content_container">
          <div className="left_section">
            <div className="focus_manage">
              <div className="focus">
                <div className="focus_show">
                  <p>A FOCUS ON...</p>
                </div>
                <div className="focus_hide"></div>
              </div>
              <div className="management">
                <div className="manage_hide"></div>
                <div className="manage_show">
                  <p>MANAGEMENT</p>
                </div>
              </div>
            </div>
            <div className="text_content">
              <p>
                Extremely Friendly and Approachable Management. Tula’s
                International School combines – respect for tradition with a
                progressive application of modern sciences, academic rigour with
                a caring heart, and individual appreciation with the warmth of a
                school community
              </p>
            </div>
          </div>
          <div className="right_section">
            <div className="image_container">
              <img src="../../public/241629295906 1.png" />
            </div>
            <div className="small_img_container">
              <div className="smalltis_cont">
                {/* <img src="../../public/smallerimages.jpg" /> */}
              </div>
              <div className="smalltis_cont">
                {" "}
                {/* <img src="../../public/smallerimages.jpg" /> */}
              </div>
              <div className="smalltis_cont">
                {" "}
                {/* <img src="../../public/smallerimages.jpg" /> */}
              </div>
              <div className="smalltis_cont">
                {" "}
                {/* <img src="../../public/smallerimages.jpg" /> */}
              </div>
              <div className="smalltis_cont">
                {" "}
                {/* <img src="../../public/smallerimages.jpg" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 5% !important;
  width: 82%;
  margin: auto;

  height: 100%;
  .whytis {
    width: 100%;
    text-align: center;
  }
  .whytis p {
    color: #202833;
    text-align: center;
    font-family: Mirador;
    font-size: 55px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
  }
  .whytis span {
    color: #b90124;
    font-family: Mirador;
    font-size: 55px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
  }
  .content_container {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 2%;
  }
  .left_section {
    width: 50%;
    height: 100%;
    padding: 5px;
  }

  .focus {
    width: 100%;
    display: flex;
  }
  .focus p {
    color: #202833;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .management {
    width: 100%;
    display: flex;
  }
  .manage_hide {
    width: 30%;
  }
  .manage_show {
    width: 70%;
  }
  .manage_show p {
    float: right;
    margin-top: 5px;
    color: #b90124;
    text-align: center;
    font-family: "Goudy Old Style";
    font-size: 44px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .focus_manage {
    width: 70%;
    margin: auto;
  }
  .text_content {
    width: 70%;
    margin: 8% auto;
    padding-left: 4%;
  }
  .text_content p {
    color: #202833;
    font-family: "TT Chocolates";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .right_section {
    width: 50%;
    height: 100%;
    display: flex;
    padding: 5px;
  }
  .image_container {
    width: 75%;
    height: 450px;
  }
  .image_container img {
    width: 100%;
  }
  .small_img_container {
    width: 25%;
    border: 1px solid teal;
  }
  .smalltis_cont {
    width: 80%;
    height: 20%;
    overflow: hidden;
    margin: auto;
    border: 1px solid teal;
  }

  .smalltis_cont img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
