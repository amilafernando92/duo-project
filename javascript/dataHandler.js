//jshint esversion: 6

function fetchCommenti(successClb, errorClb) {
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/comments',
		method: 'GET',
		dataType: 'JSON',
		success: successClb,
		error: errorClb
	});
}

function fetchUsers(successClb, errorClb) {
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/users',
		method: 'GET',
		dataType: 'JSON',
		success: successClb,
		error: errorClb
	});
}

function fetchPosts(successClb, errorClb) {
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts',
		method: 'GET',
		dataType: 'JSON',
		success: successClb,
		error: errorClb
	});
}

function fetchAll(successClb, errorClb) {											//fetch all data and put it into an object
	let users;
	let posts;
	let comments;

	function mergeData() {													//request the merge
		if(users && posts && comments) {
			for(let uid=0; uid < users.length; uid++) {
				if(users[uid]) {
					users[uid].posts = [];											//valid user, create a field called posts

					for(let pid=0; pid < posts.length; pid++) {
						if(posts[pid] && users[uid].id === posts[pid].userId) {
							posts[pid].comments = [];								//valid post create a filed called comments

							for(let cid=0; cid < comments.length; cid++) {
								if(comments[cid] && posts[pid].id === comments[cid].postId) {
									posts[pid].comments.push(comments[cid]);		//Push the comments into the post
									delete comments[cid];
								}
							}
							users[uid].posts.push(posts[pid]);						//push the posts into the user
							delete posts[pid];
						}
					}
				}
				//
			}
			successClb(users);														//return the merged object
		}
	}

	fetchUsers(function(data) {
		users = data;
		mergeData();
	}, errorClb);

	fetchPosts(function(data){
		posts = data;
		mergeData();
	}, errorClb);

	fetchCommenti(function(data) {
		comments = data;
		mergeData();
	}, errorClb);
}

function pushNewPost(title, body, callback) {
	$.post('https://jsonplaceholder.typicode.com/posts', {title: title, body: body})
		.done(callback);
}

function pushEditPost(idPost, title, body, callback) {
	$.post('https://jsonplaceholder.typicode.com/posts', {title: title, body: body})
		.done(callback);
}