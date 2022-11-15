import { useState } from "react";
import { isEmpty } from "lodash";

const BadForm = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    profession: "0",
    privacyTerms: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    profession: null,
    privacyTerms: null,
  });

  const handleSubmit = () => {
    let formIsValid = true;

    if (isEmpty(userForm.name)) {
      setErrors((prev) => ({ ...prev, name: "Name is required." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }

    if (isEmpty(userForm.email)) {
      setErrors((prev) => ({ ...prev, email: "Email is required." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }

    if (isEmpty(userForm.password)) {
      setErrors((prev) => ({ ...prev, password: "Password is required." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: null }));
    }

    if (userForm.profession === "0") {
      setErrors((prev) => ({ ...prev, profession: "Profession is required." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, profession: null }));
    }

    if (!userForm.privacyTerms) {
      setErrors((prev) => ({
        ...prev,
        privacyTerms: "You must agree with the privacy terms.",
      }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, privacyTerms: null }));
    }

    if (!formIsValid) return;

    alert(JSON.stringify(userForm));
  };

  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Seu nome"
          value={userForm.name}
          onChange={(e) =>
            setUserForm((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        {errors?.name && <p className="error-message">{errors?.name}</p>}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          className={errors?.email && "input-error"}
          type="email"
          placeholder="Seu e-mail"
          value={userForm.email}
          onChange={(e) =>
            setUserForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {errors?.email && <p className="error-message">{errors?.email}</p>}
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          className={errors?.password && "input-error"}
          type="password"
          placeholder="Senha"
          value={userForm.password}
          onChange={(e) =>
            setUserForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {errors?.password && (
          <p className="error-message">{errors?.password}</p>
        )}
      </div>

      <div className="form-group">
        <label>Profissão</label>
        <select
          className={errors?.profession && "input-error"}
          value={userForm.profession}
          onChange={(e) =>
            setUserForm((prev) => ({ ...prev, profession: e.target.value }))
          }
        >
          <option value="0">Selecione sua profissão...</option>
          <option value="developer">Desenvolvedor</option>
          <option value="other">Outra</option>
        </select>

        {errors?.profession && (
          <p className="error-message">{errors?.profession}</p>
        )}
      </div>

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="privacy-policy"
            checked={userForm.privacyTerms}
            onChange={() =>
              setUserForm((prev) => ({
                ...prev,
                privacyTerms: !prev.privacyTerms,
              }))
            }
          />
          <label>I agree with the privacy terms.</label>
        </div>

        {errors?.privacyTerms && (
          <p className="error-message">{errors?.privacyTerms}</p>
        )}
      </div>

      <div className="form-group">
        <button onClick={handleSubmit}>Criar conta</button>
      </div>
    </div>
  );
};

export default BadForm;
