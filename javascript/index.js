//jshint esversion: 6
var usersInfo;
var currentUser;
fetchAll(function(obj) {						//chiamata alla funzione contenuta dentro dataHandler.js
	usersInfo = obj;
	inizializzaPagina();
}, function(e) {
	console.log(e);
});

function inizializzaPagina() {					//inizializza la pagina home con i dati utenti
	showPosts(1);
}

function showHome() {

}

function showPosts(u) {							//aggiunge i post dell'utente cliccato
	const postPage = $('#postPage');
	const homePage = $('#userContainer');

	currentUser = u;

	postPage.empty();
	for(let i=0; i<usersInfo[u].posts.length; i++) {
		addPost(usersInfo[u].posts[i]);
	}
	
	//cambio pagina	probabilmente ci darà problemi
	postPage.fadeIn();
	//homePage.slideUp();
}

$(document).ready(function () {					//caricamento del body
	$('#btnAddPost').click(function() {
		openEditModal('Aggiungi');
	});
});

function addPost(post) {
	const postPage = $('#postPage');
	let htmlPost = 	'<div class="panel panel-primary">' +
						'<div class="panel-heading post-header">' +
							'<h3 class="post-title">'+post.title+'</h3>' +
							'<div class="post-comands">' +
								'<button class="btn btn-warning delete-btn">Elimina</button>' +
								'<button class="btn btn-success edit-btn">Modifica</button>' +
							'</div>' +
						'</div>' +
						'<div class="panel-body">' +
							'<h4 class="post-content">'+post.body+'</h4>' +
							'<ul class="post-comment-section">';

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
	postPage.append(htmlPost);
	postPage.find('.panel').last().find('.delete-btn').click(function() {
		$('#idDelPost').val(post.id);
		$('#idDelTitle').val(post.title);

		$('#delete_modal').modal('show');
	});
	postPage.find('.panel').last().find('.edit-btn').click(function() {
		openEditModal('Modifica', post.title, post.body, post.id);
	});kl
}

function savePostModal() {
	const title = $('#idModPostTitle').text();
	const body = $('#idModBody').val();
	const idPost = $('#idPost');

	if(idPost.val() !== 0) {
		pushEditPost(idPost.val(), title, body, function() {
			//modifiche salvate con successo
			console.log('Pushing changes');

		});
	} else {
		pushNewPost(title, body, function() {
			//creazione nuovo post
			console.log('pushinng new post');
			
		});
	}
}

function showSuccess(resp) {
	$('#success_modal').modal('show');
	$('#idRspServ').text(resp);
}

function openEditModal(header, title='', body='', id='') {
	$('#editModalTitle').text(header);
	$('#idModPostTitle').val(title);
	$('#idModBody').val(body);
	$('#idPost').val();

	$('#edit_modal').modal('show');
}