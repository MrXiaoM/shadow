(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{307:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"filtering-shadow-jar-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filtering-shadow-jar-contents"}},[e._v("#")]),e._v(" Filtering Shadow Jar Contents")]),e._v(" "),t("p",[e._v("The final contents of a shadow JAR can be filtered using the "),t("code",[e._v("exclude")]),e._v(" and "),t("code",[e._v("include")]),e._v(" methods inherited from Gradle's\n"),t("code",[e._v("Jar")]),e._v(" task type.")]),e._v(" "),t("p",[e._v("Refer to the "),t("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.bundling.Jar.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jar"),t("OutboundLink")],1),e._v(" documentation for details\non the various versions of the methods and their behavior.")]),e._v(" "),t("p",[e._v("When using "),t("code",[e._v("exclude")]),e._v("/"),t("code",[e._v("include")]),e._v(" with a "),t("code",[e._v("ShadowJar")]),e._v(" task, the resulting copy specs are applied to the "),t("em",[e._v("final")]),e._v(" JAR\ncontents.\nThis means that, the configuration is applied to the individual files from both the project source set or "),t("em",[e._v("any")]),e._v("\nof the dependencies to be merged.")]),e._v(" "),t("div",{staticClass:"language-groovy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Exclude a file from Shadow Jar")]),e._v("\nshadowJar "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   exclude "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a2.properties'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Excludes and includes can be combined just like a normal "),t("code",[e._v("Jar")]),e._v(" task, with "),t("code",[e._v("excludes")]),e._v(" taking precedence over "),t("code",[e._v("includes")]),e._v(".\nAdditionally, ANT style patterns can be used to match multiple files.")]),e._v(" "),t("div",{staticClass:"language-groovy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Configuring output using ANT patterns")]),e._v("\nshadowJar "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   include "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'*.jar'")]),e._v("\n   include "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'*.properties'")]),e._v("\n   exclude "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'a2.properties'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);