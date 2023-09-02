<script>
	let peso = 0;
	let altura = 0;
	let imc = 0;
	let mostrarPesoIdeal = false;
	let pesoMax = 0;
	let pesoMin = 0;

	function calcularIMC(){
		if(peso>0 && altura>0){
			imc = (peso / Math.pow(altura, 2)).toFixed(2);
			pesoMin = (18.51 * Math.pow(altura, 2)).toFixed(2);
			pesoMax = (24.99 * Math.pow(altura, 2)).toFixed(2);
		} else {
			imc = 0;
		}
	}

	function controlaPesoIdeal(){
		mostrarPesoIdeal = !mostrarPesoIdeal
	}

</script>

<main>
	<h1>Calculadora de IMC</h1>
	<label>
		Peso(kg): <input type="number" bind:value={peso} on:input={calcularIMC}/>
	</label>
	<label>
		Altura(m): <input type="number" bind:value={altura} on:input={calcularIMC}/>
	</label>
	<button class="danger lg" on:click={controlaPesoIdeal}>
		{#if mostrarPesoIdeal}
			Ocultar peso ideal
		{:else}
			Mostrar peso ideal
		{/if}
	</button>
	{#if imc>0}
		<p>Seu IMC é {imc}</p>
		{#if imc<=18.5}
			<p>Você está abaixo do peso, coma e treine mais, seu frango !</p>
		{:else if imc<25}
			<p>Está no seu peso ideal, mas dá pra melhorar, bora ficar monstrão.</p>
		{:else if imc<30}
			<p>Você está levemente acima do peso, continue treinando.</p>
		{:else if imc<35}
			<p>Você está com obesidade grau 1, ou maromba grau 1</p>
		{:else if imc<40}
			<p>Você está com obesidade grau 2, ou maromba grau 2 (severa?)</p>
		{:else}
			<p>Você está com obesidade grau 3, ou FAKE NATTY ! (morbida?)</p>
		{/if}
		{#if mostrarPesoIdeal}
			<p>Seu peso ideal é de {pesoMin} a {pesoMax}</p>
		{/if}
	{/if}
	
</main>

<style>
  main {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

</style>