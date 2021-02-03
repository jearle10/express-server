# Setup

### Description

This is a boiler plate express sever running within a docker container to avoid having to install node on your local machine

#### Prerequsities

- docker

### Instructions

1. Clone the repo `git clone https://github.com/jearle10/express-server`
2. Run `docker build -t <ImageName> .` to create an image on your machime
3. Run `docker run -p 3000:3000 --name <ContainerName> <ImageName>`
