module.exports = ($scope)->
  class MainCtrl
    constructor: ()->
      console.log 'MainCtrl init'

  window.MainCtrl = new MainCtrl()
