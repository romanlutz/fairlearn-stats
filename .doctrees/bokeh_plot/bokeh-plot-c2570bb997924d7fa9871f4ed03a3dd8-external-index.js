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
    
      
      
    
      var element = document.getElementById("33f25443-3cac-4d14-a318-f3fa0b21973a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '33f25443-3cac-4d14-a318-f3fa0b21973a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5a61c540-c108-45a1-8c04-91193fc39688":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1554","type":"HelpTool"},{"attributes":{},"id":"1581","type":"Selection"},{"attributes":{"items":[{"id":"1584"},{"id":"1603"}]},"id":"1583","type":"Legend"},{"attributes":{"fields":["unique","duplicate"]},"id":"1566","type":"Stack"},{"attributes":{"source":{"id":"1585"}},"id":"1590","type":"CDSView"},{"attributes":{"data_source":{"id":"1567"},"glyph":{"id":"1569"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1570"},"view":{"id":"1572"}},"id":"1571","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1576"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"event.on24.com","11":"microsoft.com","12":"classroom.udacity.com","13":"DuckDuckGo","14":"mail.google.com","15":"teams.microsoft.com","16":"notebooks.githubusercontent.com","17":"towardsdatascience.com","18":"fizzylogic.nl","19":"staticsint.teams.cdn.office.net","2":"fairlearn.org","20":"medium.com","21":"out.reddit.com","22":"kkb-production.jupyter-proxy.kaggle.net","23":"opendatascience.com","24":"paperswithcode.com","25":"engineering.linkedin.com","26":"up-for-grabs.net","27":"ai.googleblog.com","28":"venturebeat.com","29":"reddit.com","3":"mybuild.microsoft.com","30":"xavierdupre.fr","31":"fairlearn.github.io","32":"anaconda.com","33":"t.co","34":"madewithml.com","35":"kdnuggets.com","36":"techairesearch.com","37":"datacamp.com","38":"coursera.org","39":"com.google.android.gm","4":"Bing","40":"goodfirstissues.com","41":"gitter.im","42":"linkedin.com","43":"infoworld.com","44":"yuque.antfin-inc.com","45":"azure.microsoft.com","46":"aiforpeople.org","47":"l.messenger.com","48":"kensciresearch.github.io","5":"finance.yahoo.com","6":"docs.microsoft.com","7":"statics.teams.cdn.office.net","8":"pypi.org","9":"sparkaisummit.com"},"major_label_policy":{"id":"1575"},"ticker":{"id":"1604"}},"id":"1541","type":"LinearAxis"},{"attributes":{},"id":"1546","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"1565"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1566"}},"x":{"field":"indices"}},"id":"1588","type":"VBar"},{"attributes":{},"id":"1575","type":"AllLabels"},{"attributes":{"data":{"duplicate":[249,305,154,18,30,9,19,37,24,6,6,10,5,13,18,18,9,8,11,9,9,3,11,9,8,5,8,4,1,2,8,1,2,4,4,2,4,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"unique":[219,87,122,36,19,40,27,3,14,25,22,11,16,7,1,1,8,8,3,5,4,10,1,2,3,5,2,6,9,8,2,8,7,5,5,7,5,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1601"},"selection_policy":{"id":"1602"}},"id":"1585","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1541"},"ticker":null},"id":"1544","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1565"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1566"}},"x":{"field":"indices"}},"id":"1587","type":"VBar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]},"id":"1604","type":"FixedTicker"},{"attributes":{"axis":{"id":"1545"},"dimension":1,"ticker":null},"id":"1548","type":"Grid"},{"attributes":{"formatter":{"id":"1579"},"major_label_policy":{"id":"1578"},"ticker":{"id":"1546"}},"id":"1545","type":"LinearAxis"},{"attributes":{},"id":"1578","type":"AllLabels"},{"attributes":{},"id":"1539","type":"LinearScale"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1571"}]},"id":"1584","type":"LegendItem"},{"attributes":{},"id":"1579","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1585"},"glyph":{"id":"1587"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1588"},"view":{"id":"1590"}},"id":"1589","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1555","type":"BoxAnnotation"},{"attributes":{},"id":"1601","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"1549"},{"id":"1550"},{"id":"1551"},{"id":"1552"},{"id":"1553"},{"id":"1554"}]},"id":"1556","type":"Toolbar"},{"attributes":{"below":[{"id":"1541"}],"center":[{"id":"1544"},{"id":"1548"},{"id":"1583"}],"left":[{"id":"1545"}],"renderers":[{"id":"1571"},{"id":"1589"}],"title":{"id":"1531"},"toolbar":{"id":"1556"},"width":900,"x_range":{"id":"1533"},"x_scale":{"id":"1537"},"y_range":{"id":"1535"},"y_scale":{"id":"1539"}},"id":"1530","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1589"}]},"id":"1603","type":"LegendItem"},{"attributes":{"source":{"id":"1567"}},"id":"1572","type":"CDSView"},{"attributes":{},"id":"1549","type":"PanTool"},{"attributes":{},"id":"1602","type":"UnionRenderers"},{"attributes":{"text":"Top referrers"},"id":"1531","type":"Title"},{"attributes":{},"id":"1582","type":"UnionRenderers"},{"attributes":{},"id":"1550","type":"WheelZoomTool"},{"attributes":{},"id":"1533","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1563"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1564"}},"x":{"field":"indices"}},"id":"1570","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1564","type":"Stack"},{"attributes":{"fields":["unique"]},"id":"1565","type":"Stack"},{"attributes":{},"id":"1535","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1555"}},"id":"1551","type":"BoxZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1563"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1564"}},"x":{"field":"indices"}},"id":"1569","type":"VBar"},{"attributes":{"data":{"duplicate":[249,305,154,18,30,9,19,37,24,6,6,10,5,13,18,18,9,8,11,9,9,3,11,9,8,5,8,4,1,2,8,1,2,4,4,2,4,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"unique":[219,87,122,36,19,40,27,3,14,25,22,11,16,7,1,1,8,8,3,5,4,10,1,2,3,5,2,6,9,8,2,8,7,5,5,7,5,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1581"},"selection_policy":{"id":"1582"}},"id":"1567","type":"ColumnDataSource"},{"attributes":{},"id":"1552","type":"SaveTool"},{"attributes":{"fields":[]},"id":"1563","type":"Stack"},{"attributes":{},"id":"1537","type":"LinearScale"},{"attributes":{},"id":"1553","type":"ResetTool"},{"attributes":{},"id":"1576","type":"BasicTickFormatter"}],"root_ids":["1530"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"5a61c540-c108-45a1-8c04-91193fc39688","root_ids":["1530"],"roots":{"1530":"33f25443-3cac-4d14-a318-f3fa0b21973a"}}];
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