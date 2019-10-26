$('.btn-faculty').click(function() {
  $('.student').addClass('remove-section');
	$('.faculty').removeClass('active-section');
  $('.btn-faculty').removeClass('active');
  $('.btn-student').addClass('active');
});

$('.btn-student').click(function() {
  $('.student').removeClass('remove-section');
	$('.faculty').addClass('active-section');	
  $('.btn-faculty').addClass('active');
  $('.btn-student').removeClass('active');
});