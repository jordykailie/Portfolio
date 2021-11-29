$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

window.addEventListener("DOMcontentloaded", function () {
  var form = document.getElementById("form");
  var status = document.getElementById("status");

  function succes() {
    form.reset();
    buttin.style = "display: none";
    status.innerHTML = "Dank u!";
  }
  function error() {
    status.innerHTML = "Niet gelukt, probeer nogmaals.";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, succes, error);
  });
});

function ajax(method, url, data, succes, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.done) return;
    if (xhr.status === 200) {
      succes(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.responseType, xhr.response.responseType);
    }
  };
  xhr.send(data);
}
