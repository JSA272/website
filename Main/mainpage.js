var main = function() {
	$('.sociallink').hover(function(){
		$(this).addClass('selected');
		},
	function(){
		$(this).removeClass('selected');
		}
	);
};

$(document).ready(main);