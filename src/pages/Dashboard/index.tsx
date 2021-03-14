import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Git Esplorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/22971725?s=460&u=de9cda2deeacd76e9107d13ac5c6aafe847fd1ec&v=4"
            alt="Matheus Moreira Ferreira"
          />
          <div>
            <strong>Titulo</strong>
            <p>
              Combine blood oranges, escargot and tofu. brush with springy green
              curry and serve chopped with doughnut. Enjoy!
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/22971725?s=460&u=de9cda2deeacd76e9107d13ac5c6aafe847fd1ec&v=4"
            alt="Matheus Moreira Ferreira"
          />
          <div>
            <strong>Titulo</strong>
            <p>
              Combine blood oranges, escargot and tofu. brush with springy green
              curry and serve chopped with doughnut. Enjoy!
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/22971725?s=460&u=de9cda2deeacd76e9107d13ac5c6aafe847fd1ec&v=4"
            alt="Matheus Moreira Ferreira"
          />
          <div>
            <strong>Titulo</strong>
            <p>
              Combine blood oranges, escargot and tofu. brush with springy green
              curry and serve chopped with doughnut. Enjoy!
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
