import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function RegisterCategory() {
  const defaultCategory = {
    name: '',
    description: '',
    color: ''
  };
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState(defaultCategory);

  function setCategoryField(key, value) {
    setCategory({
      ...category,
      [key]: value
    });
  }

  function handleChange(e) {
    const element = e.target;
    setCategoryField(element.getAttribute('name'), element.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {category.name}</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        setCategoryList([
          ...categoryList,
          category
        ]);
        setCategory(defaultCategory);
      }}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="description"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categoryList.map((category, index) => {
          return (
            //`${category}${index}`
            <li key={index}>
              {`${category.name}, ${category.description}, ${category.color}`}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir pra Home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;