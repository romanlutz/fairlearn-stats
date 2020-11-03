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
    
      
      
    
      var element = document.getElementById("4abe32a0-1897-4629-b591-611378dbbdfa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4abe32a0-1897-4629-b591-611378dbbdfa' but no matching script tag was found.")
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
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
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
                    
                  var docs_json = '{"c7378359-1228-4f6d-b6b4-11a9a87aefe7":{"roots":{"references":[{"attributes":{"items":[{"id":"1405"},{"id":"1422"}]},"id":"1404","type":"Legend"},{"attributes":{},"id":"1356","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1390"},"glyph":{"id":"1392"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1393"},"selection_glyph":null,"view":{"id":"1395"}},"id":"1394","type":"GlyphRenderer"},{"attributes":{},"id":"1362","type":"LinearScale"},{"attributes":{"axis":{"id":"1364"},"ticker":null},"id":"1367","type":"Grid"},{"attributes":{"text":"Views traffic"},"id":"1354","type":"Title"},{"attributes":{"source":{"id":"1390"}},"id":"1395","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1388"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1389"}},"x":{"field":"indices"}},"id":"1408","type":"VBar"},{"attributes":{},"id":"1358","type":"DataRange1d"},{"attributes":{},"id":"1400","type":"BasicTickFormatter"},{"attributes":{"fields":[]},"id":"1386","type":"Stack"},{"attributes":{},"id":"1403","type":"Selection"},{"attributes":{"data":{"duplicate":[196,791,25,401,374,189,69,134,559,335,380,382,176,127,432,529,495,536,304,207,92,627,372,310,436,311,85,115,409,685,631,635,777,131,101,828,498,260,386,265,123,46,289,249,175,354,265,9,41,270,361,217,198,251,139,113,130,125,131,243,527,60,179,404,400,392,320,187,36,36,488,231,401,225,239,90,105,389,348,403,236,335,40,67,135,244,213,435,412,126,140,292,165,307,208,167,47,42,122,187,137,228,85,22,34,159,188,213,155,73,14,35,87,189,134,106,55,27,20,172,87,215,218,87,37,39,185,156,147,123,117,17,47,97,211,200,161,128,38,38,109,177,145,264,122,19,63,52,238,156,96,204,46,23,138,216,122,153,147,98,231,338,163,254,268,394,125,131,320],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168],"unique":[60,299,10,157,106,53,47,95,116,94,110,78,32,47,68,91,101,84,94,37,41,102,72,91,78,79,35,34,85,124,101,86,78,36,35,120,83,155,190,130,45,30,76,87,84,133,81,23,28,78,65,87,86,62,48,29,62,66,69,70,72,38,43,101,88,97,93,71,29,40,101,97,75,91,67,33,39,76,83,83,74,73,39,63,64,85,76,75,78,36,44,70,99,113,93,62,46,36,61,68,68,79,49,32,39,64,83,160,98,61,27,23,49,61,66,59,55,29,24,64,59,64,71,50,29,28,52,63,72,55,54,18,41,52,74,83,71,54,20,24,62,50,66,66,70,14,27,41,70,50,64,57,26,21,58,71,48,68,39,27,35,72,80,88,93,70,28,40,87]},"selected":{"id":"1421"},"selection_policy":{"id":"1420"}},"id":"1406","type":"ColumnDataSource"},{"attributes":{"fields":["unique","duplicate"]},"id":"1389","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1372"},{"id":"1373"},{"id":"1374"},{"id":"1375"},{"id":"1376"},{"id":"1377"}]},"id":"1379","type":"Toolbar"},{"attributes":{"overlay":{"id":"1378"}},"id":"1374","type":"BoxZoomTool"},{"attributes":{},"id":"1421","type":"Selection"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168]},"id":"1423","type":"FixedTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1378","type":"BoxAnnotation"},{"attributes":{},"id":"1373","type":"WheelZoomTool"},{"attributes":{},"id":"1420","type":"UnionRenderers"},{"attributes":{},"id":"1375","type":"SaveTool"},{"attributes":{"source":{"id":"1406"}},"id":"1411","type":"CDSView"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1394"}]},"id":"1405","type":"LegendItem"},{"attributes":{"data":{"duplicate":[196,791,25,401,374,189,69,134,559,335,380,382,176,127,432,529,495,536,304,207,92,627,372,310,436,311,85,115,409,685,631,635,777,131,101,828,498,260,386,265,123,46,289,249,175,354,265,9,41,270,361,217,198,251,139,113,130,125,131,243,527,60,179,404,400,392,320,187,36,36,488,231,401,225,239,90,105,389,348,403,236,335,40,67,135,244,213,435,412,126,140,292,165,307,208,167,47,42,122,187,137,228,85,22,34,159,188,213,155,73,14,35,87,189,134,106,55,27,20,172,87,215,218,87,37,39,185,156,147,123,117,17,47,97,211,200,161,128,38,38,109,177,145,264,122,19,63,52,238,156,96,204,46,23,138,216,122,153,147,98,231,338,163,254,268,394,125,131,320],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168],"unique":[60,299,10,157,106,53,47,95,116,94,110,78,32,47,68,91,101,84,94,37,41,102,72,91,78,79,35,34,85,124,101,86,78,36,35,120,83,155,190,130,45,30,76,87,84,133,81,23,28,78,65,87,86,62,48,29,62,66,69,70,72,38,43,101,88,97,93,71,29,40,101,97,75,91,67,33,39,76,83,83,74,73,39,63,64,85,76,75,78,36,44,70,99,113,93,62,46,36,61,68,68,79,49,32,39,64,83,160,98,61,27,23,49,61,66,59,55,29,24,64,59,64,71,50,29,28,52,63,72,55,54,18,41,52,74,83,71,54,20,24,62,50,66,66,70,14,27,41,70,50,64,57,26,21,58,71,48,68,39,27,35,72,80,88,93,70,28,40,87]},"selected":{"id":"1403"},"selection_policy":{"id":"1402"}},"id":"1390","type":"ColumnDataSource"},{"attributes":{},"id":"1377","type":"HelpTool"},{"attributes":{},"id":"1372","type":"PanTool"},{"attributes":{},"id":"1360","type":"LinearScale"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1410"}]},"id":"1422","type":"LegendItem"},{"attributes":{},"id":"1402","type":"UnionRenderers"},{"attributes":{},"id":"1398","type":"BasicTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"1388"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1389"}},"x":{"field":"indices"}},"id":"1409","type":"VBar"},{"attributes":{"data_source":{"id":"1406"},"glyph":{"id":"1408"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1409"},"selection_glyph":null,"view":{"id":"1411"}},"id":"1410","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1400"},"ticker":{"id":"1369"}},"id":"1368","type":"LinearAxis"},{"attributes":{},"id":"1369","type":"BasicTicker"},{"attributes":{"fields":["unique"]},"id":"1387","type":"Stack"},{"attributes":{"axis":{"id":"1368"},"dimension":1,"ticker":null},"id":"1371","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1386"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1387"}},"x":{"field":"indices"}},"id":"1393","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1388","type":"Stack"},{"attributes":{"formatter":{"id":"1398"},"major_label_orientation":0.75,"major_label_overrides":{"0":"2020-05-18 00:00:00","1":"2020-05-19 00:00:00","10":"2020-05-28 00:00:00","100":"2020-08-26 00:00:00","101":"2020-08-27 00:00:00","102":"2020-08-28 00:00:00","103":"2020-08-29 00:00:00","104":"2020-08-30 00:00:00","105":"2020-08-31 00:00:00","106":"2020-09-01 00:00:00","107":"2020-09-02 00:00:00","108":"2020-09-03 00:00:00","109":"2020-09-04 00:00:00","11":"2020-05-29 00:00:00","110":"2020-09-05 00:00:00","111":"2020-09-06 00:00:00","112":"2020-09-07 00:00:00","113":"2020-09-08 00:00:00","114":"2020-09-09 00:00:00","115":"2020-09-10 00:00:00","116":"2020-09-11 00:00:00","117":"2020-09-12 00:00:00","118":"2020-09-13 00:00:00","119":"2020-09-14 00:00:00","12":"2020-05-30 00:00:00","120":"2020-09-15 00:00:00","121":"2020-09-16 00:00:00","122":"2020-09-17 00:00:00","123":"2020-09-18 00:00:00","124":"2020-09-19 00:00:00","125":"2020-09-20 00:00:00","126":"2020-09-21 00:00:00","127":"2020-09-22 00:00:00","128":"2020-09-23 00:00:00","129":"2020-09-24 00:00:00","13":"2020-05-31 00:00:00","130":"2020-09-25 00:00:00","131":"2020-09-26 00:00:00","132":"2020-09-27 00:00:00","133":"2020-09-28 00:00:00","134":"2020-09-29 00:00:00","135":"2020-09-30 00:00:00","136":"2020-10-01 00:00:00","137":"2020-10-02 00:00:00","138":"2020-10-03 00:00:00","139":"2020-10-04 00:00:00","14":"2020-06-01 00:00:00","140":"2020-10-05 00:00:00","141":"2020-10-06 00:00:00","142":"2020-10-07 00:00:00","143":"2020-10-08 00:00:00","144":"2020-10-09 00:00:00","145":"2020-10-10 00:00:00","146":"2020-10-11 00:00:00","147":"2020-10-12 00:00:00","148":"2020-10-13 00:00:00","149":"2020-10-14 00:00:00","15":"2020-06-02 00:00:00","150":"2020-10-15 00:00:00","151":"2020-10-16 00:00:00","152":"2020-10-17 00:00:00","153":"2020-10-18 00:00:00","154":"2020-10-19 00:00:00","155":"2020-10-20 00:00:00","156":"2020-10-21 00:00:00","157":"2020-10-22 00:00:00","158":"2020-10-23 00:00:00","159":"2020-10-24 00:00:00","16":"2020-06-03 00:00:00","160":"2020-10-25 00:00:00","161":"2020-10-26 00:00:00","162":"2020-10-27 00:00:00","163":"2020-10-28 00:00:00","164":"2020-10-29 00:00:00","165":"2020-10-30 00:00:00","166":"2020-10-31 00:00:00","167":"2020-11-01 00:00:00","168":"2020-11-02 00:00:00","17":"2020-06-04 00:00:00","18":"2020-06-05 00:00:00","19":"2020-06-06 00:00:00","2":"2020-05-20 00:00:00","20":"2020-06-07 00:00:00","21":"2020-06-08 00:00:00","22":"2020-06-09 00:00:00","23":"2020-06-10 00:00:00","24":"2020-06-11 00:00:00","25":"2020-06-12 00:00:00","26":"2020-06-13 00:00:00","27":"2020-06-14 00:00:00","28":"2020-06-15 00:00:00","29":"2020-06-16 00:00:00","3":"2020-05-21 00:00:00","30":"2020-06-17 00:00:00","31":"2020-06-18 00:00:00","32":"2020-06-19 00:00:00","33":"2020-06-20 00:00:00","34":"2020-06-21 00:00:00","35":"2020-06-22 00:00:00","36":"2020-06-23 00:00:00","37":"2020-06-24 00:00:00","38":"2020-06-25 00:00:00","39":"2020-06-26 00:00:00","4":"2020-05-22 00:00:00","40":"2020-06-27 00:00:00","41":"2020-06-28 00:00:00","42":"2020-06-29 00:00:00","43":"2020-06-30 00:00:00","44":"2020-07-01 00:00:00","45":"2020-07-02 00:00:00","46":"2020-07-03 00:00:00","47":"2020-07-04 00:00:00","48":"2020-07-05 00:00:00","49":"2020-07-06 00:00:00","5":"2020-05-23 00:00:00","50":"2020-07-07 00:00:00","51":"2020-07-08 00:00:00","52":"2020-07-09 00:00:00","53":"2020-07-10 00:00:00","54":"2020-07-11 00:00:00","55":"2020-07-12 00:00:00","56":"2020-07-13 00:00:00","57":"2020-07-14 00:00:00","58":"2020-07-15 00:00:00","59":"2020-07-16 00:00:00","6":"2020-05-24 00:00:00","60":"2020-07-17 00:00:00","61":"2020-07-18 00:00:00","62":"2020-07-19 00:00:00","63":"2020-07-20 00:00:00","64":"2020-07-21 00:00:00","65":"2020-07-22 00:00:00","66":"2020-07-23 00:00:00","67":"2020-07-24 00:00:00","68":"2020-07-25 00:00:00","69":"2020-07-26 00:00:00","7":"2020-05-25 00:00:00","70":"2020-07-27 00:00:00","71":"2020-07-28 00:00:00","72":"2020-07-29 00:00:00","73":"2020-07-30 00:00:00","74":"2020-07-31 00:00:00","75":"2020-08-01 00:00:00","76":"2020-08-02 00:00:00","77":"2020-08-03 00:00:00","78":"2020-08-04 00:00:00","79":"2020-08-05 00:00:00","8":"2020-05-26 00:00:00","80":"2020-08-06 00:00:00","81":"2020-08-07 00:00:00","82":"2020-08-08 00:00:00","83":"2020-08-09 00:00:00","84":"2020-08-10 00:00:00","85":"2020-08-11 00:00:00","86":"2020-08-12 00:00:00","87":"2020-08-13 00:00:00","88":"2020-08-14 00:00:00","89":"2020-08-15 00:00:00","9":"2020-05-27 00:00:00","90":"2020-08-16 00:00:00","91":"2020-08-17 00:00:00","92":"2020-08-18 00:00:00","93":"2020-08-19 00:00:00","94":"2020-08-20 00:00:00","95":"2020-08-21 00:00:00","96":"2020-08-22 00:00:00","97":"2020-08-23 00:00:00","98":"2020-08-24 00:00:00","99":"2020-08-25 00:00:00"},"ticker":{"id":"1423"}},"id":"1364","type":"LinearAxis"},{"attributes":{},"id":"1376","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1386"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1387"}},"x":{"field":"indices"}},"id":"1392","type":"VBar"},{"attributes":{"below":[{"id":"1364"}],"center":[{"id":"1367"},{"id":"1371"},{"id":"1404"}],"left":[{"id":"1368"}],"plot_width":900,"renderers":[{"id":"1394"},{"id":"1410"}],"title":{"id":"1354"},"toolbar":{"id":"1379"},"x_range":{"id":"1356"},"x_scale":{"id":"1360"},"y_range":{"id":"1358"},"y_scale":{"id":"1362"}},"id":"1353","subtype":"Figure","type":"Plot"}],"root_ids":["1353"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c7378359-1228-4f6d-b6b4-11a9a87aefe7","root_ids":["1353"],"roots":{"1353":"4abe32a0-1897-4629-b591-611378dbbdfa"}}];
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