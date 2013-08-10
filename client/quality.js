var name = "quality";
var version = "1.0";

quality = function(){};

quality.prototype = new Greenlight.Package();

quality.prototype.routes =   {
    
    '/quality': function()
    {
	console.log("calling /quality route");

	return 'quality_page';
    }

};

quality.prototype.default_route = {

    '/' : function()
    {
	console.log("calling default route");

	return 'quality_page';
    }

};

Greenlight.Packages.Quality = quality.prototype;

Meteor.startup(function(){

    console.log("loading quality package");
    
    Greenlight.register_template(name, version, Greenlight.Packages.Quality);

});