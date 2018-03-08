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