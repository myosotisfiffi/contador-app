import {Container} from "./components/Container/Container";
import { Heading } from "./components/Heading/Heading";

export function App() {
return (
  <>
    <Container>
        <Heading>LOGO</Heading>
    </Container>
  <Container>
       <section>MENU</section>
  </Container>
    <Container>
        <section>FORM</section>
    </Container>
  <Container>
      <section>FOOTER</section>
    </Container>
  </>
  );
}