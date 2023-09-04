import {useState} from "react"
import Header from "./header";
import Game from "./game";

export default function YourDreamDog() {
    const [background, setBackground] = useState<string>(''); // suggested attribution style <a href="https://www.freeiconspng.com/img/35432">hearts tumblr png</a>
    
    return (
      <div id='container' className={`flex flex-col select-none ${background}`}>
        <Header />
        <Game setBackground={setBackground}/>
      </div>
    );
  }