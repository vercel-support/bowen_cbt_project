import { useState } from 'react'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [matricNumber, setMatricNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.container}>
      <Header title={'Bowen Online Demo Test'} />
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      <div className="row">
        <div className="welcome-banner">
            <div className="welcome_bg">
                <h1>Welcome, Bowenite </h1>
                <div className="hints">
                    <h3>Hints:</h3>
                    <ol> 
                        <li><p>Enter your Matric Number and Password in the form on the right side to proceed.</p></li>
                        <li><p>If you are a new Student, please click on the "Create New Account" Button below the "Submit" button to create an account.</p></li>
                        <li><p>After creating your account, you will be redirect to the login page. Then follow the first hint.</p></li>
                        <li><p>If you are not a new student and have issue login, please call any of the staffs around you. They will attend to you. </p></li>
                    </ol>
                    <p>Thanks for your cooperation.</p>
                </div>
            </div>
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <h2>Sign In</h2>
            <form>
              <div className="form-group">      
                <label>Matric Number</label>
                <input
                  type="text"
                  name="matric_number"
                  maxlength="14"
                  onChange={(e) => setMatricNumber(e.target.value)}
                  placeholder="e.g BU19CIT10000" className="form-control"
                  value={matricNumber}
                />
              </div>    
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="*********"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="form-group">
                    <button type="submit" class="btn btn-submit">Submit </button>
                    <button type="button" class="btn btn-create">Create An Account</button>
                </div> 
            </form>  
          </div>
        </div>
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
