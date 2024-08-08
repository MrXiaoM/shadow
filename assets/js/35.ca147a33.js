(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{314:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("div",{staticClass:"language-groovy no-plugins extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.gradleup.shadow'")]),t._v(" version "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8.3.1-SNAPSHOT'")]),t._v("\n  id "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Alternatively, the plugin can be added to the buildscript classpath and applied:")]),t._v(" "),a("div",{staticClass:"language-groovy no-run extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("buildscript "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gradlePluginPortal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.gradleup.shadow:shadow-gradle-plugin:8.3.1-SNAPSHOT'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.gradleup.shadow'")]),t._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),t._v("\n")])])]),a("details",[a("summary",[t._v("Snapshots of the development version are available in Sonatype's snapshots repository.")]),t._v(" "),a("p"),a("div",{staticClass:"language-groovy no-run extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("buildscript "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        maven "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://oss.sonatype.org/content/repositories/snapshots/'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        classpath "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.gradleup.shadow:shadow-gradle-plugin:@snapshot-version@'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.gradleup.shadow'")]),t._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),t._v("\n")])])]),a("p")]),t._v(" "),a("p",[a("strong",[t._v("NOTE:")]),t._v(" The correct maven coordinates for each version of Shadow can be found by referencing the Gradle Plugin documentation "),a("a",{attrs:{href:"https://plugins.gradle.org/plugin/com.gradleup.shadow",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Shadow is a reactive plugin.\nThis means that applying Shadow by itself will perform no configuration on your project.\nInstead, Shadow "),a("em",[t._v("reacts")]),t._v("\nThis means, that for most users, the "),a("code",[t._v("java")]),t._v(" or "),a("code",[t._v("groovy")]),t._v(" plugins must be "),a("em",[t._v("explicitly")]),t._v(" applied\nto have the desired effect.")]),t._v(" "),a("h2",{attrs:{id:"default-java-groovy-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-java-groovy-tasks"}},[t._v("#")]),t._v(" Default Java/Groovy Tasks")]),t._v(" "),a("p",[t._v("In the presence of the "),a("code",[t._v("java")]),t._v(" or "),a("code",[t._v("groovy")]),t._v(" plugins, Shadow will automatically configure the\nfollowing behavior:")]),t._v(" "),a("ul",[a("li",[t._v("Adds a "),a("code",[t._v("shadowJar")]),t._v(" task to the project.")]),t._v(" "),a("li",[t._v("Adds a "),a("code",[t._v("shadow")]),t._v(" configuration to the project.")]),t._v(" "),a("li",[t._v("Configures the "),a("code",[t._v("shadowJar")]),t._v(" task to include all sources from the project's "),a("code",[t._v("main")]),t._v(" sourceSet.")]),t._v(" "),a("li",[t._v("Configures the "),a("code",[t._v("shadowJar")]),t._v(" task to bundle all dependencies from the "),a("code",[t._v("runtimeClasspath")]),t._v(" configuration.")]),t._v(" "),a("li",[t._v("Configures the "),a("em",[t._v("classifier")]),t._v(" attribute of the "),a("code",[t._v("shadowJar")]),t._v(" task to be "),a("code",[t._v("'all'")]),t._v(" .")]),t._v(" "),a("li",[t._v("Configures the "),a("code",[t._v("shadowJar")]),t._v(" task to generate a "),a("code",[t._v("Manifest")]),t._v(" with:\n"),a("ul",[a("li",[t._v("Inheriting all configuration from the standard "),a("code",[t._v("jar")]),t._v(" task.")]),t._v(" "),a("li",[t._v("Adds a "),a("code",[t._v("Class-Path")]),t._v(" attribute to the "),a("code",[t._v("Manifest")]),t._v(" that appends all dependencies from the "),a("code",[t._v("shadow")]),t._v(" configuration")])])]),t._v(" "),a("li",[t._v("Configures the "),a("code",[t._v("shadowJar")]),t._v(" task to "),a("em",[t._v("exclude")]),t._v(" any JAR index or cryptographic signature files matching the following patterns:\n"),a("ul",[a("li",[a("code",[t._v("META-INF/INDEX.LIST")])]),t._v(" "),a("li",[a("code",[t._v("META-INF/*.SF")])]),t._v(" "),a("li",[a("code",[t._v("META-INF/*.DSA")])]),t._v(" "),a("li",[a("code",[t._v("META-INF/*.RSA")])])])]),t._v(" "),a("li",[t._v("Creates and registers the "),a("code",[t._v("shadow")]),t._v(" component in the project (used for integrating with "),a("code",[t._v("maven-publish")]),t._v(").")])]),t._v(" "),a("h2",{attrs:{id:"shadowing-gradle-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadowing-gradle-plugins"}},[t._v("#")]),t._v(" Shadowing Gradle Plugins")]),t._v(" "),a("p",[t._v("Shadow ships with a companion task that can be used to automatically discover dependency packages and configure\nthem for relocation. This is useful in projects if you want to relocate all dependencies.")]),t._v(" "),a("p",[t._v("For more details see the section "),a("RouterLink",{attrs:{to:"/plugins/"}},[t._v("Using Shadow to Package Gradle Plugins")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);