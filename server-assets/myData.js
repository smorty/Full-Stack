var family = [
{
	name: 'Stefani',
	age: 22,
	relationship: 'Wife'
},
{
	name: 'Leslie',
	age: 58,
	relationship: 'Mother'
},
{
	name: 'Andrew',
	age: 62,
	relationship: 'Father'
},
{
	name: 'Whitney',
	age: 31,
	relationship: 'Sister'
},
{
	name: 'Joanna',
	age: 29,
	relationship: 'Sister'
}];

var friends = [
{
	name: 'Phil',
	age: 25,
	met: '2009'
},
{
	name: 'Johnathan',
	age: 25,
	met: '2009'
},
{
	name: 'James',
	age: 25,
	met: '2010'
},
{
	name: 'AJ',
	age: 24,
	met: '2013'
}];

var activities = ['socialize', 'code', 'run', 'swim', 'hike', 'watch movies'];

var me = {
	name: 'Steve',
	height: '5\'10.5"',
	age: 25,
	movie: 'None',
	artist: 'Milk Carton Kids',
	food: 'Mexican'
};

module.exports.getFamily = function(){
	return family;
};

module.exports.addFamily = function(newFamily){
	family.push(newFamily);
};

module.exports.getFriends = function(){
	return friends;
};

module.exports.addFriends = function(newFriend){
	friends.push(newFriends);
};

module.exports.getActivities = function(){
	return activities;
};

module.exports.addActivities = function(newActivity){
	activities.push(newActivity);
};

module.exports.getMe = function(){
	return me;
};

module.exports.addMe = function(newProperty){
	for (var key in newProperty){
		me[key] = newProperty[key];
	};
};

module.exports.delMe = function(delMe){
	for (var i=0; i<delMe.length; i++){
		delete me[delMe[i]];
	}
}

