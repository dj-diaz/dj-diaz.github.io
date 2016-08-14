$(function() {
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 450) {
  //     $('#divfix').transition({
  //       animation: 'fade up',
  //       duration: '2s',
  //       queue: false,
  //       onComplete: function() {
  //         $('#divfix').transition({
  //           animation: 'fade',
  //           duration: '1s',
  //           queue: false
  //         });
  //       }
  //     });
  //   }
  // });
  //
  // $('#divfix').transition({
  //   reverse: true
  // });

  $('#divfix').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0}, 'slow');
    return false;
  });
});
