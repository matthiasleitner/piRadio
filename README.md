#piRadio
![pi logo](https://raw.github.com/matthiasleitner/piRadio/master/public/img/logo.png)

## Overview
**piRadio** is a webinterface for controlling the playback of radio streams with the omxplayer on the raspberry pi.

Using express.js with jade templates, coffeescript and memcached for keeping state across sessions from multiple clients, twitter bootstrap.

***Built quickly so code might be weird and ugly***

Planning to extend Interface with spotify support via despotify / despotify-gateway


## Options

Add new radio stations to **radiostations.coffee**

## Requirements

* omxplayer (installed by default on the raspberry pi when using rasbian)
* nodejs (`apt-get install nodejs`)
* memcached (`apt-get install memcached`)

## Many Thanks

Thanks to [daniel-j](https://github.com/daniel-j) for inspiration from his [omxradio](https://github.com/daniel-j/omxradio) and [rikkertkoppes](https://github.com/rikkertkoppes) for his [omxcontrol](https://github.com/rikkertkoppes/omxcontrol) which does all the communication with [omxplayer](http://elinux.org/Omxplayer)


![screenshot](https://raw.github.com/matthiasleitner/piRadio/master/screenshot.jpg)












