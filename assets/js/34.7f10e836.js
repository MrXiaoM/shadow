(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{315:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"creating-a-custom-shadowjar-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-shadowjar-task"}},[t._v("#")]),t._v(" Creating a Custom ShadowJar Task")]),t._v(" "),s("p",[t._v("The built in "),s("code",[t._v("shadowJar")]),t._v(" task only provides an output for the "),s("code",[t._v("main")]),t._v(" source set of the project.\nIt is possible to add arbitrary "),s("a",{attrs:{href:"https://gradleup.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("ShadowJar")]),s("OutboundLink")],1),t._v("\ntasks to a project. When doing so, ensure that the "),s("code",[t._v("configurations")]),t._v(" property is specified to inform Shadow which\ndependencies to merge into the output.")]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Shadowing Test Sources and Dependencies")]),t._v("\ntask "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testJar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ShadowJar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  archiveClassifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tests"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  from sourceSets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output\n  configurations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("configurations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testRuntimeClasspath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The code snippet above will generate a shadowed JAR containing both the "),s("code",[t._v("main")]),t._v(" and "),s("code",[t._v("test")]),t._v(" sources as well as all "),s("code",[t._v("testRuntimeOnly")]),t._v("\nand "),s("code",[t._v("testImplementation")]),t._v(" dependencies.\nThe file is output to "),s("code",[t._v("build/libs/<project>-<version>-tests.jar")]),t._v(".")])])}),[],!1,null,null,null);s.default=e.exports}}]);