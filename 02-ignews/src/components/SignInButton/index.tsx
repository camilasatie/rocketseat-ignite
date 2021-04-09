import styles from './styles.module.scss';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const isUserLoggedIn = false;

  const renderLoggedInButton = () => (
    <button 
      type="button"
      className={styles.btn}
    >
      <FaGithub color="#04d361" />
      Camila Satie
      <FiX color="#737380" className={styles.closeIcon} /> 
    </button>
  );

  const renderSignedInButton = () => (
    <button 
      type="button"
      className={styles.btn}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );

  return (
    <>
      {isUserLoggedIn ? renderLoggedInButton : renderSignedInButton}
    </>
  )
}