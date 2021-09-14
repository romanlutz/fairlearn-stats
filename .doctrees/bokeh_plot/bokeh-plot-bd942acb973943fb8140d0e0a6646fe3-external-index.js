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
    
      
      
    
      var element = document.getElementById("5fe63ad9-178e-48a0-a823-4de1df2a0e17");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5fe63ad9-178e-48a0-a823-4de1df2a0e17' but no matching script tag was found.")
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
                    
                  var docs_json = '{"34f443f7-1685-4baa-939b-d725f9a7bdb2":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"1520"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1521"}},"x":{"field":"indices"}},"id":"1543","type":"VBar"},{"attributes":{"data_source":{"id":"1540"},"glyph":{"id":"1542"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1543"},"view":{"id":"1545"}},"id":"1544","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"1518"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1519"}},"x":{"field":"indices"}},"id":"1524","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1510","type":"BoxAnnotation"},{"attributes":{"data":{"duplicate":[72,79,23,18,9,6,20,6,4,5,4,18,9,10,8,4,6,3,3,4,5,4,2,1,1,2,2,4,1,1,5,2,4,1,0],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[129,82,78,36,40,25,9,22,23,16,15,1,6,2,4,7,5,8,7,6,5,6,8,9,8,7,7,5,7,7,2,5,3,5,5]},"selected":{"id":"1536"},"selection_policy":{"id":"1537"}},"id":"1522","type":"ColumnDataSource"},{"attributes":{},"id":"1504","type":"PanTool"},{"attributes":{"fields":["unique"]},"id":"1519","type":"Stack"},{"attributes":{},"id":"1490","type":"DataRange1d"},{"attributes":{"source":{"id":"1522"}},"id":"1527","type":"CDSView"},{"attributes":{},"id":"1530","type":"BasicTickFormatter"},{"attributes":{},"id":"1505","type":"WheelZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1520"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1521"}},"x":{"field":"indices"}},"id":"1542","type":"VBar"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1526"}]},"id":"1539","type":"LegendItem"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"id":"1559","type":"FixedTicker"},{"attributes":{"fields":[]},"id":"1518","type":"Stack"},{"attributes":{"overlay":{"id":"1510"}},"id":"1506","type":"BoxZoomTool"},{"attributes":{"data":{"duplicate":[72,79,23,18,9,6,20,6,4,5,4,18,9,10,8,4,6,3,3,4,5,4,2,1,1,2,2,4,1,1,5,2,4,1,0],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[129,82,78,36,40,25,9,22,23,16,15,1,6,2,4,7,5,8,7,6,5,6,8,9,8,7,7,5,7,7,2,5,3,5,5]},"selected":{"id":"1556"},"selection_policy":{"id":"1557"}},"id":"1540","type":"ColumnDataSource"},{"attributes":{"fields":["unique","duplicate"]},"id":"1521","type":"Stack"},{"attributes":{},"id":"1507","type":"SaveTool"},{"attributes":{},"id":"1536","type":"Selection"},{"attributes":{},"id":"1537","type":"UnionRenderers"},{"attributes":{},"id":"1492","type":"LinearScale"},{"attributes":{},"id":"1508","type":"ResetTool"},{"attributes":{},"id":"1533","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1518"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1519"}},"x":{"field":"indices"}},"id":"1525","type":"VBar"},{"attributes":{},"id":"1532","type":"AllLabels"},{"attributes":{},"id":"1509","type":"HelpTool"},{"attributes":{},"id":"1494","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1504"},{"id":"1505"},{"id":"1506"},{"id":"1507"},{"id":"1508"},{"id":"1509"}]},"id":"1511","type":"Toolbar"},{"attributes":{},"id":"1529","type":"AllLabels"},{"attributes":{"fields":["unique"]},"id":"1520","type":"Stack"},{"attributes":{"items":[{"id":"1539"},{"id":"1558"}]},"id":"1538","type":"Legend"},{"attributes":{"formatter":{"id":"1533"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"microsoft.com","11":"mail.google.com","12":"gitter.im","13":"opendatascience.com","14":"linkedin.com","15":"pypi.org","16":"statics.teams.cdn.office.net","17":"paperswithcode.com","18":"medium.com","19":"DuckDuckGo","2":"fairlearn.org","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"towardsdatascience.com","23":"venturebeat.com","24":"fairlearn.github.io","25":"anaconda.com","26":"t.co","27":"madewithml.com","28":"azure.microsoft.com","29":"kdnuggets.com","3":"mybuild.microsoft.com","30":"com.google.android.gm","31":"goodfirstissues.com","32":"aiforpeople.org","33":"infoworld.com","34":"up-for-grabs.net","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"Bing","7":"event.on24.com","8":"docs.microsoft.com","9":"classroom.udacity.com"},"major_label_policy":{"id":"1532"},"ticker":{"id":"1559"}},"id":"1496","type":"LinearAxis"},{"attributes":{},"id":"1557","type":"UnionRenderers"},{"attributes":{},"id":"1501","type":"BasicTicker"},{"attributes":{},"id":"1556","type":"Selection"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1544"}]},"id":"1558","type":"LegendItem"},{"attributes":{"axis":{"id":"1496"},"ticker":null},"id":"1499","type":"Grid"},{"attributes":{},"id":"1488","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1522"},"glyph":{"id":"1524"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1525"},"view":{"id":"1527"}},"id":"1526","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1496"}],"center":[{"id":"1499"},{"id":"1503"},{"id":"1538"}],"left":[{"id":"1500"}],"renderers":[{"id":"1526"},{"id":"1544"}],"title":{"id":"1486"},"toolbar":{"id":"1511"},"width":900,"x_range":{"id":"1488"},"x_scale":{"id":"1492"},"y_range":{"id":"1490"},"y_scale":{"id":"1494"}},"id":"1485","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"1500"},"dimension":1,"ticker":null},"id":"1503","type":"Grid"},{"attributes":{"formatter":{"id":"1530"},"major_label_policy":{"id":"1529"},"ticker":{"id":"1501"}},"id":"1500","type":"LinearAxis"},{"attributes":{"source":{"id":"1540"}},"id":"1545","type":"CDSView"},{"attributes":{"text":"Top referrers"},"id":"1486","type":"Title"}],"root_ids":["1485"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"34f443f7-1685-4baa-939b-d725f9a7bdb2","root_ids":["1485"],"roots":{"1485":"5fe63ad9-178e-48a0-a823-4de1df2a0e17"}}];
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