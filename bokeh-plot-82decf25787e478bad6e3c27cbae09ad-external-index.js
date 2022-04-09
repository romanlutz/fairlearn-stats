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
    
      
      
    
      var element = document.getElementById("5ef08a28-e051-49c7-b21a-b257cb5e66da");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5ef08a28-e051-49c7-b21a-b257cb5e66da' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ff4d61ea-52ee-483c-a24e-33f10ab48352":{"defs":[],"roots":{"references":[{"attributes":{"fields":["unique","duplicate"]},"id":"1581","type":"Stack"},{"attributes":{"below":[{"id":"1556"}],"center":[{"id":"1559"},{"id":"1563"},{"id":"1598"}],"left":[{"id":"1560"}],"renderers":[{"id":"1586"},{"id":"1604"}],"title":{"id":"1546"},"toolbar":{"id":"1571"},"width":900,"x_range":{"id":"1548"},"x_scale":{"id":"1552"},"y_range":{"id":"1550"},"y_scale":{"id":"1554"}},"id":"1545","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"duplicate":[434,545,281,18,9,19,28,34,6,20,6,5,18,18,9,7,8,11,15,14,14,13,8,11,3,11,11,9,5,8,4,1,2,8,1,2,4,4,2,4,2,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"unique":[223,85,125,36,40,26,17,6,25,9,22,16,1,1,9,11,8,5,1,1,1,2,6,3,10,2,1,2,5,2,6,9,8,2,8,7,5,5,7,5,6,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1616"},"selection_policy":{"id":"1617"}},"id":"1600","type":"ColumnDataSource"},{"attributes":{},"id":"1564","type":"PanTool"},{"attributes":{},"id":"1597","type":"UnionRenderers"},{"attributes":{"text":"Top referrers"},"id":"1546","type":"Title"},{"attributes":{},"id":"1565","type":"WheelZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1580"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1581"}},"x":{"field":"indices"}},"id":"1602","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1580","type":"Stack"},{"attributes":{},"id":"1548","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1570"}},"id":"1566","type":"BoxZoomTool"},{"attributes":{},"id":"1552","type":"LinearScale"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1586"}]},"id":"1599","type":"LegendItem"},{"attributes":{},"id":"1567","type":"SaveTool"},{"attributes":{},"id":"1596","type":"Selection"},{"attributes":{},"id":"1568","type":"ResetTool"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1604"}]},"id":"1618","type":"LegendItem"},{"attributes":{},"id":"1594","type":"AllLabels"},{"attributes":{"source":{"id":"1600"}},"id":"1605","type":"CDSView"},{"attributes":{},"id":"1616","type":"Selection"},{"attributes":{},"id":"1550","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1600"},"glyph":{"id":"1602"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1603"},"view":{"id":"1605"}},"id":"1604","type":"GlyphRenderer"},{"attributes":{},"id":"1569","type":"HelpTool"},{"attributes":{},"id":"1592","type":"BasicTickFormatter"},{"attributes":{},"id":"1554","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1564"},{"id":"1565"},{"id":"1566"},{"id":"1567"},{"id":"1568"},{"id":"1569"}]},"id":"1571","type":"Toolbar"},{"attributes":{},"id":"1591","type":"AllLabels"},{"attributes":{"fields":[]},"id":"1578","type":"Stack"},{"attributes":{"formatter":{"id":"1589"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"event.on24.com","11":"classroom.udacity.com","12":"mail.google.com","13":"teams.microsoft.com","14":"DuckDuckGo","15":"notebooks.githubusercontent.com","16":"microsoft.com","17":"staticsint.teams.cdn.office.net","18":"cn.bing.com","19":"statics.teams.cdn.office.net","2":"fairlearn.org","20":"ecosia.org","21":"Baidu","22":"towardsdatascience.com","23":"fizzylogic.nl","24":"out.reddit.com","25":"dev.azure.com","26":"kkb-production.jupyter-proxy.kaggle.net","27":"opendatascience.com","28":"engineering.linkedin.com","29":"up-for-grabs.net","3":"mybuild.microsoft.com","30":"ai.googleblog.com","31":"venturebeat.com","32":"reddit.com","33":"xavierdupre.fr","34":"fairlearn.github.io","35":"anaconda.com","36":"t.co","37":"madewithml.com","38":"kdnuggets.com","39":"techairesearch.com","4":"finance.yahoo.com","40":"medium.com","41":"datacamp.com","42":"coursera.org","43":"com.google.android.gm","44":"goodfirstissues.com","45":"gitter.im","46":"linkedin.com","47":"infoworld.com","48":"yuque.antfin-inc.com","49":"azure.microsoft.com","5":"docs.microsoft.com","50":"aiforpeople.org","51":"l.messenger.com","52":"kensciresearch.github.io","6":"Bing","7":"pypi.org","8":"sparkaisummit.com","9":"paperswithcode.com"},"major_label_policy":{"id":"1591"},"ticker":{"id":"1619"}},"id":"1556","type":"LinearAxis"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]},"id":"1619","type":"FixedTicker"},{"attributes":{"items":[{"id":"1599"},{"id":"1618"}]},"id":"1598","type":"Legend"},{"attributes":{},"id":"1561","type":"BasicTicker"},{"attributes":{"fields":["unique"]},"id":"1579","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1578"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1579"}},"x":{"field":"indices"}},"id":"1585","type":"VBar"},{"attributes":{"axis":{"id":"1556"},"ticker":null},"id":"1559","type":"Grid"},{"attributes":{},"id":"1589","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1580"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1581"}},"x":{"field":"indices"}},"id":"1603","type":"VBar"},{"attributes":{"axis":{"id":"1560"},"dimension":1,"ticker":null},"id":"1563","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1578"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1579"}},"x":{"field":"indices"}},"id":"1584","type":"VBar"},{"attributes":{},"id":"1617","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"1592"},"major_label_policy":{"id":"1594"},"ticker":{"id":"1561"}},"id":"1560","type":"LinearAxis"},{"attributes":{"source":{"id":"1582"}},"id":"1587","type":"CDSView"},{"attributes":{"data_source":{"id":"1582"},"glyph":{"id":"1584"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1585"},"view":{"id":"1587"}},"id":"1586","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1570","type":"BoxAnnotation"},{"attributes":{"data":{"duplicate":[434,545,281,18,9,19,28,34,6,20,6,5,18,18,9,7,8,11,15,14,14,13,8,11,3,11,11,9,5,8,4,1,2,8,1,2,4,4,2,4,2,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"unique":[223,85,125,36,40,26,17,6,25,9,22,16,1,1,9,11,8,5,1,1,1,2,6,3,10,2,1,2,5,2,6,9,8,2,8,7,5,5,7,5,6,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1596"},"selection_policy":{"id":"1597"}},"id":"1582","type":"ColumnDataSource"}],"root_ids":["1545"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"ff4d61ea-52ee-483c-a24e-33f10ab48352","root_ids":["1545"],"roots":{"1545":"5ef08a28-e051-49c7-b21a-b257cb5e66da"}}];
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