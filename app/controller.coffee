_ = require("underscore")
_.str = require("underscore.string")
express = require("express")
colors = require("colors")
sys = require("sys")
path = require("path")
fs = require("fs")
url = require("url")
events = require("events")
http = require("https")
omx = require('omxcontrol')
Memcached = require('memcached')

radiostations = require('../radiostations').radiostations

memcached = new Memcached('127.0.0.1:11211')

exports.setup = (app) -> 
  
  # omx express plugin for testing
  app.use omx()

  #
  # index
  #
  app.get "/", (req, res) ->

    # fetch active radio station from memcache for multisession support

    memcached.get "active_radio_station", (err, result) ->
      if err
        console.error err
      console.log result
      res.render("index", { title: "piRadio", radiostations: radiostations, activeRadioStadion:result})

  #
  # endpoint for starting stream
  #
  app.get "/start", (req, res) ->
    startRadioStation(req.query["url"])
    success(res)

  app.get "/stop", (req, res) ->
    stopRadio()
    success(res)

startRadioStation = (radioURL) ->
  # cache running radio station forever
  memcached.set "active_radio_station", radioURL, 0, (err,result) ->
    console.error err if err
    console.dir result

  omx.start radioURL

stopRadio = () ->
  # cache running radio station forever
  memcached.delete "active_radio_station", (err,result) ->
    console.error err if err
    console.dir result

  omx.stop()

success = (res) ->
  res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
  res.end()

