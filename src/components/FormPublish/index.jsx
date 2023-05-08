import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./formPublish.css";

const FormPublish = ({ token }) => {
  const [formData, setFormData] = useState({
    title: "Costume 2 pièces",
    description: "Elégant. Parfait pour répondre aux issues.",
    size: "L / 40",
    color: "Rouge qui claque",
    brand: "MARVEL",
    city: "Paris Le Réacteur",
    condition: "Propre",
    price: 2,
    trade: false,
  });
  const [picture, setPicture] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
    // preview ?
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    // It looks Axios is able to deal with a plain JS object
    // But let's make an epxlicit form-data object
    const formDataInst = new FormData();
    for (const [k, v] of Object.entries(formData)) {
      formDataInst.append(k, v);
    }
    formDataInst.append("picture", picture);
    // Check
    // for (const value of formDataInst.values()) {
    //   console.log(value);
    // }

    try {
      const result = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formDataInst,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(result.data);
      navigate(`/offer/${result.data._id}`);
    } catch (error) {
      // console.error(error.response?.data.message);
      if (error.response?.status === 400) {
        setErrorMessage("Un titre, un prix et une image doivent être donnés");
      } else {
        setErrorMessage("Désolé, la publication a échoué. Contactez-nous");
        // bonus
        if (error.response?.data?.message) {
          console.error(error.response.data.message);
        } else {
          console.error(error.message);
        }
      }
    }
  };

  return (
    <div className="form-publish-container">
      <h1>Vends ton article</h1>

      <form onSubmit={handleSubmit}>
        <fieldset className="file">
          <div>
            <label htmlFor="file">
              <span>+</span>
              <span>Ajouter une photo</span>
            </label>
            <input
              id="file"
              type="file"
              accept=".png, .jpeg, .jpg"
              name="picture"
              onChange={handlePictureChange}
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="columns">
            <label htmlFor="title">Titre</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="ex: Chemise Sézaoe verte"
              required
            />
          </div>
          <div className="columns">
            <label htmlFor="description">Décris ton article</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              type="text"
              value={formData.description}
              onChange={handleChange}
              placeholder="ex: porté quelquefois, taillé correctement"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="columns">
            <label htmlFor="brand">Marque</label>
            <input
              id="brand"
              name="brand"
              type="text"
              value={formData.brand}
              onChange={handleChange}
              placeholder="ex: Zara"
            />
          </div>
          <div className="columns">
            <label htmlFor="size">Taille</label>
            <input
              id="size"
              name="size"
              type="text"
              value={formData.size}
              onChange={handleChange}
              placeholder="ex: L / 40 / 12"
            />
          </div>

          <div className="columns">
            <label htmlFor="color">Couleur</label>
            <input
              id="color"
              name="color"
              type="text"
              value={formData.color}
              onChange={handleChange}
              placeholder="ex: Fushia"
            />
          </div>

          <div className="columns">
            <label htmlFor="condition">Etat</label>
            <input
              id="condition"
              name="condition"
              type="text"
              value={formData.condition}
              onChange={handleChange}
              placeholder="ex: Neuf avec étiquette"
            />
          </div>

          <div className="columns">
            <label htmlFor="city">Lieu</label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              placeholder="ex: Paris"
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="columns">
            <label htmlFor="price">Prix</label>
            <div className="group">
              <input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.valueAsNumber })
                }
                placeholder="ex: 0.00 €"
                required
              />

              <div className="checkbox">
                <label htmlFor="trade">
                  Je suis intéressé(e) par les échanges
                </label>
                <input
                  id="trade"
                  name="trade"
                  type="checkbox"
                  checked={formData.trade}
                  onChange={() =>
                    setFormData({ ...formData, trade: !formData.trade })
                  }
                />
              </div>
            </div>
          </div>
        </fieldset>

        <div className="submit">
          <button type="submit" className="btn btn-primary">
            Ajouter
          </button>
        </div>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default FormPublish;
