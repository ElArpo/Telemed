<svelte:head>
    <title>New Page | Velzon - Svelte Admin & Dashboard Template</title>
  </svelte:head>
 
 
  <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>

  <script>
    import { Container, Row, Col, Input, Button } from '@sveltestrap/sveltestrap';
  
    const md = { size: 4, offset: 4 };
    const sm = { size: 6, offset: 3 };
  
    let username = '';
    let password = '';
  
    const login = async () => {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const result = await response.text();
      if (response.status === 200) {
        window.location = '/diary';
      } else {
        alert('Forkert brugernavn eller password');
      }
    };
  </script>



<div id="epiExplorerHeader">EpiLogger</div>

<div class="login-container">
  <h3>Velkommen</h3>
  <div class="form-group">
    <label for="username">Brugernavn:</label>
    <input type="text" id="username" bind:value={username} />
  </div>
  <div class="form-group">
    <label for="password">Adgangskode:</label>
    <input type="password" id="password" bind:value={password} />
  </div>
  <button on:click={login}>Log Ind</button>
  <p><a href="/user">Opret bruger</a></p>
</div>




<style>
#epiExplorerHeader {
  position: absolute; 
  font-family: 'Alfa Slab One', cursive;
  color: #1e3e7e; 
  font-size: 7rem; 
  margin-bottom: 10rem; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  position: absolute; 
  top: calc(40% - 200px); 
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; 
}

.login-container {
  width: 350px;
  height: auto;
  position: absolute;
  top: 55%; 
  left: 50%;
  transform: translate(-50%, -10%); 
  padding: 1.3em;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  border-radius: 0.9rem;
  border: 1px solid #1e2e7e;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.form-group {
  width: 100%;
  margin-bottom: 1rem;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.5rem;
  margin: 0.2rem 0;
  border: 1px solid #2b4a84cc;
  border-radius: 0.25rem;
  box-sizing: border-box;
}

button {
  color: #ffffff;
  background-color: #2b4a84;
  padding: 0.6rem 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  transition: background-color 0.2s;
}

button:hover {
  color: #ffffff;
  background-color: #233e70;
  cursor: pointer;
}

.login-container {
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1e3e7e; 
}

/* 'Opret bruger' link */
p a {
  color: #2b4a84;
  text-decoration: none;
  margin-top: 1rem;
}

p a:hover {
  color: #233e70;
  font-weight: bold;
  text-decoration: underline;
}
</style>
