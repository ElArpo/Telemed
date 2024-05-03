<svelte:head>
    <title>History dashboard | EpiLogger</title>
  </svelte:head>
  
  <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
  
  <script>
    let startDate = '';
    let endDate = '';
  
    // funktion der håndterer indsendelse af datoerne til db (pls budz, hjælp!)
    function fetchLogs() {
      // funktion der skal håndtere at trække data fra databasen baseret på de valgte datoer (--ll--)
      console.log(`Fetching logs from ${startDate} to ${endDate}`);
    }
  </script>

  <center>
    <div id="epiExplorerHeader">EpiLogger</div>
    <div class="history-container">
      <h3>Din personlige EpiHistorik</h3>
      <p>Se dine tidligere EpiLogninger her</p>
      <div class="date-picker-container">
        <label for="start-date">Start Dato:</label>
        <input type="date" id="start-date" bind:value={startDate}>
  
        <label for="end-date">Slut Dato:</label>
        <input type="date" id="end-date" bind:value={endDate}>
      </div>
      
      <button class="btn" on:click={fetchLogs}>Hent Epihistorik</button>
      <p>
        <a href="/diary">Gå til hovedmenu</a>
      </p>
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

.history-container {
    width: 500px;
  height: auto;
  position: absolute;
  top: 55%; 
  left: 50%;
  transform: translate(-50%, -90%); 
  padding: 1.3em;
  margin-top: 3.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1e2e7e;
  background-color: #f8f8f8;
  border-radius: 0.9rem;
  border: 1px solid #1e2e7e;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}


button {
  color: #ffffff;
  background-color: #2b4a84;
  padding: 0.6rem 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  transition: background-color 0.2s;
}

button:hover {
    color: #c8c8c885;
  background-color: #233e70;
  cursor: pointer;
}




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
