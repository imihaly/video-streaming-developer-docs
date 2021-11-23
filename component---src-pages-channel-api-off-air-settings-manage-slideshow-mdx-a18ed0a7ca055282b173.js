"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6213],{10289:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return p},default:function(){return m}});var n=a(63366),l=(a(67294),a(64983)),r=a(55602),i=["components"],p={},o={_frontmatter:p},d=r.Z;function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)(d,Object.assign({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Get Slideshow"),(0,l.kt)("p",null,"Returns the slideshow images"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channelId}/settings/off-air/slideshow.json\n")),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with a ",(0,l.kt)("inlineCode",{parentName:"p"},"slideshow")," array of the following key-value pairs."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Filename")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"createdAt")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Upload time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"URL")))),(0,l.kt)("p",null,"Example of a success response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "slideshow": [\n    {\n      "id": "6867410",\n      "title": "Image 1",\n      "fileName": "44203712_223x223_1611153920.jpg",\n      "createdAt": "2021-01-20 06:45:25",\n      "url": "https://ustvstaticcdn1-a.akamaihd.net/images/uphoto_file/4/4/2/0/44203712/th/smalls2_120_44203712_223x223_1611153920.jpg"\n    },\n    ...\n  ]\n}\n')),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token could not access the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Reorder Slideshow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channelId}/settings/off-air/slideshow.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"slideshow")),(0,l.kt)("td",{parentName:"tr",align:null},"int[]"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("td",{parentName:"tr",align:null},"Slideshow image ids")))),(0,l.kt)("p",null,"The Content-Type of the request should be ",(0,l.kt)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You have to send every image id. For removing images use the ",(0,l.kt)("a",{parentName:"strong",href:"/channel-api-off-air-settings/manage-slideshow#delete-image"},"Delete image")," call.")),(0,l.kt)("p",null,"Example of the request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /channels/1234/settings/off-air/slideshow.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nslideshow[]=123979122&slideshow[]=124044209\n")),(0,l.kt)("p",null,"Note that the token in the above call is only an example."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bad_request")),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid ",(0,l.kt)("inlineCode",{parentName:"td"},"slideshow"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token could not access the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Upload a new slideshow image"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST https://api.video.ibm.com/channels/{channelId}/settings/off-air/images.json\n")),(0,l.kt)("h3",null,"Request"),(0,l.kt)("p",null,"The image must be passed in the HTTP body as binary data."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Supported image types:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"image/jpeg"),(0,l.kt)("li",{parentName:"ul"},"image/png"),(0,l.kt)("li",{parentName:"ul"},"image/gif"))),(0,l.kt)("li",{parentName:"ul"},"Maximum image size: 10 MB")),(0,l.kt)("p",null,"CURL example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'https://git.api.video.ibm.com.lh/channels/1234/settings/off-air/images.json' \\\n--header 'Authorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950' \\\n--header 'Content-Type: image/png' \\\n--data-binary '@/path/to/your/new/slideshow/image.png'\n")),(0,l.kt)("p",null,"Note that the token in the above call is only an example."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success the response body is empty with an HTTP Status code of 201."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bad_request")),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid (eg. too large image)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token could not access the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Get a slideshow image"),(0,l.kt)("p",null,"Returns a slideshow image"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channelId}/settings/off-air/images/{imageId}.json\n")),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under ",(0,l.kt)("inlineCode",{parentName:"p"},"image"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Filename")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"createdAt")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Upload time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"URL")))),(0,l.kt)("p",null,"Example of a success response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "image": {\n    "id": "6867410",\n    "title": "Image 1",\n    "fileName": "44203712_223x223_1611153920.jpg",\n    "createdAt": "2021-01-20 06:45:25",\n    "url": "https://ustvstaticcdn1-a.akamaihd.net/images/uphoto_file/4/4/2/0/44203712/th/smalls2_120_44203712_223x223_1611153920.jpg"\n  }\n}\n')),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token could not access the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Image not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Change image title"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channelId}/settings/off-air/images/{imageId}.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("td",{parentName:"tr",align:null},"Title, maximum length: 50")))),(0,l.kt)("p",null,"The Content-Type of the request should be ",(0,l.kt)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),(0,l.kt)("p",null,"Example of the request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUT /channels/1234/settings/off-air/images/6867410.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\ntitle=New title\n")),(0,l.kt)("p",null,"Note that the token in the above call is only an example."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bad_request")),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid ",(0,l.kt)("inlineCode",{parentName:"td"},"title"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token could not access the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Image not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Delete image"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE https://api.video.ibm.com/channels/{channelId}/settings/off-air/images/{imageId}.json\n")),(0,l.kt)("p",null,"Example of the request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE /channels/1234/settings/off-air/images/6867410.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\n")),(0,l.kt)("p",null,"Note that the token in the above call is only an example."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token could not access the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Image not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-off-air-settings-manage-slideshow-mdx-a18ed0a7ca055282b173.js.map