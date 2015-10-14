// postsData array containing three anonymous objects

var postsData = [
{
	title: 'Intro Telescope',
	url: 'http://neopets.com'
},
{
	title: 'Intro Telescope2',
	url: 'http://neopets2.com'
},
{
	title: 'Intro Telescope3',
	url: 'http://neopets3.com'
},
];

Template.postsList.helpers({
	posts: postsData
});