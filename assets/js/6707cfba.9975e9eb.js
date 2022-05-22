"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9182],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3830:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={title:"Deprecation",tags:["Processes","Core development","Deprecation"]},s=void 0,d={unversionedId:"development/policies/deprecation",id:"development/policies/deprecation",title:"Deprecation",description:"Deprecation, in its programming sense, is the process of taking older code and marking it as no longer being useful within the codebase, usually because it has been superseded by newer code. The deprecated code is not immediately removed from the codebase because doing so may cause regression errors.",source:"@site/general/development/policies/deprecation.md",sourceDirName:"development/policies",slug:"/development/policies/deprecation",permalink:"/devdocs/general/development/policies/deprecation",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/deprecation.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Core development",permalink:"/devdocs/general/tags/core-development"},{label:"Deprecation",permalink:"/devdocs/general/tags/deprecation"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653234067,formattedLastUpdatedAt:"22/05/2022",frontMatter:{title:"Deprecation",tags:["Processes","Core development","Deprecation"]},sidebar:"policies",previous:{title:"Component Communication",permalink:"/devdocs/general/development/policies/component-communication/"},next:{title:"Naming conventions",permalink:"/devdocs/general/development/policies/naming"}},c={},p=[{value:"Why is deprecation needed?",id:"why-is-deprecation-needed",level:2},{value:"What is Moodle&#39;s deprecation policy?",id:"what-is-moodles-deprecation-policy",level:2},{value:"Moodle Core deprecation process",id:"moodle-core-deprecation-process",level:2},{value:"Step 1. Immediate action",id:"step-1-immediate-action",level:3},{value:"Step 2. Final deprecation",id:"step-2-final-deprecation",level:3},{value:"Parameters deprecation",id:"parameters-deprecation",level:2},{value:"See also...",id:"see-also",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"What is deprecation?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Deprecation"},"Deprecation"),", in its programming sense, is the process of taking older code and marking it as no longer being useful within the codebase, usually because it has been superseded by newer code. The deprecated code is not immediately removed from the codebase because doing so may cause regression errors."))),(0,i.kt)("h2",{id:"why-is-deprecation-needed"},"Why is deprecation needed?"),(0,i.kt)("p",null,"In an open source project, the end use of the codebase varies. People may have customisations and plugins that depend on a function that has been targeted for deprecation. Rather than simply removing a function, we must gracefully deprecate the function over a period covered by a number of released versions."),(0,i.kt)("h2",{id:"what-is-moodles-deprecation-policy"},"What is Moodle's deprecation policy?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deprecations should only be on master, not on stables (exceptions may be made for some external service integrations)"),(0,i.kt)("li",{parentName:"ul"},"Deprecations apply to all public APIs, classes, and files."),(0,i.kt)("li",{parentName:"ul"},"Removal of a function, class, or file may only be considered after a minimum of 4 major releases since the deprecation. Example: anything deprecated in 3.2 means that it will be removed in 3.6"),(0,i.kt)("li",{parentName:"ul"},"All deprecations should emit debugging notices where possible"),(0,i.kt)("li",{parentName:"ul"},"All deprecations should be noted in the relevant upgrade.txt")),(0,i.kt)("h2",{id:"moodle-core-deprecation-process"},"Moodle Core deprecation process"),(0,i.kt)("p",null,"Once it is decided that a function should be deprecated, a two-step process should be followed."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Both steps should always happen as earlier as possible in the 6-months period between major releases, so all developers will have time to adjust their code and ensure it will work in the next release. Obviously, ",(0,i.kt)("strong",{parentName:"p"},"no changes will be allowed after code freeze")," (the APIs must remain 100% unmodified after it)."))),(0,i.kt)("h3",{id:"step-1-immediate-action"},"Step 1. Immediate action"),(0,i.kt)("p",null,"Deprecation affects only the current master version, in other words, the deprecation only becomes effective after the next ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Releases"},"major release"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the function is not a member of a class (in other words, it is an independent function), it should be moved, with its PHPDoc and all comments, to ",(0,i.kt)("inlineCode",{parentName:"li"},"lib/deprecatedlib.php"),", which is included everywhere. If the function is a class member, it will need to be deprecated in its current location.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Deprecated behat step definitions should be moved to ",(0,i.kt)("inlineCode",{parentName:"li"},"lib/tests/behat/behat_deprecated.php"),", including a call to ",(0,i.kt)("inlineCode",{parentName:"li"},"behat_deprecated::deprecated_message()")," proposing an alternative to the deprecated method."))),(0,i.kt)("li",{parentName:"ul"},"If an entire class is being moved (for example, moving multiple class definitions from a monolithic file in to individual files), follow the process for ",(0,i.kt)("a",{parentName:"li",href:"/docs/apis/commonfiles#dbrenamedclassesphp"},"renaming classes"),"."),(0,i.kt)("li",{parentName:"ul"},"A debugging message should be added to the function so that, when ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Debugging"},"developer debugging mode")," is on, attention is drawn to the deprecation. The message should state that the function being called has been deprecated. The message should help a developer whose code currently calls the function that has gone. Tell them what they should do instead.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," debugging('foobar() is deprecated. Please use foobar::blah() instead.', DEBUG_DEVELOPER);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the deprecated function has been replaced with a new function, ideally the new function should be called from the deprecated function, so that the new functionality is used. This will make maintenance easier moving forward."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"@deprecated")," tag should be added to the PHPDoc for the function description so that IDEs describing the function will note that it is deprecated, documenting which version it was deprecated in and the MDL issue associated with it. See the guidelines in ",(0,i.kt)("a",{parentName:"li",href:"/general/development/policies/codingstyle#deprecated-and-todo"},"Coding style"),"."),(0,i.kt)("li",{parentName:"ul"},"If the function is an external function, then an additional deprecation-specific method needs to be created and set to return true. See the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Adding_a_web_service_to_a_plugin#Deprecation"},"adding a web service to a plugin")," docs on that process. You should continue to add the ",(0,i.kt)("inlineCode",{parentName:"li"},"@deprecated since x.x")," tag to the docs of all three of the relevant external methods (parameters, main method, returns) to make it clear to IDEs that the function is deprecated."),(0,i.kt)("li",{parentName:"ul"},"There will need to be an issue associated with the initial part of the deprecation. A second issue needs to be created to finish the job. The first issue will be linked to second issue. The second issue needs to be a sub-task of an appropriate ",(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?jql=%28summary%20~%20%22meta%22%20or%20type%20%3D%20Epic%29%20AND%20summary%20~%20%22together%20deprecated%22%20order%20by%20created&runQuery=true&clear=true"},"deprecation META"),".")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the current version is 3.1.2, the function will be marked as deprecated in 3.2 and should normally be removed for 3.6, so the second issue should be an issue in a deprecation epic for the 3.6 version (",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-54740"},"MDL-54740"),"). This second issue should include instructions on how to remove the function so that when it comes time to do so, the task is trivial for any developer."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check the body of the function being deprecated and look for additional function calls which have no other non-deprecated uses and may also be considered for deprecation. If they belong to the same code area they can be deprecated in the same issue."),(0,i.kt)("li",{parentName:"ul"},"Last but not least, every deprecation should be documented in the corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"upgrade.txt")," files ",(0,i.kt)("strong",{parentName:"li"},"at least")," once but, ",(0,i.kt)("strong",{parentName:"li"},"ideally"),", both on this initial/immediate deprecation and also on the final deprecation/removal.")),(0,i.kt)("p",null,"Apart from the previous points, there are a few more optional but highly recommended steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"@todo")," tag can be added linking to the issues created for further action."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"@see")," tag can be added to point to the new apis that can be used.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Longer deprecation periods can be considered for functions that are widely used."))),(0,i.kt)("h3",{id:"step-2-final-deprecation"},"Step 2. Final deprecation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a function has been marked as deprecated for ",(0,i.kt)("inlineCode",{parentName:"li"},"3.[x]")," (eg. 3.1) and set for removal at ",(0,i.kt)("inlineCode",{parentName:"li"},"3.[x + 4]")," (eg. 3.5), soon after the release of ",(0,i.kt)("inlineCode",{parentName:"li"},"3.[x + 3].1")," (eg. 3.4.1), the ",(0,i.kt)("inlineCode",{parentName:"li"},"3.[x + 4]")," deprecation META will be processed. This means that the deprecated function will undergo final deprecation before ",(0,i.kt)("inlineCode",{parentName:"li"},"3.[x + 4]"),", but only in the master version. This allows any potential regressions caused by the final deprecation of the function to be exposed as soon as possible."),(0,i.kt)("li",{parentName:"ul"},"When a function undergoes final deprecation, all content of the function should be removed. In the skeleton that remains, an error statement should be included that indicates that the function cannot be used anymore. You can also direct developers to the new function(s) in this message.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," throw new coding_exception('check_potential_filename() can not be used any more, please use new file API');\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All function parameters should be removed"),(0,i.kt)("li",{parentName:"ul"},"The content of the PHPDoc should be removed, leaving only the ",(0,i.kt)("inlineCode",{parentName:"li"},"@deprecated")," tag with the notice and, optionally, the replacement information. This includes all ",(0,i.kt)("inlineCode",{parentName:"li"},"@param"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@return"),", and other tags, as well as the description."),(0,i.kt)("li",{parentName:"ul"},"External functions deprecation process is different from the standard deprecation and functions should be completely removed."),(0,i.kt)("li",{parentName:"ul"},"Last but not least, every deprecation should be documented in the corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"upgrade.txt")," files ",(0,i.kt)("strong",{parentName:"li"},"at least")," once but, ",(0,i.kt)("strong",{parentName:"li"},"ideally"),", both on the initial/immediate deprecation and also on this final deprecation/removal.")),(0,i.kt)("h2",{id:"parameters-deprecation"},"Parameters deprecation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The deprecated parameter should be renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"$unused")," and it's default value changed to ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},"The respective parameter phpDoc should be updated stating the parameter has been deprecated since version X.X and should not be used any more.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," @param null $unused This parameter has been deprecated since 4.0 and should not be used anymore.\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Remember the phpDoc parameter type should also be updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Show a debugging message if that parameter is being provided in the function call:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," if ($unused !== null) {\n     debugging('Deprecated argument passed to ' . __FUNCTION__, DEBUG_DEVELOPER);\n }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update all calls to the affected function removing the deprecated parameter."),(0,i.kt)("li",{parentName:"ul"},"Add a mention to corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"upgrade.txt")," documenting the deprecated method should not be used any more.")),(0,i.kt)("h2",{id:"see-also"},"See also..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/projects/api/string-deprecation"},"String deprecation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Adding_a_web_service_to_a_plugin#Deprecation"},"External functions deprecation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/development/process"},"Process")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/development/process/release"},"Release process"))))}u.isMDXComponent=!0}}]);