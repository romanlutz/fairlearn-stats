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
    
      
      
    
      var element = document.getElementById("1e1d50f8-2c25-4387-875c-8de5d207a3df");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1e1d50f8-2c25-4387-875c-8de5d207a3df' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js": "XypntL49z55iwGVUW4qsEu83zKL3XEcz0MjuGOQ9SlaaQ68X/g+k1FcioZi7oQAc", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js": "bEsM86IHGDTLCS0Zod8a8WM6Y4+lafAL/eSiyQcuPzinmWNgNO2/olUF0Z2Dkn5i", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js": "TX0gSQTdXTTeScqxj6PVQxTiRW8DOoGVwinyi1D3kxv7wuxQ02XkOxv0xwiypcAH"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js"];
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
                    
                  var docs_json = '{"7776e7c7-98ff-44c8-929d-faab9089cca1":{"defs":[],"roots":{"references":[{"attributes":{"fields":["unique","duplicate"]},"id":"1476","type":"Stack"},{"attributes":{"data_source":{"id":"1495"},"glyph":{"id":"1497"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1498"},"view":{"id":"1500"}},"id":"1499","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1455"},"dimension":1,"ticker":null},"id":"1458","type":"Grid"},{"attributes":{"formatter":{"id":"1487"},"major_label_policy":{"id":"1489"},"ticker":{"id":"1456"}},"id":"1455","type":"LinearAxis"},{"attributes":{"source":{"id":"1495"}},"id":"1500","type":"CDSView"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1499"}]},"id":"1513","type":"LegendItem"},{"attributes":{},"id":"1490","type":"UnionRenderers"},{"attributes":{"text":"Top referrers"},"id":"1441","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1465","type":"BoxAnnotation"},{"attributes":{"bottom":{"expr":{"id":"1475"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1476"}},"x":{"field":"indices"}},"id":"1497","type":"VBar"},{"attributes":{"items":[{"id":"1494"},{"id":"1513"}]},"id":"1493","type":"Legend"},{"attributes":{"data":{"duplicate":[105,147,90,18,9,23,30,6,6,7,11,4,4,13,5,12,6,3,7,5,7,5,4,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[163,83,126,36,40,19,6,25,22,19,15,22,19,8,16,7,8,11,6,8,5,5,6,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1511"},"selection_policy":{"id":"1510"}},"id":"1495","type":"ColumnDataSource"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1481"}]},"id":"1494","type":"LegendItem"},{"attributes":{},"id":"1459","type":"PanTool"},{"attributes":{"fields":["unique"]},"id":"1474","type":"Stack"},{"attributes":{},"id":"1460","type":"WheelZoomTool"},{"attributes":{},"id":"1491","type":"Selection"},{"attributes":{"overlay":{"id":"1465"}},"id":"1461","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"1451"}],"center":[{"id":"1454"},{"id":"1458"},{"id":"1493"}],"left":[{"id":"1455"}],"renderers":[{"id":"1481"},{"id":"1499"}],"title":{"id":"1441"},"toolbar":{"id":"1466"},"width":900,"x_range":{"id":"1443"},"x_scale":{"id":"1447"},"y_range":{"id":"1445"},"y_scale":{"id":"1449"}},"id":"1440","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"1473"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1474"}},"x":{"field":"indices"}},"id":"1479","type":"VBar"},{"attributes":{},"id":"1487","type":"BasicTickFormatter"},{"attributes":{},"id":"1462","type":"SaveTool"},{"attributes":{},"id":"1447","type":"LinearScale"},{"attributes":{},"id":"1486","type":"AllLabels"},{"attributes":{"data":{"duplicate":[105,147,90,18,9,23,30,6,6,7,11,4,4,13,5,12,6,3,7,5,7,5,4,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[163,83,126,36,40,19,6,25,22,19,15,22,19,8,16,7,8,11,6,8,5,5,6,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1491"},"selection_policy":{"id":"1490"}},"id":"1477","type":"ColumnDataSource"},{"attributes":{},"id":"1463","type":"ResetTool"},{"attributes":{},"id":"1489","type":"AllLabels"},{"attributes":{},"id":"1511","type":"Selection"},{"attributes":{},"id":"1464","type":"HelpTool"},{"attributes":{"data_source":{"id":"1477"},"glyph":{"id":"1479"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1480"},"view":{"id":"1482"}},"id":"1481","type":"GlyphRenderer"},{"attributes":{},"id":"1445","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"1459"},{"id":"1460"},{"id":"1461"},{"id":"1462"},{"id":"1463"},{"id":"1464"}]},"id":"1466","type":"Toolbar"},{"attributes":{},"id":"1449","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1473"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1474"}},"x":{"field":"indices"}},"id":"1480","type":"VBar"},{"attributes":{"fields":[]},"id":"1473","type":"Stack"},{"attributes":{},"id":"1484","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1484"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"opendatascience.com","11":"mail.google.com","12":"t.co","13":"pypi.org","14":"classroom.udacity.com","15":"Bing","16":"linkedin.com","17":"kdnuggets.com","18":"DuckDuckGo","19":"up-for-grabs.net","2":"fairlearn.org","20":"gitter.im","21":"engineering.linkedin.com","22":"ai.googleblog.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"mybuild.microsoft.com","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"finance.yahoo.com","5":"paperswithcode.com","6":"statics.teams.cdn.office.net","7":"sparkaisummit.com","8":"event.on24.com","9":"docs.microsoft.com"},"major_label_policy":{"id":"1486"},"ticker":{"id":"1514"}},"id":"1451","type":"LinearAxis"},{"attributes":{},"id":"1443","type":"DataRange1d"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1514","type":"FixedTicker"},{"attributes":{"source":{"id":"1477"}},"id":"1482","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1475"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1476"}},"x":{"field":"indices"}},"id":"1498","type":"VBar"},{"attributes":{},"id":"1456","type":"BasicTicker"},{"attributes":{"fields":["unique"]},"id":"1475","type":"Stack"},{"attributes":{},"id":"1510","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1451"},"ticker":null},"id":"1454","type":"Grid"}],"root_ids":["1440"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"7776e7c7-98ff-44c8-929d-faab9089cca1","root_ids":["1440"],"roots":{"1440":"1e1d50f8-2c25-4387-875c-8de5d207a3df"}}];
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