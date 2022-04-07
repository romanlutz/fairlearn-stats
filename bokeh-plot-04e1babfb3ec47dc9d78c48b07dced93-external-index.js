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
    
      
      
    
      var element = document.getElementById("ef96b636-3d9e-40fd-9fa3-c9bc8cab53b1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ef96b636-3d9e-40fd-9fa3-c9bc8cab53b1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"acb4b3f3-9ed5-442b-9f22-9f5044cc2606":{"defs":[],"roots":{"references":[{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]},"id":"1614","type":"FixedTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"1559"},{"id":"1560"},{"id":"1561"},{"id":"1562"},{"id":"1563"},{"id":"1564"}]},"id":"1566","type":"Toolbar"},{"attributes":{},"id":"1587","type":"BasicTickFormatter"},{"attributes":{"text":"Top referrers"},"id":"1541","type":"Title"},{"attributes":{},"id":"1559","type":"PanTool"},{"attributes":{},"id":"1586","type":"AllLabels"},{"attributes":{"source":{"id":"1595"}},"id":"1600","type":"CDSView"},{"attributes":{},"id":"1543","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1595"},"glyph":{"id":"1597"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1598"},"view":{"id":"1600"}},"id":"1599","type":"GlyphRenderer"},{"attributes":{},"id":"1560","type":"WheelZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1573"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1574"}},"x":{"field":"indices"}},"id":"1580","type":"VBar"},{"attributes":{"overlay":{"id":"1565"}},"id":"1561","type":"BoxZoomTool"},{"attributes":{},"id":"1547","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1575"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1576"}},"x":{"field":"indices"}},"id":"1597","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1574","type":"Stack"},{"attributes":{},"id":"1562","type":"SaveTool"},{"attributes":{"source":{"id":"1577"}},"id":"1582","type":"CDSView"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1581"}]},"id":"1594","type":"LegendItem"},{"attributes":{"data_source":{"id":"1577"},"glyph":{"id":"1579"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1580"},"view":{"id":"1582"}},"id":"1581","type":"GlyphRenderer"},{"attributes":{"data":{"duplicate":[362,414,265,18,9,20,27,32,31,6,17,6,15,5,18,18,8,15,14,14,13,8,11,3,9,11,11,9,5,8,4,1,2,8,1,2,4,4,2,4,2,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"unique":[217,79,117,36,40,27,17,6,7,25,14,22,6,16,1,1,8,1,1,1,2,6,3,10,4,2,1,2,5,2,6,9,8,2,8,7,5,5,7,5,6,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1612"},"selection_policy":{"id":"1611"}},"id":"1595","type":"ColumnDataSource"},{"attributes":{},"id":"1563","type":"ResetTool"},{"attributes":{},"id":"1592","type":"Selection"},{"attributes":{},"id":"1545","type":"DataRange1d"},{"attributes":{"items":[{"id":"1594"},{"id":"1613"}]},"id":"1593","type":"Legend"},{"attributes":{},"id":"1564","type":"HelpTool"},{"attributes":{},"id":"1591","type":"UnionRenderers"},{"attributes":{},"id":"1549","type":"LinearScale"},{"attributes":{},"id":"1589","type":"AllLabels"},{"attributes":{"bottom":{"expr":{"id":"1573"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1574"}},"x":{"field":"indices"}},"id":"1579","type":"VBar"},{"attributes":{"formatter":{"id":"1587"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"notebooks.githubusercontent.com","11":"event.on24.com","12":"DuckDuckGo","13":"classroom.udacity.com","14":"mail.google.com","15":"teams.microsoft.com","16":"microsoft.com","17":"cn.bing.com","18":"statics.teams.cdn.office.net","19":"ecosia.org","2":"fairlearn.org","20":"Baidu","21":"towardsdatascience.com","22":"fizzylogic.nl","23":"out.reddit.com","24":"staticsint.teams.cdn.office.net","25":"dev.azure.com","26":"kkb-production.jupyter-proxy.kaggle.net","27":"opendatascience.com","28":"engineering.linkedin.com","29":"up-for-grabs.net","3":"mybuild.microsoft.com","30":"ai.googleblog.com","31":"venturebeat.com","32":"reddit.com","33":"xavierdupre.fr","34":"fairlearn.github.io","35":"anaconda.com","36":"t.co","37":"madewithml.com","38":"kdnuggets.com","39":"techairesearch.com","4":"finance.yahoo.com","40":"medium.com","41":"datacamp.com","42":"coursera.org","43":"com.google.android.gm","44":"goodfirstissues.com","45":"gitter.im","46":"linkedin.com","47":"infoworld.com","48":"yuque.antfin-inc.com","49":"azure.microsoft.com","5":"docs.microsoft.com","50":"aiforpeople.org","51":"l.messenger.com","52":"kensciresearch.github.io","6":"Bing","7":"pypi.org","8":"paperswithcode.com","9":"sparkaisummit.com"},"major_label_policy":{"id":"1589"},"ticker":{"id":"1614"}},"id":"1551","type":"LinearAxis"},{"attributes":{},"id":"1584","type":"BasicTickFormatter"},{"attributes":{},"id":"1556","type":"BasicTicker"},{"attributes":{"axis":{"id":"1551"},"ticker":null},"id":"1554","type":"Grid"},{"attributes":{"fields":["unique","duplicate"]},"id":"1576","type":"Stack"},{"attributes":{"axis":{"id":"1555"},"dimension":1,"ticker":null},"id":"1558","type":"Grid"},{"attributes":{"formatter":{"id":"1584"},"major_label_policy":{"id":"1586"},"ticker":{"id":"1556"}},"id":"1555","type":"LinearAxis"},{"attributes":{},"id":"1612","type":"Selection"},{"attributes":{"fields":[]},"id":"1573","type":"Stack"},{"attributes":{},"id":"1611","type":"UnionRenderers"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1599"}]},"id":"1613","type":"LegendItem"},{"attributes":{"fields":["unique"]},"id":"1575","type":"Stack"},{"attributes":{"below":[{"id":"1551"}],"center":[{"id":"1554"},{"id":"1558"},{"id":"1593"}],"left":[{"id":"1555"}],"renderers":[{"id":"1581"},{"id":"1599"}],"title":{"id":"1541"},"toolbar":{"id":"1566"},"width":900,"x_range":{"id":"1543"},"x_scale":{"id":"1547"},"y_range":{"id":"1545"},"y_scale":{"id":"1549"}},"id":"1540","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"1575"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1576"}},"x":{"field":"indices"}},"id":"1598","type":"VBar"},{"attributes":{"data":{"duplicate":[362,414,265,18,9,20,27,32,31,6,17,6,15,5,18,18,8,15,14,14,13,8,11,3,9,11,11,9,5,8,4,1,2,8,1,2,4,4,2,4,2,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"unique":[217,79,117,36,40,27,17,6,7,25,14,22,6,16,1,1,8,1,1,1,2,6,3,10,4,2,1,2,5,2,6,9,8,2,8,7,5,5,7,5,6,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1592"},"selection_policy":{"id":"1591"}},"id":"1577","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1565","type":"BoxAnnotation"}],"root_ids":["1540"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"acb4b3f3-9ed5-442b-9f22-9f5044cc2606","root_ids":["1540"],"roots":{"1540":"ef96b636-3d9e-40fd-9fa3-c9bc8cab53b1"}}];
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