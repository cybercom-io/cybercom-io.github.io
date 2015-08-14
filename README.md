# Cybercom.io
http://178.217.129.11/

### Deployment

First, create a machine in Cybercom Cloud (eg. Ubuntu 14, L).
* Remember to opt for public IP with HTTP and HTTPS ports

```
sudo apt-get install git
wget -qO- https://get.docker.com/ | sh
sudo usermod -aG docker ec2-user
git clone https://github.com/cybercom-finland/cybercom.io
cd cybercom.io
nano _config.yml  # Update url setting to the public IP of the machine
sudo docker run -d --label=jekyll --label=stable --volume=$(pwd):/srv/jekyll \
 -p 80:4000 jekyll/stable jekyll s
exit
```

The page now responds at http://cloud-machine-ip/

## How to use the theme

Based on [Agency Jekyll theme](https://github.com/y7kim/agency-jekyll-theme)

###Portfolio 

Portfolio projects are in '/_posts'

Images are in '/img/portfolio'

###About

Images are in '/img/about/'

###Team

Team members and info are in '_config.yml'

Images are in '/img/team/'

=========
For more details, read [documentation](http://jekyllrb.com/)
