import { FormularioContext } from 'contextos/Formulario';
import { useContext } from 'react';
import styles from './Inputs.module.css';

export default function Inputs({ children, name, type }) {
  // Use o contexto para atualizar os dados do formulário
  const { atualizaFormulario  } = useContext(FormularioContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    atualizaFormulario (name, value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {children}
      </label>
      {type !== 'select' && (
        <input
          required
          className={styles.input}
          type={type}
          name={name}
          id={name}
          onChange={handleChange}
        ></input>
      )}
      {type === 'select' && (
        <select
          required
          className={styles.input}
          name={name}
          id={name}
          onChange={handleChange}
        >
          <option disabled>Tipo de ingresso</option>
          <option value="Premium">Pista Premium</option>
          <option value="Comum">Pista Comum</option>
          <option value="Terreo">Pista Térreo</option>
          <option value="Superiores">Pista Superiores</option>
          <option value="Rampa">Rampas</option>
        </select>
      )}
    </div>
  );
}
