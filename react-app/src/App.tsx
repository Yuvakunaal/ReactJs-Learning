import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { FaCalendarAlt } from "react-icons/fa";
import Like from "./components/Like";

function App1(){
  let items = ["New York","San Fransisco","Tokyo","London","Paris"];
  const handleSelect = (item : string) => {
    console.log(item);
  }
  return <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelect} />
    <Alert onClose={() => {console.log("alerted")}}>
      Hello kunaal <span>from <b>cbit</b></span>
    </Alert>
    <Button color="dark" onClick={() => {console.log("Clicked");}}>
      My button
    </Button>
  </div>
}

function App2(){
  const [alertVisible,setAlertVisibility] = useState(false);
  return <div>
    { alertVisible &&  <Alert onClose={() => {setAlertVisibility(false)}}>My alert</Alert>}
    <Button color="dark" onClick={() => setAlertVisibility(true)}>
      My button
    </Button>
  </div>
}

function App3(){
  let items = ["New York","San Fransisco","Tokyo","London","Paris"];
  const handleSelect = (item : string) => {
    console.log(item);
  }
  return <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelect} />
    <FaCalendarAlt size={40} color="grey"/>
    <Button onClick={() => {console.log("Clicked");}}>My Button</Button>
  </div>
}

function App4(){
  return (
    <div>
      <Like />
    </div>
  )
}

export default App4;