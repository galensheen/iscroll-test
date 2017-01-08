/**
 * Created by galen on 2017/1/8.
 */

function isPassive() {
  var supportsPassiveOptions = false;
  
  try {
    addEventListener('test', null, Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassiveOptions = true;
      }
    }))
  } catch (e) {}
  
  return supportsPassiveOptions;
}
