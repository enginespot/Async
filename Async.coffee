class Async
  constructor:()->
    @callbacks=[]
    @running=false

  series:(func)->
    if @running
      @callbacks.push func
    else
      @running=true
      func()
    return
  callback:()->
    if @callbacks.length>0
      @callbacks.shift()()
    else
      @running=false
    return
window.Async=Async