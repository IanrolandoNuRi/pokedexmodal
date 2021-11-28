<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Pokedex</title>
	<link rel="stylesheet" type="text/css" href="css/Pokedex.css">

	<script src="js/jquery-3.6.0.js"></script>
	<script src="js/pokedex.js"></script>
	

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



</body>
</html>

<script>
	if (kantoArray == null) {
		var kantoArray = <?php echo json_encode($kantoentries);?>;
	}
	PokemonSearch();
</script>

