import { useState } from 'react';

export function useForm(valoresInicias) {
    const [values, setValues] = useState(valoresInicias);
  
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      });
    }
  
    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value,
      );
    }
  
    function clearForm() {
      setValues(valoresInicias);
    }
  
    return {
      values,
      handleChange,
      clearForm
    };
  }

  export default useForm;