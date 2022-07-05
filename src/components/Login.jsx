import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  where,
  query,
} from "firebase/firestore";

const Container = styled.div`
  .login {
    font-size: 1em;
    text-align: start;
  }
  h1 {
    font-size: 1.5em;
  }
  .form div {
    margin-bottom: 10px;
  }
`;

const Login = () => {
  const [email, setEmail] = useState(null);
  const [mdp, setMdp] = useState(null);

  let navigate = useNavigate();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMdp = (e) => {
    setMdp(e.target.value);
  };

  const handleSubmitLogin = () => {
    const getUtilisateurs = async () => {
      const data = await getDocs(
        query(
          collection(db, "utilisateurs"),
          where("email", "==", email),
          where("password", "==", mdp)
        )
      );

      if (data.docs.length === 0) {
        console.log("Non");
        navigate("/Authentification", { replace: true });
      } else {
        navigate("/", { replace: true });
        localStorage.setItem("id", data.docs[0].id);
        console.log(data.docs[0].id);
      }
    };
    getUtilisateurs();
  };
  return (
    <Container>
      <div className="login">
        <h1 style={{ fontWeight: "bolder" }}>Se connecter</h1>
        <br />
        <form className="form">
          <div className="row">
            <input
              onChange={handleChangeEmail}
              type="email"
              placeholder="adresse email"
            />
          </div>
          <div className="row">
            <input
              onChange={handleChangeMdp}
              type="password"
              placeholder="mot de passe"
            />
          </div>
          <div className="row">
            <span onClick={handleSubmitLogin} className="btn btn-primary validate">
              Se connecter
            </span>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
