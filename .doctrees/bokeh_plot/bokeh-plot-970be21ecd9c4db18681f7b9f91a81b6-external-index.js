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
    
      
      
    
      var element = document.getElementById("d09482b0-8fb4-42ba-aecf-0668fa09ddab");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd09482b0-8fb4-42ba-aecf-0668fa09ddab' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6964ec94-a4c5-46c3-8dff-fd54041b40a8":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"1575"},"glyph":{"id":"1577"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1578"},"view":{"id":"1580"}},"id":"1579","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1545","type":"BoxAnnotation"},{"attributes":{"bottom":{"expr":{"id":"1555"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1556"}},"x":{"field":"indices"}},"id":"1577","type":"VBar"},{"attributes":{"below":[{"id":"1531"}],"center":[{"id":"1534"},{"id":"1538"},{"id":"1573"}],"left":[{"id":"1535"}],"renderers":[{"id":"1561"},{"id":"1579"}],"title":{"id":"1521"},"toolbar":{"id":"1546"},"width":900,"x_range":{"id":"1523"},"x_scale":{"id":"1527"},"y_range":{"id":"1525"},"y_scale":{"id":"1529"}},"id":"1520","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1539","type":"PanTool"},{"attributes":{"data":{"duplicate":[111,111,78,18,9,36,6,6,11,5,14,18,15,18,7,11,11,3,11,9,4,7,6,5,4,2,1,2,1,2,4,4,2,4,6,5,2,3,5,1,5,2,1,0,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"unique":[69,41,45,36,40,2,25,22,12,16,6,1,4,1,7,3,3,10,1,2,7,3,4,5,6,8,9,8,8,7,5,5,7,5,2,2,5,4,1,5,1,4,4,5,2,2,1]},"selected":{"id":"1591"},"selection_policy":{"id":"1590"}},"id":"1575","type":"ColumnDataSource"},{"attributes":{"fields":["unique","duplicate"]},"id":"1556","type":"Stack"},{"attributes":{"text":"Top referrers"},"id":"1521","type":"Title"},{"attributes":{},"id":"1540","type":"WheelZoomTool"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1561"}]},"id":"1574","type":"LegendItem"},{"attributes":{},"id":"1523","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1545"}},"id":"1541","type":"BoxZoomTool"},{"attributes":{},"id":"1527","type":"LinearScale"},{"attributes":{},"id":"1568","type":"AllLabels"},{"attributes":{},"id":"1542","type":"SaveTool"},{"attributes":{},"id":"1571","type":"Selection"},{"attributes":{"data":{"duplicate":[111,111,78,18,9,36,6,6,11,5,14,18,15,18,7,11,11,3,11,9,4,7,6,5,4,2,1,2,1,2,4,4,2,4,6,5,2,3,5,1,5,2,1,0,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"unique":[69,41,45,36,40,2,25,22,12,16,6,1,4,1,7,3,3,10,1,2,7,3,4,5,6,8,9,8,8,7,5,5,7,5,2,2,5,4,1,5,1,4,4,5,2,2,1]},"selected":{"id":"1571"},"selection_policy":{"id":"1570"}},"id":"1557","type":"ColumnDataSource"},{"attributes":{},"id":"1543","type":"ResetTool"},{"attributes":{},"id":"1569","type":"BasicTickFormatter"},{"attributes":{},"id":"1591","type":"Selection"},{"attributes":{},"id":"1525","type":"DataRange1d"},{"attributes":{},"id":"1544","type":"HelpTool"},{"attributes":{},"id":"1570","type":"UnionRenderers"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1579"}]},"id":"1593","type":"LegendItem"},{"attributes":{"active_multi":null,"tools":[{"id":"1539"},{"id":"1540"},{"id":"1541"},{"id":"1542"},{"id":"1543"},{"id":"1544"}]},"id":"1546","type":"Toolbar"},{"attributes":{},"id":"1529","type":"LinearScale"},{"attributes":{},"id":"1566","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"1574"},{"id":"1593"}]},"id":"1573","type":"Legend"},{"attributes":{"fields":[]},"id":"1553","type":"Stack"},{"attributes":{"formatter":{"id":"1569"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"microsoft.com","11":"mail.google.com","12":"up-for-grabs.net","13":"teams.microsoft.com","14":"Bing","15":"paperswithcode.com","16":"fizzylogic.nl","17":"out.reddit.com","18":"kkb-production.jupyter-proxy.kaggle.net","19":"opendatascience.com","2":"fairlearn.org","20":"pypi.org","21":"medium.com","22":"DuckDuckGo","23":"engineering.linkedin.com","24":"ai.googleblog.com","25":"towardsdatascience.com","26":"venturebeat.com","27":"reddit.com","28":"fairlearn.github.io","29":"anaconda.com","3":"mybuild.microsoft.com","30":"t.co","31":"madewithml.com","32":"kdnuggets.com","33":"techairesearch.com","34":"datacamp.com","35":"com.google.android.gm","36":"goodfirstissues.com","37":"coursera.org","38":"gitter.im","39":"infoworld.com","4":"finance.yahoo.com","40":"yuque.antfin-inc.com","41":"notebooks.githubusercontent.com","42":"azure.microsoft.com","43":"linkedin.com","44":"aiforpeople.org","45":"l.messenger.com","46":"kensciresearch.github.io","5":"statics.teams.cdn.office.net","6":"sparkaisummit.com","7":"event.on24.com","8":"docs.microsoft.com","9":"classroom.udacity.com"},"major_label_policy":{"id":"1568"},"ticker":{"id":"1594"}},"id":"1531","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1557"},"glyph":{"id":"1559"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1560"},"view":{"id":"1562"}},"id":"1561","type":"GlyphRenderer"},{"attributes":{},"id":"1536","type":"BasicTicker"},{"attributes":{},"id":"1565","type":"AllLabels"},{"attributes":{"bottom":{"expr":{"id":"1555"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1556"}},"x":{"field":"indices"}},"id":"1578","type":"VBar"},{"attributes":{"axis":{"id":"1531"},"ticker":null},"id":"1534","type":"Grid"},{"attributes":{"source":{"id":"1557"}},"id":"1562","type":"CDSView"},{"attributes":{"axis":{"id":"1535"},"dimension":1,"ticker":null},"id":"1538","type":"Grid"},{"attributes":{"formatter":{"id":"1566"},"major_label_policy":{"id":"1565"},"ticker":{"id":"1536"}},"id":"1535","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1553"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1554"}},"x":{"field":"indices"}},"id":"1560","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1553"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1554"}},"x":{"field":"indices"}},"id":"1559","type":"VBar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]},"id":"1594","type":"FixedTicker"},{"attributes":{"fields":["unique"]},"id":"1555","type":"Stack"},{"attributes":{"source":{"id":"1575"}},"id":"1580","type":"CDSView"},{"attributes":{"fields":["unique"]},"id":"1554","type":"Stack"},{"attributes":{},"id":"1590","type":"UnionRenderers"}],"root_ids":["1520"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"6964ec94-a4c5-46c3-8dff-fd54041b40a8","root_ids":["1520"],"roots":{"1520":"d09482b0-8fb4-42ba-aecf-0668fa09ddab"}}];
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