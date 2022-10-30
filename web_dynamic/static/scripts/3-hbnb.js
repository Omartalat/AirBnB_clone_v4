window.addEventListener('load', function () {
    // Select some Amenities to be comfortable!
    $.ajax('http://0.0.0.0:5001/api/v1/places_search/').done(function (data) {
        if (data.status === 'OK') {
          $('#api_status').addClass('available');
        } else {
          $('#api_status').removeClass('available');
        }
      });
    const amenity = {};
    $('input[type=checkbox]').change(function () {
      if ($(this).prop('checked')) {
        amenity[$(this).attr('data-id')] = $(this).attr('data-name');
      } else if (!$(this).prop('checked')) {
          delete amenity[$(this).attr('data-id')];
      }
      if (Object.keys(amenity).length === 0) {
        $('div.amenities h4').html('&nbsp');
      } else {
  
          $('div.amenities h4').text(Object.values(amenity).join(', '));
      }
    });
  });

  //Fetch places
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: JSON.stringify({})
  }).done(function (data) {
    for (const place of data) {
      const template = `<article>
        <div class="title">
          <h2>${place.name}</h2>
          <div class="price_by_night">
        $${place.price_by_night}
          </div>
        </div>
        <div class="information">
          <div class="max_guest">
        <i class="fa fa-users fa-3x" aria-hidden="true"></i>
        <br />
        ${place.max_guest} Guests
          </div>
          <div class="number_rooms">
        <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
        <br />
        ${place.number_rooms} Bedrooms
          </div>
          <div class="number_bathrooms">
        <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
        <br />
        ${place.number_bathrooms} Bathroom
          </div>
        </div>
        <div class="description">
          ${place.description}
        </div>
      </article> <!-- End 1 PLACE Article -->`;
      $('section.places').append(template);
    }
  });