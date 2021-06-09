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
    
      
      
    
      var element = document.getElementById("da0bc671-a249-48d8-946b-04ab46bfd983");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'da0bc671-a249-48d8-946b-04ab46bfd983' but no matching script tag was found.")
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
                    
                  var docs_json = '{"03ff3d62-b85c-4820-83a0-7cc0bc371d4a":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"1615"}},"id":"1620","type":"CDSView"},{"attributes":{"formatter":{"id":"1604"},"major_label_orientation":0.75,"major_label_overrides":{"0":"2020-05-18 00:00:00","1":"2020-05-19 00:00:00","10":"2020-05-28 00:00:00","100":"2020-08-26 00:00:00","101":"2020-08-27 00:00:00","102":"2020-08-28 00:00:00","103":"2020-08-29 00:00:00","104":"2020-08-30 00:00:00","105":"2020-08-31 00:00:00","106":"2020-09-01 00:00:00","107":"2020-09-02 00:00:00","108":"2020-09-03 00:00:00","109":"2020-09-04 00:00:00","11":"2020-05-29 00:00:00","110":"2020-09-05 00:00:00","111":"2020-09-06 00:00:00","112":"2020-09-07 00:00:00","113":"2020-09-08 00:00:00","114":"2020-09-09 00:00:00","115":"2020-09-10 00:00:00","116":"2020-09-11 00:00:00","117":"2020-09-12 00:00:00","118":"2020-09-13 00:00:00","119":"2020-09-14 00:00:00","12":"2020-05-30 00:00:00","120":"2020-09-15 00:00:00","121":"2020-09-16 00:00:00","122":"2020-09-17 00:00:00","123":"2020-09-18 00:00:00","124":"2020-09-19 00:00:00","125":"2020-09-20 00:00:00","126":"2020-09-21 00:00:00","127":"2020-09-22 00:00:00","128":"2020-09-23 00:00:00","129":"2020-09-24 00:00:00","13":"2020-05-31 00:00:00","130":"2020-09-25 00:00:00","131":"2020-09-26 00:00:00","132":"2020-09-27 00:00:00","133":"2020-09-28 00:00:00","134":"2020-09-29 00:00:00","135":"2020-09-30 00:00:00","136":"2020-10-01 00:00:00","137":"2020-10-02 00:00:00","138":"2020-10-03 00:00:00","139":"2020-10-04 00:00:00","14":"2020-06-01 00:00:00","140":"2020-10-05 00:00:00","141":"2020-10-06 00:00:00","142":"2020-10-07 00:00:00","143":"2020-10-08 00:00:00","144":"2020-10-09 00:00:00","145":"2020-10-10 00:00:00","146":"2020-10-11 00:00:00","147":"2020-10-12 00:00:00","148":"2020-10-13 00:00:00","149":"2020-10-14 00:00:00","15":"2020-06-02 00:00:00","150":"2020-10-15 00:00:00","151":"2020-10-16 00:00:00","152":"2020-10-17 00:00:00","153":"2020-10-18 00:00:00","154":"2020-10-19 00:00:00","155":"2020-10-20 00:00:00","156":"2020-10-21 00:00:00","157":"2020-10-22 00:00:00","158":"2020-10-23 00:00:00","159":"2020-10-24 00:00:00","16":"2020-06-03 00:00:00","160":"2020-10-25 00:00:00","161":"2020-10-26 00:00:00","162":"2020-10-27 00:00:00","163":"2020-10-28 00:00:00","164":"2020-10-29 00:00:00","165":"2020-10-30 00:00:00","166":"2020-10-31 00:00:00","167":"2020-11-01 00:00:00","168":"2020-11-02 00:00:00","169":"2020-11-03 00:00:00","17":"2020-06-04 00:00:00","170":"2020-11-04 00:00:00","171":"2020-11-05 00:00:00","172":"2020-11-06 00:00:00","173":"2020-11-07 00:00:00","174":"2020-11-08 00:00:00","175":"2020-11-09 00:00:00","176":"2020-11-10 00:00:00","177":"2020-11-11 00:00:00","178":"2020-11-12 00:00:00","179":"2020-11-13 00:00:00","18":"2020-06-05 00:00:00","180":"2020-11-14 00:00:00","181":"2020-11-15 00:00:00","182":"2020-11-16 00:00:00","183":"2020-11-17 00:00:00","184":"2020-11-18 00:00:00","185":"2020-11-19 00:00:00","186":"2020-11-20 00:00:00","187":"2020-11-21 00:00:00","188":"2020-11-22 00:00:00","189":"2020-11-23 00:00:00","19":"2020-06-06 00:00:00","190":"2020-11-24 00:00:00","191":"2020-11-25 00:00:00","192":"2020-11-26 00:00:00","193":"2020-11-27 00:00:00","194":"2020-11-28 00:00:00","195":"2020-11-29 00:00:00","196":"2020-11-30 00:00:00","197":"2020-12-01 00:00:00","198":"2020-12-02 00:00:00","199":"2020-12-03 00:00:00","2":"2020-05-20 00:00:00","20":"2020-06-07 00:00:00","200":"2020-12-04 00:00:00","201":"2020-12-05 00:00:00","202":"2020-12-06 00:00:00","203":"2020-12-07 00:00:00","204":"2020-12-08 00:00:00","205":"2020-12-09 00:00:00","206":"2020-12-10 00:00:00","207":"2020-12-11 00:00:00","208":"2020-12-12 00:00:00","209":"2020-12-13 00:00:00","21":"2020-06-08 00:00:00","210":"2020-12-14 00:00:00","211":"2020-12-15 00:00:00","212":"2020-12-16 00:00:00","213":"2020-12-17 00:00:00","214":"2020-12-18 00:00:00","215":"2020-12-19 00:00:00","216":"2020-12-20 00:00:00","217":"2020-12-21 00:00:00","218":"2020-12-22 00:00:00","219":"2020-12-23 00:00:00","22":"2020-06-09 00:00:00","220":"2020-12-24 00:00:00","221":"2020-12-25 00:00:00","222":"2020-12-26 00:00:00","223":"2020-12-27 00:00:00","224":"2020-12-28 00:00:00","225":"2020-12-29 00:00:00","226":"2020-12-30 00:00:00","227":"2020-12-31 00:00:00","228":"2021-01-01 00:00:00","229":"2021-01-02 00:00:00","23":"2020-06-10 00:00:00","230":"2021-01-03 00:00:00","231":"2021-01-04 00:00:00","232":"2021-01-05 00:00:00","233":"2021-01-06 00:00:00","234":"2021-01-07 00:00:00","235":"2021-01-08 00:00:00","236":"2021-01-09 00:00:00","237":"2021-01-10 00:00:00","238":"2021-01-11 00:00:00","239":"2021-01-12 00:00:00","24":"2020-06-11 00:00:00","240":"2021-01-13 00:00:00","241":"2021-01-14 00:00:00","242":"2021-01-15 00:00:00","243":"2021-01-16 00:00:00","244":"2021-01-17 00:00:00","245":"2021-01-18 00:00:00","246":"2021-01-19 00:00:00","247":"2021-01-20 00:00:00","248":"2021-01-21 00:00:00","249":"2021-01-22 00:00:00","25":"2020-06-12 00:00:00","250":"2021-01-23 00:00:00","251":"2021-01-24 00:00:00","252":"2021-01-25 00:00:00","253":"2021-01-26 00:00:00","254":"2021-01-27 00:00:00","255":"2021-01-28 00:00:00","256":"2021-01-29 00:00:00","257":"2021-01-30 00:00:00","258":"2021-01-31 00:00:00","259":"2021-02-01 00:00:00","26":"2020-06-13 00:00:00","260":"2021-02-02 00:00:00","261":"2021-02-03 00:00:00","262":"2021-02-04 00:00:00","263":"2021-02-05 00:00:00","264":"2021-02-06 00:00:00","265":"2021-02-07 00:00:00","266":"2021-02-08 00:00:00","267":"2021-02-09 00:00:00","268":"2021-02-10 00:00:00","269":"2021-02-11 00:00:00","27":"2020-06-14 00:00:00","270":"2021-02-12 00:00:00","271":"2021-02-13 00:00:00","272":"2021-02-14 00:00:00","273":"2021-02-15 00:00:00","274":"2021-02-16 00:00:00","275":"2021-02-17 00:00:00","276":"2021-02-18 00:00:00","277":"2021-02-19 00:00:00","278":"2021-02-20 00:00:00","279":"2021-02-21 00:00:00","28":"2020-06-15 00:00:00","280":"2021-02-22 00:00:00","281":"2021-02-23 00:00:00","282":"2021-02-24 00:00:00","283":"2021-02-25 00:00:00","284":"2021-02-26 00:00:00","285":"2021-02-27 00:00:00","286":"2021-02-28 00:00:00","287":"2021-03-01 00:00:00","288":"2021-03-02 00:00:00","289":"2021-03-03 00:00:00","29":"2020-06-16 00:00:00","290":"2021-03-04 00:00:00","291":"2021-03-05 00:00:00","292":"2021-03-06 00:00:00","293":"2021-03-07 00:00:00","294":"2021-03-08 00:00:00","295":"2021-03-09 00:00:00","296":"2021-03-10 00:00:00","297":"2021-03-11 00:00:00","298":"2021-03-12 00:00:00","299":"2021-03-13 00:00:00","3":"2020-05-21 00:00:00","30":"2020-06-17 00:00:00","300":"2021-03-14 00:00:00","301":"2021-03-15 00:00:00","302":"2021-03-16 00:00:00","303":"2021-03-17 00:00:00","304":"2021-03-18 00:00:00","305":"2021-03-19 00:00:00","306":"2021-03-20 00:00:00","307":"2021-03-21 00:00:00","308":"2021-03-22 00:00:00","309":"2021-03-23 00:00:00","31":"2020-06-18 00:00:00","310":"2021-03-24 00:00:00","311":"2021-03-25 00:00:00","312":"2021-03-26 00:00:00","313":"2021-03-27 00:00:00","314":"2021-03-28 00:00:00","315":"2021-03-29 00:00:00","316":"2021-03-30 00:00:00","317":"2021-03-31 00:00:00","318":"2021-04-01 00:00:00","319":"2021-04-02 00:00:00","32":"2020-06-19 00:00:00","320":"2021-04-03 00:00:00","321":"2021-04-04 00:00:00","322":"2021-04-05 00:00:00","323":"2021-04-06 00:00:00","324":"2021-04-07 00:00:00","325":"2021-04-08 00:00:00","326":"2021-04-09 00:00:00","327":"2021-04-10 00:00:00","328":"2021-04-11 00:00:00","329":"2021-04-12 00:00:00","33":"2020-06-20 00:00:00","330":"2021-04-13 00:00:00","331":"2021-04-14 00:00:00","332":"2021-04-15 00:00:00","333":"2021-04-16 00:00:00","334":"2021-04-17 00:00:00","335":"2021-04-18 00:00:00","336":"2021-04-19 00:00:00","337":"2021-04-20 00:00:00","338":"2021-04-21 00:00:00","339":"2021-04-22 00:00:00","34":"2020-06-21 00:00:00","340":"2021-04-23 00:00:00","341":"2021-04-24 00:00:00","342":"2021-04-25 00:00:00","343":"2021-04-26 00:00:00","344":"2021-04-27 00:00:00","345":"2021-04-28 00:00:00","346":"2021-04-29 00:00:00","347":"2021-04-30 00:00:00","348":"2021-05-01 00:00:00","349":"2021-05-02 00:00:00","35":"2020-06-22 00:00:00","350":"2021-05-03 00:00:00","351":"2021-05-04 00:00:00","352":"2021-05-05 00:00:00","353":"2021-05-06 00:00:00","354":"2021-05-07 00:00:00","355":"2021-05-08 00:00:00","356":"2021-05-09 00:00:00","357":"2021-05-10 00:00:00","358":"2021-05-11 00:00:00","359":"2021-05-12 00:00:00","36":"2020-06-23 00:00:00","360":"2021-05-13 00:00:00","361":"2021-05-14 00:00:00","362":"2021-05-15 00:00:00","363":"2021-05-16 00:00:00","364":"2021-05-17 00:00:00","365":"2021-05-18 00:00:00","366":"2021-05-19 00:00:00","367":"2021-05-20 00:00:00","368":"2021-05-21 00:00:00","369":"2021-05-22 00:00:00","37":"2020-06-24 00:00:00","370":"2021-05-23 00:00:00","371":"2021-05-24 00:00:00","372":"2021-05-25 00:00:00","373":"2021-05-26 00:00:00","374":"2021-05-27 00:00:00","375":"2021-05-28 00:00:00","376":"2021-05-29 00:00:00","377":"2021-05-30 00:00:00","378":"2021-05-31 00:00:00","379":"2021-06-01 00:00:00","38":"2020-06-25 00:00:00","380":"2021-06-02 00:00:00","381":"2021-06-03 00:00:00","382":"2021-06-04 00:00:00","383":"2021-06-05 00:00:00","384":"2021-06-06 00:00:00","385":"2021-06-07 00:00:00","386":"2021-06-08 00:00:00","39":"2020-06-26 00:00:00","4":"2020-05-22 00:00:00","40":"2020-06-27 00:00:00","41":"2020-06-28 00:00:00","42":"2020-06-29 00:00:00","43":"2020-06-30 00:00:00","44":"2020-07-01 00:00:00","45":"2020-07-02 00:00:00","46":"2020-07-03 00:00:00","47":"2020-07-04 00:00:00","48":"2020-07-05 00:00:00","49":"2020-07-06 00:00:00","5":"2020-05-23 00:00:00","50":"2020-07-07 00:00:00","51":"2020-07-08 00:00:00","52":"2020-07-09 00:00:00","53":"2020-07-10 00:00:00","54":"2020-07-11 00:00:00","55":"2020-07-12 00:00:00","56":"2020-07-13 00:00:00","57":"2020-07-14 00:00:00","58":"2020-07-15 00:00:00","59":"2020-07-16 00:00:00","6":"2020-05-24 00:00:00","60":"2020-07-17 00:00:00","61":"2020-07-18 00:00:00","62":"2020-07-19 00:00:00","63":"2020-07-20 00:00:00","64":"2020-07-21 00:00:00","65":"2020-07-22 00:00:00","66":"2020-07-23 00:00:00","67":"2020-07-24 00:00:00","68":"2020-07-25 00:00:00","69":"2020-07-26 00:00:00","7":"2020-05-25 00:00:00","70":"2020-07-27 00:00:00","71":"2020-07-28 00:00:00","72":"2020-07-29 00:00:00","73":"2020-07-30 00:00:00","74":"2020-07-31 00:00:00","75":"2020-08-01 00:00:00","76":"2020-08-02 00:00:00","77":"2020-08-03 00:00:00","78":"2020-08-04 00:00:00","79":"2020-08-05 00:00:00","8":"2020-05-26 00:00:00","80":"2020-08-06 00:00:00","81":"2020-08-07 00:00:00","82":"2020-08-08 00:00:00","83":"2020-08-09 00:00:00","84":"2020-08-10 00:00:00","85":"2020-08-11 00:00:00","86":"2020-08-12 00:00:00","87":"2020-08-13 00:00:00","88":"2020-08-14 00:00:00","89":"2020-08-15 00:00:00","9":"2020-05-27 00:00:00","90":"2020-08-16 00:00:00","91":"2020-08-17 00:00:00","92":"2020-08-18 00:00:00","93":"2020-08-19 00:00:00","94":"2020-08-20 00:00:00","95":"2020-08-21 00:00:00","96":"2020-08-22 00:00:00","97":"2020-08-23 00:00:00","98":"2020-08-24 00:00:00","99":"2020-08-25 00:00:00"},"major_label_policy":{"id":"1606"},"ticker":{"id":"1634"}},"id":"1571","type":"LinearAxis"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386]},"id":"1634","type":"FixedTicker"},{"attributes":{},"id":"1582","type":"SaveTool"},{"attributes":{},"id":"1583","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1593"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1594"}},"x":{"field":"indices"}},"id":"1600","type":"VBar"},{"attributes":{"below":[{"id":"1571"}],"center":[{"id":"1574"},{"id":"1578"},{"id":"1613"}],"left":[{"id":"1575"}],"renderers":[{"id":"1601"},{"id":"1619"}],"title":{"id":"1561"},"toolbar":{"id":"1586"},"width":900,"x_range":{"id":"1563"},"x_scale":{"id":"1567"},"y_range":{"id":"1565"},"y_scale":{"id":"1569"}},"id":"1560","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1607","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"1614"},{"id":"1633"}]},"id":"1613","type":"Legend"},{"attributes":{},"id":"1584","type":"HelpTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1596","type":"Stack"},{"attributes":{"axis":{"id":"1571"},"ticker":null},"id":"1574","type":"Grid"},{"attributes":{"data_source":{"id":"1597"},"glyph":{"id":"1599"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1600"},"view":{"id":"1602"}},"id":"1601","type":"GlyphRenderer"},{"attributes":{},"id":"1576","type":"BasicTicker"},{"attributes":{},"id":"1609","type":"AllLabels"},{"attributes":{},"id":"1580","type":"WheelZoomTool"},{"attributes":{},"id":"1604","type":"BasicTickFormatter"},{"attributes":{},"id":"1632","type":"Selection"},{"attributes":{"fields":["unique"]},"id":"1595","type":"Stack"},{"attributes":{},"id":"1631","type":"UnionRenderers"},{"attributes":{"fields":[]},"id":"1593","type":"Stack"},{"attributes":{},"id":"1612","type":"Selection"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1619"}]},"id":"1633","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"1593"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1594"}},"x":{"field":"indices"}},"id":"1599","type":"VBar"},{"attributes":{},"id":"1569","type":"LinearScale"},{"attributes":{"data_source":{"id":"1615"},"glyph":{"id":"1617"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1618"},"view":{"id":"1620"}},"id":"1619","type":"GlyphRenderer"},{"attributes":{},"id":"1579","type":"PanTool"},{"attributes":{"source":{"id":"1597"}},"id":"1602","type":"CDSView"},{"attributes":{"axis":{"id":"1575"},"dimension":1,"ticker":null},"id":"1578","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1595"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1596"}},"x":{"field":"indices"}},"id":"1618","type":"VBar"},{"attributes":{"formatter":{"id":"1607"},"major_label_policy":{"id":"1609"},"ticker":{"id":"1576"}},"id":"1575","type":"LinearAxis"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1601"}]},"id":"1614","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1585","type":"BoxAnnotation"},{"attributes":{"data":{"duplicate":[1,133,5,69,77,38,38,44,180,84,82,69,44,38,85,90,79,97,59,52,44,155,75,76,99,67,41,39,104,62,118,95,135,40,32,54,58,36,62,45,34,45,53,40,44,52,83,35,45,35,44,33,42,124,34,34,43,38,42,39,79,61,19,32,23,66,42,21,20,22,79,47,45,149,47,19,62,52,83,52,43,81,32,34,32,58,63,119,101,51,57,33,32,80,50,34,33,32,34,33,52,34,32,32,32,46,56,499,74,32,32,32,32,32,32,43,32,46,32,32,123,81,52,51,33,33,45,52,143,72,50,34,34,89,128,98,121,92,42,51,52,58,102,54,71,35,37,44,64,57,50,58,72,35,51,117,55,78,46,35,35,77,36,93,56,132,17,40,72,87,63,53,38,37,35,129,118,56,38,67,38,35,45,65,43,41,55,38,38,74,44,48,41,48,39,36,60,70,70,93,112,74,36,59,37,107,76,118,54,36,36,67,36,63,74,44,41,45,36,42,38,36,36,36,50,43,36,49,36,36,36,64,62,79,92,43,36,36,36,147,36,38,36,39,37,36,36,38,49,38,36,36,37,37,36,65,46,36,36,41,38,161,211,38,78,85,85,119,87,91,110,97,85,85,93,42,87,73,42,42,46,42,42,42,42,42,42,43,42,47,42,42,42,43,42,55,43,49,46,42,42,58,49,43,45,43,42,43,50,45,71,105,88,42,42,93,67,79,43,42,42,42,43,60,42,84,43,42,42,42,267,51,44,180,45,42,48,42,45,45,42,42,42,48,47,42,57,67,81,43,75,86,60,72,189,52,42,52,48,65,42,45,42,84,77,76,59,54,82,45,47,55,50,48,41,46,47,51,41,46,48,40,45,42,40,73,118],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386],"unique":[12,89,21,49,77,2,5,25,209,95,70,69,25,5,90,102,68,101,64,37,13,71,85,89,115,73,28,25,119,85,130,139,136,30,3,54,51,24,69,45,5,29,38,32,30,11,77,10,25,25,27,14,28,72,6,6,40,18,3,29,90,17,5,40,24,50,56,12,3,15,104,55,55,111,58,5,14,53,60,33,25,28,2,6,5,23,23,22,116,35,48,11,4,84,46,14,14,2,14,3,45,15,2,4,2,13,22,17,3,3,3,3,2,2,3,4,4,5,2,3,30,28,24,45,3,4,33,41,71,48,38,2,4,38,39,98,25,89,20,32,22,52,118,45,74,4,15,17,61,55,38,53,4,2,38,108,45,78,32,3,3,58,7,72,75,113,1,4,81,105,74,60,15,15,2,82,42,66,23,83,3,4,58,69,35,16,70,10,3,71,5,47,14,15,4,1,65,26,60,52,25,2,3,23,12,64,14,15,43,3,1,42,2,50,13,17,10,34,2,25,11,2,3,1,2,2,4,20,1,1,1,44,64,21,30,14,1,1,4,21,2,13,1,13,12,3,1,3,2,2,1,1,3,2,1,38,35,1,3,27,2,14,6,4,6,7,2,4,5,16,4,4,3,5,4,2,37,7,3,4,2,1,3,1,3,1,3,14,3,35,4,2,1,14,2,15,4,37,26,3,3,26,47,14,24,13,1,14,4,28,93,44,72,4,3,5,2,5,14,1,1,2,17,50,3,106,3,2,1,5,8,47,18,12,6,1,6,2,26,5,2,3,1,35,28,1,6,4,18,2,11,8,7,61,86,37,2,2,40,79,1,24,4,90,78,131,70,61,131,34,37,61,37,27,15,24,43,31,2,31,38,2,25,14,1,123,262]},"selected":{"id":"1612"},"selection_policy":{"id":"1611"}},"id":"1597","type":"ColumnDataSource"},{"attributes":{"data":{"duplicate":[1,133,5,69,77,38,38,44,180,84,82,69,44,38,85,90,79,97,59,52,44,155,75,76,99,67,41,39,104,62,118,95,135,40,32,54,58,36,62,45,34,45,53,40,44,52,83,35,45,35,44,33,42,124,34,34,43,38,42,39,79,61,19,32,23,66,42,21,20,22,79,47,45,149,47,19,62,52,83,52,43,81,32,34,32,58,63,119,101,51,57,33,32,80,50,34,33,32,34,33,52,34,32,32,32,46,56,499,74,32,32,32,32,32,32,43,32,46,32,32,123,81,52,51,33,33,45,52,143,72,50,34,34,89,128,98,121,92,42,51,52,58,102,54,71,35,37,44,64,57,50,58,72,35,51,117,55,78,46,35,35,77,36,93,56,132,17,40,72,87,63,53,38,37,35,129,118,56,38,67,38,35,45,65,43,41,55,38,38,74,44,48,41,48,39,36,60,70,70,93,112,74,36,59,37,107,76,118,54,36,36,67,36,63,74,44,41,45,36,42,38,36,36,36,50,43,36,49,36,36,36,64,62,79,92,43,36,36,36,147,36,38,36,39,37,36,36,38,49,38,36,36,37,37,36,65,46,36,36,41,38,161,211,38,78,85,85,119,87,91,110,97,85,85,93,42,87,73,42,42,46,42,42,42,42,42,42,43,42,47,42,42,42,43,42,55,43,49,46,42,42,58,49,43,45,43,42,43,50,45,71,105,88,42,42,93,67,79,43,42,42,42,43,60,42,84,43,42,42,42,267,51,44,180,45,42,48,42,45,45,42,42,42,48,47,42,57,67,81,43,75,86,60,72,189,52,42,52,48,65,42,45,42,84,77,76,59,54,82,45,47,55,50,48,41,46,47,51,41,46,48,40,45,42,40,73,118],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386],"unique":[12,89,21,49,77,2,5,25,209,95,70,69,25,5,90,102,68,101,64,37,13,71,85,89,115,73,28,25,119,85,130,139,136,30,3,54,51,24,69,45,5,29,38,32,30,11,77,10,25,25,27,14,28,72,6,6,40,18,3,29,90,17,5,40,24,50,56,12,3,15,104,55,55,111,58,5,14,53,60,33,25,28,2,6,5,23,23,22,116,35,48,11,4,84,46,14,14,2,14,3,45,15,2,4,2,13,22,17,3,3,3,3,2,2,3,4,4,5,2,3,30,28,24,45,3,4,33,41,71,48,38,2,4,38,39,98,25,89,20,32,22,52,118,45,74,4,15,17,61,55,38,53,4,2,38,108,45,78,32,3,3,58,7,72,75,113,1,4,81,105,74,60,15,15,2,82,42,66,23,83,3,4,58,69,35,16,70,10,3,71,5,47,14,15,4,1,65,26,60,52,25,2,3,23,12,64,14,15,43,3,1,42,2,50,13,17,10,34,2,25,11,2,3,1,2,2,4,20,1,1,1,44,64,21,30,14,1,1,4,21,2,13,1,13,12,3,1,3,2,2,1,1,3,2,1,38,35,1,3,27,2,14,6,4,6,7,2,4,5,16,4,4,3,5,4,2,37,7,3,4,2,1,3,1,3,1,3,14,3,35,4,2,1,14,2,15,4,37,26,3,3,26,47,14,24,13,1,14,4,28,93,44,72,4,3,5,2,5,14,1,1,2,17,50,3,106,3,2,1,5,8,47,18,12,6,1,6,2,26,5,2,3,1,35,28,1,6,4,18,2,11,8,7,61,86,37,2,2,40,79,1,24,4,90,78,131,70,61,131,34,37,61,37,27,15,24,43,31,2,31,38,2,25,14,1,123,262]},"selected":{"id":"1632"},"selection_policy":{"id":"1631"}},"id":"1615","type":"ColumnDataSource"},{"attributes":{},"id":"1606","type":"AllLabels"},{"attributes":{"text":"Clones traffic"},"id":"1561","type":"Title"},{"attributes":{},"id":"1567","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1579"},{"id":"1580"},{"id":"1581"},{"id":"1582"},{"id":"1583"},{"id":"1584"}]},"id":"1586","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"1595"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1596"}},"x":{"field":"indices"}},"id":"1617","type":"VBar"},{"attributes":{"overlay":{"id":"1585"}},"id":"1581","type":"BoxZoomTool"},{"attributes":{"fields":["unique"]},"id":"1594","type":"Stack"},{"attributes":{},"id":"1611","type":"UnionRenderers"},{"attributes":{},"id":"1565","type":"DataRange1d"},{"attributes":{},"id":"1563","type":"DataRange1d"}],"root_ids":["1560"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"03ff3d62-b85c-4820-83a0-7cc0bc371d4a","root_ids":["1560"],"roots":{"1560":"da0bc671-a249-48d8-946b-04ab46bfd983"}}];
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