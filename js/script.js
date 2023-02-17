// Mascara
function format(mascara, documento){
  const i = documento.value.length;
  const saida = mascara.substring(0,1);
  const texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
    documento.value += texto.substring(0,1);
  }
}

// Modal portifólio
function nubank() {
  Swal.fire({
    title: "Nubank",
    html: '<p>Projeto foi desenvolvido para praticar HTML5 e CSS3, o projeto possui algumas mudanças na tela de login.</p>' +
    '<a class="color" href="https://master-nubank_clone-titiushadow.bohr.io/" target="_blank">Ver projeto</a>',
    imageUrl: "https://static.poder360.com.br/2022/09/logo-nubank-848x477.jpg",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Nubank',
    confirmButtonColor: '#3085d6',
    position: 'center',
  })
}

// Modal Prime Video
function prime() {
  Swal.fire({
    title: "Prime Video",
    html: '<p>Projeto foi desenvolvido para praticar HTML5 e CSS3, o projeto possui algumas mudanças na tela de login.</p>' +
    '<a class="color" href="https://master-prime_video-titiushadow.bohr.io/" target="_blank">Ver projeto</a>',
    imageUrl: "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Prime-video',
    confirmButtonColor: '#3085d6',
    position: 'center',
  })
}

// Modal Facebook
function facebook() {
  Swal.fire({
    title: "Facebook",
    html: '<p>Projeto foi desenvolvido para praticar HTML5 e CSS3, o projeto possui algumas mudanças na tela de login.</p>' +
    '<a class="color" href="https://master-facebook_clone-titiushadow.bohr.io/" target="_blank">Ver projeto</a>',
    imageUrl: "https://webcompany.com.br/wp-content/uploads/2021/07/facebook-no-brasil.jpg",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Facebook',
    confirmButtonColor: '#3085d6',
    position: 'center',
  })
}

// Modal IMC
function imc() {
  Swal.fire({
    title: "IMC",
    html: '<p>Projeto foi desenvolvido para praticar HTML5 e CSS3, o projeto possui algumas mudanças na tela de login.</p>' +
    '<a class="color" href="https://master-calcular-imc-titiushadow.bohr.io/" target="_blank">Ver projeto</a>',
    imageUrl: "https://user-images.githubusercontent.com/63453751/197347971-0f064109-e070-4c27-8295-a918fb59df1c.png",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'IMC',
    confirmButtonColor: '#3085d6',
    position: 'center',
  })
}

// Modal Parallax
function parallax() {
  Swal.fire({
    title: "Efeito Parallax",
    html: '<p>Projeto foi desenvolvido para praticar HTML5 e CSS3, o projeto possui algumas mudanças na tela de login.</p>' +
    '<a class="color" href="https://master-parallax-titiushadow.bohr.io/" target="_blank">Ver projeto</a>',
    imageUrl: "https://www.10wallpaper.com/wallpaper/1366x768/1706/House_mountains_snow_lake-High_Quality_Wallpaper_1366x768.jpg",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Efeito Parallax',
    confirmButtonColor: '#3085d6',
    position: 'center',
  })
}

// Make Your Burger
function burger() {
  Swal.fire({
    title: "Make Your Burger",
    html: '<p>Projeto foi desenvolvido para praticar HTML5 e CSS3, o projeto possui algumas mudanças na tela de login.</p>' +
    '<a class="color" href="https://make_your_burger-titiushadow.bohr.io/" target="_blank">Ver projeto</a>',
    imageUrl: "https://user-images.githubusercontent.com/63453751/162729808-f568227c-41fb-4ad5-9841-840d535b26d2.png",
    imageWidth: 450,
    imageHeight: 270,
    imageAlt: 'Make Your Burger',
    confirmButtonColor: '#3085d6',
    position: 'center',
  })
}