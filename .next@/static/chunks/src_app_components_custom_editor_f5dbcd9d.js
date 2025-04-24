(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_custom_editor_f5dbcd9d.js", {

"[project]/src/app/components/custom_editor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-react/dist/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ckeditor5$2f$dist$2f$ckeditor5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/ckeditor5/dist/ckeditor5.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$editor$2d$classic$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-editor-classic/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$essentials$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-essentials/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$paragraph$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-paragraph/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$basic$2d$styles$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-basic-styles/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$block$2d$quote$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-block-quote/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$heading$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-heading/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$alignment$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-alignment/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$code$2d$block$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-code-block/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$font$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-font/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$media$2d$embed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ckeditor/ckeditor5-media-embed/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client' // Required only in App Router.
;
;
;
;
;
;
function CustomEditor({ name, placeholder, defaultValue }) {
    _s();
    const [textData, setTextData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CKEditor"], {
                editor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$editor$2d$classic$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClassicEditor"],
                data: defaultValue,
                config: {
                    placeholder: placeholder,
                    licenseKey: 'GPL',
                    plugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$essentials$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Essentials"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$paragraph$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$basic$2d$styles$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bold"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$basic$2d$styles$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Italic"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$basic$2d$styles$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Underline"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$basic$2d$styles$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Strikethrough"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$block$2d$quote$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockQuote"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$heading$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$alignment$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alignment"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$code$2d$block$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$font$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Font"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ckeditor$2f$ckeditor5$2d$media$2d$embed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaEmbed"]
                    ],
                    toolbar: [
                        "undo",
                        "redo",
                        "|",
                        "bold",
                        "italic",
                        "underline",
                        "strikethrough",
                        "|",
                        "heading",
                        "blockQuote",
                        "|",
                        "numberedList",
                        "bulletedList",
                        "|",
                        "link",
                        "|",
                        "alignment",
                        "fontSize",
                        "fontColor",
                        "|",
                        "codeBlock",
                        "mediaEmbed"
                    ],
                    initialData: ''
                },
                onChange: (event, editor)=>{
                    setTextData(editor.getData());
                },
                defaultValue: textData
            }, void 0, false, {
                fileName: "[project]/src/app/components/custom_editor.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: name,
                defaultValue: textData,
                className: "d-none"
            }, void 0, false, {
                fileName: "[project]/src/app/components/custom_editor.js",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomEditor, "I992MVnVSjhprKpoqwb1KXIetmY=");
_c = CustomEditor;
const __TURBOPACK__default__export__ = CustomEditor;
var _c;
__turbopack_context__.k.register(_c, "CustomEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/custom_editor.js [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/components/custom_editor.js [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_app_components_custom_editor_f5dbcd9d.js.map