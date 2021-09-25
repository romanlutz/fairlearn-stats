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
    
      
      
    
      var element = document.getElementById("2125c842-37ef-4746-8a3c-756f38c3fa5d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2125c842-37ef-4746-8a3c-756f38c3fa5d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"00bc551c-336b-4c26-9696-460d29885a7c":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1519","type":"HelpTool"},{"attributes":{"bottom":{"expr":{"id":"1528"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1529"}},"x":{"field":"indices"}},"id":"1535","type":"VBar"},{"attributes":{"text":"Top referrers"},"id":"1496","type":"Title"},{"attributes":{"bottom":{"expr":{"id":"1528"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1529"}},"x":{"field":"indices"}},"id":"1534","type":"VBar"},{"attributes":{"axis":{"id":"1506"},"ticker":null},"id":"1509","type":"Grid"},{"attributes":{"data":{"duplicate":[153,52,46,18,9,6,6,5,5,18,9,10,1,10,8,6,2,3,4,5,4,2,1,1,2,2,4,1,0,5,2,4,1,1,0,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"unique":[84,180,83,36,40,25,22,18,16,1,6,5,14,2,4,5,8,7,6,5,6,8,9,8,7,7,5,7,8,2,5,3,5,5,5,2]},"selected":{"id":"1546"},"selection_policy":{"id":"1547"}},"id":"1532","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1544"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"gitter.im","11":"paperswithcode.com","12":"kdnuggets.com","13":"opendatascience.com","14":"linkedin.com","15":"statics.teams.cdn.office.net","16":"microsoft.com","17":"pypi.org","18":"DuckDuckGo","19":"engineering.linkedin.com","2":"fairlearn.org","20":"ai.googleblog.com","21":"towardsdatascience.com","22":"venturebeat.com","23":"fairlearn.github.io","24":"anaconda.com","25":"t.co","26":"madewithml.com","27":"azure.microsoft.com","28":"medium.com","29":"com.google.android.gm","3":"mybuild.microsoft.com","30":"goodfirstissues.com","31":"aiforpeople.org","32":"Bing","33":"infoworld.com","34":"up-for-grabs.net","35":"l.messenger.com","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"docs.microsoft.com","8":"classroom.udacity.com","9":"mail.google.com"},"major_label_policy":{"id":"1543"},"ticker":{"id":"1569"}},"id":"1506","type":"LinearAxis"},{"attributes":{},"id":"1546","type":"Selection"},{"attributes":{},"id":"1567","type":"UnionRenderers"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1554"}]},"id":"1568","type":"LegendItem"},{"attributes":{},"id":"1566","type":"Selection"},{"attributes":{"below":[{"id":"1506"}],"center":[{"id":"1509"},{"id":"1513"},{"id":"1548"}],"left":[{"id":"1510"}],"renderers":[{"id":"1536"},{"id":"1554"}],"title":{"id":"1496"},"toolbar":{"id":"1521"},"width":900,"x_range":{"id":"1498"},"x_scale":{"id":"1502"},"y_range":{"id":"1500"},"y_scale":{"id":"1504"}},"id":"1495","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1544","type":"BasicTickFormatter"},{"attributes":{"fields":["unique","duplicate"]},"id":"1531","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1530"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1531"}},"x":{"field":"indices"}},"id":"1553","type":"VBar"},{"attributes":{},"id":"1518","type":"ResetTool"},{"attributes":{"source":{"id":"1532"}},"id":"1537","type":"CDSView"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1536"}]},"id":"1549","type":"LegendItem"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]},"id":"1569","type":"FixedTicker"},{"attributes":{},"id":"1543","type":"AllLabels"},{"attributes":{"fields":["unique"]},"id":"1530","type":"Stack"},{"attributes":{"overlay":{"id":"1520"}},"id":"1516","type":"BoxZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1530"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1531"}},"x":{"field":"indices"}},"id":"1552","type":"VBar"},{"attributes":{"data_source":{"id":"1550"},"glyph":{"id":"1552"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1553"},"view":{"id":"1555"}},"id":"1554","type":"GlyphRenderer"},{"attributes":{},"id":"1517","type":"SaveTool"},{"attributes":{},"id":"1541","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"1510"},"dimension":1,"ticker":null},"id":"1513","type":"Grid"},{"attributes":{"data":{"duplicate":[153,52,46,18,9,6,6,5,5,18,9,10,1,10,8,6,2,3,4,5,4,2,1,1,2,2,4,1,0,5,2,4,1,1,0,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"unique":[84,180,83,36,40,25,22,18,16,1,6,5,14,2,4,5,8,7,6,5,6,8,9,8,7,7,5,7,8,2,5,3,5,5,5,2]},"selected":{"id":"1566"},"selection_policy":{"id":"1567"}},"id":"1550","type":"ColumnDataSource"},{"attributes":{},"id":"1504","type":"LinearScale"},{"attributes":{},"id":"1498","type":"DataRange1d"},{"attributes":{},"id":"1515","type":"WheelZoomTool"},{"attributes":{},"id":"1540","type":"AllLabels"},{"attributes":{"items":[{"id":"1549"},{"id":"1568"}]},"id":"1548","type":"Legend"},{"attributes":{},"id":"1502","type":"LinearScale"},{"attributes":{},"id":"1511","type":"BasicTicker"},{"attributes":{},"id":"1547","type":"UnionRenderers"},{"attributes":{"source":{"id":"1550"}},"id":"1555","type":"CDSView"},{"attributes":{},"id":"1514","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1520","type":"BoxAnnotation"},{"attributes":{"fields":["unique"]},"id":"1529","type":"Stack"},{"attributes":{"fields":[]},"id":"1528","type":"Stack"},{"attributes":{"active_multi":null,"tools":[{"id":"1514"},{"id":"1515"},{"id":"1516"},{"id":"1517"},{"id":"1518"},{"id":"1519"}]},"id":"1521","type":"Toolbar"},{"attributes":{"formatter":{"id":"1541"},"major_label_policy":{"id":"1540"},"ticker":{"id":"1511"}},"id":"1510","type":"LinearAxis"},{"attributes":{},"id":"1500","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1532"},"glyph":{"id":"1534"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1535"},"view":{"id":"1537"}},"id":"1536","type":"GlyphRenderer"}],"root_ids":["1495"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"00bc551c-336b-4c26-9696-460d29885a7c","root_ids":["1495"],"roots":{"1495":"2125c842-37ef-4746-8a3c-756f38c3fa5d"}}];
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