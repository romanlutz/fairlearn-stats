(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("f1e35572-7b0e-418c-9ede-eee65b670e97");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1e35572-7b0e-418c-9ede-eee65b670e97' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"8b6da43e-f335-4638-b428-cc2808143db2":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1460","type":"DataRange1d"},{"attributes":{},"id":"1500","type":"BasicTickFormatter"},{"attributes":{"fields":["unique"]},"id":"1489","type":"Stack"},{"attributes":{},"id":"1499","type":"AllLabels"},{"attributes":{},"id":"1474","type":"PanTool"},{"attributes":{"bottom":{"expr":{"id":"1488"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1489"}},"x":{"field":"indices"}},"id":"1494","type":"VBar"},{"attributes":{},"id":"1458","type":"DataRange1d"},{"attributes":{"items":[{"id":"1509"},{"id":"1528"}]},"id":"1508","type":"Legend"},{"attributes":{"bottom":{"expr":{"id":"1490"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1491"}},"x":{"field":"indices"}},"id":"1513","type":"VBar"},{"attributes":{},"id":"1475","type":"WheelZoomTool"},{"attributes":{"data":{"duplicate":[65,53,35,18,9,6,6,4,6,5,10,3,5,9,5,10,4,0,8,3,4,5,4,2,1,1,1,2,4,1,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[152,76,70,36,40,25,22,22,19,16,8,13,10,6,9,2,8,12,4,8,6,5,6,8,9,8,8,7,5,8,3,7,2,5,5]},"selected":{"id":"1506"},"selection_policy":{"id":"1505"}},"id":"1492","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1510"}},"id":"1515","type":"CDSView"},{"attributes":{},"id":"1525","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1480"}},"id":"1476","type":"BoxZoomTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1491","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1480","type":"BoxAnnotation"},{"attributes":{},"id":"1477","type":"SaveTool"},{"attributes":{"fields":[]},"id":"1488","type":"Stack"},{"attributes":{},"id":"1502","type":"AllLabels"},{"attributes":{},"id":"1462","type":"LinearScale"},{"attributes":{},"id":"1478","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1488"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1489"}},"x":{"field":"indices"}},"id":"1495","type":"VBar"},{"attributes":{},"id":"1503","type":"BasicTickFormatter"},{"attributes":{},"id":"1526","type":"Selection"},{"attributes":{"source":{"id":"1492"}},"id":"1497","type":"CDSView"},{"attributes":{"below":[{"id":"1466"}],"center":[{"id":"1469"},{"id":"1473"},{"id":"1508"}],"left":[{"id":"1470"}],"renderers":[{"id":"1496"},{"id":"1514"}],"title":{"id":"1456"},"toolbar":{"id":"1481"},"width":900,"x_range":{"id":"1458"},"x_scale":{"id":"1462"},"y_range":{"id":"1460"},"y_scale":{"id":"1464"}},"id":"1455","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1479","type":"HelpTool"},{"attributes":{},"id":"1505","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1492"},"glyph":{"id":"1494"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1495"},"view":{"id":"1497"}},"id":"1496","type":"GlyphRenderer"},{"attributes":{},"id":"1464","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1474"},{"id":"1475"},{"id":"1476"},{"id":"1477"},{"id":"1478"},{"id":"1479"}]},"id":"1481","type":"Toolbar"},{"attributes":{"formatter":{"id":"1500"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"statics.teams.cdn.office.net","11":"linkedin.com","12":"microsoft.com","13":"gitter.im","14":"paperswithcode.com","15":"opendatascience.com","16":"pypi.org","17":"t.co","18":"up-for-grabs.net","19":"Bing","2":"fairlearn.org","20":"DuckDuckGo","21":"engineering.linkedin.com","22":"ai.googleblog.com","23":"towardsdatascience.com","24":"venturebeat.com","25":"fairlearn.github.io","26":"medium.com","27":"anaconda.com","28":"madewithml.com","29":"kdnuggets.com","3":"mybuild.microsoft.com","30":"aiforpeople.org","31":"azure.microsoft.com","32":"com.google.android.gm","33":"goodfirstissues.com","34":"infoworld.com","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"mail.google.com","8":"docs.microsoft.com","9":"classroom.udacity.com"},"major_label_policy":{"id":"1499"},"ticker":{"id":"1529"}},"id":"1466","type":"LinearAxis"},{"attributes":{"text":"Top referrers"},"id":"1456","type":"Title"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1514"}]},"id":"1528","type":"LegendItem"},{"attributes":{"fields":["unique"]},"id":"1490","type":"Stack"},{"attributes":{},"id":"1471","type":"BasicTicker"},{"attributes":{"axis":{"id":"1466"},"ticker":null},"id":"1469","type":"Grid"},{"attributes":{"axis":{"id":"1470"},"dimension":1,"ticker":null},"id":"1473","type":"Grid"},{"attributes":{"formatter":{"id":"1503"},"major_label_policy":{"id":"1502"},"ticker":{"id":"1471"}},"id":"1470","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1490"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1491"}},"x":{"field":"indices"}},"id":"1512","type":"VBar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"id":"1529","type":"FixedTicker"},{"attributes":{"data":{"duplicate":[65,53,35,18,9,6,6,4,6,5,10,3,5,9,5,10,4,0,8,3,4,5,4,2,1,1,1,2,4,1,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[152,76,70,36,40,25,22,22,19,16,8,13,10,6,9,2,8,12,4,8,6,5,6,8,9,8,8,7,5,8,3,7,2,5,5]},"selected":{"id":"1526"},"selection_policy":{"id":"1525"}},"id":"1510","type":"ColumnDataSource"},{"attributes":{},"id":"1506","type":"Selection"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1496"}]},"id":"1509","type":"LegendItem"},{"attributes":{"data_source":{"id":"1510"},"glyph":{"id":"1512"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1513"},"view":{"id":"1515"}},"id":"1514","type":"GlyphRenderer"}],"root_ids":["1455"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"8b6da43e-f335-4638-b428-cc2808143db2","root_ids":["1455"],"roots":{"1455":"f1e35572-7b0e-418c-9ede-eee65b670e97"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();