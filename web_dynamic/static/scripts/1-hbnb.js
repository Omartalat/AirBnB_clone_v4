$(function() {
  const arr = [] 
  if ($('{{ amenity.id }}').prop('checked')) {
    arr.push('{{ amenity.id }}')
  } else {
    const i = arr.indexOf('{{ amenity.id }}')
    arr.splice(i, 1)

    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === '{{ amenity.id }}') {
    //     arr.pop()
    //   }
    // }
  }
  $('.amenities h4').val(arr)
});