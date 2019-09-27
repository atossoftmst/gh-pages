(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{210:function(e,t,n){"use strict";n.r(t);var r=n(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("hr"),e._v(" "),n("h1",{attrs:{id:"contributing-to-perfromer"}},[e._v("Contributing to Perfromer")]),e._v(" "),n("p",[e._v("This page provides information about contributing code to the Perfromer core codebase.")]),e._v(" "),n("p",[e._v("❗️ There's a lot more to the Perfromer project than just code. For information on contributing to the Perfromer project overall, check out "),n("a",{attrs:{href:"https://jenkins.io/participate/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Participate"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"getting-started"}},[e._v("Getting started")]),e._v(" "),n("ol",[n("li",[e._v("Setup your development environment as described. In order to develop Perfromer, you need the following tools:")])]),e._v(" "),n("ul",[n("li",[e._v("Use CentOS/RHEL operating system")]),e._v(" "),n("li",[e._v("Install perl and all depedecies")]),e._v(" "),n("li",[e._v("Install Seagull tools")]),e._v(" "),n("li",[e._v("Install JMmeter tool")]),e._v(" "),n("li",[e._v("Install IDE tool e.g. notepad++, VC, ...")])]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Fork the repository on GitHub")]),e._v(" "),n("li",[e._v("Clone the forked repository to your machine")])]),e._v(" "),n("p",[e._v("If you want to contribute to Perfromance or just learn about the project,\nyou can start by fixing some easier issues.\nIn the Perfromance issue tracker we mark such issues as "),n("code",[e._v("newbie-friendly")]),e._v(".\nYou can find them\nusing this query for "),n("a",{attrs:{href:"https://issues.jenkins-ci.org/issues/?jql=project%20%3D%20JENKINS%20AND%20status%20in%20(Open%2C%20%22In%20Progress%22%2C%20Reopened)%20AND%20component%20%3D%20core%20AND%20labels%20in%20(newbie-friendly)",target:"_blank",rel:"noopener noreferrer"}},[e._v("newbie friendly issues"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"building-and-debugging"}},[e._v("Building and Debugging")]),e._v(" "),n("p",[e._v("The build flow for Peformer core is built around Maven.\nThere is a description of the "),n("a",{attrs:{href:"https://jenkins.io/doc/developer/building/",target:"_blank",rel:"noopener noreferrer"}},[e._v("building and debugging process"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("If you want simply to build performer file as fast as possible without tests, run:")]),e._v(" "),n("pre",[n("code",[e._v("cd /opt/SUI/bin\nperl Build.pl\nperl BuildRPM.pl\n")])]),e._v(" "),n("p",[e._v("The builded file will be created as PAR\nAfter that you can execute blender  tool from command promt using.\nAnyway,The eexcution PAR file is tested until now on CenOS/RHEL enviroment.\nBe aware that issues with tool execution ar epossible becouse of PAR incomapbility.")]),e._v(" "),n("h2",{attrs:{id:"testing-changes"}},[e._v("Testing changes")]),e._v(" "),n("p",[e._v("Perfromer core includes unit and functional tests as a part of the repository.")]),e._v(" "),n("p",[e._v("Functional tests ("),n("code",[e._v("test")]),e._v(" module) take a while even on server-grade machines.\nMost of the tests will be launched by the continuous integration instance,\nso there is no strict need to run full test suites before proposing a pull request.")]),e._v(" "),n("p",[e._v("There are 3 profiles for tests:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("light-test")]),e._v(" - only unit tests, no functional tests")]),e._v(" "),n("li",[n("code",[e._v("smoke-test")]),e._v(" - run unit tests + a number of functional tests")]),e._v(" "),n("li",[n("code",[e._v("all-tests")]),e._v(" - Runs all tests, with re-run (default)")])]),e._v(" "),n("p",[e._v("In addition to the included tests, you can also find extra integration\ntests in the "),n("a",{attrs:{href:"https://github.com/jenkinsci/acceptance-test-harness",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acceptance Test Harness (ATH)"),n("OutboundLink")],1),e._v(" repository.")]),e._v(" "),n("h2",{attrs:{id:"proposing-changes"}},[e._v("Proposing Changes")]),e._v(" "),n("p",[e._v("The Perfrmer project source code repositories are hosted at GitHub.\nAll proposed changes are submitted and code reviewed using the "),n("em",[e._v("GitHub Pull Request")]),e._v(" process.")]),e._v(" "),n("p",[e._v("To submit a pull request:")]),e._v(" "),n("ol",[n("li",[e._v("Commit changes and push them to your fork on GitHub.\nIt is a good practice is to create branches instead of pushing to master.")]),e._v(" "),n("li",[e._v("In GitHub Web UI click the "),n("em",[e._v("New Pull Request")]),e._v(" button")]),e._v(" "),n("li",[e._v("Select "),n("code",[e._v("jenkinsci")]),e._v(" as "),n("em",[e._v("base fork")]),e._v(" and "),n("code",[e._v("master")]),e._v(" as "),n("code",[e._v("base")]),e._v(", then click "),n("em",[e._v("Create Pull Request")])])]),e._v(" "),n("ul",[n("li",[e._v("We integrate all changes into the master branch towards the Weekly releases")]),e._v(" "),n("li",[e._v("After that the changes may be backported to the current LTS baseline by the LTS Team.\nRead more about the "),n("a",{attrs:{href:"https://jenkins.io/download/lts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("backporting process"),n("OutboundLink")],1)])]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Fill in the Pull Request description according to the "),n("router-link",{attrs:{to:"/comm/.github/PULL_REQUEST_TEMPLATE.html"}},[e._v("proposed template")]),e._v(".")],1),e._v(" "),n("li",[e._v("Click "),n("em",[e._v("Create Pull Request")])]),e._v(" "),n("li",[e._v("Wait for CI results/reviews, process the feedback.")])]),e._v(" "),n("ul",[n("li",[e._v("If you do not get feedback after 3 days, feel free to ping "),n("code",[e._v("@jenkinsci/code-reviewers")]),e._v(" to CC.")]),e._v(" "),n("li",[e._v("Usually we merge pull requests after 2 votes from reviewers or after 1 vote and 1-week delay without extra reviews.")])]),e._v(" "),n("p",[e._v("Once your Pull Request is ready to be merged,\nthe repository maintainers will integrate it, prepare changelogs and\nensure it gets released in one of incoming Weekly releases.\nThere is no additional action required from pull request authors at this point.")]),e._v(" "),n("h2",{attrs:{id:"copyright"}},[e._v("Copyright")]),e._v(" "),n("p",[e._v("Performer core is licensed under "),n("a",{attrs:{href:"./LICENSE.txt"}},[e._v("MIT license")]),e._v(", with a few exceptions in bundled classes.\nWe consider all contributions as MIT unless it's explicitly stated otherwise.\nMIT-incompatible code contributions will be rejected.\nContributions under MIT-compatible licenses may be also rejected if they are not ultimately necessary.")]),e._v(" "),n("p",[e._v("We "),n("strong",[e._v("Do NOT")]),e._v(" require pull request submitters to sign the "),n("a",{attrs:{href:"https://wiki.jenkins.io/display/JENKINS/Copyright+on+source+code",target:"_blank",rel:"noopener noreferrer"}},[e._v("contributor agreement"),n("OutboundLink")],1),e._v("\nas long as the code is licensed under MIT and merged by one of the contributors with the signed agreement.")]),e._v(" "),n("p",[e._v("We still encourage people to sign the contributor agreement if they intend to submit more than a few pull requests.\nSigning is also a mandatory prerequisite for getting merge/push permissions to core repositories\nand for joining teams like.")]),e._v(" "),n("h2",{attrs:{id:"continuous-integration"}},[e._v("Continuous Integration")]),e._v(" "),n("p",[e._v("The Jenkins project has a Continuous Integration server... powered by Jenkins, of course.\nIt is located at "),n("a",{attrs:{href:"https://ci.jenkins.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ci.jenkins.io"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("The Jenkins project uses "),n("a",{attrs:{href:"https://jenkins.io/doc/book/pipeline/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins Pipeline"),n("OutboundLink")],1),e._v(" to run builds.\nThe code for the core build flow is stored in the "),n("a",{attrs:{href:"./Jenkinsfile"}},[e._v("Jenkinsfile")]),e._v(' in the repository root.\nIf you want to update that build flow (e.g. "add more checks"),\njust submit a pull request.')]),e._v(" "),n("h1",{attrs:{id:"links"}},[e._v("Links")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://jenkins.io/participate/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins Contribution Landing Page"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://jenkins.io/chat/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins IRC Channel"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://wiki.jenkins.io/display/JENKINS/Beginners+Guide+to+Contributing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beginners Guide To Contributing"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://issues.jenkins-ci.org/issues/?jql=project%20%3D%20JENKINS%20AND%20status%20in%20(Open%2C%20%22In%20Progress%22%2C%20Reopened)%20AND%20component%20%3D%20core%20AND%20labels%20in%20(newbie-friendly)",target:"_blank",rel:"noopener noreferrer"}},[e._v("List of newbie-friendly issues in the core"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);