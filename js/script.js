//Atualizando ano
$("#year").text(new Date().getFullYear());

//Inicializando AOS
AOS.init({
  duration: 700,
  easing: 'ease-out'
});

$(document).ready(function () {

  $('#main-content').hide();

  // Define a lista de imagens
  var images = $(".background .background-img");
  var index = 0;

  // Define o tempo de transição e o intervalo de tempo para trocar as imagens
  var time = 10000; // 5 segundos

  // Ativa a primeira imagem
  $(images[index]).addClass("active");

  // Define a função para trocar a imagem
  function changeBackground() {
    // Fade out da imagem atual
    $(images[index]).removeClass("active");
    index++;
    if (index == images.length) {
      index = 0;
    }
    // Fade in da nova imagem
    $(images[index]).addClass("active");
  }

  // Chama a função para trocar a imagem a cada intervalo de tempo
  setInterval(changeBackground, time);
});


// CSS selector
new Ukiyo(".ukiyo")

// Animação
var animation = bodymovin.loadAnimation({
  container: document.getElementById('vnle-loader'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'vnle.json'
})

//Delay Entrada Animação
setTimeout(function () {
  animation.play();
}, 100);

//Delay Encerramento Animação
setTimeout(function () {
  $('#vnle-loader').fadeOut(500);
}, 3000);

//Retirar-Pre-loader 
setTimeout(function() {
  $("#pre-loader").hide();
}, 3500);

//Exibir main-content
setTimeout(function() {
  $('#main-content').fadeIn(1000);
}, 3500);
