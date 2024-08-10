$(function () {
  const arr = [];
  if ($("{{ amenity.id }}").prop("checked")) {
    arr.push("{{ amenity.id }}");
  } else {
    const i = arr.indexOf("{{ amenity.id }}");
    arr.splice(i, 1);

    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === '{{ amenity.id }}') {
    //     arr.pop()
    //   }
    // }
  }
  $(".amenities h4").val(arr);
});

$(function () {
  $.get("http://0.0.0.0:5001/api/v1/status/", (data, textStatus) => {
    if (textStatus === "success" && data.status === "OK")
      $("#api_status").toggleClass("available");
  });
});
