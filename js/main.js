// Accordion section
// Hide all images by default
        $('#image1, #image2, #image3').hide();

        // Toggle plus and minus icons
        $(document).on('click', '.card-icon button', function() {
          $(this).closest('.card-icon').toggleClass('colored');
          $(this).closest('.icon').siblings().find('.card-icon').removeClass('colored');
          $(this).find('.fas').toggleClass('fa-plus fa-minus');
          $(this).closest('.icon').toggleClass('bordered');
          $(this).closest('.icon').siblings().removeClass('bordered').find('.fas').removeClass('fa-minus').addClass('fa-plus');
        });

        // Switch images
        $(document).on('show.bs.collapse', '.collapse', function () {
          var targetId = $(this).attr('id');
          if (targetId === 'collapse1') {
            $('#image1').show();
            $('#image2, #image3').hide();
          } else if (targetId === 'collapse2') {
            $('#image2').show();
            $('#image1, #image3').hide();
          } else if (targetId === 'collapse3') {
            $('#image3').show();
            $('#image1, #image2').hide();
          }
        });

        // Hide all images when all accordions are closed
        $(document).on('hide.bs.collapse', '.collapse', function () {
          var targetId = $(this).attr('id');
          if (targetId === 'collapse1' && !$('#collapse2').hasClass('show') && !$('#collapse3').hasClass('show')) {
            $('#image1').hide();
          } else if (targetId === 'collapse2' && !$('#collapse1').hasClass('show') && !$('#collapse3').hasClass('show')) {
            $('#image2').hide();
          } else if (targetId === 'collapse3' && !$('#collapse1').hasClass('show') && !$('#collapse2').hasClass('show')) {
            $('#image3').hide();
          }
        });

       