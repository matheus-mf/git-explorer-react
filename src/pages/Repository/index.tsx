import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParamns {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParamns>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Git Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/22971725?s=460&u=de9cda2deeacd76e9107d13ac5c6aafe847fd1ec&v=4"
            alt="Eu"
          />
          <div>
            <strong>Title</strong>
            <p>Margerine combines greatly with al dente cracker crumps.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>48</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/repositories/asdasd">
          <div>
            <strong>Pol, a bene nomen.</strong>
            <p>
              Individuals, egos, and prime teachers will always protect them.
            </p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
