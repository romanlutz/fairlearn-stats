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
    
      
      
    
      var element = document.getElementById("91e7ac8e-4632-4bdd-9f3f-e3f0616c6abc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '91e7ac8e-4632-4bdd-9f3f-e3f0616c6abc' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f511fcb4-610a-4c03-80df-6729bf6248c9":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1575","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1565"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1566"}},"x":{"field":"indices"}},"id":"1588","type":"VBar"},{"attributes":{"axis":{"id":"1541"},"ticker":null},"id":"1544","type":"Grid"},{"attributes":{},"id":"1601","type":"Selection"},{"attributes":{"axis":{"id":"1545"},"dimension":1,"ticker":null},"id":"1548","type":"Grid"},{"attributes":{"items":[{"id":"1584"},{"id":"1603"}]},"id":"1583","type":"Legend"},{"attributes":{"fields":["unique"]},"id":"1564","type":"Stack"},{"attributes":{"formatter":{"id":"1575"},"major_label_policy":{"id":"1574"},"ticker":{"id":"1546"}},"id":"1545","type":"LinearAxis"},{"attributes":{},"id":"1574","type":"AllLabels"},{"attributes":{},"id":"1600","type":"UnionRenderers"},{"attributes":{"fields":["unique"]},"id":"1565","type":"Stack"},{"attributes":{"data":{"duplicate":[201,212,153,18,9,18,36,6,6,5,18,18,13,3,11,9,3,5,11,9,4,8,4,6,5,8,4,1,2,1,3,2,4,4,2,4,6,5,2,3,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"unique":[160,96,50,36,40,25,2,25,22,16,1,1,5,13,3,4,10,7,1,2,7,3,7,4,5,2,6,9,8,8,6,7,5,5,7,5,2,2,5,4,1,2,5,1,4,2,2,1]},"selected":{"id":"1601"},"selection_policy":{"id":"1600"}},"id":"1585","type":"ColumnDataSource"},{"attributes":{},"id":"1580","type":"UnionRenderers"},{"attributes":{"data":{"duplicate":[201,212,153,18,9,18,36,6,6,5,18,18,13,3,11,9,3,5,11,9,4,8,4,6,5,8,4,1,2,1,3,2,4,4,2,4,6,5,2,3,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"unique":[160,96,50,36,40,25,2,25,22,16,1,1,5,13,3,4,10,7,1,2,7,3,7,4,5,2,6,9,8,8,6,7,5,5,7,5,2,2,5,4,1,2,5,1,4,2,2,1]},"selected":{"id":"1581"},"selection_policy":{"id":"1580"}},"id":"1567","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1585"},"glyph":{"id":"1587"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1588"},"view":{"id":"1590"}},"id":"1589","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1541"}],"center":[{"id":"1544"},{"id":"1548"},{"id":"1583"}],"left":[{"id":"1545"}],"renderers":[{"id":"1571"},{"id":"1589"}],"title":{"id":"1531"},"toolbar":{"id":"1556"},"width":900,"x_range":{"id":"1533"},"x_scale":{"id":"1537"},"y_range":{"id":"1535"},"y_scale":{"id":"1539"}},"id":"1530","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1555","type":"BoxAnnotation"},{"attributes":{},"id":"1549","type":"PanTool"},{"attributes":{"text":"Top referrers"},"id":"1531","type":"Title"},{"attributes":{"bottom":{"expr":{"id":"1563"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1564"}},"x":{"field":"indices"}},"id":"1569","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1565"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1566"}},"x":{"field":"indices"}},"id":"1587","type":"VBar"},{"attributes":{},"id":"1550","type":"WheelZoomTool"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1571"}]},"id":"1584","type":"LegendItem"},{"attributes":{},"id":"1533","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1555"}},"id":"1551","type":"BoxZoomTool"},{"attributes":{},"id":"1581","type":"Selection"},{"attributes":{},"id":"1537","type":"LinearScale"},{"attributes":{},"id":"1552","type":"SaveTool"},{"attributes":{"data_source":{"id":"1567"},"glyph":{"id":"1569"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1570"},"view":{"id":"1572"}},"id":"1571","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1585"}},"id":"1590","type":"CDSView"},{"attributes":{},"id":"1553","type":"ResetTool"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1589"}]},"id":"1603","type":"LegendItem"},{"attributes":{},"id":"1535","type":"DataRange1d"},{"attributes":{"source":{"id":"1567"}},"id":"1572","type":"CDSView"},{"attributes":{},"id":"1554","type":"HelpTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1566","type":"Stack"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]},"id":"1604","type":"FixedTicker"},{"attributes":{"fields":[]},"id":"1563","type":"Stack"},{"attributes":{},"id":"1539","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1549"},{"id":"1550"},{"id":"1551"},{"id":"1552"},{"id":"1553"},{"id":"1554"}]},"id":"1556","type":"Toolbar"},{"attributes":{},"id":"1578","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1563"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1564"}},"x":{"field":"indices"}},"id":"1570","type":"VBar"},{"attributes":{},"id":"1577","type":"AllLabels"},{"attributes":{"formatter":{"id":"1578"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"fairlearn.org","10":"mail.google.com","11":"teams.microsoft.com","12":"staticsint.teams.cdn.office.net","13":"towardsdatascience.com","14":"fizzylogic.nl","15":"medium.com","16":"out.reddit.com","17":"Bing","18":"kkb-production.jupyter-proxy.kaggle.net","19":"opendatascience.com","2":"github.com","20":"pypi.org","21":"paperswithcode.com","22":"notebooks.githubusercontent.com","23":"DuckDuckGo","24":"engineering.linkedin.com","25":"up-for-grabs.net","26":"ai.googleblog.com","27":"venturebeat.com","28":"reddit.com","29":"fairlearn.github.io","3":"mybuild.microsoft.com","30":"microsoft.com","31":"anaconda.com","32":"t.co","33":"madewithml.com","34":"kdnuggets.com","35":"techairesearch.com","36":"datacamp.com","37":"com.google.android.gm","38":"goodfirstissues.com","39":"coursera.org","4":"finance.yahoo.com","40":"gitter.im","41":"linkedin.com","42":"infoworld.com","43":"yuque.antfin-inc.com","44":"azure.microsoft.com","45":"aiforpeople.org","46":"l.messenger.com","47":"kensciresearch.github.io","5":"docs.microsoft.com","6":"statics.teams.cdn.office.net","7":"sparkaisummit.com","8":"event.on24.com","9":"classroom.udacity.com"},"major_label_policy":{"id":"1577"},"ticker":{"id":"1604"}},"id":"1541","type":"LinearAxis"},{"attributes":{},"id":"1546","type":"BasicTicker"}],"root_ids":["1530"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"f511fcb4-610a-4c03-80df-6729bf6248c9","root_ids":["1530"],"roots":{"1530":"91e7ac8e-4632-4bdd-9f3f-e3f0616c6abc"}}];
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