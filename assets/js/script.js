$(document).ready(function(){

//SELECTOR THEMES
var theme = $("#theme");
$("#to-green").click(function(){
    theme.attr("href", "assets/css/green.css");
});
$("#to-red").click(function(){
    theme.attr("href", "assets/css/red.css");
});
$("#to-blue").click(function(){
    theme.attr("href", "assets/css/blue.css");
});
  
//SCROLL SUBIR
$('.subir').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0
    }, 1000)
    return false;
});



//LOGIN FALSO

$("form input[name='date']").datepicker({
    dateFormat: 'dd-mm-yy'
});

$.validate({
    lang: 'es',
    errorMessagePosition: 'top',
    scrollToTopOnError: true  
});

$("#login form").submit(function(){ 
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
});
var form_name = localStorage.getItem("form_name", form_name);
if(form_name != null && form_name != "undefined"){  
    var about_parrafo = $("#about p");
    about_parrafo.html("<br><strong>Bienvenido, "+ form_name+"</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
    $("#login").hide();
    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    });
}





//EL JS DE CADA HTML SE PODRIA HACER EN UN ARCHIVO APARTE PARA CADA HTML
//INDEX HTML
if(window.location.href.indexOf('index') > -1){
    //SLIDER
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    //POSTS
    var posts =[
        {
            title: 'Prueba titulo 1',
            date: "Publicado el día " + moment().format("dddd ") + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis pellentesque quam nec ultricies. Ut efficitur purus in porttitor scelerisque. Nullam eu hendrerit felis. Ut egestas volutpat massa a scelerisque. Aenean eget risus dictum, rhoncus neque vitae, tristique nibh. Maecenas fringilla feugiat arcu, a ullamcorper nulla faucibus eu. Phasellus et est malesuada magna tempus eleifend vel at urna. Nullam volutpat lacinia ligula sed venenatis.'          
        },
        {
          title: 'Prueba titulo 2',
          date: "Publicado el día " + moment().format("dddd ") + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis pellentesque quam nec ultricies. Ut efficitur purus in porttitor scelerisque. Nullam eu hendrerit felis. Ut egestas volutpat massa a scelerisque. Aenean eget risus dictum, rhoncus neque vitae, tristique nibh. Maecenas fringilla feugiat arcu, a ullamcorper nulla faucibus eu. Phasellus et est malesuada magna tempus eleifend vel at urna. Nullam volutpat lacinia ligula sed venenatis.'
        },
        {
          title: 'Prueba titulo 3',
          date: "Publicado el día " + moment().format("dddd ") + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis pellentesque quam nec ultricies. Ut efficitur purus in porttitor scelerisque. Nullam eu hendrerit felis. Ut egestas volutpat massa a scelerisque. Aenean eget risus dictum, rhoncus neque vitae, tristique nibh. Maecenas fringilla feugiat arcu, a ullamcorper nulla faucibus eu. Phasellus et est malesuada magna tempus eleifend vel at urna. Nullam volutpat lacinia ligula sed venenatis.'
        },
        {
          title: 'Prueba titulo 4',
          date: "Publicado el día " + moment().format("dddd ") + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis pellentesque quam nec ultricies. Ut efficitur purus in porttitor scelerisque. Nullam eu hendrerit felis. Ut egestas volutpat massa a scelerisque. Aenean eget risus dictum, rhoncus neque vitae, tristique nibh. Maecenas fringilla feugiat arcu, a ullamcorper nulla faucibus eu. Phasellus et est malesuada magna tempus eleifend vel at urna. Nullam volutpat lacinia ligula sed venenatis.'
        },
        {
          title: 'Prueba titulo 5',
          date: "Publicado el día " + moment().format("dddd ") + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis pellentesque quam nec ultricies. Ut efficitur purus in porttitor scelerisque. Nullam eu hendrerit felis. Ut egestas volutpat massa a scelerisque. Aenean eget risus dictum, rhoncus neque vitae, tristique nibh. Maecenas fringilla feugiat arcu, a ullamcorper nulla faucibus eu. Phasellus et est malesuada magna tempus eleifend vel at urna. Nullam volutpat lacinia ligula sed venenatis.'
        }
    ];
    posts.forEach((item, index) => {
        var post = `
          <article  class="post">
              <h2>${item.title}</h2>
              <span class="date">${item.date}</span>
              <p>${item.content}</p>
              <a href="" class="botton-more">Leer más</a>            
          </article>
        `;
        $("#posts").append(post)
    });
    };

//ABOUT HTML
if(window.location.href.indexOf('about') > -1){
    $("#acordeon").accordion();
};

//WATCH HTML
if(window.location.href.indexOf('watch') > -1){
    setInterval(function(){
        var reloj = moment().format("hh:mm:ss");
    $("#reloj").html(reloj)
    },1000);
    
};

//CONTACT HTML
if(window.location.href.indexOf('contact') > -1){
    
    
};
    

     
     
      
      

    

});
