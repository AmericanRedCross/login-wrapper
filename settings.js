var settings = {}

settings.app = {
  defaultpass: '123',
  defaultuser: 'me',
	port: 3001,
	db: 'site.db',
  route: '/measles-dashboard/_site/'
}

settings.page = {
    nginxlocation: "/measles/"
}

module.exports = settings;
