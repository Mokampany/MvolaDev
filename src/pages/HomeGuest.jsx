import styled from "@emotion/styled";
import Nav from "../components/Nav";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import {motion} from "framer-motion"
const Container = styled.div`
  #home {
    // margin: 30px 30px 0 30px;
    padding: 10px;
    min-height: 100vh;
    background-color: #282c34;
    // border-radius: 10px;
    color: white;
  }
`;
const Home = () => {
  useEffect(() => {
    document.title = "Za Mandresy"
  }, [])

  return (
    <>
      <Container>
        <Nav />
        <motion.div id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          d
        </motion.div>
      </Container>
    </>
  );
};

export default Home;
