// -*- Mode: JavaScript; tab-width: 2; indent-tabs-mode: nil; -*-
// vim:set ft=javascript ts=2 sw=2 sts=2 cindent:
var BratConfiguration = (function(window, undefined) {
    var abbrevsOn = true;
    var textBackgrounds = "striped";
    var svgWidth = '100%';
    var rapidModeOn = false;
    var confirmModeOn = true;
    var autorefreshOn = false;
    var typeCollapseLimit = 30;
    
    var visual = {
      margin: { x: 2, y: 1 },
      arcTextMargin: 1,
      boxSpacing: 1,
      curlyHeight: 4,
      arcSpacing: 9, //10;
      arcStartHeight: 19, //23; //25;
    }

    return {
      abbrevsOn: abbrevsOn,
      textBackgrounds: textBackgrounds,
      visual: visual,
      svgWidth: svgWidth,
      rapidModeOn: rapidModeOn,
      confirmModeOn: confirmModeOn,
      autorefreshOn: autorefreshOn,
      typeCollapseLimit: typeCollapseLimit,
    };
})(window);
