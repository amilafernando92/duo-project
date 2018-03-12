//jshint esversion: 6
let usersInfo;
let currentUser;
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
}

$(document).ready(function () {					//caricamento del body
	$('#btnAddPost').click(function() {
		openEditModal('Aggiungi');
	});
    addImgHeader ();
});

function addPost(post) {
	const postPage = $('#postPage');
	let htmlPost = 	'<div class="panel panel-primary" id="post_'+post.id+'">' +
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
	const postId = $('#idDelPost').val();

	deletePost( postId );
	$('#post_'+postId).remove();
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
    $("#headertitle").text ("Post - " + usersInfo[currentUser].name);
    $("#idfooter").css ("background-color", "#228ea6");
    $("#btnAddPost").text ("Aggiungi Post all'utente");
}
function openEditModal(header, title='', body='', id='') {
    console.log(title);
    console.log(body);
    $('#editModalTitle').text(header);
    $('#idModPostTitle').val(title);
    $('#idModBody').val(body);
	$('#idPost').val(id);

	$('#edit_modal').modal('show');
}

function createBody () {
    for (let cont=0;cont<usersInfo.length;cont++) {
        //creazione dell'ancora
        let a = document.createElement ("a");
        a.setAttribute ("href", "#");
        a.setAttribute ("id", "anchor"+cont);
        a.setAttribute ("onclick", "changeAll("+cont+")");
            let div = document.createElement ("div");
            div.className =  "boxcontent";
                //creazione del h1 nome e aggiunge all'ancora
                let h1name = document.createElement ("h1");
                h1name.className = "h1namecell";
                h1name.innerHTML = usersInfo[cont].name;
                div.appendChild (h1name);
                //creazione del h1 e-mail e aggiunge all'ancora
                let h1email = document.createElement ("h1");
                h1email.className = "h1emailcell";
                h1email.innerHTML = usersInfo[cont].email;
                div.appendChild (h1email);
                //creazione del h1 numero di post e aggiunge all'ancora
                let h1npost = document.createElement ("h1");
                h1npost.className = "h1npostcell";
                h1npost.innerHTML = usersInfo[cont].posts.length + " posts";
                div.appendChild (h1npost);
            a.appendChild (div);
            div = document.createElement ("div");
            div.className =  "boxcontent";
                //creazione del h1 span per hover e aggiunge all'ancora
                let h1span = document.createElement ("h1");
                h1span.className = "h1spancell";
                let spanarrow = document.createElement ("span");
                spanarrow.className = "glyphicon glyphicon-arrow-right";
                h1span.appendChild (spanarrow);
                div.appendChild (h1span);
            a.appendChild (div);
        //cerca div madre e aggiunge l'ancora ad esso
        let app = document.getElementById ("usercontainer");
        app.appendChild (a);
    }
}

function addImgHeader () {
	//creazione del img con i suoi attributi
	let imgheader = document.createElement ("img");
	imgheader.setAttribute ("id", "imgheader");
	imgheader.setAttribute ("src", "https://blacksaildivision.com/wp-content/uploads/2015/03/centos-users-and-groups-624x390.jpg");
	imgheader.setAttribute ("srcset", "https://blacksaildivision.com/wp-content/uploads/2015/03/centos-users-and-groups.jpg 624w, https://blacksaildivision.com/wp-content/uploads/2015/03/centos-users-and-groups-300x188.jpg 300w");
	imgheader.setAttribute ("sizes", "(max-width: 624px) 100vw, 624px");
	//creazione dell'ancora con i suoi attributi
	let a = document.createElement ("a");
	a.setAttribute ("href", "index.html");
	a.appendChild (imgheader);
	//cerca div madre e aggiunge l'immagine ad esso
	document.getElementById ("imgcontainer").appendChild (a);
}
