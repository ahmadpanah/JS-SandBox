<!DOCTYPE html>
	<html>
		<head><title> Array Average </title></head>
		
		<body>
			<script type = "text/javascript">
				//calculates average of an array
				function average(x) {
					var total = 0;
					
					for (var i = 0; i < x.length; i++) {
						total = total + x[i];
					}
					var mean = total / x.length;
					document.writeln(mean);
				}
				
				var array = [59, 74, 76, 26, 86, 89, 21, 74, 39, 83];
				average(array);
			</script>
		</body>
	</html>
