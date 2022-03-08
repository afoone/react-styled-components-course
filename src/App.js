import './App.css';
import styled from 'styled-components';
import Button from './components/Button';
import TomatoButton from './components/TomatoButton';
import ReversedButton from './components/ReversedButton';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>
          Hola mundo
        </Title>
      </Wrapper>
      <Button>hola</Button>
      <Button primary>primary</Button>
      <TomatoButton>Tomato</TomatoButton>
      <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
      <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
    </div>
  );
}

export default App;
