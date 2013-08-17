Package.describe({
  summary: "Greenlight quality site template"
});

Package.on_use(function (api, where) {

    api.use('router', ['client', 'server']);
    api.use(['templating'], 'client');
    api.use('deps', ['client', 'server']);
    api.use('session', ['client', 'server']);
    api.use('greenlight', ['client','server']);
    
    api.add_files(['client/quality_page.html', 'client/quality_page.js', 'client/quality_page.css'], 'client');
    api.add_files('client/quality.js', 'client');
    api.add_files('server/quality.js', 'server');
});

Package.on_test(function (api) {
    api.add_files('quality_tests.js', 'client');
});
