<!DOCTYPE html>
	<html>
		<head><title>Max and Min </title></head>
		
		<body>
			<script type = "text/javascript">
				//computes the maximum and minimum in array
				function MaxMin(x) {
					var result = [0, 0];
					
					for (var i = 0; i < x.length; i++) {
						if(x[i] > result[0]){
							result[0] = x[i];
						}
						if(x[i] < result[1]) {
							result[1] = x[i];
						}
					}
					return result;
				}
				var array = [89, -35, 11, -14, -31, -40, 73, -40, -29, -81];
				var x = MaxMin(array);
				document.writeln("Max is " +x[0]+ " Min is " +x[1]);
			</script>
		</body>
	</html>
