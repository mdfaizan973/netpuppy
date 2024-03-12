import styled from "styled-components";

export default function YTbanner() {
  return (
    <DIV>
      <div className="ytlogo">
        <img src="https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png" />
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  border: 1px solid green;
  margin-top: 10%;
  border-radius: 20px;
  border-radius: 25px;
  opacity: 0.5;
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 100vh;
  background: url(../../public/image17.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .ytlogo {
    width: 140px;
    height: 100px;
  }
  .ytlogo img {
    width: 100%;
  }
`;
