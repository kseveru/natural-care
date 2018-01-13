$(document).ready(function() {

	function containsAll(needles, haystack){
		for (var i = 0 , len = needles.length; i < len; i++) {
			 if ($.inArray(needles[i], haystack) == -1) return false;
		}
		return true;
	}

	var userChoicesArray = [];
	$("#properties input").click(function() {
		var property = $(this).val();
		$(".list li").hide();
		if(jQuery.inArray(property, userChoicesArray) == -1){
			 userChoicesArray.push(property);
		} else {
			 userChoicesArray.splice($.inArray(property, userChoicesArray), 1);
		}

		$(".list li").each(function() {
				var propertyArray = $(this).data("properties").split(" ");
				if (containsAll(userChoicesArray, propertyArray)) {
					$(this).show();
				}
		});
	});

});