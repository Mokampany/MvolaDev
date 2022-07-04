import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const Container = styled.div`
  .inscription {
    font-size: 1.5em;
    text-align: start;
  }
  h1 {
    font-size: 1.5em;
  }
  button {
    font-size: 0.9em;
  }
  .form div {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 20px) {
  }
  @media screen and (min-width: 450px) {
  }
`;

const Inscription = () => {
  const [prenom, setPrenom] = useState(null);
  const [nom, setNom] = useState(null);
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleChangePrenom = (e) => {
    setPrenom(e.target.value);
  };
  const handleChangeNom = (e) => {
    setNom(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleInscription = async () => {
    await addDoc(collection(db, "utilisateurs"), {
      nom: nom,
      prenom: prenom,
      age: Number(age),
      email: email,
      password: password,
    });
  };

  return (
    <Container>
      <div className="inscription">
        <h1>Creer votre compte</h1>
        <br />
        <form className="form">
          <div className="row">
            <input
              onChange={handleChangePrenom}
              type="text"
              className="lastName"
              placeholder="prenom"
            />
          </div>
          <div className="row">
            <input
              onChange={handleChangeNom}
              type="text"
              className="firstName"
              placeholder="nom"
            />
          </div>
          <div className="row">
            <input
              onChange={handleChangeAge}
              type="text"
              className="age"
              placeholder="age"
            />
          </div>
          <div className="row">
            <input
              onChange={handleChangeEmail}
              type="email"
              className="email"
              placeholder="adresse email"
            />
          </div>
          <div className="row">
            <input
              onChange={handleChangePassword}
              type="password"
              className="password"
              placeholder="creer un mot de passe"
            />
          </div>
          <div className="row">
            <input
              onChange={handleChangeConfirmPassword}
              type="password"
              className="password"
              placeholder="confirmer le mot de passe"
            />
          </div>
          <div className="row">
            <span onClick={handleInscription} className="btn btn-primary">
              Inscription
            </span>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Inscription;
