<svelte:head>
  <title>User Dashboard | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>

<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>

<script>
  import { Container, Row, Col, Card, Button } from '@sveltestrap/sveltestrap';
  import { onMount } from 'svelte';

  let userData = {};

  onMount(async () => {
    const response = await fetch('/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 200) {
      userData = await response.json();
    } else {
      alert('Failed to fetch user data');
    }
  });

  const handleFileUpload = (event) => {
    // Upload logic here
  };

  const fetchHistory = () => {
    // Fetch history logic here
  };

  const logout = () => {
    // Logout logic
    window.location = '/';
  };
</script>


<center>
<div id="epiExplorerHeader">EpiLogger</div>
<div class="dashboard-container">
  <h3>Velkommen, {userData.name || 'bruger'}</h3>
  <div>
    <p> <a href="/upload" class="button-link">Upload et billede til din EpiLog</a><p></p>
    <p> <a href="/history" class="button-link">Hent Din EpiHistorik</a><p></p>
    <p><a href="/logout" class="button-link button-logout">Log ud</a><p>
  </div>
</div>

</center>



<style>
#epiExplorerHeader {
  font-family: 'Alfa Slab One', cursive;
  color: #1e3e7e; 
  font-size: 7rem; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  position: absolute; 
  top: calc(40% - 200px); 
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; 
}

.dashboard-container {
  width: 500px;
  height: auto;
  position: absolute;
  top: 55%; 
  left: 50%;
  transform: translate(-50%, -80%); 
  padding: 2.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  border-radius: 0.9rem;
  border: 1px solid #1e2e7e;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}






  /* link */
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
