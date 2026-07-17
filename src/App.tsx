import { Container } from "./components/Container/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react"; 
import { Footer } from "./components/Footer";
 
 

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
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
