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
    
      
      
    
      var element = document.getElementById("9118b0aa-d6c7-435b-bafa-2619c3b2290f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9118b0aa-d6c7-435b-bafa-2619c3b2290f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b9353f6a-d8aa-41ce-ad29-8b4837ce597c":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"1540"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1541"}},"x":{"field":"indices"}},"id":"1563","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1540","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1538"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1539"}},"x":{"field":"indices"}},"id":"1544","type":"VBar"},{"attributes":{"data":{"duplicate":[55,105,50,18,9,6,6,6,5,18,4,9,10,1,6,4,5,4,2,1,1,2,2,4,0,5,2,1,0,0,0,0,0,0,0,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"unique":[181,66,87,36,40,25,22,15,16,1,12,6,2,10,5,6,5,6,8,9,8,7,7,5,7,2,5,5,5,5,4,4,4,4,4,2,1]},"selected":{"id":"1555"},"selection_policy":{"id":"1556"}},"id":"1542","type":"ColumnDataSource"},{"attributes":{"data":{"duplicate":[55,105,50,18,9,6,6,6,5,18,4,9,10,1,6,4,5,4,2,1,1,2,2,4,0,5,2,1,0,0,0,0,0,0,0,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"unique":[181,66,87,36,40,25,22,15,16,1,12,6,2,10,5,6,5,6,8,9,8,7,7,5,7,2,5,5,5,5,4,4,4,4,4,2,1]},"selected":{"id":"1575"},"selection_policy":{"id":"1576"}},"id":"1560","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1516"}],"center":[{"id":"1519"},{"id":"1523"},{"id":"1558"}],"left":[{"id":"1520"}],"renderers":[{"id":"1546"},{"id":"1564"}],"title":{"id":"1506"},"toolbar":{"id":"1531"},"width":900,"x_range":{"id":"1508"},"x_scale":{"id":"1512"},"y_range":{"id":"1510"},"y_scale":{"id":"1514"}},"id":"1505","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1546"}]},"id":"1559","type":"LegendItem"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]},"id":"1579","type":"FixedTicker"},{"attributes":{"fields":[]},"id":"1538","type":"Stack"},{"attributes":{"fields":["unique","duplicate"]},"id":"1541","type":"Stack"},{"attributes":{"text":"Top referrers"},"id":"1506","type":"Title"},{"attributes":{},"id":"1508","type":"DataRange1d"},{"attributes":{},"id":"1556","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1530"}},"id":"1526","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1530","type":"BoxAnnotation"},{"attributes":{},"id":"1527","type":"SaveTool"},{"attributes":{"fields":["unique"]},"id":"1539","type":"Stack"},{"attributes":{},"id":"1514","type":"LinearScale"},{"attributes":{"source":{"id":"1560"}},"id":"1565","type":"CDSView"},{"attributes":{},"id":"1555","type":"Selection"},{"attributes":{},"id":"1528","type":"ResetTool"},{"attributes":{},"id":"1553","type":"BasicTickFormatter"},{"attributes":{},"id":"1512","type":"LinearScale"},{"attributes":{},"id":"1575","type":"Selection"},{"attributes":{},"id":"1525","type":"WheelZoomTool"},{"attributes":{},"id":"1552","type":"AllLabels"},{"attributes":{},"id":"1529","type":"HelpTool"},{"attributes":{"active_multi":null,"tools":[{"id":"1524"},{"id":"1525"},{"id":"1526"},{"id":"1527"},{"id":"1528"},{"id":"1529"}]},"id":"1531","type":"Toolbar"},{"attributes":{},"id":"1550","type":"BasicTickFormatter"},{"attributes":{},"id":"1549","type":"AllLabels"},{"attributes":{},"id":"1524","type":"PanTool"},{"attributes":{"items":[{"id":"1559"},{"id":"1578"}]},"id":"1558","type":"Legend"},{"attributes":{"data_source":{"id":"1542"},"glyph":{"id":"1544"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1545"},"view":{"id":"1547"}},"id":"1546","type":"GlyphRenderer"},{"attributes":{},"id":"1510","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1538"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1539"}},"x":{"field":"indices"}},"id":"1545","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1540"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1541"}},"x":{"field":"indices"}},"id":"1562","type":"VBar"},{"attributes":{"formatter":{"id":"1553"},"major_label_policy":{"id":"1552"},"ticker":{"id":"1521"}},"id":"1520","type":"LinearAxis"},{"attributes":{"axis":{"id":"1516"},"ticker":null},"id":"1519","type":"Grid"},{"attributes":{"data_source":{"id":"1560"},"glyph":{"id":"1562"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1563"},"view":{"id":"1565"}},"id":"1564","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1542"}},"id":"1547","type":"CDSView"},{"attributes":{},"id":"1521","type":"BasicTicker"},{"attributes":{"axis":{"id":"1520"},"dimension":1,"ticker":null},"id":"1523","type":"Grid"},{"attributes":{},"id":"1576","type":"UnionRenderers"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1564"}]},"id":"1578","type":"LegendItem"},{"attributes":{"formatter":{"id":"1550"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"microsoft.com","11":"gitter.im","12":"opendatascience.com","13":"Bing","14":"statics.teams.cdn.office.net","15":"DuckDuckGo","16":"engineering.linkedin.com","17":"ai.googleblog.com","18":"towardsdatascience.com","19":"venturebeat.com","2":"fairlearn.org","20":"fairlearn.github.io","21":"anaconda.com","22":"t.co","23":"madewithml.com","24":"pypi.org","25":"com.google.android.gm","26":"goodfirstissues.com","27":"infoworld.com","28":"azure.microsoft.com","29":"kdnuggets.com","3":"mybuild.microsoft.com","30":"medium.com","31":"paperswithcode.com","32":"up-for-grabs.net","33":"linkedin.com","34":"aiforpeople.org","35":"l.messenger.com","36":"kensciresearch.github.io","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"docs.microsoft.com","8":"classroom.udacity.com","9":"mail.google.com"},"major_label_policy":{"id":"1549"},"ticker":{"id":"1579"}},"id":"1516","type":"LinearAxis"}],"root_ids":["1505"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"b9353f6a-d8aa-41ce-ad29-8b4837ce597c","root_ids":["1505"],"roots":{"1505":"9118b0aa-d6c7-435b-bafa-2619c3b2290f"}}];
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