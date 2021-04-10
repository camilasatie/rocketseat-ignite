import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const [session] = useSession();

  console.log(session)

  const renderLoggedInButton = () => (
    <button 
      type="button"
      className={styles.btn}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} /> 
    </button>
  );

  const renderSignedInButton = () => (
    <button 
      type="button"
      className={styles.btn}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );

  return (
    <>
      {session ? renderLoggedInButton() : renderSignedInButton()}
    </>
  )
}