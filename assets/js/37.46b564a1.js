(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{317:function(t,e,n){"use strict";n.r(e);var a=n(14),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"using-shadow-in-multi-project-builds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-shadow-in-multi-project-builds"}},[t._v("#")]),t._v(" Using Shadow in Multi-Project Builds")]),t._v(" "),e("p",[t._v("When using Shadow in a multi-project build, project dependencies will be treated the same as\nexternal dependencies.\nThat is a project dependency will be merged into the "),e("code",[t._v("shadowJar")]),t._v(" output of the project that\nis applying the Shadow plugin.")]),t._v(" "),e("h2",{attrs:{id:"depending-on-the-shadow-jar-from-another-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#depending-on-the-shadow-jar-from-another-project"}},[t._v("#")]),t._v(" Depending on the Shadow Jar from Another Project")]),t._v(" "),e("p",[t._v("In a multi-project build there may be one project that applies Shadow and another that\nrequires the shadowed JAR as a dependency.\nIn this case, use Gradle's normal dependency declaration mechanism to depend on the "),e("code",[t._v("shadow")]),t._v("\nconfiguration of the shadowed project.")]),t._v(" "),e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Depending On Shadow Output of Project")]),t._v("\ndependencies "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  implementation "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("project")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("':api'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configuration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadow'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);