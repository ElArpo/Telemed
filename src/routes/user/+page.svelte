<svelte:head>
    <title>New user page | Velzon - Svelte Admin & Dashboard Template</title>
  </svelte:head>
 

  <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>




  <script>
    let id = '';
    let username = '';
    let email = '';
    let password = '';
    let confirmPassword = '';

    async function createUser() {
        if(password !== confirmPassword) {
            alert('Adgangskoderne stemmer ikke overens. Prøv igen.');
            return;
        }

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
            window.location.href = '/'; // Omdiriger til login-side
        } else {
            alert('Der opstod en fejl under oprettelsen af brugeren.');
        }
    }
</script>

  

  <div id="epiExplorerHeader">EpiLogger</div>
  <div class="login-container">
    <h3>Opret en ny bruger</h3>
    <div class="form-group">
      <label for="id">Brugernavn:</label>
      <input type="text" id="id" bind:value={id} />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={email} />
    </div>
    <div class="form-group">
      <label for="password">Adgangskode:</label>
      <input type="password" id="password" bind:value={password} />
    </div>
    <div class="form-group">
        <label for="confirmPassword">Gentag adgangskoden:</label>
        <input type="password" id="confirmPassword" bind:value={confirmPassword} />
    </div>
    <button on:click={createUser}>Opret Bruger</button>
    <p><a href="/">Tilbage til login</a></p>
    
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
        max-width: 100%;
        min-height: 300px;
        top: calc(40% - 200px); 
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem;
        margin-top: 2.5rem;
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
        width: calc(100% - 1rem);
        margin-bottom: 0.01rem;
    }

    input[type="text"],
    input[type="email"],
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

    /* 'tilbage til login' link */
    p a {
        display: block;
        color: #2b4a84;
        text-decoration: none;
        text-align: center; 
    }

    p a:hover {
        color: #233e70;
        font-weight: bold;
        text-decoration: underline;
    }
    </style>

