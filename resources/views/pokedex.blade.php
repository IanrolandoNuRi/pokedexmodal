<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Pokedex</title>
	<link rel="stylesheet" type="text/css" href="css/Pokedex.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	
	<script src="js/jquery-3.6.0.js"></script>
	<script src="js/pokedex.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
	
</head>
<body>
	<header>
		<h1 align="center">Pokedex</h1>
	</header>

	<section>
		<div id="Search">
			<input type="search" id="search" onkeyup="PokemonSearch()">
			<button id="button"><img src="img/icons/search.png" onclick="PokemonSearchBut()"></button>
			<h4>Filtrar:</h4>
			<input type="checkbox" name="" id="check" checked>
		</div>
		<div id="ContainerCards"></div>
	</section>



<!-- Modal -->
<div class="modal" id="pokeModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div id="pokeContent">
        <div id="PokeImage">
        </div>
        <div id="PokeSummary">
	        <div id="PokeName">
	        </div>
	        <div id="PokeDescription">
	        </div>
	        <div id="PokeAbilities">
	        </div>
        </div>
      </div>
    </div>
  </div>
</div>

</body>
</html>

<script>
	if (kantoArray == null) {
		var kantoArray = <?php echo json_encode($kantoentries);?>;
	}
	PokemonSearch();
</script>
