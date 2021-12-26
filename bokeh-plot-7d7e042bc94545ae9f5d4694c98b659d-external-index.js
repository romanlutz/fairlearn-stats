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
    
      
      
    
      var element = document.getElementById("6cfb42cb-8e37-4152-9ba0-0e864f8c6061");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6cfb42cb-8e37-4152-9ba0-0e864f8c6061' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e0fb2a83-485a-443c-9ce1-db31ad46de0e":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"1575"},"glyph":{"id":"1577"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1578"},"view":{"id":"1580"}},"id":"1579","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1575"}},"id":"1580","type":"CDSView"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1579"}]},"id":"1593","type":"LegendItem"},{"attributes":{"fields":["unique","duplicate"]},"id":"1556","type":"Stack"},{"attributes":{"below":[{"id":"1531"}],"center":[{"id":"1534"},{"id":"1538"},{"id":"1573"}],"left":[{"id":"1535"}],"renderers":[{"id":"1561"},{"id":"1579"}],"title":{"id":"1521"},"toolbar":{"id":"1546"},"width":900,"x_range":{"id":"1523"},"x_scale":{"id":"1527"},"y_range":{"id":"1525"},"y_scale":{"id":"1529"}},"id":"1520","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1545","type":"BoxAnnotation"},{"attributes":{},"id":"1539","type":"PanTool"},{"attributes":{"text":"Top referrers"},"id":"1521","type":"Title"},{"attributes":{"data":{"duplicate":[322,141,131,18,9,36,18,6,15,6,18,5,7,18,15,18,11,3,3,11,9,4,7,6,5,4,2,1,2,1,2,4,4,2,4,6,4,5,2,5,1,5,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"unique":[138,93,64,36,40,2,18,25,13,22,8,16,13,1,4,1,3,10,9,1,2,7,3,4,5,6,8,9,8,8,7,5,5,7,5,2,4,2,5,1,5,1,4,2,1]},"selected":{"id":"1590"},"selection_policy":{"id":"1591"}},"id":"1575","type":"ColumnDataSource"},{"attributes":{},"id":"1540","type":"WheelZoomTool"},{"attributes":{},"id":"1571","type":"UnionRenderers"},{"attributes":{},"id":"1523","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1545"}},"id":"1541","type":"BoxZoomTool"},{"attributes":{},"id":"1527","type":"LinearScale"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1561"}]},"id":"1574","type":"LegendItem"},{"attributes":{},"id":"1542","type":"SaveTool"},{"attributes":{},"id":"1570","type":"Selection"},{"attributes":{},"id":"1566","type":"AllLabels"},{"attributes":{"fields":["unique"]},"id":"1554","type":"Stack"},{"attributes":{"fields":["unique"]},"id":"1555","type":"Stack"},{"attributes":{},"id":"1543","type":"ResetTool"},{"attributes":{"items":[{"id":"1574"},{"id":"1593"}]},"id":"1573","type":"Legend"},{"attributes":{"fields":[]},"id":"1553","type":"Stack"},{"attributes":{},"id":"1591","type":"UnionRenderers"},{"attributes":{},"id":"1525","type":"DataRange1d"},{"attributes":{},"id":"1544","type":"HelpTool"},{"attributes":{},"id":"1569","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"1539"},{"id":"1540"},{"id":"1541"},{"id":"1542"},{"id":"1543"},{"id":"1544"}]},"id":"1546","type":"Toolbar"},{"attributes":{},"id":"1529","type":"LinearScale"},{"attributes":{"formatter":{"id":"1564"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"fairlearn.org","10":"paperswithcode.com","11":"classroom.udacity.com","12":"linkedin.com","13":"mail.google.com","14":"up-for-grabs.net","15":"teams.microsoft.com","16":"fizzylogic.nl","17":"out.reddit.com","18":"microsoft.com","19":"kkb-production.jupyter-proxy.kaggle.net","2":"github.com","20":"opendatascience.com","21":"pypi.org","22":"medium.com","23":"DuckDuckGo","24":"engineering.linkedin.com","25":"ai.googleblog.com","26":"towardsdatascience.com","27":"venturebeat.com","28":"reddit.com","29":"fairlearn.github.io","3":"mybuild.microsoft.com","30":"anaconda.com","31":"t.co","32":"madewithml.com","33":"kdnuggets.com","34":"techairesearch.com","35":"aiforpeople.org","36":"notebooks.githubusercontent.com","37":"com.google.android.gm","38":"goodfirstissues.com","39":"gitter.im","4":"finance.yahoo.com","40":"infoworld.com","41":"yuque.antfin-inc.com","42":"azure.microsoft.com","43":"l.messenger.com","44":"kensciresearch.github.io","5":"statics.teams.cdn.office.net","6":"docs.microsoft.com","7":"sparkaisummit.com","8":"Bing","9":"event.on24.com"},"major_label_policy":{"id":"1566"},"ticker":{"id":"1594"}},"id":"1531","type":"LinearAxis"},{"attributes":{},"id":"1567","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1555"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1556"}},"x":{"field":"indices"}},"id":"1578","type":"VBar"},{"attributes":{},"id":"1536","type":"BasicTicker"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]},"id":"1594","type":"FixedTicker"},{"attributes":{"bottom":{"expr":{"id":"1553"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1554"}},"x":{"field":"indices"}},"id":"1560","type":"VBar"},{"attributes":{},"id":"1590","type":"Selection"},{"attributes":{"axis":{"id":"1531"},"ticker":null},"id":"1534","type":"Grid"},{"attributes":{"axis":{"id":"1535"},"dimension":1,"ticker":null},"id":"1538","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1553"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1554"}},"x":{"field":"indices"}},"id":"1559","type":"VBar"},{"attributes":{"data":{"duplicate":[322,141,131,18,9,36,18,6,15,6,18,5,7,18,15,18,11,3,3,11,9,4,7,6,5,4,2,1,2,1,2,4,4,2,4,6,4,5,2,5,1,5,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"unique":[138,93,64,36,40,2,18,25,13,22,8,16,13,1,4,1,3,10,9,1,2,7,3,4,5,6,8,9,8,8,7,5,5,7,5,2,4,2,5,1,5,1,4,2,1]},"selected":{"id":"1570"},"selection_policy":{"id":"1571"}},"id":"1557","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"1555"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1556"}},"x":{"field":"indices"}},"id":"1577","type":"VBar"},{"attributes":{"formatter":{"id":"1567"},"major_label_policy":{"id":"1569"},"ticker":{"id":"1536"}},"id":"1535","type":"LinearAxis"},{"attributes":{"source":{"id":"1557"}},"id":"1562","type":"CDSView"},{"attributes":{"data_source":{"id":"1557"},"glyph":{"id":"1559"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1560"},"view":{"id":"1562"}},"id":"1561","type":"GlyphRenderer"},{"attributes":{},"id":"1564","type":"BasicTickFormatter"}],"root_ids":["1520"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"e0fb2a83-485a-443c-9ce1-db31ad46de0e","root_ids":["1520"],"roots":{"1520":"6cfb42cb-8e37-4152-9ba0-0e864f8c6061"}}];
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