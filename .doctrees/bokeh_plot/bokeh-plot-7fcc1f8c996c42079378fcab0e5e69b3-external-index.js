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
    
      
      
    
      var element = document.getElementById("7e12479c-2d5f-41c7-9a5a-816bb957d081");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7e12479c-2d5f-41c7-9a5a-816bb957d081' but no matching script tag was found.")
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
                    
                  var docs_json = '{"968ec303-31a5-40e5-8a67-7868cb70d377":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1547","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1575"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1576"}},"x":{"field":"indices"}},"id":"1597","type":"VBar"},{"attributes":{},"id":"1585","type":"BasicTickFormatter"},{"attributes":{"fields":["unique","duplicate"]},"id":"1576","type":"Stack"},{"attributes":{"overlay":{"id":"1565"}},"id":"1561","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1577"},"glyph":{"id":"1579"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1580"},"view":{"id":"1582"}},"id":"1581","type":"GlyphRenderer"},{"attributes":{"data":{"duplicate":[444,310,242,71,18,9,14,20,6,21,6,5,18,18,13,15,14,14,8,11,3,11,11,9,5,3,5,8,4,1,2,8,1,2,4,4,2,4,2,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"unique":[78,207,103,21,36,40,19,11,25,8,22,16,1,1,4,2,1,1,6,3,10,2,1,2,6,7,5,2,6,9,8,2,8,7,5,5,7,5,6,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1610"},"selection_policy":{"id":"1611"}},"id":"1595","type":"ColumnDataSource"},{"attributes":{},"id":"1543","type":"DataRange1d"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1581"}]},"id":"1594","type":"LegendItem"},{"attributes":{},"id":"1562","type":"SaveTool"},{"attributes":{"fields":["unique"]},"id":"1574","type":"Stack"},{"attributes":{},"id":"1563","type":"ResetTool"},{"attributes":{},"id":"1587","type":"AllLabels"},{"attributes":{},"id":"1591","type":"UnionRenderers"},{"attributes":{},"id":"1545","type":"DataRange1d"},{"attributes":{"source":{"id":"1577"}},"id":"1582","type":"CDSView"},{"attributes":{},"id":"1590","type":"Selection"},{"attributes":{"fields":["unique"]},"id":"1575","type":"Stack"},{"attributes":{},"id":"1564","type":"HelpTool"},{"attributes":{},"id":"1549","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1573"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1574"}},"x":{"field":"indices"}},"id":"1580","type":"VBar"},{"attributes":{},"id":"1588","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1588"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"event.on24.com","11":"classroom.udacity.com","12":"mail.google.com","13":"teams.microsoft.com","14":"DuckDuckGo","15":"staticsint.teams.cdn.office.net","16":"statics.teams.cdn.office.net","17":"ecosia.org","18":"towardsdatascience.com","19":"fizzylogic.nl","2":"fairlearn.org","20":"out.reddit.com","21":"dev.azure.com","22":"kkb-production.jupyter-proxy.kaggle.net","23":"opendatascience.com","24":"notebooks.githubusercontent.com","25":"microsoft.com","26":"engineering.linkedin.com","27":"up-for-grabs.net","28":"ai.googleblog.com","29":"venturebeat.com","3":"Bing","30":"reddit.com","31":"xavierdupre.fr","32":"fairlearn.github.io","33":"anaconda.com","34":"t.co","35":"madewithml.com","36":"kdnuggets.com","37":"techairesearch.com","38":"medium.com","39":"datacamp.com","4":"mybuild.microsoft.com","40":"coursera.org","41":"com.google.android.gm","42":"goodfirstissues.com","43":"gitter.im","44":"linkedin.com","45":"infoworld.com","46":"yuque.antfin-inc.com","47":"azure.microsoft.com","48":"aiforpeople.org","49":"l.messenger.com","5":"finance.yahoo.com","50":"kensciresearch.github.io","6":"docs.microsoft.com","7":"pypi.org","8":"sparkaisummit.com","9":"paperswithcode.com"},"major_label_policy":{"id":"1587"},"ticker":{"id":"1614"}},"id":"1551","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1573"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1574"}},"x":{"field":"indices"}},"id":"1579","type":"VBar"},{"attributes":{},"id":"1556","type":"BasicTicker"},{"attributes":{},"id":"1584","type":"AllLabels"},{"attributes":{"items":[{"id":"1594"},{"id":"1613"}]},"id":"1593","type":"Legend"},{"attributes":{"axis":{"id":"1551"},"ticker":null},"id":"1554","type":"Grid"},{"attributes":{"axis":{"id":"1555"},"dimension":1,"ticker":null},"id":"1558","type":"Grid"},{"attributes":{},"id":"1611","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1585"},"major_label_policy":{"id":"1584"},"ticker":{"id":"1556"}},"id":"1555","type":"LinearAxis"},{"attributes":{},"id":"1610","type":"Selection"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1599"}]},"id":"1613","type":"LegendItem"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]},"id":"1614","type":"FixedTicker"},{"attributes":{"bottom":{"expr":{"id":"1575"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1576"}},"x":{"field":"indices"}},"id":"1598","type":"VBar"},{"attributes":{"data":{"duplicate":[444,310,242,71,18,9,14,20,6,21,6,5,18,18,13,15,14,14,8,11,3,11,11,9,5,3,5,8,4,1,2,8,1,2,4,4,2,4,2,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"unique":[78,207,103,21,36,40,19,11,25,8,22,16,1,1,4,2,1,1,6,3,10,2,1,2,6,7,5,2,6,9,8,2,8,7,5,5,7,5,6,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1590"},"selection_policy":{"id":"1591"}},"id":"1577","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1595"},"glyph":{"id":"1597"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1598"},"view":{"id":"1600"}},"id":"1599","type":"GlyphRenderer"},{"attributes":{"fields":[]},"id":"1573","type":"Stack"},{"attributes":{"text":"Top referrers"},"id":"1541","type":"Title"},{"attributes":{"source":{"id":"1595"}},"id":"1600","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1565","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1551"}],"center":[{"id":"1554"},{"id":"1558"},{"id":"1593"}],"left":[{"id":"1555"}],"renderers":[{"id":"1581"},{"id":"1599"}],"title":{"id":"1541"},"toolbar":{"id":"1566"},"width":900,"x_range":{"id":"1543"},"x_scale":{"id":"1547"},"y_range":{"id":"1545"},"y_scale":{"id":"1549"}},"id":"1540","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"1559"},{"id":"1560"},{"id":"1561"},{"id":"1562"},{"id":"1563"},{"id":"1564"}]},"id":"1566","type":"Toolbar"},{"attributes":{},"id":"1559","type":"PanTool"},{"attributes":{},"id":"1560","type":"WheelZoomTool"}],"root_ids":["1540"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"968ec303-31a5-40e5-8a67-7868cb70d377","root_ids":["1540"],"roots":{"1540":"7e12479c-2d5f-41c7-9a5a-816bb957d081"}}];
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