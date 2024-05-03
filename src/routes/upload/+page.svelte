<svelte:head>
  <title>User Dashboard | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>

<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>

<script>
  import { Button } from '@sveltestrap/sveltestrap';
  import { onMount } from 'svelte';

  let description = '';
  let imageFile;

  onMount(async () => {
  });

  const handleFileChange = (event) => {
    imageFile = event.target.files[0];
  };

  const uploadImage = async () => {
    if (imageFile && description) {
      // billede og tekstbeskrivelse ?
      console.log('Uploading', { imageFile, description });
      // noget upload logik her?
    }
  };

  const goBackToDiary = () => {
    // tilbage til diary
    window.location.href = '/diary';
    window.location.href = '/history';
  };
</script>




<center>
<div id="epiExplorerHeader">EpiLogger</div>
<div class="dashboard-container">
  <h3>Din personlige EpiLog</h3>
  <div>
    <p>Upload billeder til din EpiLog, som kan ses i EpiHistorik</p>
    <input type="file" id="file-upload" on:change={handleFileUpload} />
    <textarea bind:value={description} placeholder="Tilføj en beskrivelse til dit billede" rows="4"></textarea>
    <button class="btn">Upload billede</button>
    <p>
      <a href="/diary">Gå til hovedmenu</a>
      </p>
    <p>
        <a href="/history">Gå til din EpiHistorik</a>
      </p>
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
  top: 60%; 
  left: 50%;
  transform: translate(-50%, -90%); 
  padding: 1em;
  margin-top: 11.5rem;
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



input[type="file"] {
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }

  textarea {
    width: 100%; 
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-family: inherit; 
    font-size: 1rem;
  }

  p a {
  color: #2b4a84;
  text-decoration: none;
  margin-top: 1rem;
}

p a:hover {
  font-weight: bold;
  text-decoration: underline;
}

</style>
