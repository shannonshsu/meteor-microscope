Template.postItem.helpers({
domain: function() {
	var a = document.createElement('a');
	a.href = this.url;
	return a.hostname;
}
});

// {{#each}} sets value of 'this' to the iterated posts object