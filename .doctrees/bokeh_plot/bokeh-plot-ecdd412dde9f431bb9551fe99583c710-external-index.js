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
    
      
      
    
      var element = document.getElementById("08dd3b5a-4ed0-4ecf-966b-d6656e616a54");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '08dd3b5a-4ed0-4ecf-966b-d6656e616a54' but no matching script tag was found.")
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
                    
                  var docs_json = '{"909dd258-09a6-4fba-ae2d-c367493f51b2":{"defs":[],"roots":{"references":[{"attributes":{"formatter":{"id":"1569"},"major_label_policy":{"id":"1568"},"ticker":{"id":"1536"}},"id":"1535","type":"LinearAxis"},{"attributes":{},"id":"1571","type":"UnionRenderers"},{"attributes":{"source":{"id":"1575"}},"id":"1580","type":"CDSView"},{"attributes":{"data_source":{"id":"1575"},"glyph":{"id":"1577"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1578"},"view":{"id":"1580"}},"id":"1579","type":"GlyphRenderer"},{"attributes":{},"id":"1569","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1545","type":"BoxAnnotation"},{"attributes":{"data":{"duplicate":[161,104,78,49,18,37,9,28,36,6,6,16,5,17,18,18,9,11,4,3,11,9,4,7,6,5,4,2,1,2,1,2,4,4,2,4,6,5,2,3,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"unique":[149,64,81,7,36,16,40,14,2,25,22,6,16,3,1,1,8,3,9,10,1,2,7,3,4,5,6,8,9,8,8,7,5,5,7,5,2,2,5,4,1,2,5,1,4,2,2,1]},"selected":{"id":"1590"},"selection_policy":{"id":"1591"}},"id":"1575","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1531"}],"center":[{"id":"1534"},{"id":"1538"},{"id":"1573"}],"left":[{"id":"1535"}],"renderers":[{"id":"1561"},{"id":"1579"}],"title":{"id":"1521"},"toolbar":{"id":"1546"},"width":900,"x_range":{"id":"1523"},"x_scale":{"id":"1527"},"y_range":{"id":"1525"},"y_scale":{"id":"1529"}},"id":"1520","subtype":"Figure","type":"Plot"},{"attributes":{"fields":[]},"id":"1553","type":"Stack"},{"attributes":{},"id":"1539","type":"PanTool"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1561"}]},"id":"1574","type":"LegendItem"},{"attributes":{},"id":"1566","type":"BasicTickFormatter"},{"attributes":{},"id":"1565","type":"AllLabels"},{"attributes":{"text":"Top referrers"},"id":"1521","type":"Title"},{"attributes":{},"id":"1540","type":"WheelZoomTool"},{"attributes":{},"id":"1568","type":"AllLabels"},{"attributes":{"items":[{"id":"1574"},{"id":"1593"}]},"id":"1573","type":"Legend"},{"attributes":{},"id":"1523","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1545"}},"id":"1541","type":"BoxZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1555"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1556"}},"x":{"field":"indices"}},"id":"1577","type":"VBar"},{"attributes":{},"id":"1527","type":"LinearScale"},{"attributes":{},"id":"1542","type":"SaveTool"},{"attributes":{"bottom":{"expr":{"id":"1553"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1554"}},"x":{"field":"indices"}},"id":"1560","type":"VBar"},{"attributes":{},"id":"1543","type":"ResetTool"},{"attributes":{},"id":"1570","type":"Selection"},{"attributes":{"fields":["unique"]},"id":"1555","type":"Stack"},{"attributes":{"source":{"id":"1557"}},"id":"1562","type":"CDSView"},{"attributes":{"fields":["unique"]},"id":"1554","type":"Stack"},{"attributes":{"data_source":{"id":"1557"},"glyph":{"id":"1559"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1560"},"view":{"id":"1562"}},"id":"1561","type":"GlyphRenderer"},{"attributes":{},"id":"1525","type":"DataRange1d"},{"attributes":{},"id":"1544","type":"HelpTool"},{"attributes":{},"id":"1529","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1539"},{"id":"1540"},{"id":"1541"},{"id":"1542"},{"id":"1543"},{"id":"1544"}]},"id":"1546","type":"Toolbar"},{"attributes":{},"id":"1591","type":"UnionRenderers"},{"attributes":{},"id":"1590","type":"Selection"},{"attributes":{"formatter":{"id":"1566"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"event.on24.com","11":"paperswithcode.com","12":"classroom.udacity.com","13":"up-for-grabs.net","14":"mail.google.com","15":"teams.microsoft.com","16":"notebooks.githubusercontent.com","17":"fizzylogic.nl","18":"microsoft.com","19":"out.reddit.com","2":"fairlearn.org","20":"kkb-production.jupyter-proxy.kaggle.net","21":"opendatascience.com","22":"pypi.org","23":"medium.com","24":"DuckDuckGo","25":"engineering.linkedin.com","26":"ai.googleblog.com","27":"towardsdatascience.com","28":"venturebeat.com","29":"reddit.com","3":"staticsint.teams.cdn.office.net","30":"fairlearn.github.io","31":"anaconda.com","32":"t.co","33":"madewithml.com","34":"kdnuggets.com","35":"techairesearch.com","36":"datacamp.com","37":"com.google.android.gm","38":"goodfirstissues.com","39":"coursera.org","4":"mybuild.microsoft.com","40":"gitter.im","41":"linkedin.com","42":"infoworld.com","43":"yuque.antfin-inc.com","44":"azure.microsoft.com","45":"aiforpeople.org","46":"l.messenger.com","47":"kensciresearch.github.io","5":"Bing","6":"finance.yahoo.com","7":"docs.microsoft.com","8":"statics.teams.cdn.office.net","9":"sparkaisummit.com"},"major_label_policy":{"id":"1565"},"ticker":{"id":"1594"}},"id":"1531","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1553"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1554"}},"x":{"field":"indices"}},"id":"1559","type":"VBar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]},"id":"1594","type":"FixedTicker"},{"attributes":{},"id":"1536","type":"BasicTicker"},{"attributes":{"data":{"duplicate":[161,104,78,49,18,37,9,28,36,6,6,16,5,17,18,18,9,11,4,3,11,9,4,7,6,5,4,2,1,2,1,2,4,4,2,4,6,5,2,3,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"unique":[149,64,81,7,36,16,40,14,2,25,22,6,16,3,1,1,8,3,9,10,1,2,7,3,4,5,6,8,9,8,8,7,5,5,7,5,2,2,5,4,1,2,5,1,4,2,2,1]},"selected":{"id":"1570"},"selection_policy":{"id":"1571"}},"id":"1557","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"1555"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1556"}},"x":{"field":"indices"}},"id":"1578","type":"VBar"},{"attributes":{"axis":{"id":"1531"},"ticker":null},"id":"1534","type":"Grid"},{"attributes":{"fields":["unique","duplicate"]},"id":"1556","type":"Stack"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1579"}]},"id":"1593","type":"LegendItem"},{"attributes":{"axis":{"id":"1535"},"dimension":1,"ticker":null},"id":"1538","type":"Grid"}],"root_ids":["1520"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"909dd258-09a6-4fba-ae2d-c367493f51b2","root_ids":["1520"],"roots":{"1520":"08dd3b5a-4ed0-4ecf-966b-d6656e616a54"}}];
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