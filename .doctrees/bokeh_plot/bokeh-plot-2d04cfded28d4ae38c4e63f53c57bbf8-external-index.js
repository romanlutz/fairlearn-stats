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
    
      
      
    
      var element = document.getElementById("1ace6dd8-85a8-4cf4-9e64-f1d734c5ae5f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1ace6dd8-85a8-4cf4-9e64-f1d734c5ae5f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5388f3f8-5c90-47a6-ab10-b852242c5867":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"1560"}},"id":"1556","type":"BoxZoomTool"},{"attributes":{},"id":"1542","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]},"id":"1609","type":"FixedTicker"},{"attributes":{},"id":"1557","type":"SaveTool"},{"attributes":{},"id":"1607","type":"UnionRenderers"},{"attributes":{"items":[{"id":"1589"},{"id":"1608"}]},"id":"1588","type":"Legend"},{"attributes":{},"id":"1558","type":"ResetTool"},{"attributes":{},"id":"1606","type":"Selection"},{"attributes":{"fields":["unique"]},"id":"1569","type":"Stack"},{"attributes":{},"id":"1540","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1572"},"glyph":{"id":"1574"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1575"},"view":{"id":"1577"}},"id":"1576","type":"GlyphRenderer"},{"attributes":{},"id":"1559","type":"HelpTool"},{"attributes":{},"id":"1544","type":"LinearScale"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1576"}]},"id":"1589","type":"LegendItem"},{"attributes":{},"id":"1586","type":"Selection"},{"attributes":{"formatter":{"id":"1580"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"event.on24.com","11":"microsoft.com","12":"classroom.udacity.com","13":"mail.google.com","14":"teams.microsoft.com","15":"DuckDuckGo","16":"statics.teams.cdn.office.net","17":"towardsdatascience.com","18":"fizzylogic.nl","19":"staticsint.teams.cdn.office.net","2":"fairlearn.org","20":"ecosia.org","21":"medium.com","22":"out.reddit.com","23":"notebooks.githubusercontent.com","24":"kkb-production.jupyter-proxy.kaggle.net","25":"opendatascience.com","26":"engineering.linkedin.com","27":"up-for-grabs.net","28":"ai.googleblog.com","29":"venturebeat.com","3":"mybuild.microsoft.com","30":"reddit.com","31":"xavierdupre.fr","32":"fairlearn.github.io","33":"anaconda.com","34":"t.co","35":"madewithml.com","36":"kdnuggets.com","37":"techairesearch.com","38":"datacamp.com","39":"coursera.org","4":"docs.microsoft.com","40":"com.google.android.gm","41":"goodfirstissues.com","42":"gitter.im","43":"linkedin.com","44":"infoworld.com","45":"yuque.antfin-inc.com","46":"azure.microsoft.com","47":"aiforpeople.org","48":"l.messenger.com","49":"kensciresearch.github.io","5":"Bing","6":"finance.yahoo.com","7":"paperswithcode.com","8":"pypi.org","9":"sparkaisummit.com"},"major_label_policy":{"id":"1581"},"ticker":{"id":"1609"}},"id":"1546","type":"LinearAxis"},{"attributes":{"data":{"duplicate":[225,242,178,18,30,29,9,36,21,6,6,10,5,18,18,10,14,8,11,9,11,9,3,6,11,9,5,8,4,1,2,8,1,2,4,4,2,4,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"unique":[207,82,114,36,23,21,40,8,13,25,22,12,16,1,1,7,1,6,3,5,3,4,10,7,1,2,5,2,6,9,8,2,8,7,5,5,7,5,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1586"},"selection_policy":{"id":"1587"}},"id":"1572","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1572"}},"id":"1577","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1568"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1569"}},"x":{"field":"indices"}},"id":"1574","type":"VBar"},{"attributes":{},"id":"1551","type":"BasicTicker"},{"attributes":{},"id":"1581","type":"AllLabels"},{"attributes":{},"id":"1584","type":"AllLabels"},{"attributes":{"axis":{"id":"1546"},"ticker":null},"id":"1549","type":"Grid"},{"attributes":{"data_source":{"id":"1590"},"glyph":{"id":"1592"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1593"},"view":{"id":"1595"}},"id":"1594","type":"GlyphRenderer"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1594"}]},"id":"1608","type":"LegendItem"},{"attributes":{"axis":{"id":"1550"},"dimension":1,"ticker":null},"id":"1553","type":"Grid"},{"attributes":{"formatter":{"id":"1583"},"major_label_policy":{"id":"1584"},"ticker":{"id":"1551"}},"id":"1550","type":"LinearAxis"},{"attributes":{},"id":"1580","type":"BasicTickFormatter"},{"attributes":{},"id":"1587","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"1570"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1571"}},"x":{"field":"indices"}},"id":"1593","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1560","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1554"},{"id":"1555"},{"id":"1556"},{"id":"1557"},{"id":"1558"},{"id":"1559"}]},"id":"1561","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"1568"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1569"}},"x":{"field":"indices"}},"id":"1575","type":"VBar"},{"attributes":{},"id":"1583","type":"BasicTickFormatter"},{"attributes":{"text":"Top referrers"},"id":"1536","type":"Title"},{"attributes":{"bottom":{"expr":{"id":"1570"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1571"}},"x":{"field":"indices"}},"id":"1592","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1570","type":"Stack"},{"attributes":{"fields":[]},"id":"1568","type":"Stack"},{"attributes":{},"id":"1538","type":"DataRange1d"},{"attributes":{},"id":"1554","type":"PanTool"},{"attributes":{"data":{"duplicate":[225,242,178,18,30,29,9,36,21,6,6,10,5,18,18,10,14,8,11,9,11,9,3,6,11,9,5,8,4,1,2,8,1,2,4,4,2,4,6,1,5,2,5,4,1,5,1,1,1,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"unique":[207,82,114,36,23,21,40,8,13,25,22,12,16,1,1,7,1,6,3,5,3,4,10,7,1,2,5,2,6,9,8,2,8,7,5,5,7,5,2,7,2,5,1,2,5,1,4,2,2,1]},"selected":{"id":"1606"},"selection_policy":{"id":"1607"}},"id":"1590","type":"ColumnDataSource"},{"attributes":{"fields":["unique","duplicate"]},"id":"1571","type":"Stack"},{"attributes":{"below":[{"id":"1546"}],"center":[{"id":"1549"},{"id":"1553"},{"id":"1588"}],"left":[{"id":"1550"}],"renderers":[{"id":"1576"},{"id":"1594"}],"title":{"id":"1536"},"toolbar":{"id":"1561"},"width":900,"x_range":{"id":"1538"},"x_scale":{"id":"1542"},"y_range":{"id":"1540"},"y_scale":{"id":"1544"}},"id":"1535","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1590"}},"id":"1595","type":"CDSView"},{"attributes":{},"id":"1555","type":"WheelZoomTool"}],"root_ids":["1535"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"5388f3f8-5c90-47a6-ab10-b852242c5867","root_ids":["1535"],"roots":{"1535":"1ace6dd8-85a8-4cf4-9e64-f1d734c5ae5f"}}];
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