import { Container } from "./components/Container/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react"; 
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Heading } from "./components/Heading";
import { ThemeToggle } from "./components/ThemeToggle";


export function App() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
      setNumero(prevNumero => prevNumero + 1);
  }
    return (
      <>
        <Heading>
          Contar ciclos: {numero}
          <button onClick={handleClick}>Contar +1</button>
        </Heading>
        <Container>
          <Logo />
        </Container>
        <Container>
            <div className="header-actions">
                <Menu />
                <ThemeToggle />
          </div>
         
        </Container>
        <Container>
          <CountDown />
        </Container>
        <Container>
          <form className="form" action="">
            <div className="formRow">
              <Cycles />
            <DefaultInput
                  labelText="Task"
                  id="myInput"
                  type="text"
                  placeholder="Enter your task"
                  required />
                  <DefaultButton
                    icon={<PlayCircleIcon />}
                    // onClick={handleStartTimer}
              />
            </div>
            <div className="formRow">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="formRow">
              <p>Ciclos</p>
              <p>00 00 00 00 00</p>
            </div>
            <div className="formRow">
              <button type="submit">Add Task</button>
            </div>
          </form>
        </Container>
        <Container>
          <Footer />
        </Container>
      </>
      );
}
