###
Async Library for Node,Browser
###
((define) ->
  define "Async", (require) ->
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
    Async
  return
) (if typeof define is "function" and define.amd then define else (id, factory) ->
  if typeof module isnt "undefined" and module.exports
    #Node
    module.exports = factory(require)
  else
    window[id] = factory((value) ->
                          window[value]
                        )
  )