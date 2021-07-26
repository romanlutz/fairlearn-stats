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
    
      
      
    
      var element = document.getElementById("24021dec-1c97-4f8b-a155-1db73db0633a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '24021dec-1c97-4f8b-a155-1db73db0633a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"31d4e243-81c7-4d5a-a030-99331ef5621c":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"1432"},"glyph":{"id":"1434"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1435"},"view":{"id":"1437"}},"id":"1436","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"1428"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1429"}},"x":{"field":"indices"}},"id":"1435","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1430"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1431"}},"x":{"field":"indices"}},"id":"1452","type":"VBar"},{"attributes":{},"id":"1415","type":"WheelZoomTool"},{"attributes":{},"id":"1445","type":"Selection"},{"attributes":{},"id":"1444","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"1449"},{"id":"1468"}]},"id":"1448","type":"Legend"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1436"}]},"id":"1449","type":"LegendItem"},{"attributes":{"overlay":{"id":"1420"}},"id":"1416","type":"BoxZoomTool"},{"attributes":{},"id":"1400","type":"DataRange1d"},{"attributes":{},"id":"1402","type":"LinearScale"},{"attributes":{},"id":"1417","type":"SaveTool"},{"attributes":{"source":{"id":"1450"}},"id":"1455","type":"CDSView"},{"attributes":{},"id":"1418","type":"ResetTool"},{"attributes":{},"id":"1441","type":"BasicTickFormatter"},{"attributes":{},"id":"1419","type":"HelpTool"},{"attributes":{"fields":["unique"]},"id":"1429","type":"Stack"},{"attributes":{"fields":["unique","duplicate"]},"id":"1431","type":"Stack"},{"attributes":{"source":{"id":"1432"}},"id":"1437","type":"CDSView"},{"attributes":{},"id":"1404","type":"LinearScale"},{"attributes":{"formatter":{"id":"1441"},"major_label_policy":{"id":"1439"},"ticker":{"id":"1411"}},"id":"1410","type":"LinearAxis"},{"attributes":{"fields":[]},"id":"1428","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1428"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1429"}},"x":{"field":"indices"}},"id":"1434","type":"VBar"},{"attributes":{},"id":"1414","type":"PanTool"},{"attributes":{"data":{"duplicate":[112,92,111,18,9,6,6,16,11,4,4,9,16,8,5,7,2,7,5,3,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[223,95,57,36,40,25,22,11,15,22,21,15,6,13,16,12,12,6,8,9,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1445"},"selection_policy":{"id":"1446"}},"id":"1432","type":"ColumnDataSource"},{"attributes":{"fields":["unique"]},"id":"1430","type":"Stack"},{"attributes":{},"id":"1466","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1410"},"dimension":1,"ticker":null},"id":"1413","type":"Grid"},{"attributes":{"data":{"duplicate":[112,92,111,18,9,6,6,16,11,4,4,9,16,8,5,7,2,7,5,3,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[223,95,57,36,40,25,22,11,15,22,21,15,6,13,16,12,12,6,8,9,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1465"},"selection_policy":{"id":"1466"}},"id":"1450","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1406"},"ticker":null},"id":"1409","type":"Grid"},{"attributes":{},"id":"1446","type":"UnionRenderers"},{"attributes":{},"id":"1465","type":"Selection"},{"attributes":{"below":[{"id":"1406"}],"center":[{"id":"1409"},{"id":"1413"},{"id":"1448"}],"left":[{"id":"1410"}],"renderers":[{"id":"1436"},{"id":"1454"}],"title":{"id":"1396"},"toolbar":{"id":"1421"},"width":900,"x_range":{"id":"1398"},"x_scale":{"id":"1402"},"y_range":{"id":"1400"},"y_scale":{"id":"1404"}},"id":"1395","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1454"}]},"id":"1468","type":"LegendItem"},{"attributes":{},"id":"1411","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1444"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"fairlearn.org","10":"t.co","11":"docs.microsoft.com","12":"gitter.im","13":"Bing","14":"classroom.udacity.com","15":"paperswithcode.com","16":"kdnuggets.com","17":"DuckDuckGo","18":"up-for-grabs.net","19":"pypi.org","2":"github.com","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"linkedin.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"mybuild.microsoft.com","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"finance.yahoo.com","5":"sparkaisummit.com","6":"event.on24.com","7":"statics.teams.cdn.office.net","8":"opendatascience.com","9":"mail.google.com"},"major_label_policy":{"id":"1442"},"ticker":{"id":"1469"}},"id":"1406","type":"LinearAxis"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1469","type":"FixedTicker"},{"attributes":{"text":"Top referrers"},"id":"1396","type":"Title"},{"attributes":{"data_source":{"id":"1450"},"glyph":{"id":"1452"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1453"},"view":{"id":"1455"}},"id":"1454","type":"GlyphRenderer"},{"attributes":{},"id":"1398","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1430"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1431"}},"x":{"field":"indices"}},"id":"1453","type":"VBar"},{"attributes":{},"id":"1442","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1420","type":"BoxAnnotation"},{"attributes":{},"id":"1439","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"1414"},{"id":"1415"},{"id":"1416"},{"id":"1417"},{"id":"1418"},{"id":"1419"}]},"id":"1421","type":"Toolbar"}],"root_ids":["1395"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"31d4e243-81c7-4d5a-a030-99331ef5621c","root_ids":["1395"],"roots":{"1395":"24021dec-1c97-4f8b-a155-1db73db0633a"}}];
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