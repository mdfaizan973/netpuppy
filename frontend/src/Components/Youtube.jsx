import styled from "styled-components";

export default function Youtube() {
  return (
    <DIV>
      <div className="main_conter">
        <div className="left_conter">
          <div className="text_cont">
            <div className="head">
              <h1>
                From The <span>Parents</span>
              </h1>
            </div>

            <div className="svg_area">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8jwxaSxFDjz0CO2EyB6KZvYHiq9_0LSAhfnr3AJKs-cZBkJSh"
                alt="ruets"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="350"
                height="3"
                viewBox="0 0 622 3"
                fill="none"
              >
                <path d="M0.5 1.5H621.5" stroke="#B90124" strokeWidth="2.5" />
              </svg>
            </div>
            <div className="para">
              <p>
                What stands out to us is the schools emphasis on individualized
                attention. Our childs teachers have been attentive to their
                unique needs, providing the support and encouragement necessary
                for their academic success.
              </p>
            </div>
          </div>
        </div>
        <div className="right_conter">2</div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  .main_conter {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .left_conter {
    width: 50%;
    height: 50%;
  }
  .text_cont {
    width: 80%;
    height: 100%;
    margin: auto;
  }
  .head {
    width: 60%;
    margin: auto;
  }
  .head h1 {
    color: #000;
    font-family: "URW DIN Arabic";
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 1.6px;
  }
  .para {
    text-align: start;
    margin-top: 40px;
  }
  .para p {
    color: #000;
    font-family: "TT Chocolates Trl";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.6px;
    width: 70%;
    margin: auto;
  }
  .head span {
    color: #b90124;
    font-family: Mirador;
    font-size: 50px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 1.6px;
  }
  .svg_area {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
  }
  .svg_area img {
    width: 10%;
  }
  .right_conter {
    border: 1px solid green;
    width: 50%;
    height: 100%;
  }
`;
