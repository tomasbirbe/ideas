import { useState } from "react";
import styled from "styled-components";

const Main = styled.main({
  height: "100%",
  width: "100%",
});

const SMenu = styled.div<{ x: string; y: string }>(({ x, y }) => ({
  transform: `translate(${Number(x) - 50}px, ${Number(y) - 50}px)`,
  background: "#1c1c1c",
  borderRadius: "4px",
  width: "100px",
  height: "100px",
}));

const Menu = ({ x, y }: { x: string; y: string }) => {
  return <SMenu x={x} y={y}></SMenu>;
};

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function toggleMenu(event: any) {
    // setShowMenu(!showMenu);

    setCoords({ x: event.pageX, y: event.pageY });
  }

  return (
    <Main id="main" onClick={toggleMenu}>
      {showMenu && <Menu x={coords.x.toString()} y={coords.y.toString()} />}
    </Main>
  );
}

export default App;
