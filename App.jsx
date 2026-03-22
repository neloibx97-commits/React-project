
import Students from "./components/Students";
import "./App.css"
import user from "./assets/student1-Mary.jpg";
import user1 from "./assets/student2-Dayo.jpg";
import user2 from "./assets/student3-Pat.jpg";
import user3 from "./assets/student4-Hannah.jpg";
import user4 from "./assets/student5-Ola.jpg"
import user5 from "./assets/student6-Moses.jpg";
import user6 from "./assets/student7-David.jpg"
import user7 from "./assets/student9-tony.jpg"


const App = ()=>{
  // logic

return (
  // UI
  <div className="app-container">
    <h1>Students Record Form</h1>

  <div className="students-grid">
    <Students name="Mary Jane" age ="25 yrs" grade= "A1" image={user}/>
    <Students name="Akin Dayo" age ="30 yrs" grade= "B2" image={user1}/>
    <Students name="Dede Pat" age ="22 yrs" grade= "C5" image={user2}/>
    <Students name="Laoye Hannah" age ="24 yrs" grade= "A1" image={user3}/>
    <Students name="Ezekiel Ola" age ="33 yrs" grade= "B3" image={user4}/>
    <Students name="Chidi Moses" age ="32 yrs" grade= "C4" image={user5}/>
    <Students name="Tunde David" age ="28 yrs" grade= "D7" image={user6}/>
    <Students name="Kelechi Maro" age="31 yrs" grade= "C6" image={user7}/>
  </div>
  </div>
);
};
export default App;