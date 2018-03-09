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
var users = [
  {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
  "geo": {
  "lat": "-37.3159",
  "lng": "81.1496"
  }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
  "name": "Romaguera-Crona",
  "catchPhrase": "Multi-layered client-server neural-net",
  "bs": "harness real-time e-markets"
  }
  },
  {
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "address": {
  "street": "Victor Plains",
  "suite": "Suite 879",
  "city": "Wisokyburgh",
  "zipcode": "90566-7771",
  "geo": {
  "lat": "-43.9509",
  "lng": "-34.4618"
  }
  },
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": {
  "name": "Deckow-Crist",
  "catchPhrase": "Proactive didactic contingency",
  "bs": "synergize scalable supply-chains"
  }
  },
  {
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
  "street": "Douglas Extension",
  "suite": "Suite 847",
  "city": "McKenziehaven",
  "zipcode": "59590-4157",
  "geo": {
  "lat": "-68.6102",
  "lng": "-47.0653"
  }
  },
  "phone": "1-463-123-4447",
  "website": "ramiro.info",
  "company": {
  "name": "Romaguera-Jacobson",
  "catchPhrase": "Face to face bifurcated interface",
  "bs": "e-enable strategic applications"
  }
  },
  {
  "id": 4,
  "name": "Patricia Lebsack",
  "username": "Karianne",
  "email": "Julianne.OConner@kory.org",
  "address": {
  "street": "Hoeger Mall",
  "suite": "Apt. 692",
  "city": "South Elvis",
  "zipcode": "53919-4257",
  "geo": {
  "lat": "29.4572",
  "lng": "-164.2990"
  }
  },
  "phone": "493-170-9623 x156",
  "website": "kale.biz",
  "company": {
  "name": "Robel-Corkery",
  "catchPhrase": "Multi-tiered zero tolerance productivity",
  "bs": "transition cutting-edge web services"
  }
  },
  {
  "id": 5,
  "name": "Chelsey Dietrich",
  "username": "Kamren",
  "email": "Lucio_Hettinger@annie.ca",
  "address": {
  "street": "Skiles Walks",
  "suite": "Suite 351",
  "city": "Roscoeview",
  "zipcode": "33263",
  "geo": {
  "lat": "-31.8129",
  "lng": "62.5342"
  }
  },
  "phone": "(254)954-1289",
  "website": "demarco.info",
  "company": {
  "name": "Keebler LLC",
  "catchPhrase": "User-centric fault-tolerant solution",
  "bs": "revolutionize end-to-end systems"
  }
  },
  {
  "id": 6,
  "name": "Mrs. Dennis Schulist",
  "username": "Leopoldo_Corkery",
  "email": "Karley_Dach@jasper.info",
  "address": {
  "street": "Norberto Crossing",
  "suite": "Apt. 950",
  "city": "South Christy",
  "zipcode": "23505-1337",
  "geo": {
  "lat": "-71.4197",
  "lng": "71.7478"
  }
  },
  "phone": "1-477-935-8478 x6430",
  "website": "ola.org",
  "company": {
  "name": "Considine-Lockman",
  "catchPhrase": "Synchronised bottom-line interface",
  "bs": "e-enable innovative applications"
  }
  },
  {
  "id": 7,
  "name": "Kurtis Weissnat",
  "username": "Elwyn.Skiles",
  "email": "Telly.Hoeger@billy.biz",
  "address": {
  "street": "Rex Trail",
  "suite": "Suite 280",
  "city": "Howemouth",
  "zipcode": "58804-1099",
  "geo": {
  "lat": "24.8918",
  "lng": "21.8984"
  }
  },
  "phone": "210.067.6132",
  "website": "elvis.io",
  "company": {
  "name": "Johns Group",
  "catchPhrase": "Configurable multimedia task-force",
  "bs": "generate enterprise e-tailers"
  }
  },
  {
  "id": 8,
  "name": "Nicholas Runolfsdottir V",
  "username": "Maxime_Nienow",
  "email": "Sherwood@rosamond.me",
  "address": {
  "street": "Ellsworth Summit",
  "suite": "Suite 729",
  "city": "Aliyaview",
  "zipcode": "45169",
  "geo": {
  "lat": "-14.3990",
  "lng": "-120.7677"
  }
  },
  "phone": "586.493.6943 x140",
  "website": "jacynthe.com",
  "company": {
  "name": "Abernathy Group",
  "catchPhrase": "Implemented secondary concept",
  "bs": "e-enable extensible e-tailers"
  }
  },
  {
  "id": 9,
  "name": "Glenna Reichert",
  "username": "Delphine",
  "email": "Chaim_McDermott@dana.io",
  "address": {
  "street": "Dayna Park",
  "suite": "Suite 449",
  "city": "Bartholomebury",
  "zipcode": "76495-3109",
  "geo": {
  "lat": "24.6463",
  "lng": "-168.8889"
  }
  },
  "phone": "(775)976-6794 x41206",
  "website": "conrad.com",
  "company": {
  "name": "Yost and Sons",
  "catchPhrase": "Switchable contextually-based project",
  "bs": "aggregate real-time technologies"
  }
  },
  {
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "address": {
  "street": "Kattie Turnpike",
  "suite": "Suite 198",
  "city": "Lebsackbury",
  "zipcode": "31428-2261",
  "geo": {
  "lat": "-38.2386",
  "lng": "57.2232"
  }
  },
  "phone": "024-648-3804",
  "website": "ambrose.net",
  "company": {
  "name": "Hoeger LLC",
  "catchPhrase": "Centralized empowering task-force",
  "bs": "target end-to-end models"
  }
  }
  ];

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
