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
    
      
      
    
      var element = document.getElementById("fd173c8a-7f6d-4ca7-9fb2-b351b8aa65c6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fd173c8a-7f6d-4ca7-9fb2-b351b8aa65c6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ad2717b4-e7b7-48ff-85f6-15ad54a4e15b":{"defs":[],"roots":{"references":[{"attributes":{"below":[{"id":"1426"}],"center":[{"id":"1429"},{"id":"1433"},{"id":"1468"}],"left":[{"id":"1430"}],"renderers":[{"id":"1456"},{"id":"1474"}],"title":{"id":"1416"},"toolbar":{"id":"1441"},"width":900,"x_range":{"id":"1418"},"x_scale":{"id":"1422"},"y_range":{"id":"1420"},"y_scale":{"id":"1424"}},"id":"1415","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1418","type":"DataRange1d"},{"attributes":{},"id":"1465","type":"UnionRenderers"},{"attributes":{},"id":"1464","type":"BasicTickFormatter"},{"attributes":{"fields":["unique","duplicate"]},"id":"1451","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1440","type":"BoxAnnotation"},{"attributes":{},"id":"1459","type":"AllLabels"},{"attributes":{},"id":"1434","type":"PanTool"},{"attributes":{},"id":"1462","type":"AllLabels"},{"attributes":{"data_source":{"id":"1470"},"glyph":{"id":"1472"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1473"},"view":{"id":"1475"}},"id":"1474","type":"GlyphRenderer"},{"attributes":{},"id":"1435","type":"WheelZoomTool"},{"attributes":{},"id":"1461","type":"BasicTickFormatter"},{"attributes":{"fields":["unique"]},"id":"1449","type":"Stack"},{"attributes":{"overlay":{"id":"1440"}},"id":"1436","type":"BoxZoomTool"},{"attributes":{},"id":"1437","type":"SaveTool"},{"attributes":{},"id":"1422","type":"LinearScale"},{"attributes":{},"id":"1438","type":"ResetTool"},{"attributes":{"source":{"id":"1452"}},"id":"1457","type":"CDSView"},{"attributes":{"fields":[]},"id":"1448","type":"Stack"},{"attributes":{"items":[{"id":"1469"},{"id":"1488"}]},"id":"1468","type":"Legend"},{"attributes":{},"id":"1439","type":"HelpTool"},{"attributes":{"data":{"duplicate":[533,107,129,4,18,9,30,11,19,8,6,6,11,4,14,5,4,5,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[296,237,140,64,36,40,15,33,16,23,25,22,15,22,10,16,15,13,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1466"},"selection_policy":{"id":"1465"}},"id":"1452","type":"ColumnDataSource"},{"attributes":{},"id":"1485","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"1434"},{"id":"1435"},{"id":"1436"},{"id":"1437"},{"id":"1438"},{"id":"1439"}]},"id":"1441","type":"Toolbar"},{"attributes":{},"id":"1424","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1450"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1451"}},"x":{"field":"indices"}},"id":"1473","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1448"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1449"}},"x":{"field":"indices"}},"id":"1454","type":"VBar"},{"attributes":{"source":{"id":"1470"}},"id":"1475","type":"CDSView"},{"attributes":{"data_source":{"id":"1452"},"glyph":{"id":"1454"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1455"},"view":{"id":"1457"}},"id":"1456","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1461"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"sparkaisummit.com","11":"event.on24.com","12":"opendatascience.com","13":"mail.google.com","14":"Bing","15":"classroom.udacity.com","16":"kdnuggets.com","17":"pypi.org","18":"DuckDuckGo","19":"up-for-grabs.net","2":"fairlearn.org","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"linkedin.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"t.co","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"mybuild.microsoft.com","5":"finance.yahoo.com","6":"statics.teams.cdn.office.net","7":"paperswithcode.com","8":"gitter.im","9":"docs.microsoft.com"},"major_label_policy":{"id":"1459"},"ticker":{"id":"1489"}},"id":"1426","type":"LinearAxis"},{"attributes":{},"id":"1431","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"1448"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1449"}},"x":{"field":"indices"}},"id":"1455","type":"VBar"},{"attributes":{"axis":{"id":"1426"},"ticker":null},"id":"1429","type":"Grid"},{"attributes":{"text":"Top referrers"},"id":"1416","type":"Title"},{"attributes":{"fields":["unique"]},"id":"1450","type":"Stack"},{"attributes":{"axis":{"id":"1430"},"dimension":1,"ticker":null},"id":"1433","type":"Grid"},{"attributes":{},"id":"1466","type":"Selection"},{"attributes":{"formatter":{"id":"1464"},"major_label_policy":{"id":"1462"},"ticker":{"id":"1431"}},"id":"1430","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1450"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1451"}},"x":{"field":"indices"}},"id":"1472","type":"VBar"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1474"}]},"id":"1488","type":"LegendItem"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1489","type":"FixedTicker"},{"attributes":{},"id":"1486","type":"Selection"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1456"}]},"id":"1469","type":"LegendItem"},{"attributes":{"data":{"duplicate":[533,107,129,4,18,9,30,11,19,8,6,6,11,4,14,5,4,5,7,5,5,4,3,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[296,237,140,64,36,40,15,33,16,23,25,22,15,22,10,16,15,13,6,8,5,6,7,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1486"},"selection_policy":{"id":"1485"}},"id":"1470","type":"ColumnDataSource"},{"attributes":{},"id":"1420","type":"DataRange1d"}],"root_ids":["1415"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"ad2717b4-e7b7-48ff-85f6-15ad54a4e15b","root_ids":["1415"],"roots":{"1415":"fd173c8a-7f6d-4ca7-9fb2-b351b8aa65c6"}}];
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