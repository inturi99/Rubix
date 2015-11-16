/* ReactBootstrap */
var ReactBootstrap = {
  Dispatcher: new EventEmitter2({
    maxListeners: 999999999
  })
};

/*L20N*/
var _RL20n_=window.ReactL20n;
var l20n=_RL20n_.l20n,
    Entity=_RL20n_.Entity;

if(window.hasOwnProperty('Chart')) {
  if(Chart.hasOwnProperty('defaults')
    && Chart.defaults.hasOwnProperty('global')) {
    Chart.defaults.global.responsive = true;
  }
}
