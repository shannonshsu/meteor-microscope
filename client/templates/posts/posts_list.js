// postsData array containing three anonymous objects

var postsData = [
{
	title: 'Intro Telescope',
	url: 'http://neopets.com/23423424'
},
{
	title: 'Intro Telescope2',
	url: 'http://neopets2.com/34.html'
},
{
	title: 'Intro Telescope3',
	url: 'http://neopets3.com/2344.php'
}
];

Template.postsList.helpers({
	posts: postsData
});


// posts is helper object that is available for template to use; used in postsList template