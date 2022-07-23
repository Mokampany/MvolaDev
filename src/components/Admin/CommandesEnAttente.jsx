import styled from "@emotion/styled";
import { useState, useEffect } from "react";
const Container = styled.div``;
const H1 = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column;
  &:after {
    content: "";
    border-top: 3px solid grey;
    width: 100%;
  }
`;
const Li = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  &:after {
    content: "";
    border-bottom: 1px solid grey;
    width: 80%;
  }
  text-align: start;
  margin-bottom: 30px;
  font-weight: 700;
`;
const CommandesEnAttente = () => {
  const [trigger, setTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [commandes, setCommandes] = useState(null);
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_NODE_URL}/api/v1/admin/commande?estApprouve=false`
  );
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCommandes(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, trigger]);
  const handleValider = (idCommande) => {
    console.log(idCommande);
    const validerUrl = `${process.env.REACT_APP_NODE_URL}/api/v1/admin/commande/approuver/${idCommande}`;
    fetch(validerUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTrigger(trigger + 1);
      });
  };
  return (
    <Container>
      <H1>Commandes en attentes d'approbation</H1>
      {isLoading && <>Loading....</>}

      {/* {commandes && commandes.map((commande, key) => (
                <Li className="row">
                    <div className="col-md-3">
                        {commande.informationCommande.titreCommande}
                    </div>
                </Li>
            ))} */}

      <table
        style={{ textAlign: "start" }}
        className="table table-bordered dark"
      >
        <thead className="thead-dark" style={{ fontSize: "15px" }}>
          <th>Titre</th>
          <th>Entreprise</th>
          <th>Description</th>
          <th>Tarif</th>
          <th>Action</th>
        </thead>
        <tbody style={{ fontSize: "14px" }}>
          {commandes &&
            commandes.map((commande, key) => (
              <tr key={key}>
                <td style={{ fontWeight: 700 }}>
                  {commande.informationCommande.titreCommande}
                </td>
                <td>{commande.informationCommande.nomEntreprise}</td>
                <td style={{ textOverflow: "ellipsis", maxWidth: "15ch" }}>
                  {commande.informationCommande.description}
                </td>
                <td>{commande.informationPaiement.nomTarif}</td>
                <td>
                  <span
                    onClick={() => {
                      handleValider(commande._id);
                    }}
                    style={{ fontSize: "12px" }}
                    className="btn btn-success"
                  >
                    Valider
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default CommandesEnAttente;
