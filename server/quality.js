var name = "quality";
var version = "1.0";

quality = function(){};

quality.prototype = new quality();

quality.prototype.routes =   {
    
    '/quality': function()
    {
	Greenlight.log("calling /quality route");

	return 'quality_page';
    }

};

quality.prototype.metadata = function()
{
    
    return {
	description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a purus quis ligula varius aliquam id sit amet lacus. Ut quam tellus, aliquet vitae tortor blandit, rhoncus semper arcu. Suspendisse pretium dolor arcu, et semper ante aliquam non. In nec quam cursus, congue felis vitae, consectetur ipsum. Nullam nisl turpis, tempor vitae felis eleifend, fringilla pretium turpis. Aliquam egestas nibh tortor, eu iaculis nibh tincidunt sit amet. Aliquam auctor erat non tellus adipiscing fringilla. In porttitor mattis eros, et dictum nulla blandit non. Cras viverra velit vel turpis imperdiet commodo. Maecenas non leo at leo feugiat aliquam. Fusce semper molestie ligula, et cursus sapien volutpat non. Vivamus leo felis, cursus ut nunc et, porttitor facilisis orci. Donec vehicula vehicula ligula, vel rhoncus velit lobortis non."
    };
}();


Greenlight.Packages.Quality = quality.prototype;

Meteor.startup(function(){
    
    Greenlight.log("loading quality package");

    Greenlight.register_package(name, version, Greenlight.Packages.Quality);
        
});