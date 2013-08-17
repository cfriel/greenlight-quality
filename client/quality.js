var name = "quality";
var version = "1.0";

quality = function(){};

quality.prototype = new Greenlight.Package();

quality.prototype.routes =   {
    
    '/quality': function()
    {
	Greenlight.log("calling /quality route");

	return 'quality_page';
    }

};

quality.prototype.default_route = {

    '/' : function()
    {
	Greenlight.log("calling default route");

	return 'quality_page';
    }

};

Greenlight.Packages.Quality = quality.prototype;

Meteor.startup(function(){

    Greenlight.log("loading quality package");
    
    Greenlight.register_package(name, version, Greenlight.Packages.Quality);

});