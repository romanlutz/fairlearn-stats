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
    
      
      
    
      var element = document.getElementById("8e5f6523-9319-41b6-9bf5-ed34ee5b4f62");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8e5f6523-9319-41b6-9bf5-ed34ee5b4f62' but no matching script tag was found.")
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
                    
                  var docs_json = '{"176c8e62-93f2-4253-be2d-9838f40ef501":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"1419"},{"id":"1420"},{"id":"1421"},{"id":"1422"},{"id":"1423"},{"id":"1424"}]},"id":"1426","type":"Toolbar"},{"attributes":{},"id":"1451","type":"Selection"},{"attributes":{},"id":"1419","type":"PanTool"},{"attributes":{},"id":"1452","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"1435"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1436"}},"x":{"field":"indices"}},"id":"1457","type":"VBar"},{"attributes":{},"id":"1420","type":"WheelZoomTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1436","type":"Stack"},{"attributes":{"overlay":{"id":"1425"}},"id":"1421","type":"BoxZoomTool"},{"attributes":{"fields":[]},"id":"1433","type":"Stack"},{"attributes":{},"id":"1422","type":"SaveTool"},{"attributes":{"below":[{"id":"1411"}],"center":[{"id":"1414"},{"id":"1418"},{"id":"1453"}],"left":[{"id":"1415"}],"renderers":[{"id":"1441"},{"id":"1459"}],"title":{"id":"1401"},"toolbar":{"id":"1426"},"width":900,"x_range":{"id":"1403"},"x_scale":{"id":"1407"},"y_range":{"id":"1405"},"y_scale":{"id":"1409"}},"id":"1400","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1407","type":"LinearScale"},{"attributes":{"items":[{"id":"1454"},{"id":"1473"}]},"id":"1453","type":"Legend"},{"attributes":{},"id":"1423","type":"ResetTool"},{"attributes":{"data":{"duplicate":[100,124,84,18,9,6,6,11,15,4,8,4,15,5,7,4,6,4,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[229,67,97,36,40,25,22,15,11,22,17,21,6,16,13,13,9,11,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1451"},"selection_policy":{"id":"1452"}},"id":"1437","type":"ColumnDataSource"},{"attributes":{},"id":"1447","type":"AllLabels"},{"attributes":{},"id":"1403","type":"DataRange1d"},{"attributes":{"fields":["unique"]},"id":"1435","type":"Stack"},{"attributes":{},"id":"1424","type":"HelpTool"},{"attributes":{},"id":"1449","type":"BasicTickFormatter"},{"attributes":{},"id":"1409","type":"LinearScale"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1459"}]},"id":"1473","type":"LegendItem"},{"attributes":{"formatter":{"id":"1446"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"docs.microsoft.com","11":"t.co","12":"gitter.im","13":"classroom.udacity.com","14":"paperswithcode.com","15":"pypi.org","16":"Bing","17":"kdnuggets.com","18":"DuckDuckGo","19":"up-for-grabs.net","2":"fairlearn.org","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"linkedin.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"mybuild.microsoft.com","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"opendatascience.com","8":"statics.teams.cdn.office.net","9":"mail.google.com"},"major_label_policy":{"id":"1444"},"ticker":{"id":"1474"}},"id":"1411","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1437"},"glyph":{"id":"1439"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1440"},"view":{"id":"1442"}},"id":"1441","type":"GlyphRenderer"},{"attributes":{},"id":"1416","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"1433"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1434"}},"x":{"field":"indices"}},"id":"1440","type":"VBar"},{"attributes":{},"id":"1405","type":"DataRange1d"},{"attributes":{"axis":{"id":"1411"},"ticker":null},"id":"1414","type":"Grid"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1474","type":"FixedTicker"},{"attributes":{"axis":{"id":"1415"},"dimension":1,"ticker":null},"id":"1418","type":"Grid"},{"attributes":{"text":"Top referrers"},"id":"1401","type":"Title"},{"attributes":{},"id":"1444","type":"AllLabels"},{"attributes":{"bottom":{"expr":{"id":"1433"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1434"}},"x":{"field":"indices"}},"id":"1439","type":"VBar"},{"attributes":{"formatter":{"id":"1449"},"major_label_policy":{"id":"1447"},"ticker":{"id":"1416"}},"id":"1415","type":"LinearAxis"},{"attributes":{"source":{"id":"1437"}},"id":"1442","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1435"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1436"}},"x":{"field":"indices"}},"id":"1458","type":"VBar"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1441"}]},"id":"1454","type":"LegendItem"},{"attributes":{"data":{"duplicate":[100,124,84,18,9,6,6,11,15,4,8,4,15,5,7,4,6,4,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[229,67,97,36,40,25,22,15,11,22,17,21,6,16,13,13,9,11,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1471"},"selection_policy":{"id":"1472"}},"id":"1455","type":"ColumnDataSource"},{"attributes":{},"id":"1471","type":"Selection"},{"attributes":{"fields":["unique"]},"id":"1434","type":"Stack"},{"attributes":{},"id":"1472","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1455"},"glyph":{"id":"1457"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1458"},"view":{"id":"1460"}},"id":"1459","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1425","type":"BoxAnnotation"},{"attributes":{},"id":"1446","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1455"}},"id":"1460","type":"CDSView"}],"root_ids":["1400"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"176c8e62-93f2-4253-be2d-9838f40ef501","root_ids":["1400"],"roots":{"1400":"8e5f6523-9319-41b6-9bf5-ed34ee5b4f62"}}];
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