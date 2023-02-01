// Mascara
function format(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
}


var element = document.getElementById('element');

// Botão enviar
function send() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Enviado com Sucesso!',
    text: 'Obrigado por entrar em contato.'
  })
}


// Modal portifólio
function nubank() {
  Swal.fire({
    title: "Nubank",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in metus et nibh vehicula mollis. Sed leo dui, tempus vitae cursus nec, tincidunt non ipsum. Donec vitae leo felis.",
    imageUrl: "https://static.poder360.com.br/2022/09/logo-nubank-848x477.jpg",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Nubank',
    confirmButtonColor: '#3085d6',
  });
}

function prime() {
  Swal.fire({
    title: "Prime Video",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in metus et nibh vehicula mollis. Sed leo dui, tempus vitae cursus nec, tincidunt non ipsum. Donec vitae leo felis.",
    imageUrl: "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Prime-video',
    confirmButtonColor: '#3085d6',
  })
}

function facebook() {
  Swal.fire({
    title: "Facebook",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in metus et nibh vehicula mollis. Sed leo dui, tempus vitae cursus nec, tincidunt non ipsum. Donec vitae leo felis.",
    imageUrl: "https://webcompany.com.br/wp-content/uploads/2021/07/facebook-no-brasil.jpg",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Facebook',
    confirmButtonColor: '#3085d6',
  })
}

function imc() {
  Swal.fire({
    title: "IMC",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in metus et nibh vehicula mollis. Sed leo dui, tempus vitae cursus nec, tincidunt non ipsum. Donec vitae leo felis.",
    imageUrl: "https://user-images.githubusercontent.com/63453751/197347971-0f064109-e070-4c27-8295-a918fb59df1c.png",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'IMC',
    confirmButtonColor: '#3085d6',
  })
}

function parallax() {
  Swal.fire({
    title: "Efeito Parallax",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in metus et nibh vehicula mollis. Sed leo dui, tempus vitae cursus nec, tincidunt non ipsum. Donec vitae leo felis.",
    imageUrl: "https://www.10wallpaper.com/wallpaper/1366x768/1706/House_mountains_snow_lake-High_Quality_Wallpaper_1366x768.jpg",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Efeito Parallax',
    confirmButtonColor: '#3085d6',
  })
}

function burger() {
  Swal.fire({
    title: "Make Your Burger",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in metus et nibh vehicula mollis. Sed leo dui, tempus vitae cursus nec, tincidunt non ipsum. Donec vitae leo felis.",
    imageUrl: "https://user-images.githubusercontent.com/63453751/162729808-f568227c-41fb-4ad5-9841-840d535b26d2.png",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Make Your Burger',
    confirmButtonColor: '#3085d6',
  })
}