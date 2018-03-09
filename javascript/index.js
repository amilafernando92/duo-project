//jshint esversion: 6
var usersInfo;
fetchAll(function(obj) {						//chiamata alla funzione contenuta dentro dataHandler.js
	usersInfo = obj;
	inizializzaPagina();
}, function(e) {
	console.log(e);
});

function inizializzaPagina() {					//inizializza la pagina home con i dati utenti
	

	showPosts(1);								//temporaneo, solamente per te
}

function showHome() {

}

function showPosts(u) {							//aggiunge i post dell'utente cliccato
	const postPage = $('#postPage');
	const homePage = $('#userContainer');

	postPage.empty();
	for(let i=0; i<usersInfo[u].posts.length; i++) {
		addPost(usersInfo[u].posts[i]);
	}
	
	//cambio pagina	probabilmente ci darà problemi
	postPage.fadeIn();
	//homePage.slideUp();
}

$(function () {									//caricamento del body
	
});

function addPost(post) {
	let htmlPost = 	'<div class="panel panel-primary">' +
						'<div class="panel-heading post-header">' +
							'<h3 class="post-title">'+post.title+'</h3>' +
							'<div class="post-comands">' +
								'<button class="btn btn-warning">Elimina</button>' +
								'<button class="btn btn-success">Modifica</button>' +
							'</div>' +
						'</div>' +
						'<div class="panel-body">' +
							'<h4 class="post-content">'+post.body+'</h4>' +
							'<ul class="post-comment-section">';

							console.log(post);
	for(let i=0; i<post.comments.length; i++) {
		htmlPost +=				'<li class="post-comment">' +
									'<div class="post-comment-header">' +
										'<label class="post-comment-name">'+post.comments[i].name+'</label>' +
										'<label class="post-comment-email">'+post.comments[i].email+'</label>' +
									'</div>' +
									'<div class="post-comment-body">'+post.comments[i].body+'</div>' +
								'</li>';
	}

	htmlPost +=				'</ul>' +
						'</div>' +
					'</div>';
    $('#postPage').append(htmlPost);
}

$(document).ready(function () {
	if ($("html").attr ("data-page")==="index") {
		createBody ();
	}
    addImgHeader ();
});

function createBody () {
    for (var cont=0;cont<users.length;cont++) {
        //creazione dell'ancora
        var a = document.createElement ("a");
        a.setAttribute ("href", "#");
        a.setAttribute ("id", "anchor"+cont);
        a.setAttribute ("onclick", "changeAll ()");
        a.className = "row";
            //creazione del h1 nome e aggiunge all'ancora
            var h1name = document.createElement ("h1");
            h1name.setAttribute ("id", "h1name"+cont);
            h1name.className = "col-md-4 col-sm-4";
            h1name.innerHTML = users[cont].name;
            a.appendChild (h1name);
            //creazione del h1 e-mail e aggiunge all'ancora
            var h1email = document.createElement ("h1");
            h1email.setAttribute ("id", "h1email"+cont);
            h1email.className = "col-md-4 col-sm-4";
            h1email.innerHTML = users[cont].email;
            a.appendChild (h1email);
            //creazione del h1 - e aggiunge all'ancora
            var h1span = document.createElement ("h1");
            h1span.setAttribute ("id", "h1span"+cont);
            h1span.className = "col-md-1 col-sm-1";
            h1span.innerHTML = "-";
            a.appendChild (h1span);
            //creazione del h1 numero di post e aggiunge all'ancora
            var h1npost = document.createElement ("h1");
            h1npost.setAttribute ("id", "h1npost"+cont);
            h1npost.className = "col-md-1 col-sm-1";
            h1npost.innerHTML = Math.ceil(Math.random()*10);
            a.appendChild (h1npost);
            //creazione del h1 post e aggiunge all'ancora
            var h1post = document.createElement ("h1");
            h1post.setAttribute ("id", "h1post"+cont);
            h1post.className = "col-md-1 col-sm-1";
            h1post.innerHTML = "Post";
            a.appendChild (h1post);
            //creazione del h1 span per hover e aggiunge all'ancora
            var h1span = document.createElement ("h1");
            h1span.setAttribute ("id", "h1span"+cont);
            h1span.className = "col-md-1 col-sm-1";
            var spanarrow = document.createElement ("span");
            spanarrow.setAttribute ("id", "spanarrow"+cont);
            spanarrow.className = "glyphicon glyphicon-arrow-right";
            h1span.appendChild (spanarrow);
            a.appendChild (h1span);
        //cerca div madre e aggiunge l'ancora ad esso
        var app = document.getElementById ("usercontainer");
        app.appendChild (a);
    }
}

function addImgHeader () {
	//creazione del img con i suoi attributi
	var imgheader = document.createElement ("img");
	imgheader.setAttribute ("id", "imgheader");
	imgheader.setAttribute ("src", "https://blacksaildivision.com/wp-content/uploads/2015/03/centos-users-and-groups-624x390.jpg");
	imgheader.setAttribute ("srcset", "https://blacksaildivision.com/wp-content/uploads/2015/03/centos-users-and-groups.jpg 624w, https://blacksaildivision.com/wp-content/uploads/2015/03/centos-users-and-groups-300x188.jpg 300w");
	imgheader.setAttribute ("sizes", "(max-width: 624px) 100vw, 624px");
	//creazione dell'ancora con i suoi attributi
	var a = document.createElement ("a");
	a.setAttribute ("href", "index.html");
	a.appendChild (imgheader);
	//cerca div madre e aggiunge l'immagine ad esso
	document.getElementById ("imgcontainer").appendChild (a);
}

function changeAll () {
  $("#imgheader").attr ("src", "https://firstsiteguide.com/wp-content/uploads/2017/09/notify-members-new-posts-640x400.png");
  $("#imgheader").attr ("srcset", "");
  $("#imgheader").attr ("sizes", "");
  $("#idheader").css ("background-color", "#228ea6");
  $("#headertitle").text ("Post - ");
  $("#idfooter").css ("background-color", "#228ea6");
}
