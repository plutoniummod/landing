_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{X52e:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"default",(function(){return m}));var o=n("dhJC"),a=n("cpVT"),r=(n("q1tI"),n("7ljp")),l=n("aArQ");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i,p={__resourcePath:"docs/controllers.md",__scans:{},title:"Controller Support",layout:"index"},b=(i="Alert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",c({},e))}),u={frontMatter:p},d=l.a;function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(d,c(c(c({},u),n),{},{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",c({},{id:"controller-support"}),"Controller Support",Object(r.b)("a",c({parentName:"h1"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#controller-support"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)(b,{variant:"warning",mdxType:"Alert"},Object(r.b)("p",null,"You should disable Steam's controller support (or close Steam) before trying controllers on Plutonium.\nSimply go to Steam Settings -> Controller -> General Controller Settings and ",Object(r.b)("strong",{parentName:"p"},"untick")," the Checkboxes like shown below."),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/controllers/U1bs5Z9.png",alt:"disablesteamcontroller"})))),Object(r.b)("h2",c({},{id:"xbox-controllers"}),"Xbox Controllers",Object(r.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#xbox-controllers"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("p",null,"Xbox controllers should be plug-and-play with all our games. Simply plug your controller into your computer and open Plutonium."),Object(r.b)("h2",c({},{id:"ps4--ps5-controllers"}),"PS4 & PS5 Controllers",Object(r.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#ps4--ps5-controllers"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("p",null,"PS4 and PS5 controllers require an additional software to work outside of Steam on Windows."),Object(r.b)("p",null,"1","."," Download ",Object(r.b)("a",c({parentName:"p"},{href:"https://github.com/Ryochan7/DS4Windows/releases/latest"}),"DS4Windows"),". We recommend downloading ",Object(r.b)("inlineCode",{parentName:"p"},"DS4Windows_VERSION_x64.zip"),"."),Object(r.b)("p",null,"2","."," Open the downloaded zip, and copy the ",Object(r.b)("inlineCode",{parentName:"p"},"DS4Windows")," folder to a safe place like your Documents folder."),Object(r.b)("p",null,"3","."," Open the extracted folder, then open ",Object(r.b)("inlineCode",{parentName:"p"},"DS4Windows")),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/controllers/sxik1Bs.png",alt:"img"}))),Object(r.b)("p",null,"4","."," If you get a message like this, then hit ",Object(r.b)("inlineCode",{parentName:"p"},"Yes"),"."),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/controllers/BEqRTW4.png",alt:"error"}))),Object(r.b)("p",null,"4a","."," Your browser should open, and you want to download the Windows x64 version."),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/controllers/s2FRt73.png",alt:"img"}))),Object(r.b)("p",null,"4b","."," Open & install .NET."),Object(r.b)("p",null,"5","."," After installation, try DS4Windows again."),Object(r.b)("p",null,"6","."," Select ",Object(r.b)("inlineCode",{parentName:"p"},"Appdata")," for your SaveWhere path."),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/controllers/3EJ1wzA.png",alt:"img"}))),Object(r.b)("p",null,"7","."," Install the ViGEmBus Driver."),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/controllers/RHrY0Wu.png",alt:"img"}))),Object(r.b)("p",null,"8","."," Connect your PS4 Controller to your PC. If you are using bluetooth, follow the prompts inside DS4Windows"),Object(r.b)("p",null,"9","."," Once connected, hit Finish on the Welcome to DS4Windows screen."),Object(r.b)("p",null,"10","."," Configure your controller and start DS4Windows in the main window."),Object(r.b)("p",null,"11","."," Go in game and see if your controller works!"),Object(r.b)("p",null,"Note that DS4Windows must be running to detect your controller so make sure it is enabled on startup in the settings."),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/controllers/ps4-final.png",alt:"img"}))),Object(r.b)("h2",c({},{id:"ps3-controllers"}),"PS3 Controllers",Object(r.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#ps3-controllers"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("p",null,"Just like the other Playstation controllers PS3 controllers require an additional software to work outside of Steam on Windows.\nThere are multiple tools that you can use to get your PS3 controller working but for this guide we'll use ScpToolkit."),Object(r.b)("p",null,"1","."," Download ",Object(r.b)("a",c({parentName:"p"},{href:"https://github.com/nefarius/ScpToolkit/releases/download/v1.7.277.16103-BETA/ScpToolkit_Setup.exe"}),"ScpToolkit"),"."),Object(r.b)("p",null,"2","."," Open the downloaded setup, and click ",Object(r.b)("inlineCode",{parentName:"p"},"Next")," without changing any setting. At the end click on ",Object(r.b)("inlineCode",{parentName:"p"},"Run Driver Installer")),Object(r.b)("p",null,"3","."," Follow all the instructions on screen and make sure to read everything (initialize the dualshock controller and install the required drivers). Clicking ",Object(r.b)("inlineCode",{parentName:"p"},"Next")," will not install anything, you have to click on the install buttons showed on screen like the one in the screenshot below. You can skip the installs you don't need such as Bluetooth."),Object(r.b)("p",null,Object(r.b)("img",c({parentName:"p"},{src:"/images/docs/controllers/ps3-1.png",alt:"img"}))),Object(r.b)("p",null,"If your controller is still not working you can open ",Object(r.b)("inlineCode",{parentName:"p"},"ScpServer application")," (found in the ScpToolkit folder) and start it manually if it's not started already.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"ScpSettings application")," will let you change settings such as enabling/disabling rumble, changing the joysticks dead zone and other things."),Object(r.b)("h2",c({},{id:"switching-reload-action"}),"Switching Reload Action",Object(r.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#switching-reload-action"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("p",null,"Controller users are used to the X / Square button being used to reload but also held down to do the 'use' action.\nOn keyboard these are swapped to 2 separate keys, by default R for reload and F for use."),Object(r.b)("p",null,"To swap it do the following:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",c({parentName:"li"},{href:"/docs/opening-console"}),"Open the console")),Object(r.b)("li",{parentName:"ol"},"Enter the following:")),Object(r.b)("div",c({},{className:"remark-highlight"}),Object(r.b)("pre",c({parentName:"div"},{className:"language-cs"}),Object(r.b)("code",c({parentName:"pre"},{className:"language-cs"}),"bind r ",Object(r.b)("span",c({parentName:"code"},{className:"token operator"}),"+"),"usereload\n"))),Object(r.b)("p",null,"R should now be swapped to +usereload instead of +reload. Ensure your controller is mapped to the R button and you should be fine."),Object(r.b)("h2",c({},{id:"switching-triggersbumpers"}),"Switching Triggers/Bumpers",Object(r.b)("a",c({parentName:"h2"},{className:"text-white ml-2 no-underline opacity-70 md-autolink",href:"#switching-triggersbumpers"}),Object(r.b)("span",c({parentName:"a"},{className:"text-gray-700"}),"#"))),Object(r.b)("p",null,"You can switch the triggers and bumpers around by ",Object(r.b)("a",c({parentName:"p"},{href:"/docs/opening-console"}),"opening the console")," and pasting this in:"),Object(r.b)("div",c({},{className:"remark-highlight"}),Object(r.b)("pre",c({parentName:"div"},{className:"language-cs"}),Object(r.b)("code",c({parentName:"pre"},{className:"language-cs"}),"bind BUTTON_LSHLDR ",Object(r.b)("span",c({parentName:"code"},{className:"token string"}),'"+speed_throw"'),Object(r.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")," bind BUTTON_RSHLDR ",Object(r.b)("span",c({parentName:"code"},{className:"token string"}),'"+attack"'),Object(r.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")," bind BUTTON_LTRIG ",Object(r.b)("span",c({parentName:"code"},{className:"token string"}),'"+smoke"'),Object(r.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")," bind BUTTON_RTRIG ",Object(r.b)("span",c({parentName:"code"},{className:"token string"}),'"+frag"'),"\n"))))}m.isMDXComponent=!0},Y8TH:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/controllers",function(){return n("X52e")}])}},[["Y8TH",0,1,3,2,4,5,6]]]);