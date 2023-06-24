import React from 'react';
import ReactDOM from 'react-dom/client';
import"./styles.css";
function toThaiDateString(date) {
  let monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม.",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} `+`${hour}:${minutes}:${second} น.`;
}

let date1 = new Date();
console.log(toThaiDateString(date1));

function MydateTime(){
  let date1 = new Date();
  date1 =toThaiDateString(date1);
  return <div>{date1}</div>;
}

function App(){
  return( 
  <div className="card">
    <Avatar />
      <Intro />
      &nbsp;
      <Skilllist />
      &nbsp;
  </div>
  );
}

function Skilllist(){
  return(
    <div className="Skilskill-listlList">
      <Skill skill="Fullter" emoji="👍" color="#51bff0"/>
      &nbsp;
      <Skill skill="MySQL" emoji="👍" color="#066181" />
      &nbsp;
      <Skill skill="PHP" emoji="👍" color="#6b7cb8" />
      <br></br>
      <br></br>
      <Skill skill="firebase" emoji="🐥" color="#ffab2e" />
      &nbsp;
      <Skill skill="JavaScript" emoji="🐥" color="#583d99" />
      &nbsp;
      <Skill skill="CreateDiagram" emoji="💪" color="#a9feb2" />
    </div>
  )
}
function Skill(props){
  return (
    <div className="skill"style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>

    </div>
  );
}
function Intro(){
  return(
    <div>
      <h1>นาย ชัชวัสส์ วุฒิยกรณ์</h1>
      <p>
        นักศึกษาเทคโนโลยีสารสนเทศและการสื่อสาร 
        <br></br>
        มหาวิทยาลัยอุบลราชธานี 
        เวลาว่าง เล่นเกม
      </p>
    </div>
  );
}

function Avatar(){
  return <img className="Avatar" src="me2.jpg" alt="Chatchaeat Wuttiyakon"></img>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

