$(document).ready(function() {
// init Isotope
      var $grid = $('.grid').isotope({
         // options
      });
     
// filter items on button click
      $('.filter-button-group').on('click', 'button', function() {
         var filterValue = $(this).attr('data-filter');
         $grid.isotope({
            filter: filterValue
         });
      });
      
// filter .html items
      $grid.isotope({
         filter: '.html'
      });
      // filter .web items     
      $grid.isotope({
         filter: '.web'
      });

      // filter .branding items
      $grid.isotope({
         filter: '.branding'
      });

      // filter .print
      $grid.isotope({
         filter: '.print'
      });

      // show all items
      $grid.isotope({
         filter: '*'
      });

});
 


