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
    
      
      
    
      var element = document.getElementById("af32d72f-6735-45f9-96bd-ef6ce09f9de6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'af32d72f-6735-45f9-96bd-ef6ce09f9de6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"46af2aad-fc43-41a6-a966-a34f3d68f4ee":{"defs":[],"roots":{"references":[{"attributes":{"fields":[]},"id":"1493","type":"Stack"},{"attributes":{"items":[{"id":"1514"},{"id":"1533"}]},"id":"1513","type":"Legend"},{"attributes":{"text":"Top referrers"},"id":"1461","type":"Title"},{"attributes":{},"id":"1484","type":"HelpTool"},{"attributes":{"below":[{"id":"1471"}],"center":[{"id":"1474"},{"id":"1478"},{"id":"1513"}],"left":[{"id":"1475"}],"renderers":[{"id":"1501"},{"id":"1519"}],"title":{"id":"1461"},"toolbar":{"id":"1486"},"width":900,"x_range":{"id":"1463"},"x_scale":{"id":"1467"},"y_range":{"id":"1465"},"y_scale":{"id":"1469"}},"id":"1460","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1469","type":"LinearScale"},{"attributes":{"fields":["unique","duplicate"]},"id":"1496","type":"Stack"},{"attributes":{"formatter":{"id":"1507"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"classroom.udacity.com","11":"Bing","12":"t.co","13":"linkedin.com","14":"microsoft.com","15":"gitter.im","16":"paperswithcode.com","17":"pypi.org","18":"opendatascience.com","19":"up-for-grabs.net","2":"fairlearn.org","20":"kdnuggets.com","21":"DuckDuckGo","22":"engineering.linkedin.com","23":"ai.googleblog.com","24":"towardsdatascience.com","25":"venturebeat.com","26":"fairlearn.github.io","27":"medium.com","28":"anaconda.com","29":"madewithml.com","3":"mybuild.microsoft.com","30":"aiforpeople.org","31":"azure.microsoft.com","32":"com.google.android.gm","33":"goodfirstissues.com","34":"infoworld.com","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"mail.google.com","8":"docs.microsoft.com","9":"statics.teams.cdn.office.net"},"major_label_policy":{"id":"1509"},"ticker":{"id":"1534"}},"id":"1471","type":"LinearAxis"},{"attributes":{"data":{"duplicate":[69,72,40,18,9,6,6,4,6,13,5,7,1,3,5,9,5,4,10,8,2,4,5,4,2,1,1,1,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[166,89,81,36,40,25,22,22,19,10,16,12,15,13,10,6,9,9,2,4,9,6,5,6,8,9,8,8,7,5,3,7,2,5,5]},"selected":{"id":"1511"},"selection_policy":{"id":"1510"}},"id":"1497","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"1495"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1496"}},"x":{"field":"indices"}},"id":"1517","type":"VBar"},{"attributes":{},"id":"1476","type":"BasicTicker"},{"attributes":{"source":{"id":"1497"}},"id":"1502","type":"CDSView"},{"attributes":{},"id":"1507","type":"BasicTickFormatter"},{"attributes":{},"id":"1510","type":"UnionRenderers"},{"attributes":{},"id":"1531","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"1493"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1494"}},"x":{"field":"indices"}},"id":"1499","type":"VBar"},{"attributes":{"axis":{"id":"1471"},"ticker":null},"id":"1474","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1493"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1494"}},"x":{"field":"indices"}},"id":"1500","type":"VBar"},{"attributes":{"axis":{"id":"1475"},"dimension":1,"ticker":null},"id":"1478","type":"Grid"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1519"}]},"id":"1533","type":"LegendItem"},{"attributes":{"formatter":{"id":"1504"},"major_label_policy":{"id":"1506"},"ticker":{"id":"1476"}},"id":"1475","type":"LinearAxis"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"id":"1534","type":"FixedTicker"},{"attributes":{"fields":["unique"]},"id":"1495","type":"Stack"},{"attributes":{},"id":"1530","type":"UnionRenderers"},{"attributes":{},"id":"1467","type":"LinearScale"},{"attributes":{"data_source":{"id":"1515"},"glyph":{"id":"1517"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1518"},"view":{"id":"1520"}},"id":"1519","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1515"}},"id":"1520","type":"CDSView"},{"attributes":{},"id":"1504","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1485","type":"BoxAnnotation"},{"attributes":{},"id":"1479","type":"PanTool"},{"attributes":{"active_multi":null,"tools":[{"id":"1479"},{"id":"1480"},{"id":"1481"},{"id":"1482"},{"id":"1483"},{"id":"1484"}]},"id":"1486","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"1495"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1496"}},"x":{"field":"indices"}},"id":"1518","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1494","type":"Stack"},{"attributes":{},"id":"1465","type":"DataRange1d"},{"attributes":{},"id":"1506","type":"AllLabels"},{"attributes":{"data":{"duplicate":[69,72,40,18,9,6,6,4,6,13,5,7,1,3,5,9,5,4,10,8,2,4,5,4,2,1,1,1,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[166,89,81,36,40,25,22,22,19,10,16,12,15,13,10,6,9,9,2,4,9,6,5,6,8,9,8,8,7,5,3,7,2,5,5]},"selected":{"id":"1531"},"selection_policy":{"id":"1530"}},"id":"1515","type":"ColumnDataSource"},{"attributes":{},"id":"1480","type":"WheelZoomTool"},{"attributes":{},"id":"1483","type":"ResetTool"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1501"}]},"id":"1514","type":"LegendItem"},{"attributes":{"overlay":{"id":"1485"}},"id":"1481","type":"BoxZoomTool"},{"attributes":{},"id":"1511","type":"Selection"},{"attributes":{"data_source":{"id":"1497"},"glyph":{"id":"1499"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1500"},"view":{"id":"1502"}},"id":"1501","type":"GlyphRenderer"},{"attributes":{},"id":"1482","type":"SaveTool"},{"attributes":{},"id":"1509","type":"AllLabels"},{"attributes":{},"id":"1463","type":"DataRange1d"}],"root_ids":["1460"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"46af2aad-fc43-41a6-a966-a34f3d68f4ee","root_ids":["1460"],"roots":{"1460":"af32d72f-6735-45f9-96bd-ef6ce09f9de6"}}];
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