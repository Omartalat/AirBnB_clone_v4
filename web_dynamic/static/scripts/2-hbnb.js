$(function () {
  const arr = [];
  if ($("{{ amenity.id }}").prop("checked")) {
    arr.push("{{ amenity.id }}");
  } else {
    const i = arr.indexOf("{{ amenity.id }}");
    if (i > -1) {
      arr.splice(i, 1);
    }
  }
  $(".amenities h4").text(arr.join(", "));
});

$(function () {
  $.get("http://0.0.0.0:5001/api/v1/status/", (data, textStatus) => {
    if (textStatus === "success" && data.status === "OK") {
      $("#api_status").addClass("available");
    } else {
      $("#api_status").removeClass("available");
    }
  });
});
