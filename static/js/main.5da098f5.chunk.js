(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,o){},174:function(e,t,o){},180:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),s=o(12),i=o.n(s),r=(o(93),o(17)),l=o(18),c=o(21),u=o(19),p=o(20),k=o(184),h=o(185),m=(o(62),o(14)),d=o.n(m),f=(o(136),o(57)),g=o.n(f),b=(o(148),o(59)),v=o.n(b),I=o(183),P=o(32),W=new P.Cordova({timeout:-1,json:!0,mock:!1,mockData:{WorkPlus_Auth:{getUserTicket:function(e){return{user_ticket:"mock_ticket"}},getAccessToken:function(e){return{access_token:"mock_token"}}},WorkPlus_Image:{selectImage:function(e){return{image:"xxxx"}}}}});W.interceptors.before.use(function(e){return console.log(e),e},function(e){return console.log(e)}),W.interceptors.after.use(function(e){return console.log(e),e},function(e){return console.log(e)});var _=W.create("WorkPlus_Image","selectImage"),w=function(e){return W.create("WorkPlus_WebView","title",[e])()},y=W,E=y.addHook("WorkPlus_Auth"),C=[{title:"\u83b7\u53d6\u4e34\u65f6ticket\u63a5\u53e3",page:"base",tips:"\u4e3a\u5f53\u524d\u767b\u5f55\u7528\u6237\u83b7\u53d6\u4e00\u4e2a\u4e34\u65f6\u6027\u7684ticket",options:{action:"getUserTicket",params:[],hook:"WorkPlus_Auth",hookInstance:E}},{title:"\u83b7\u53d6\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684accessToken",page:"base",tips:"\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684accessToken",options:{action:"getAccessToken",params:[],hook:"WorkPlus_Auth",hookInstance:E}},{title:"\u83b7\u53d6\u5f53\u524dapp\u8bf7\u6c42\u540e\u53f0api\u5730\u5740",page:"base",tips:"\u901a\u8fc7\u5728params\u4e2d\u4f20\u5165\u5b57\u6bb5\u540d\uff0c\u8c03\u7528\u65b9\u6cd5\u540e\uff0c\u5c06\u4f1a\u8fd4\u56de\u5bf9\u5e94\u7684\u5b57\u6bb5\u503c\uff0c\u4f8b\u5982\u83b7\u53d6\u7ba1\u7406\u540e\u53f0\u7684API\u5730\u5740\u7b49\u3002",options:{action:"getServerInfo",params:["api_url"],hook:"WorkPlus_Auth",hookInstance:E}},{title:"\u544a\u8bc9WorkPlus\u5f53\u524d\u7684accessToken\u5df2\u8fc7\u671f",page:"base",tips:"\u82e5\u8c03\u7528\u8be5\u65b9\u6cd5\uff0cApp\u5c06\u4f1a\u5f39\u6846\u8bf7\u6c42\u9000\u51fa\u91cd\u65b0\u767b\u5f55",options:{action:"onAccessTokenOverdue",params:[],hook:"WorkPlus_Auth",hookInstance:E}},{title:"\u83b7\u53d6\u5f53\u524d\u7684\u79df\u6237id",page:"base",tips:"\u79df\u6237id\uff0c\u5373\u57dfid",options:{action:"getTenantID",params:[],hook:"WorkPlus_Auth",hookInstance:E}},{title:"\u83b7\u53d6\u5f53\u524d\u767b\u5f55\u7528\u6237\u6700\u57fa\u672c\u8be6\u60c5",page:"base",tips:"\u83b7\u53d6\u5f53\u524d\u767b\u5f55\u7528\u6237\u6700\u57fa\u672c\u8be6\u60c5\uff0c\u5305\u62ectoken\uff0c\u7528\u6237\u4fe1\u606f",options:{action:"getLoginUserInfo",params:[],hook:"WorkPlus_Auth",hookInstance:E}}],x=y.addHook("WorkPlus_Image"),j=[{title:"\u62cd\u7167\u8fd4\u56de",page:"base",tips:"\u62cd\u7167\uff0c\u538b\u7f29\u56fe\u7247\u540e\u76f4\u63a5\u8fd4\u56de\u56fe\u7247",options:{action:"takePhoto",params:[],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u62cd\u7167\u8fd4\u56de\u5e76\u4e14\u53ef\u7f16\u8f91",page:"base",tips:"\u62cd\u7167\uff0c\u622a\u56fe\u8fd4\u56de",options:{action:"takePhotoWithEdit",params:[],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u9009\u62e9\u56fe\u7247\uff08\u5355\u5f20\uff09",page:"base",tips:"\u8c03\u7528\u56fe\u7247\u76f8\u518c\uff0c\u9009\u62e9\u56fe\u7247\u5e76\u538b\u7f29\u8fd4\u56de",options:{action:"selectImage",params:[],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u9009\u62e9\u56fe\u7247\u5e76\u622a\u56fe\u8fd4\u56de\uff08\u5355\u5f20\uff09",page:"base",tips:"\u8c03\u7528\u56fe\u7247\u76f8\u518c\uff0c\u9009\u62e9\u56fe\u7247\u5e76\u622a\u53d6\u8fd4\u56de",options:{action:"selectImageWithEdit",params:[],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u9009\u62e9\u591a\u5f20\u56fe\u7247",page:"base",tips:'\u8c03\u7528\u56fe\u7247\u76f8\u518c\uff0c\u9009\u62e9\u591a\u5f20\u56fe\u7247\u5e76\u538b\u7f29\u8fd4\u56de\uff0c\u5e76\u4e14\u652f\u6301\u9009\u8fc7\u56fe\u7247\u7684\u4f20\u8f93\uff0c[{"imageKeys":["\u56fe\u7247\u5728\u672c\u673a\u7684\u5730\u5740", "xxx",...]}]',options:{action:"selectImages",params:[],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u6e05\u9664\u538b\u7f29\u540e\u7684\u56fe\u7247",page:"base",tips:"\u62cd\u7167\u6216\u9009\u62e9\u7167\u7247\u540e\u90fd\u4f1a\u751f\u6210\u538b\u7f29\u56fe\u7247\uff0c\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u53bb\u6e05\u9664",options:{action:"cleanCompressImage",params:[],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u6279\u91cf\u9884\u89c8\u56fe\u7247",page:"base",tips:"\u4f20\u8f93\u56fe\u7247\u5730\u5740\uff0c\u9884\u89c8\u56fe\u7247",options:{action:"showImages",params:[{urls:["https://workplus.io/images/aboutme01.png","https://workplus.io/images/aboutme02.png","https://workplus.io/images/aboutme03.png"]}],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u4fdd\u5b58\u56fe\u7247",page:"base",tips:"\u4f20\u8f93\u56fe\u7247\u5730\u5740\uff0c\u4fdd\u5b58\u56fe\u7247\u3002\u652f\u6301\u5b58\u5165url\u548cmediaId",options:{action:"saveImages",params:[{url:"https://workplus.io/images/aboutme03.png"}],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u957f\u6309\u56fe\u7247\u5f39\u51fa\u6846 *",page:"base",tips:'\u5f39\u51fa\u6846\u5305\u62ec"\u8bc6\u522b\u4e8c\u7ef4\u7801", "\u4fdd\u5b58\u56fe\u7247"\u7b49\u9009\u9879\uff0c\u9700\u8981\u4f20\u5165base64\u3002',options:{action:"actionForLongPressImage",params:[{imageData:""}],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u62cd\u7167\u8fd4\u56de\u63a5\u53e3(\u5e26mediaId)",page:"base",tips:"\u65b0\u589e\u63a5\u53e3\uff0c\u62cd\u7167\u8fd4\u56de\uff0c\u6839\u636e\u4f20\u5165\u53c2\u6570\u51b3\u5b9a\u662f\u5426\u53ef\u4ee5\u8fdb\u884c\u88c1\u526a\u7f16\u8f91, \u540c\u65f6\u4f1a\u5c06\u56fe\u7247\u4e0a\u4f20\u540e\u53f0\uff0c\u8fd4\u56demediaId\u3002[\u6b64\u65b0\u589e\u63a5\u53e3\uff0cworkplus\u7248\u672c\u5fc5\u987b\u4e3a3.1.3 \u4e4b\u540e\u53ef\u7528]",options:{action:"takePicture",params:[{editable:!0}],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u9009\u62e9\u56fe\u7247\u63a5\u53e3(\u5e26mediaId)",page:"base",tips:"\u8c03\u7528\u56fe\u7247\u76f8\u518c\uff0c\u6839\u636e\u7528\u6237\u53c2\u6570\u51b3\u5b9a\u662f\u5426\u9009\u62e9\u591a\u5f20\u56fe\u7247\u6216\u5355\u5f20\u56fe\u7247\uff0c\u652f\u6301\u7f16\u8f91\u526a\u88c1(\u7f16\u8f91\u526a\u88c1\u529f\u80fd\u4ec5\u4ec5\u9650\u4e8e\u5355\u5f20\u56fe\u7247\u529f\u80fd),\u5e76\u4e14\u652f\u6301\u9009\u8fc7\u56fe\u7247\u7684\u4f20\u8f93,\u9009\u62e9\u5b8c\u540e\u4f1a\u8fdb\u884c\u540e\u53f0\u4e0a\u4f20\uff0c\u8fd4\u56de\u503c\u4e2d\u5e26\u6709\u4e0a\u4f20\u540e\u7684mediaId\u3002\n        multiple : \u662f\u5426\u662f\u591a\u9009\uff0cture(\u591a\u9009)  fals(\u5355\u9009)\n        editable : \u662f\u5426\u5bf9\u56fe\u50cf\u8fdb\u884c\u526a\u88c1 true(\u526a\u88c1)  false(\u4e0d\u526a\u88c1) \n        \u6ce8\u610f: editable \u4e3atrue\u526a\u88c1\u65b9\u5f0f\u4ec5\u5bf9\u4e8e\u5355\u9009\u56fe\u7247\u60c5\u51b5\u4e0b\u751f\u6548\uff0c\u5373multiple = false\n        imageKeys : \u53ef\u4ee5\u4f20\u9001\u4e4b\u524d\u9009\u8fc7\u7684\u56fe\u7247\n    ",options:{action:"chooseImages",params:[{multiple:!0,editable:!0}],hook:"WorkPlus_Image",hookInstance:x}},{title:"\u56fe\u7247\u6dfb\u52a0\u6c34\u5370",page:"base",tips:"\u62cd\u7167\uff0c\u751f\u6210\u6c34\u5370\u56fe\u7247\u8fd4\u56de\uff1bWorkplus 3.6.0\u7248\u672c\u4ee5\u4e0a\u4f7f\u7528\u3002",options:{action:"takePhotoAndAddWaterMark",params:[{content:"\u6211\u662fxxx",font_size:"14",color:"#FF5858"}],hook:"WorkPlus_Image",hookInstance:x}}],O=y.addHook("WorkPlus_Contact"),A=[{title:"\u5355\u9009\u8054\u7cfb\u4eba",page:"base",tips:"\u6253\u5f00\u5f53\u524d\u7ec4\u7ec7\u7684\u8054\u7cfb\u4eba\u5217\u8868\uff0c\u5355\u9009\u4e00\u4e2a\u8054\u7cfb\u4eba(\u517c\u5bb92.0\u6570\u636e)",options:{action:"getContact",params:[{hideMe:!0}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u591a\u9009\u8054\u7cfb\u4eba\u5217\u8868",page:"base",tips:"\u6253\u5f00\u5f53\u524d\u7ec4\u7ec7\u7684\u8054\u7cfb\u4eba\u5217\u8868\uff0c\u9009\u62e9\u591a\u4e2a\u8054\u7cfb\u4eba(\u517c\u5bb92.0\u6570\u636e)",options:{action:"getContacts",params:[{hideMe:!0}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u591a\u9009\u5f53\u524d\u7ec4\u7ec7\u7684\u96c7\u5458\u5217\u8868",page:"base",tips:"\u6253\u5f00\u5f53\u524d\u7ec4\u7ec7\u7684\u8054\u7cfb\u4eba\u5217\u8868\uff0c\u9009\u62e9\u591a\u4e2a\u8054\u7cfb\u4eba",options:{action:"getEmployeesFromCurrentOrg",params:[{hideMe:!0}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u5355\u9009\u8054\u7cfb\u4eba(2.0\u63a5\u53e3, 3.0\u505a\u4e86\u517c\u5bb9)",page:"base",tips:"\u6253\u5f00\u5f53\u524d\u7ec4\u7ec7\u7684\u8054\u7cfb\u4eba\u5217\u8868\uff0c\u5355\u9009\u4e00\u4e2a\u8054\u7cfb\u4eba(\u517c\u5bb92.0\u6570\u636e)",options:{action:"getContact",params:[{hideMe:!0}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u83b7\u53d6\u5f53\u524d\u767b\u5f55\u7528\u6237\u8be6\u60c5",page:"base",tips:"\u83b7\u53d6\u5f53\u524d\u767b\u5f55\u7528\u6237\u8be6\u7ec6\u4fe1\u606f(\u5305\u62ec\u67d0\u4e2a\u7ec4\u7ec7\u4e0b\u7684\u96c7\u5458\u4fe1\u606f, \u5f00\u53d1\u8005\u4f20\u53c2\u51b3\u5b9a)",options:{action:"getCurrentUserInfo",params:[{needEmpInfo:!0}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u8fd4\u56de\u5f53\u524d\u7528\u6237\u7684\u96c7\u5458\u4fe1\u606f",page:"base",tips:"\u83b7\u53d6\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684\u67d0\u4e2a\u7ec4\u7ec7\u91cc\u7684\u96c7\u5458\u4fe1\u606f\uff0c \u9ed8\u8ba4\u8fd4\u56de\u5f53\u524d\u7ec4\u7ec7\u7684\u96c7\u5458\uff0c\u53ef\u4ee5\u6307\u5b9aorgCode\u3002",options:{action:"getCurrentEmployeeInfo",params:[],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u663e\u793a\u4e0e\u8be5\u7528\u6237\u7684\u804a\u5929\u9875\u9762 *",page:"base",tips:"\u8f7b\u5e94\u7528\u8f93\u5165userId\uff0cdomianId, \u8df3\u8f6c\u5230workplus\u4e0e\u8be5\u7528\u6237\u7684\u804a\u5929\u9875\u9762",options:{action:"showUserChatViewByUser",params:[{userId:"\u8bf7\u81ea\u884c\u8f93\u5165",domainId:"\u8bf7\u81ea\u884c\u8f93\u5165"}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u83b7\u53d6\u624b\u673a\u901a\u8baf\u5f55\u91cc\u9762\u7684\u8054\u7cfb\u4eba\u5217\u8868",page:"base",tips:"\u83b7\u53d6\u624b\u673a\u901a\u8baf\u5f55\u8054\u7cfb\u4eba\u7684\u5217\u8868",options:{action:"getMobileContacts",params:[],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u6839\u636e\u7528\u6237id\u83b7\u53d6\u7528\u6237\u4fe1\u606f *",page:"base",tips:"\u901a\u8fc7\u7528\u6237\u57dfid\u548c\u7528\u6237id\u83b7\u53d6\u8fd9\u4e2a\u7528\u6237\u7684\u8be6\u7ec6\u4fe1\u606f",options:{action:"getUserInfoByUserId",params:[{user_id:"\u8bf7\u81ea\u884c\u8f93\u5165",domain_id:"\u8bf7\u81ea\u884c\u8f93\u5165"}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u5c55\u793a\u7528\u6237\u8be6\u60c5\u9875\u9762 *",page:"base",tips:"\u901a\u8fc7\u7528\u6237username\u5c55\u793a\u8fd9\u4e2a\u7528\u6237\u7684\u8be6\u60c5\u9875\u9762",options:{action:"showUserInfoByUsername",params:[{username:"\u8bf7\u81ea\u884c\u8f93\u5165"}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u6253\u5f00\u7fa4\u7ec4\u804a\u5929\u9875\u9762 *",page:"base",tips:"\u901a\u8fc7\u7fa4\u7ec4id\u6253\u5f00\u8be5\u7fa4\u7ec4\u7684\u804a\u5929\u9875\u9762\uff0c\u5e76\u4e14\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53d1\u9001\u5e94\u7528\u6240\u652f\u6301\u7684\u6d88\u606f\uff1bWorkPlus\u7248\u672c3.1.4\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528\u3002",options:{action:"openDiscussionById",params:[{discussionId:"0629aad170784c9e810985c443fb0bd6",body_type:"SHARE",body:{display_avatar:"***",share_type:"LINK",share_message:{avatar:"http://www.icon",digest:"\u8fd9\u91cc\u663e\u793a\u6458\u8981",url:"www.baidu.com"}}}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u521b\u5efa\u7fa4\u7ec4",page:"base",tips:"\u901a\u8fc7\u8c03\u7528\u539f\u751f\u9009\u4eba\u754c\u9762\uff0c\u9009\u62e9\u4eba\u5458\uff0c\u521b\u5efa\u7fa4\u7ec4\uff0c\u5e76\u4e14\u8fd4\u56de\u76f8\u5173\u7fa4\u7ec4\u4fe1\u606f\uff1bWorkPlus\u7248\u672c3.1.4\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528\u3002",options:{action:"createDiscussionChat",params:[],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u6253\u5f00\u5e94\u7528\u804a\u5929\u754c\u9762 *",page:"base",tips:"\u901a\u8fc7\u5e94\u7528id\u548corgId\u7684\uff0c\u6253\u5f00\u6539\u7ec4\u7ec7\u4e0b\u67d0\u4e2a\u5e94\u7528\u804a\u5929\u754c\u9762\uff1bWorkPlus\u7248\u672c3.4.1\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528\u3002",options:{action:"showAppChatView",params:[{app_id:"eb66ba3d-1d83-4104-8119-c6fc3b12cdca",domain_id:"atwork",org_id:"37a2ef9f-8683-4369-ae7b-121cea149d05",session_type:"service"}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u6253\u5f00\u641c\u7d22\u9875\u9762",page:"base",tips:"WorkPlus\u7248\u672c3.4.1\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528",options:{action:"searchInApp",params:[],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u6253\u5f00App\u5217\u8868\u9875\u9762 *",page:"base",tips:"\u6839\u636e\u7ec4\u7ec7id\u6253\u5f00\u8be5\u7ec4\u7ec7\u4e0b\u7684\u5e94\u7528\u5217\u8868\u9875\u9762\uff1bWorkPlus\u7248\u672c3.4.1\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528",options:{action:"showAppListById",params:[{org_id:"37a2ef9f-8683-4369-ae7b-121cea149d05"}],hook:"WorkPlus_Contact",hookInstance:O}},{title:"\u6253\u5f00\u901a\u7528\u9009\u62e9\u4eba\u5458\u754c\u9762 *",page:"base",tips:"\u533a\u522b\u4e8e\u63a5\u53e3: 1. getContact 2. getContacts 3. getEmployeesFromCurrentOrg, \u8be5\u63a5\u53e3\u6253\u5f00\u901a\u7528\u7684\u9009\u62e9\u754c\u9762,\u6b64\u754c\u9762\u80fd\u9009\u62e9\u7ec4\u7ec7\u5185\u7684\u96c7\u5458\u4fe1\u606f, \u7528\u6237\u7684\u661f\u6807\u8054\u7cfb\u4eba\u7b49\uff1bWorkPlus\u7248\u672c3.6.0\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528",options:{action:"selectContacts",params:[{maxCount:10,filterSenior:1}],hook:"WorkPlus_Contact",hookInstance:O}}],S=y.addHook("WorkPlus_Files"),F=[{title:"\u5355\u9009\u6587\u4ef6",page:"base",tips:"\u6253\u5f00WorkPlus\u6587\u4ef6\u9009\u62e9\u7ba1\u7406\u5668\uff0c\u9009\u62e9\u5355\u4e2a\u6587\u4ef6\u8fd4\u56de",options:{action:"selectFile",params:[],hook:"WorkPlus_Files",hookInstance:S}},{title:"\u591a\u9009\u6587\u4ef6",page:"base",tips:"\u6253\u5f00WorkPlus\u6587\u4ef6\u9009\u62e9\u7ba1\u7406\u5668\uff0c\u9009\u62e9\u591a\u4e2a\u6587\u4ef6\u8fd4\u56de",options:{action:"selectFiles",params:[],hook:"WorkPlus_Files",hookInstance:S}},{title:"\u6253\u5f00\u90ae\u4ef6\u9644\u4ef6 *",page:"base",tips:"\u6253\u5f00\u6307\u5b9a\u8def\u5f84\u7684\u6587\u4ef6, \u5e76\u9884\u89c8",options:{action:"openEmailAttachment",params:[{uri:"xx",type:"xxx"}],hook:"WorkPlus_Files",hookInstance:S}},{title:"\u83b7\u53d6\u90ae\u4ef6\u9644\u4ef6\u76ee\u5f55",page:"base",tips:"\u83b7\u53d6\u5f53\u524d\u767b\u5f55\u5e10\u53f7\u7684\u90ae\u4ef6\u9644\u4ef6\u76ee\u5f55",options:{action:"getEmailAttachmentDir",params:[],hook:"WorkPlus_Files",hookInstance:S}},{title:"\u6587\u4ef6\u9009\u62e9\u63a5\u53e3(\u5e26mediaId)",page:"base",tips:"\u6253\u5f00WorkPlus\u6587\u4ef6\u9009\u62e9\u7ba1\u7406\u5668\uff0c\u6839\u636e\u53c2\u6570\u72b6\u6001\u51b3\u5b9a\u5355\u9009\u6216\u591a\u9009\u6587\u4ef6\uff0c\u5e76\u4e0a\u4f20\u8be5\u6587\u4ef6\u5230\u540e\u53f0\uff0c\u8fd4\u56de\u503c\u5e26mediaId \u8bf7\u6c42\u8c03\u7528\u793a\u4f8b:",options:{action:"chooseFiles",params:[{multiple:!0}],hook:"WorkPlus_Files",hookInstance:S}},{title:"\u83b7\u53d6 workplus \u6587\u4ef6\u76ee\u5f55\u8def\u5f84",page:"base",tips:"Workplus 3.1.4\u7248\u672c\u4ee5\u4e0a\u4f7f\u7528\u3002",options:{action:"getUserFilePath",params:[{system:"file"}],hook:"WorkPlus_Files",hookInstance:S}},{title:"\u6253\u5f00\u6587\u4ef6\u8be6\u60c5 *",page:"base",tips:"\u901a\u8fc7\u6307\u5b9a mediaId, fileName \u7b49\u53c2\u6570, \u6253\u5f00\u6587\u4ef6\u8be6\u60c5\u754c\u9762",options:{action:"showFile",params:[{fileName:"xxx",fileSize:"xxx",mediaId:"Z3JvdXAxL00wMC8wOS82RS9yQkFDLUZzV1EwMkFJblF5QUFDb293akxFYjQ5NjIuanBn",isImage:!1}],hook:"WorkPlus_Files",hookInstance:S}},{title:"\u672c\u5730\u6253\u5f00\u6587\u4ef6 *",page:"base",tips:"\u539f\u751f\u6253\u5f00\u6587\u4ef6(pdf, excel, word, ppt \u7b49)",options:{action:"readFile",params:[{path:"xxx"}],hook:"WorkPlus_Files",hookInstance:S}},{title:"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728 *",page:"base",tips:"\u5224\u65ad\u6307\u5b9a\u8def\u5f84\u7684\u6587\u4ef6\u662f\u5426\u5b58\u5728",options:{action:"isFileExist",params:[{path:"xxx"}],hook:"WorkPlus_Files",hookInstance:S}}],L=y.addHook("WorkPlus_WebView"),T=[{title:"\u6253\u5f00WorkPlus\u91cc\u5df2\u6709\u7684html *",page:"base",tips:"\u4f20\u5165\u76f8\u5bf9\u5730\u5740\uff0c\u6253\u5f00WorkPlus\u91cc\u5df2\u6709\u7684\u7f51\u9875",options:{action:"openLocalURL",params:[{localURL:"\u6253\u5f00\u672c\u5730\u6240\u5728\u7684html\u6587\u4ef6\u5730\u5740"}],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u6253\u5f00\u4e00\u4e2a\u7f51\u9875",page:"base",tips:"\u4f20\u5165\u5730\u5740\uff0c\u6253\u5f00WorkPlus\u7f51\u9875",options:{action:"openWebView",params:[{url:"https://workplus.io/",title:"\u60a8\u4e13\u5c5e\u7684\u201c\u5fae\u4fe1\u201d\u548c\u79fb\u52a8\u5e94\u7528\u95e8\u6237"}],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u9501\u5b9a\u7f51\u9875\u9876\u90e8\u680f",page:"base",tips:"\u9501\u5b9a\u9876\u90e8\u680f\uff0c\u4f7f\u5f97\u9876\u90e8\u680f\u6309\u94ae\u65e0\u6548\uff0c\u53c2\u6570\u4e3a\u5b57\u7b26\u4e32lock\u548cunlock",options:{action:"navigation",params:["lock"],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u66f4\u6362\u5de6\u4fa7\u6309\u94ae\u52a8\u4f5c *",page:"base",tips:"\u66f4\u6362\u5de6\u4fa7\u7684\u6309\u94ae\u52a8\u4f5c",options:{action:"leftButton",params:["\u67d0\u4e2a\u80fd\u5728\u5168\u5c40\u8bbf\u95ee\u5f97\u4e86\u7684js\u65b9\u6cd5\u540d"],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u66f4\u6362\u53f3\u4fa7\u6309\u94ae\u52a8\u4f5c *",page:"base",tips:"\u66f4\u6362\u53f3\u4fa7\u6309\u94ae\u52a8\u4f5c",options:{action:"rightButtons",params:[[{icon:-1,title:"\u5b8c\u6210",action:"js",value:"\u67d0\u4e2a\u53ef\u5728\u5168\u5c40\u8303\u56f4\u4f7f\u7528\u7684js\u65b9\u6cd5"}]],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u66f4\u6362\u5934\u90e8title",page:"base",tips:"\u66f4\u6362\u5934\u90e8title",options:{action:"title",params:["\u8fd9\u662f\u65b0\u7684\u6807\u9898"],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u6e05\u9664\u5de6\u4fa7\u6309\u94ae",page:"base",tips:"\u6e05\u9664\u5de6\u4fa7\u6309\u94ae\u4e8b\u4ef6\u548c\u663e\u793a",options:{action:"clearLeftButton",params:[],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u6e05\u9664\u53f3\u4fa7\u6309\u94ae",page:"base",tips:"\u6e05\u9664\u53f3\u4fa7\u6309\u94ae\u4e8b\u4ef6\u548c\u663e\u793a",options:{action:"clearRightButtons",params:[],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u9000\u51fawebview",page:"base",tips:"\u5173\u95ed\u6574\u4e2awebview",options:{action:"exit",params:[],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u5f39\u51fa\u5206\u4eab\u5bf9\u8bdd\u6846",page:"base",tips:"\u5f39\u51fa\u5206\u4eab\u5bf9\u8bdd\u6846\uff0c\u8df3\u8f6c\u5206\u4eab",options:{action:"share",params:[{url:"http://www.baidu.com",title:"\u767e\u5ea6\u4e00\u4e0b",cover_media_id:""}],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u8df3\u8f6c\u5230workkplus\u7279\u5b9a\u9875\u9762 *",page:"base",tips:"\u8df3\u8f6c\u5230workkplus\u7279\u5b9a\u9875\u9762",options:{action:"toActivity",params:[{activity:"toMain",client_id:"\u7528\u6237id",next_url:"www.baidu.com",access_token:"123456789",username:"\u7528\u6237\u6ce8\u518cusername",name:"\u7528\u6237\u540d\u5b57"}],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u662f\u5426\u9690\u85cf\u6216\u663e\u793a\u5de6\u4fa7\u7684\u6309\u94ae\u548c\u5173\u95ed\u5b57\u6837",page:"base",tips:"\u662f\u5426\u9690\u85cf\u6216\u663e\u793a\u5de6\u4fa7\u7684\u6309\u94ae\u548c\u5173\u95ed\u5b57\u6837",options:{action:"visibleLeftButton",params:[{showBack:!0,showClose:!0}],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u66f4\u6362\u5de6\u4fa7\u4fa7\u6309\u94ae\u548c\u5b9a\u4e49\u52a8\u4f5c *",page:"base",tips:"\u66f4\u6362\u5de6\u4fa7\u7684\u6309\u94ae\u52a8\u4f5c\uff0c\u5728workplus3.1.3\u7248\u672c\u4e4b\u540e\u65b0\u589edisable\u53c2\u6570",options:{action:"changeLeftButton",params:[[{disable:"false",icon:-1,title:"\u6807\u9898",action:"js",value:""}]],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u63a7\u5236\u5c4f\u5e55\u65cb\u8f6c",page:"base",tips:"\u6839\u636e\u53c2\u6570\u63a7\u5236\u5c4f\u5e55\u6a2a\u5c4f\u663e\u793a\u6216\u8005\u7ad6\u5c4f\u663e\u793a\uff1bWorkPlus\u7248\u672c3.1.3\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528\u3002",options:{action:"changeOrientation",params:[{landscape:!0,lock:!1}],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u6dfb\u52a0\u6c34\u5370",page:"base",tips:"\u7ed9\u9875\u9762\u6dfb\u52a0\u6c34\u5370",options:{action:"addWaterMask",params:[{textColor:"#000000",alpha:1,verticalPadding:40,fontSize:16}],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u79fb\u9664\u6c34\u5370",page:"base",tips:"\u7ed9\u9875\u9762\u79fb\u9664\u6c34\u5370",options:{action:"removeWaterMask",params:[],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u6ce8\u518c\u6447\u4e00\u6447",page:"base",tips:"\u524d\u7aef\u9700\u8981\u5b9e\u73b0onWorkplusShake()\u65b9\u6cd5, \u5728\u8be5\u5904\u6267\u884c\u81ea\u5df1\u7684\u4e1a\u52a1, \u6447\u4e00\u6447\u540e\u5c06\u5728\u8be5\u65b9\u6cd5\u56de\u8c03.",options:{action:"registerShakeListener",params:[],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u6ce8\u9500\u6447\u4e00\u6447",page:"base",tips:"\u6ce8\u9500\u6447\u4e00\u6447\u76d1\u542c",options:{action:"unregisterShakeListener",params:[],hook:"WorkPlus_WebView",hookInstance:L}},{title:"\u5fae\u4fe1\u5206\u4eab(\u4f1a\u8bdd/\u670b\u53cb\u5708) *",page:"base",tips:"\u6839\u636e\u63a5\u53e3\u76f4\u63a5\u8c03\u8d77\u5fae\u4fe1\u5206\u4eab\u9875\u9762",options:{action:"wxShare",params:[{title:"\u8fd9\u662f\u4e00\u4e2a\u6807\u9898",type:"webpage",description:"\u8fd9\u662f\u6982\u8981\uff0c\u4f60\u4fe1\u4e0d\u4fe1",thumb:"base64://xxxxx==",scene:0,data:{url:"https://www.baidu.com"}}],hook:"WorkPlus_WebView",hookInstance:L}}],B=[{title:"\u83b7\u53d6\u5b9a\u4f4d\u4fe1\u606f",page:"base",tips:"\u8fd4\u56de\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f",options:{action:"getLocation",params:[],hook:"WorkPlus_Location",hookInstance:y.addHook("WorkPlus_Location")}}],M=[{title:"\u626b\u63cf\u4e8c\u7ef4\u7801",page:"base",tips:"\u8c03\u7528\u76f8\u673a\u626b\u63cf\u4e8c\u7ef4\u7801",options:{action:"scanner",params:[],hook:"WorkPlus_BarcodeScanner",hookInstance:y.addHook("WorkPlus_BarcodeScanner")}}],V=[{title:"\u6dfb\u52a0\u5e94\u7528 *",page:"base",tips:"\u6dfb\u52a0\u5e94\u7528",options:{action:"installApp",params:[{app_id:"\u5e94\u7528id"}],hook:"WorkPlus_AppStore",hookInstance:y.addHook("WorkPlus_AppStore")}}],H=y.addHook("WorkPlus_PublicClound"),D=[{title:"\u8df3\u8f6c\u5230\u4e2a\u4eba\u8be6\u60c5\u9875\u9762 *",page:"base",tips:"\u901a\u8fc7\u8f7b\u5e94\u7528\u6570\u636e\uff0c\u8df3\u8f6c\u5230\u4e2a\u4eba\u8be6\u60c5\u9875\u9762",options:{action:"installApp",params:[{finish_view:!1,user_id:"\u7528\u6237id",username:"\u7528\u6237username",mobile:"\u7528\u6237\u624b\u673a",domain_id:"\u7528\u6237\u57dfid"}],hook:"WorkPlus_PublicClound",hookInstance:H}},{title:"\u83b7\u53d6WorkPlus\u4fe1\u606f",page:"base",tips:"\u83b7\u53d6workplus\u7248\u672c\u4fe1\u606f",options:{action:"getAppInfo",params:[],hook:"WorkPlus_PublicClound",hookInstance:H}}],U=[{title:"\u66f4\u65b0\u76ae\u80a4 *",page:"base",tips:"\u66f4\u65b0\u5bf9\u5e94\u7ec4\u7ec7\u7684\u76ae\u80a4\u5305,\u82e5\u8be5\u7ec4\u7ec7\u662f\u5f53\u524d\u7ec4\u7ec7,\u5219\u9a6c\u4e0a\u663e\u793a\u66f4\u6362\u6548\u679c",options:{action:"changeTheme",params:[{orgCode:"\u7ec4\u7ec7id",theme:"\u4e3b\u9898\u540d\u79f0"}],hook:"WorkPlus_Theme",hookInstance:y.addHook("WorkPlus_Theme")}}],N=y.addHook("WorkPlus_DeviceInfo"),z=[{title:"\u83b7\u53d6IP\u5730\u5740",page:"base",tips:"\u83b7\u53d6\u5f53\u524d\u8fde\u63a5\u72b6\u6001\u4e0b\u7684IP\u5730\u5740",options:{action:"getIpAddress",params:[],hook:"WorkPlus_DeviceInfo",hookInstance:N}},{title:"\u83b7\u53d6\u8bbe\u5907\u4fe1\u606f",page:"base",tips:"\u83b7\u53d6\u5f53\u524d\u8bbe\u5907\u548cWorkPlus\u7684\u4e00\u4e9b\u4fe1\u606f",options:{action:"getDeviceInfo",params:[],hook:"WorkPlus_DeviceInfo",hookInstance:N}},{title:"\u83b7\u53d6\u8bbe\u5907\u7684\u8fd0\u52a8\u6570\u636e",page:"base",tips:"\u83b7\u53d6\u8bbe\u5907\u5f53\u5929\u51cc\u66680\u70b9\u81f3\u5f53\u524d\u65f6\u95f4\u7684\u8fd0\u52a8\u6570\u636e (\u4ece\u7248\u672c3.12.1\u8d77\u63d0\u4f9b)",options:{action:"getPedometerData",params:[],hook:"WorkPlus_DeviceInfo",hookInstance:N}}],R=[{title:"\u83b7\u53d6\u5f53\u524d\u8fde\u63a5Wifi\u4fe1\u606f",page:"base",tips:"\u83b7\u53d6\u5f53\u524d\u8fde\u63a5Wifi\u4fe1\u606f, \u5305\u62ec bssid, \u540d\u5b57\u7b49",options:{action:"getWifiInfo",params:[],hook:"WorkPlus_NetInfo",hookInstance:y.addHook("WorkPlus_NetInfo")}}],J=y.addHook("WorkPlus_Email"),K=[{title:"\u5199\u90ae\u4ef6 *",page:"base",tips:"\u8df3\u8f6c\u5230\u5199\u90ae\u4ef6\u7684\u9875\u9762",options:{action:"writeEmail",params:[{emails:"xxx.foreverht.com"}],hook:"WorkPlus_Email",hookInstance:J}},{title:"\u6253\u5f00\u90ae\u7bb1",page:"base",tips:"\u8df3\u8f6c\u5230\u6211\u7684\u90ae\u7bb1\uff08\u672a\u767b\u9646\u5c31\u8df3\u8f6c\u5230\u767b\u9646\u9875\uff09",options:{action:"openEmail",params:[],hook:"WorkPlus_Email",hookInstance:J}}],Q=y.addHook("WorkPlus_EventLog"),Y=[{title:"\u7528\u6237\u4fe1\u606f",hook:"WorkPlus_Auth",items:C},{title:"\u56fe\u7247",hook:"WorkPlus_Image",items:j},{title:"\u8054\u7cfb\u4eba",hook:"WorkPlus_Contact",items:A},{title:"\u6587\u4ef6",hook:"WorkPlus_Files",items:F},{title:"\u7f51\u9875",hook:"WorkPlus_WebView",items:T},{title:"\u5730\u7406\u4f4d\u7f6e",hook:"WorkPlus_Location",items:B},{title:"\u8bbe\u5907\u4fe1\u606f",hook:"WorkPlus_DeviceInfo",items:z},{title:"\u7f51\u7edc\u8fde\u63a5\u4fe1\u606f",hook:"WorkPlus_NetInfo",items:R},{title:"\u626b\u7801",hook:"WorkPlus_BarcodeScanner",items:M},{title:"\u5e94\u7528\u5e02\u573a",hook:"WorkPlus_AppStore",items:V},{title:"\u90ae\u7bb1\u63a5\u53e3",hook:"WorkPlus_Email",items:K},{title:"\u4e8b\u4ef6\u65e5\u5fd7\u63a5\u53e3",hook:"WorkPlus_EventLog",items:[{title:"\u83b7\u53d6\u5f53\u524d\u767b\u9646\u7528\u6237\u4eca\u5929\u5728\u7ebf\u65f6\u957f",page:"base",tips:"\u83b7\u53d6\u5f53\u524d\u767b\u9646\u7528\u6237\u4eca\u5929\u5728\u7ebf\u65f6\u957f",options:{action:"getTodayUseDuration",params:[],hook:"WorkPlus_EventLog",hookInstance:Q}},{title:"\u83b7\u53d6\u4e8b\u4ef6\u65e5\u5fd7\u6570\u636e",page:"base",tips:"\u6839\u636e\u4f20\u53c2\u6761\u4ef6, \u8fd4\u56de\u5bf9\u5e94\u7684\u4e8b\u4ef6\u65e5\u5fd7\u6570\u636e.",options:{action:"getEventLogs",params:[{type:"LOCAL_EMAIL_LOGIN_CLICK"}],hook:"WorkPlus_EventLog",hookInstance:Q}}]},{title:"\u516c\u6709\u4e91",hook:"WorkPlus_PublicClound",items:D},{title:"\u4e3b\u9898",hook:"WorkPlus_Theme",items:U}],Z=o(80),G=o.n(Z),X=(o(154),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){w("Cordova")}},{key:"render",value:function(){return n.a.createElement("div",{className:"home-page"},n.a.createElement("div",{className:"banner"},n.a.createElement("img",{src:G.a,width:"70",height:"70",alt:"workplus logo"}),n.a.createElement("h1",null,"WorkPlus Cordova API"),n.a.createElement("p",null,"\u672c\u5e94\u7528\u53ea\u662f\u5bf9\u76f8\u5173\u63a5\u53e3\u529f\u80fd\u8fdb\u884c\u5c55\u793a\uff0c\u5177\u4f53\u7684\u53c2\u6570\u548c\u8bf4\u660e\uff0c\u8bf7\u4ee5\u5b98\u65b9\u6587\u6863\u4e3a\u51c6\u3002\u5e26 * \u53f7\u7684\u4f8b\u5b50\uff0c\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684\u53c2\u6570\u624d\u53ef\u6267\u884c\u3002\u6ce8\u610f\uff1a\u90e8\u5206\u63a5\u53e3\u53ea\u80fd\u5728\u7279\u5b9a\u7684\u5305\u5185\u6267\u884c\u3002")),n.a.createElement("div",{style:{padding:"0 20px"}},Y.map(function(e,t){return n.a.createElement(g.a,{key:t,className:"wp-accordion"},n.a.createElement(g.a.Panel,{header:"".concat(e.title," ").concat(e.hook)},n.a.createElement(v.a,{className:"wp-list"},e.items.map(function(e,t){return o=e,a=t,n.a.createElement(v.a.Item,{key:a,arrow:"horizontal"},n.a.createElement(I.a,{to:{pathname:"/base/".concat(o.options.hook,"/").concat(o.options.action)}},o.title));var o,a}))))})),n.a.createElement(d.a,{size:"lg"}))}}]),t}(a.Component)),$=o(10),q=function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={img:""},o.handleSelectPhoto=o.handleSelectPhoto.bind(Object($.a)(Object($.a)(o))),o}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleSelectPhoto",value:function(){var e=this;_().then(function(t){var o=t.data.key;Object(P.toBase64)(o,function(t){var o=t.target;e.setState({img:"data:image/png;base64,".concat(o._result)})})})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Image to Base64"),n.a.createElement("p",{onClick:this.handleSelectPhoto},"Select photo"),n.a.createElement("div",{style:{width:300,height:300}},n.a.createElement("img",{src:this.state.img,alt:"base64"})))}}]),t}(a.Component),ee=(o(156),o(81)),te=o.n(ee),oe=(o(162),o(60)),ae=o.n(oe),ne=(o(165),o(13)),se=o.n(ne),ie=(o(171),o(44)),re=o.n(ie),le=(o(174),o(83)),ce=o.n(le),ue=function(e,t){var o;return Y.some(function(a){if(a.hook===e)return a.items.some(function(e){if(e.options.action===t)return o=e,!0}),!0}),o},pe=o(84),ke=function(e){function t(e){var o;Object(r.a)(this,t),o=Object(c.a)(this,Object(u.a)(t).call(this,e));var a=e.match.params,n=a.hook,s=a.action;return o.hook=n,o.action=s,o.detail=ue(n,s),o.state={results:null,params:JSON.stringify(o.detail.options.params),editModel:!1},o.executeEvent=o.executeEvent.bind(Object($.a)(Object($.a)(o))),o.handleChange=o.handleChange.bind(Object($.a)(Object($.a)(o))),o.handleSetEditModel=o.handleSetEditModel.bind(Object($.a)(Object($.a)(o))),o}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(P.deviceReady)().then(function(){w(e.detail.title)})}},{key:"executeEvent",value:function(){var e=this,t=this.detail.options,o=t.hookInstance,a=t.action,n=[];try{if(n=JSON.parse(this.state.params),!Array.isArray(n))return void re.a.fail("\u53c2\u6570\u5fc5\u987b\u4e3a\u6570\u7ec4",1)}catch(s){return void re.a.fail("\u53c2\u6570\u683c\u5f0f\u6709\u8bef",1)}o.create(a,n)().then(function(t){var o=t.data;e.setState({results:o})})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({params:t})}},{key:"handleSetEditModel",value:function(){this.setState({editModel:!0})}},{key:"render",value:function(){return n.a.createElement("div",{className:"base-page page"},n.a.createElement(ae.a,{size:"lg"},n.a.createElement(d.a,{size:"lg"}),n.a.createElement(se.a,null,n.a.createElement(se.a.Header,{title:"\u63cf\u8ff0\u6216\u63d0\u793a"}),n.a.createElement(se.a.Body,null,n.a.createElement("p",null,this.detail.tips))),n.a.createElement(d.a,{size:"lg"}),n.a.createElement(se.a,null,n.a.createElement(se.a.Header,{title:"\u8c03\u7528\u53c2\u6570",extra:n.a.createElement("i",{onClick:this.handleSetEditModel,className:"icon-edit"},"\u7f16\u8f91")}),n.a.createElement(se.a.Body,null,n.a.createElement("div",{className:"base-info"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"Hook: "),this.hook),n.a.createElement("li",null,n.a.createElement("strong",null,"Action: "),this.action),n.a.createElement("li",null,n.a.createElement("strong",null,"Params: "),!this.state.editModel&&this.state.params),this.state.editModel&&n.a.createElement("li",null,n.a.createElement("textarea",{id:"eidt-params",autoFocus:!0,onChange:this.handleChange,value:this.state.params}),n.a.createElement("p",{className:"tips"},"* \u53ea\u80fd\u7f16\u8f91 Params, \u4e14\u5fc5\u987b\u4e3a\u6570\u7ec4\u3002")))))),n.a.createElement(d.a,{size:"lg"}),this.state.results&&n.a.createElement(se.a,null,n.a.createElement(se.a.Header,{title:"\u8fd0\u884c\u7ed3\u679c",extra:n.a.createElement(pe.CopyToClipboard,{onCopy:function(){return re.a.success("\u590d\u5236\u6210\u529f")},text:JSON.stringify(this.state.results)},n.a.createElement("i",{className:"icon-copy"},"\u590d\u5236"))}),n.a.createElement(se.a.Body,{style:{overflowY:"auto"}},n.a.createElement(ce.a,{name:!1,integer:2,displayDataTypes:!1,enableClipboard:!1,displayObjectSize:!1,src:this.state.results}))),n.a.createElement(d.a,{size:"lg"})),n.a.createElement(d.a,{size:"lg"}),n.a.createElement(ae.a,null,n.a.createElement(te.a,{type:"primary",onClick:this.executeEvent},"\u70b9\u51fb\u6267\u884c")),n.a.createElement(d.a,{size:"lg"}))}}]),t}(n.a.Component),he=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(k.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(h.a,{exact:!0,path:"/",component:X}),n.a.createElement(h.a,{path:"/about",component:q}),n.a.createElement(h.a,{path:"/base/:hook/:action",component:ke})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,o){!function(e,t,o){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,o=o&&o.hasOwnProperty("default")?o.default:o;var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),i=function(e){return Object.prototype.toString.call(e)},r=function(e){return"[object Function]"===i(e)},l=function(e){return"[object Object]"===i(e)&&0===Object.keys(e).length},c=function(){return"undefined"!==typeof cordova},u=function(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==("undefined"===typeof e?"undefined":a(e))&&(e=[e]),"[object Array]"===i(e))for(var o=0,n=e.length;o<n;o+=1)t.call(null,e[o],o,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)},p=function(e){try{return JSON.parse(e)}catch(t){return e}},k=function(){t(null,'Make sure that cordova.js is properly introduced and that the <script type="text/javascript" src="applocal://www/cordova.min.js"><\/script> tag is added to the html page. And make sure to perform the cordova event after deviceReady.')};function h(e){var o=e.mockData;return t(!l(o),"[codash]: mockData can not be empty"),function(e,a,n,s,i){var l=function(e,a,n){var s=o[e];if(t(s,"[codash]: '"+e+"' not found. Please check the mock data."),s){var i=o[e][a];if(t(i,"[codash]: '"+a+"' not found. Please check the mock data."),i){if(null===i)return!1;var l=r(i);if(t(l,"[codash]: '"+e+" > "+a+"' must be a function."),l)return i}}return!1}(n,s);!1!==l?e(l(i)):a()}}var m=function(e,t){return function(o){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=e.json;return{data:s?p(o):o,config:e,cordova:t,status:a,timeout:n}}};function d(e){var t=void 0,o=e.mock;if(!c()&&!o)return k(),t=m(e,null),Promise.resolve(t(null,-1));var a=c()?cordova:{};return t=m(e,a),new Promise(function(a,n){var s=e.hook,i=e.action,r=e.params,l=e.timeout,c=(e.cache,o?h(e):cordova.exec),u=!1;c(function(e){u||(u=!0,a(t(e)))},function(e){u=!0,a(t(e,-1))},s,i,r||[]),l>0&&setTimeout(function(){u||(u=!0,a(t(null,-1,!0)))},l)})}var f=function(){function e(){n(this,e),this.handlers=[]}return s(e,[{key:"use",value:function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"forEach",value:function(e){u(this.handlers,function(t){null!==t&&e(t)})}}]),e}(),g={timeout:-1,json:!0,mock:!1,mockData:{}},b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.defaultsConfig=o(g,t),this.interceptors={before:new f,after:new f}}return s(e,[{key:"handle",value:function(e){var t=o(this.defaultsConfig,e),a=[d,void 0],n=Promise.resolve(t);for(this.interceptors.before.forEach(function(e){a.unshift(e.fulfilled,e.rejected)}),this.interceptors.after.forEach(function(e){a.push(e.fulfilled,e.rejected)});a.length;)n=n.then(a.shift(),a.shift());return n}},{key:"create",value:function(e,a){var n=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(e,"Hook cannot be empty"),t(a,"Action cannot be empty");var r=o({hook:e,action:a,params:s},i);return function(){return n.handle(r)}}},{key:"addHook",value:function(e){t(e,"Hook cannot be empty"),t("[object String]"===i(e),"Hook must be a string");var o=this;return{create:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2];return o.create(e,t,a,n)}}}},{key:"version",get:function(){return cordova?cordova.version:-1}}]),e}(),v=function(){function e(){n(this,e),this.fileTransfer=new FileTransfer}return s(e,[{key:"download",value:function(e,t){var o=this,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments[3];return new Promise(function(s,i){o.fileTransfer.download(encodeURI(e),t,function(e){return s(e)},function(e){return i(e)},a,n)})}}]),e}(),I=function(){function e(t){n(this,e),this.fileTransferInstance=new FileTransfer,this.options=this.initFileUploadOptions(t)}return s(e,[{key:"initFileUploadOptions",value:function(e){var t=new FileUploadOptions;for(var o in e)t[o]=e[o];return t}},{key:"upload",value:function(e,t,o){var a=this;return new Promise(function(n,s){a.fileTransferInstance.onprogress=function(e){var t=e.loaded,a=e.total;o.progress&&r(o.progress)&&o.progress(t,a)},a.fileTransferInstance.upload(e,encodeURI(t),function(e){return 200===e.responseCode?(o.success&&r(o.success)&&o.success(e),n(e)):s(e)},function(e){o.error&&r(o.error)&&o.error(e),s(e)},a.options,trustAllHosts=!!o.trustAllHosts)})}},{key:"abort",value:function(){this.fileTransferInstance.abort()}}]),e}();e.Cordova=b,e.deviceReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.timeout,o=void 0===t?5e3:t,a=e.isMock,n=void 0!==a&&a;return new Promise(function(e,t){if(n)return console.log("[codash]: Mock device ready."),e();var a=!1;setTimeout(function(){a||e({status:-1,deviceready:!1})},o),document.addEventListener("deviceready",function(){a=!0,e()},!1)})},e.bindBackEvent=function(e){cordova.exec(null,null,"CoreAndroid","overrideBackbutton",[!0]),cordova.exec(function(t){"backbutton"===t.action&&e&&e()},null,"CoreAndroid","messageChannel",[])},e.FileDownload=v,e.FileUpload=I,e.toBase64=function(e,t,o){function a(e){o(e)}var n,s;n=e,s=t,"android"===cordova.platformId.toLowerCase()&&(n="file://"+n),window.resolveLocalFileSystemURL(n,function(e){e.file(function(e){!function(e,t){var o=new FileReader;o.onloadend=function(e){e.target._result&&(e.target._result=e.target._result.split(",")[1]),t(e)},o.readAsDataURL(e)}(e,s)},a)},a)},e.stringToJson=p,e.getFileName=function(e){return e.substr(e.lastIndexOf("/")+1)},Object.defineProperty(e,"__esModule",{value:!0})}(t,o(152),o(153))},80:function(e,t,o){e.exports=o.p+"static/media/workplus.a21ae076.png"},88:function(e,t,o){e.exports=o(180)},93:function(e,t,o){}},[[88,2,1]]]);
//# sourceMappingURL=main.5da098f5.chunk.js.map