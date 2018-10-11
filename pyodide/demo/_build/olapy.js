var Module=typeof pyodide!=="undefined"?pyodide:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="olapy.data";var REMOTE_PACKAGE_BASE="olapy.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.6",true,true);Module["FS_createPath"]("/lib/python3.6","site-packages",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages","config",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/config","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages","olapy",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy","core",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core","mdx",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core/mdx","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core/mdx","tools",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core/mdx/tools","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core/mdx","parser",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core/mdx/parser","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core/mdx","executor",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core/mdx/executor","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core","patch",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core/patch","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core","services",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/core/services","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy","etl",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/olapy/etl","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages","cubes_templates",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/cubes_templates","foodmart",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/cubes_templates","sales",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/cubes_templates","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/cubes_templates","Black_Friday",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/cubes_templates","foodmart_with_config",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages","tests",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/tests","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages","micro_bench",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages/micro_bench","__pycache__",true,true);Module["FS_createPath"]("/lib/python3.6/site-packages","olapy-0.6.2-py3.6.egg-info",true,true);Module["FS_createPath"]("/","config",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};var files=metadata.files;for(var i=0;i<files.length;++i){new DataRequest(files[i].start,files[i].end,files[i].audio).open("GET",files[i].filename)}function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;if(Module["SPLIT_MEMORY"])err("warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting");var ptr=Module["getMemory"](byteArray.length);Module["HEAPU8"].set(byteArray,ptr);DataRequest.prototype.byteArray=Module["HEAPU8"].subarray(ptr,ptr+byteArray.length);var files=metadata.files;for(var i=0;i<files.length;++i){DataRequest.prototype.requests[files[i].filename].onload()}Module["removeRunDependency"]("datafile_olapy.data")}Module["addRunDependency"]("datafile_olapy.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.6/site-packages/config/__init__.py",start:0,end:0,audio:0},{filename:"/lib/python3.6/site-packages/config/olapy-config.yml",start:0,end:834,audio:0},{filename:"/lib/python3.6/site-packages/config/__pycache__/__init__.cpython-36.pyc",start:834,end:971,audio:0},{filename:"/lib/python3.6/site-packages/olapy/__main__.py",start:971,end:1413,audio:0},{filename:"/lib/python3.6/site-packages/olapy/cli.py",start:1413,end:2590,audio:0},{filename:"/lib/python3.6/site-packages/olapy/__init__.py",start:2590,end:2590,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/__init__.py",start:2590,end:2590,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/__init__.py",start:2590,end:2590,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/__pycache__/__init__.cpython-36.pyc",start:2590,end:2735,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/tools/config_file_parser.py",start:2735,end:8711,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/tools/connection.py",start:8711,end:12215,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/tools/olapy_config_file_parser.py",start:12215,end:13729,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/tools/__init__.py",start:13729,end:13729,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/tools/__pycache__/connection.cpython-36.pyc",start:13729,end:18411,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/tools/__pycache__/config_file_parser.cpython-36.pyc",start:18411,end:24433,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/tools/__pycache__/olapy_config_file_parser.cpython-36.pyc",start:24433,end:26156,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/tools/__pycache__/__init__.cpython-36.pyc",start:26156,end:26307,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/parser/__init__.py",start:26307,end:26307,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/parser/parse.py",start:26307,end:33871,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/parser/__pycache__/parse.cpython-36.pyc",start:33871,end:41172,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/parser/__pycache__/__init__.cpython-36.pyc",start:41172,end:41324,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/execute.py",start:41324,end:68871,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/lite_execute.py",start:68871,end:73042,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/cube_loader.py",start:73042,end:74733,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/__init__.py",start:74733,end:74733,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/cube_loader_db.py",start:74733,end:77805,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/cube_loader_custom.py",start:77805,end:83948,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/__pycache__/execute.cpython-36.pyc",start:83948,end:105033,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/__pycache__/cube_loader_db.cpython-36.pyc",start:105033,end:107647,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/__pycache__/cube_loader_custom.cpython-36.pyc",start:107647,end:112550,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/__pycache__/cube_loader.cpython-36.pyc",start:112550,end:114449,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/__pycache__/lite_execute.cpython-36.pyc",start:114449,end:118717,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/mdx/executor/__pycache__/__init__.cpython-36.pyc",start:118717,end:118871,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/patch/patch_olapy.py",start:118871,end:121192,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/patch/__init__.py",start:121192,end:121192,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/patch/__pycache__/patch_olapy.cpython-36.pyc",start:121192,end:123523,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/patch/__pycache__/__init__.cpython-36.pyc",start:123523,end:123670,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/__pycache__/__init__.cpython-36.pyc",start:123670,end:123811,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/xmla_discover_tools_utils.py",start:123811,end:138874,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/models.py",start:138874,end:143208,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/xmla_discover_tools.py",start:143208,end:185206,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__init__.py",start:185206,end:185206,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/xmla_lib.py",start:185206,end:187580,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/xmla_execute_xsds.py",start:187580,end:193180,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/xmla_execute_tools.py",start:193180,end:235582,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/xmla.py",start:235582,end:239791,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/xmla_discover_xsds.py",start:239791,end:279049,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__pycache__/xmla_discover_tools_utils.cpython-36.pyc",start:279049,end:283740,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__pycache__/xmla.cpython-36.pyc",start:283740,end:287153,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__pycache__/xmla_discover_tools.cpython-36.pyc",start:287153,end:308613,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__pycache__/xmla_lib.cpython-36.pyc",start:308613,end:310482,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__pycache__/xmla_execute_xsds.cpython-36.pyc",start:310482,end:316254,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__pycache__/xmla_execute_tools.cpython-36.pyc",start:316254,end:350016,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__pycache__/xmla_discover_xsds.cpython-36.pyc",start:350016,end:389477,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__pycache__/models.cpython-36.pyc",start:389477,end:393017,audio:0},{filename:"/lib/python3.6/site-packages/olapy/core/services/__pycache__/__init__.cpython-36.pyc",start:393017,end:393167,audio:0},{filename:"/lib/python3.6/site-packages/olapy/__pycache__/cli.cpython-36.pyc",start:393167,end:394222,audio:0},{filename:"/lib/python3.6/site-packages/olapy/__pycache__/__main__.cpython-36.pyc",start:394222,end:394977,audio:0},{filename:"/lib/python3.6/site-packages/olapy/__pycache__/__init__.cpython-36.pyc",start:394977,end:395113,audio:0},{filename:"/lib/python3.6/site-packages/olapy/etl/etl.py",start:395113,end:400460,audio:0},{filename:"/lib/python3.6/site-packages/olapy/etl/__init__.py",start:400460,end:400460,audio:0},{filename:"/lib/python3.6/site-packages/olapy/etl/__pycache__/__init__.cpython-36.pyc",start:400460,end:400600,audio:0},{filename:"/lib/python3.6/site-packages/olapy/etl/__pycache__/etl.cpython-36.pyc",start:400600,end:405369,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/web_cube_config3.yml",start:405369,end:406507,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/web_cube_config2.yml",start:406507,end:406817,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/__init__.py",start:406817,end:406817,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/web_cube_config.yml",start:406817,end:407207,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/sales_sqlite",start:407207,end:460455,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/cubes-config.yml",start:460455,end:461686,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/Requirements.txt",start:461686,end:462101,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/foodmart/Time.csv",start:462101,end:512021,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/foodmart/Store.csv",start:512021,end:517248,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/foodmart/Warehouse.csv",start:517248,end:520371,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/foodmart/Facts.csv",start:520371,end:844850,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/foodmart/Product.csv",start:844850,end:985605,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/sales/Time.csv",start:985605,end:1014828,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/sales/Facts.csv",start:1014828,end:1015220,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/sales/Product.csv",start:1015220,end:1015379,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/sales/Geography.csv",start:1015379,end:1015761,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/__pycache__/__init__.cpython-36.pyc",start:1015761,end:1015907,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/Black_Friday/Time.csv",start:1015907,end:1015980,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/Black_Friday/Facts.csv",start:1015980,end:1017138,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/Black_Friday/Product.csv",start:1017138,end:1017419,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/Black_Friday/Geography.csv",start:1017419,end:1017801,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/foodmart_with_config/food_facts.csv",start:1017801,end:1311225,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/foodmart_with_config/Store.csv",start:1311225,end:1315800,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/foodmart_with_config/Warehouse.csv",start:1315800,end:1318311,audio:0},{filename:"/lib/python3.6/site-packages/cubes_templates/foodmart_with_config/Product.csv",start:1318311,end:1452790,audio:0},{filename:"/lib/python3.6/site-packages/tests/xs0_responses.py",start:1452790,end:1476044,audio:0},{filename:"/lib/python3.6/site-packages/tests/db_creation_utils.py",start:1476044,end:1486296,audio:0},{filename:"/lib/python3.6/site-packages/tests/test_databases.py",start:1486296,end:1491734,audio:0},{filename:"/lib/python3.6/site-packages/tests/queries.py",start:1491734,end:1500787,audio:0},{filename:"/lib/python3.6/site-packages/tests/conftest.py",start:1500787,end:1503330,audio:0},{filename:"/lib/python3.6/site-packages/tests/test_single_file_cube.py",start:1503330,end:1504064,audio:0},{filename:"/lib/python3.6/site-packages/tests/__init__.py",start:1504064,end:1504064,audio:0},{filename:"/lib/python3.6/site-packages/tests/test_parser.py",start:1504064,end:1511176,audio:0},{filename:"/lib/python3.6/site-packages/tests/test_separated_xmla_xs0_responses.py",start:1511176,end:1517098,audio:0},{filename:"/lib/python3.6/site-packages/tests/test_separated_xmla_cell_data_responses.py",start:1517098,end:1517997,audio:0},{filename:"/lib/python3.6/site-packages/tests/test_custom_cube.py",start:1517997,end:1518337,audio:0},{filename:"/lib/python3.6/site-packages/tests/test_xmla.py",start:1518337,end:1534291,audio:0},{filename:"/lib/python3.6/site-packages/tests/test_separated_xmla_slicers_responses.py",start:1534291,end:1538379,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/test_separated_xmla_slicers_responses.cpython-36.pyc",start:1538379,end:1541691,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/test_custom_cube.cpython-36.pyc",start:1541691,end:1542303,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/xs0_responses.cpython-36.pyc",start:1542303,end:1565696,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/test_separated_xmla_cell_data_responses.cpython-36.pyc",start:1565696,end:1566697,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/test_databases.cpython-36.pyc",start:1566697,end:1570618,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/db_creation_utils.cpython-36.pyc",start:1570618,end:1580889,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/test_parser.cpython-36.pyc",start:1580889,end:1584900,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/queries.cpython-36.pyc",start:1584900,end:1594080,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/conftest.cpython-36.pyc",start:1594080,end:1595993,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/test_separated_xmla_xs0_responses.cpython-36.pyc",start:1595993,end:1598853,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/test_single_file_cube.cpython-36.pyc",start:1598853,end:1599844,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/test_xmla.cpython-36.pyc",start:1599844,end:1610940,audio:0},{filename:"/lib/python3.6/site-packages/tests/__pycache__/__init__.cpython-36.pyc",start:1610940,end:1611076,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/bench_databases.py",start:1611076,end:1615375,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/queries_4_db.py",start:1615375,end:1619139,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/cube_generator.py",start:1619139,end:1621955,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/micro_bench.py",start:1621955,end:1622810,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/__init__.py",start:1622810,end:1622810,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/csv_olapy_bench_vs_other_olap_servers.py",start:1622810,end:1643038,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/__pycache__/bench_databases.cpython-36.pyc",start:1643038,end:1647044,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/__pycache__/micro_bench.cpython-36.pyc",start:1647044,end:1648496,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/__pycache__/queries_4_db.cpython-36.pyc",start:1648496,end:1652443,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/__pycache__/cube_generator.cpython-36.pyc",start:1652443,end:1655278,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/__pycache__/csv_olapy_bench_vs_other_olap_servers.cpython-36.pyc",start:1655278,end:1673921,audio:0},{filename:"/lib/python3.6/site-packages/micro_bench/__pycache__/__init__.cpython-36.pyc",start:1673921,end:1674063,audio:0},{filename:"/lib/python3.6/site-packages/olapy-0.6.2-py3.6.egg-info/SOURCES.txt",start:1674063,end:1676872,audio:0},{filename:"/lib/python3.6/site-packages/olapy-0.6.2-py3.6.egg-info/top_level.txt",start:1676872,end:1676919,audio:0},{filename:"/lib/python3.6/site-packages/olapy-0.6.2-py3.6.egg-info/dependency_links.txt",start:1676919,end:1676920,audio:0},{filename:"/lib/python3.6/site-packages/olapy-0.6.2-py3.6.egg-info/entry_points.txt",start:1676920,end:1676994,audio:0},{filename:"/lib/python3.6/site-packages/olapy-0.6.2-py3.6.egg-info/PKG-INFO",start:1676994,end:1680466,audio:0},{filename:"/lib/python3.6/site-packages/olapy-0.6.2-py3.6.egg-info/requires.txt",start:1680466,end:1680523,audio:0},{filename:"/config/olapy-config.yml",start:1680523,end:1681357,audio:0},{filename:"/bin/olapy",start:1681357,end:1681787,audio:0},{filename:"/bin/etl",start:1681787,end:1682213,audio:0}],remote_package_size:1682213,package_uuid:"6f6f09bb-aa8f-45d9-9d15-52cf148ac2a1"})})();