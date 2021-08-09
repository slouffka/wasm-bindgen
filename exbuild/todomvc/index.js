/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index_bg.js": {
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_exception_f2b5d0f71325a0dc": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_exception_f2b5d0f71325a0dc"](p0i32);
/******/ 					},
/******/ 					"__wbg_getItem_5ba4a641e25018c3": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_getItem_5ba4a641e25018c3"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setItem_8f5e46af32b2a9a9": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setItem_8f5e46af32b2a9a9"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_2473421a18810ba6": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlElement_2473421a18810ba6"](p0i32);
/******/ 					},
/******/ 					"__wbg_dataset_d231a045f95def98": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_dataset_d231a045f95def98"](p0i32);
/******/ 					},
/******/ 					"__wbg_sethidden_67b54466a3e6ee31": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_sethidden_67b54466a3e6ee31"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_blur_e01fe9956a2322dd": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_blur_e01fe9956a2322dd"](p0i32);
/******/ 					},
/******/ 					"__wbg_focus_f774b6957bde8c62": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_focus_f774b6957bde8c62"](p0i32);
/******/ 					},
/******/ 					"__wbg_hash_7a5e067b7c6e0837": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_hash_7a5e067b7c6e0837"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_length_032781db17e01692": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_length_032781db17e01692"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_d0fc1cdfa4dd51a1": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_d0fc1cdfa4dd51a1"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Node_5468ab84ccd412d3": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Node_5468ab84ccd412d3"](p0i32);
/******/ 					},
/******/ 					"__wbg_parentElement_3aa57a01c7055b32": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parentElement_3aa57a01c7055b32"](p0i32);
/******/ 					},
/******/ 					"__wbg_textContent_748cd366f82647af": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_textContent_748cd366f82647af"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_settextContent_4438176b20024f4a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_settextContent_4438176b20024f4a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_27974267a42a0def": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_appendChild_27974267a42a0def"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_isEqualNode_e6113a012761dd0f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isEqualNode_e6113a012761dd0f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeChild_73ae1495cb167dcd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeChild_73ae1495cb167dcd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_location_ea153d77351c1da5": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_location_ea153d77351c1da5"](p0i32);
/******/ 					},
/******/ 					"__wbg_body_25dc44f3e329890b": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_body_25dc44f3e329890b"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_1959ce882284e011": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_createElement_1959ce882284e011"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelectorAll_61d6e53eb0bb83a7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelectorAll_61d6e53eb0bb83a7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_get_5d41294eacdad3ea": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_5d41294eacdad3ea"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_b708e14a7758a391": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_set_b708e14a7758a391"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Element_ac3c73957a8306fd": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Element_ac3c73957a8306fd"](p0i32);
/******/ 					},
/******/ 					"__wbg_setclassName_c0a136da544c12e1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setclassName_c0a136da544c12e1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_classList_b917d5b97a033348": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_classList_b917d5b97a033348"](p0i32);
/******/ 					},
/******/ 					"__wbg_setinnerHTML_837ac00a7c354b06": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setinnerHTML_837ac00a7c354b06"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelector_021fb864d389c8e1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelector_021fb864d389c8e1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_add_27c8fef42174116b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_add_27c8fef42174116b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_remove_afee63d033891da6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_remove_afee63d033891da6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_KeyboardEvent_84784777abd460a6": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_KeyboardEvent_84784777abd460a6"](p0i32);
/******/ 					},
/******/ 					"__wbg_keyCode_3f54adb56039e07b": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_keyCode_3f54adb56039e07b"](p0i32);
/******/ 					},
/******/ 					"__wbg_target_b7015f4034f433c2": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_target_b7015f4034f433c2"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlInputElement_a8acc6294a4325d1": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlInputElement_a8acc6294a4325d1"](p0i32);
/******/ 					},
/******/ 					"__wbg_checked_5f4314d852a5d5d2": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_checked_5f4314d852a5d5d2"](p0i32);
/******/ 					},
/******/ 					"__wbg_setchecked_c756ef801f7e9fe2": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setchecked_c756ef801f7e9fe2"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_value_45a0a66acf34bf56": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_45a0a66acf34bf56"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setvalue_6671cc5ed4e50ed1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setvalue_6671cc5ed4e50ed1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_EventTarget_2ce9a4918f446d4e": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_EventTarget_2ce9a4918f446d4e"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_957c027f76736fd0": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_957c027f76736fd0"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_4acbb717898d562d": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_4acbb717898d562d"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_3f3fc05fae8a49b4": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeEventListener_3f3fc05fae8a49b4"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_b99429ec408dcb8d": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Window_b99429ec408dcb8d"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_6d5890b86bbf5b96": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_document_6d5890b86bbf5b96"](p0i32);
/******/ 					},
/******/ 					"__wbg_localStorage_fbbeeb3a3dfd5be3": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_localStorage_fbbeeb3a3dfd5be3"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_75d36ef8b2e1d918": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_75d36ef8b2e1d918"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_fc8ee963685ada41": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_fc8ee963685ada41"]();
/******/ 					},
/******/ 					"__wbg_isArray_df4c85ae44ed9ac8": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isArray_df4c85ae44ed9ac8"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_ef0a52724cfe2a05": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_push_ef0a52724cfe2a05"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shift_edc9002a6467a6b3": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_shift_edc9002a6467a6b3"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_68424965d85fcb08": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newnoargs_68424965d85fcb08"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_9698e9b9c4668ae0": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_call_9698e9b9c4668ae0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_f86591ab32e1c1be": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_f86591ab32e1c1be"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_f05343d499c05635": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_f05343d499c05635"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_453b46da8a8247c2": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_done_453b46da8a8247c2"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_82c03c5875fdb746": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_82c03c5875fdb746"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_0f688205547f47a2": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_now_0f688205547f47a2"]();
/******/ 					},
/******/ 					"__wbg_iterator_a5bac4ea614493d9": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_iterator_a5bac4ea614493d9"]();
/******/ 					},
/******/ 					"__wbg_globalThis_787cfd4f25a35141": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_globalThis_787cfd4f25a35141"]();
/******/ 					},
/******/ 					"__wbg_self_3df7c33e222cd53b": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_self_3df7c33e222cd53b"]();
/******/ 					},
/******/ 					"__wbg_window_0f90182e6c405ff2": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_window_0f90182e6c405ff2"]();
/******/ 					},
/******/ 					"__wbg_global_af2eb7b1369372ed": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_global_af2eb7b1369372ed"]();
/******/ 					},
/******/ 					"__wbg_parse_e3f3e323d7a40d19": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parse_e3f3e323d7a40d19"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_stringify_bc3c2afd0dba3362": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stringify_bc3c2afd0dba3362"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper147": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper147"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper149": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper149"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"b42e2fcebf5fbf1d823d"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example\nconst rust = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"));\n\nrust\n  .then(m => m.run())\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });