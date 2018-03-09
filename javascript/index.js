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
	if ($("html").attr ("data-page")==="index") {
        createBody ();
	}
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
    $("#usercontainer").css ("display", "none");
	postPage.css ("display", "block");
    $("#bottone").css ("opacity", "1");
	//homePage.slideUp();
}

$(document).ready(function () {					//caricamento del body
	$('#btnAddPost').click(function() {
		openEditModal('Aggiungi');
	});
    addImgHeader ();
});

function addPost(post) {
	const postPage = $('#postPage');
	let htmlPost = 	'<div class="panel panel-primary">' +
						'<div class="panel-heading post-header">' +
							'<h3 class="post-title">'+post.title+'</h3>' +
							'<div class="post-comands">' +
                                '<button class="btn btn-danger delete-btn">Elimina</button>' +
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
	});
}

function savePostModal() {
	const title = $('#idModPostTitle').text();
	const body = $('#idModBody').val();
	const idPost = $('#idPost');

	if(idPost.val() !== 0) {
		pushEditPost(idPost.val(), title, body, function(t) {
            //modifiche salvate con successo
            showSuccess(t.body);
            $('#edit_modal').modal('toggle');

		});
	} else {
		pushNewPost(title, body, function(t) {
			//creazione nuovo post
			showSuccess(t.body);
            $('#edit_modal').modal('toggle');
			
		});
	}
}
function deletePostModal () {
    console.log('a3');
    deletePost( $('#idPost').val());
    $('#delete_modal').modal('toggle');
    showSuccess('Cancellazione avvenuta con successo');
}


function showSuccess(resp) {
	$('#success_modal').modal('show');
	$('#idRspServ').text(resp);
}

function changeAll (app) {
    showPosts(app);
    $("#imgheader").attr ("src", "https://firstsiteguide.com/wp-content/uploads/2017/09/notify-members-new-posts-640x400.png");
    $("#imgheader").attr ("srcset", "");
    $("#imgheader").attr ("sizes", "");
    $("#idheader").css ("background-color", "#228ea6");
    $("#headertitle").text ("Post - "+ usersInfo[currentUser].name);
    $("#idfooter").css ("background-color", "#228ea6");
}
function openEditModal(header, title='', body='', id='') {
    console.log(title);
    console.log(body);
    $('#editModalTitle').text(header);
    $('#idModPostTitle').val(title);
    $('#idModBody').val(body);
	$('#idPost').val();

	$('#edit_modal').modal('show');
}

function createBody () {
    for (var cont=0;cont<usersInfo.length;cont++) {
        //creazione dell'ancora
        var a = document.createElement ("a");
        a.setAttribute ("href", "#");
        a.setAttribute ("id", "anchor"+cont);
        a.setAttribute ("onclick", "changeAll("+cont+")");
            //creazione del h1 nome e aggiunge all'ancora
            var h1name = document.createElement ("h1");
            h1name.className = "h1namecell";
            h1name.innerHTML = usersInfo[cont].name;
            a.appendChild (h1name);
            //creazione del h1 e-mail e aggiunge all'ancora
            var h1email = document.createElement ("h1");
            h1email.className = "h1emailcell";
            h1email.innerHTML = usersInfo[cont].email;
            a.appendChild (h1email);
            //creazione del h1 numero di post e aggiunge all'ancora
            var h1npost = document.createElement ("h1");
            h1npost.className = "h1npostcell";
            h1npost.innerHTML = usersInfo[cont].posts.length + " posts";
            a.appendChild (h1npost);
            //creazione del h1 span per hover e aggiunge all'ancora
            var h1span = document.createElement ("h1");
            h1span.className = "h1spancell";
            var spanarrow = document.createElement ("span");
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
