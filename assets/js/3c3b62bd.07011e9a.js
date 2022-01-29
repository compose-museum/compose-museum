"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[659],{3905:function(A,e,t){t.d(e,{Zo:function(){return c},kt:function(){return p}});var n=t(7294);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function g(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,o=function(A,e){if(null==A)return{};var t,n,o={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(o[t]=A[t]);return o}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(o[t]=A[t])}return o}var s=n.createContext({}),l=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):g(g({},e),A)),t},c=function(A){var e=l(A.components);return n.createElement(s.Provider,{value:e},A.children)},a={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},B=n.forwardRef((function(A,e){var t=A.components,o=A.mdxType,r=A.originalType,s=A.parentName,c=i(A,["components","mdxType","originalType","parentName"]),B=l(t),p=o,I=B["".concat(s,".").concat(p)]||B[p]||a[p]||r;return t?n.createElement(I,g(g({ref:e},c),{},{components:t})):n.createElement(I,g({ref:e},c))}));function p(A,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof A||o){var r=t.length,g=new Array(r);g[0]=B;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=A,i.mdxType="string"==typeof A?A:o,g[1]=i;for(var l=2;l<r;l++)g[l]=t[l];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}B.displayName="MDXCreateElement"},5355:function(A,e,t){t.r(e),t.d(e,{contentTitle:function(){return s},default:function(){return B},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),g=["components"],i={title:"Row"},s=void 0,l={unversionedId:"layout/row",id:"layout/row",title:"Row",description:"Row \u4f1a\u5c06\u91cc\u9762\u7684\u5b50\u9879\u653e\u5728\u4e00\u4e2a\u6c34\u5e73\u7684\u5e8f\u5217\u4e2d",source:"@site/docs/layout/row.mdx",sourceDirName:"layout",slug:"/layout/row",permalink:"/docs/layout/row",editUrl:"https://github.com/compose-museum/hello-compose/tree/master/docs/layout/row.mdx",tags:[],version:"current",frontMatter:{title:"Row"},sidebar:"docs",previous:{title:"ModalBottomSheetLayout",permalink:"/docs/layout/modalbottomsheetlayout"},next:{title:"Scaffold",permalink:"/docs/layout/scaffold"}},c=[],a={toc:c};function B(A){var e=A.components,t=(0,o.Z)(A,g);return(0,r.kt)("wrapper",(0,n.Z)({},a,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable inline fun Row(\n    modifier: Modifier = Modifier, \n    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start, \n    verticalAlignment: Alignment.Vertical = Alignment.Top, \n    content: RowScope.() -> Unit\n): Unit\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Row")," \u4f1a\u5c06\u91cc\u9762\u7684\u5b50\u9879\u653e\u5728\u4e00\u4e2a\u6c34\u5e73\u7684\u5e8f\u5217\u4e2d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Row")," \u5e03\u5c40\u80fd\u591f\u6839\u636e\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"RowScope.weight")," \u4fee\u6539\u5668\u63d0\u4f9b\u7684\u6743\u91cd\u6765\u5206\u914d\u91cc\u9762\u5b50\u9879\u7684\u5bbd\u5ea6"),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u5b50\u9879\u6ca1\u6709\u63d0\u4f9b\u6743\u91cd\u7684\u8bdd\uff0c\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u5b50\u9879\u9ed8\u8ba4\u7684\u5bbd\u5ea6\uff0c\u518d\u6839\u636e\u5176\u4ed6\u5269\u4f59\u6709\u6743\u91cd\u7684\u5b50\u9879\u8ba1\u7b97\u5269\u4f59\u7684\u7a7a\u95f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun RowDemo() {\n    Row {\n        Box(Modifier.size(40.dp).background(Color.Magenta))\n        Box(Modifier.size(40.dp).weight(1f).background(Color.Yellow))\n        Box(\n            Modifier.size(40.dp)\n                .weight(1f)\n                .background(Color.Green)\n        )\n    }\n}\n")),(0,r.kt)("img",{src:"data:image/png;base64,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"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"Row {\n    Box(Modifier.size(40.dp).background(Color.Magenta))\n    Box(Modifier.size(40.dp).background(Color.Yellow))\n    Box(Modifier.size(40.dp).background(Color.Green))\n}\n")),(0,r.kt)("p",null,"\u800c\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"Row")," \u91cc\u9762\u7684\u5b50\u9879\u90fd\u6ca1\u6709\u8bbe\u7f6e ",(0,r.kt)("strong",{parentName:"p"},"weight")," \u7684\u8bdd\uff0c\u5c06\u4f1a\u5c3d\u53ef\u80fd\u7684\u5c0f\uff0c\u4f7f\u91cc\u9762\u7684\u5b50\u9879\u7d27\u8d34\u5728\u4e00\u8d77"),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u6709\u70b9\u50cf ",(0,r.kt)("strong",{parentName:"p"},"xml")," \u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"wrap_content")," \u5c5e\u6027"),(0,r.kt)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb0AAACFCAIAAABAErFnAAAcv0lEQVR4Ae2dbaxl1V3Gz73nzjDyDkVKZwApxUqBAm34QEpSY4rGUCJJ49S2xpQYvxiNQcT6odRqtSYa1ACxNqa21CqGpjStURO1BtEWGUDe2sJ0xoHOVBQmDAwM3Bm4c8/1eZ7/Wnvvc9/OOueeBb48697Ze+211l7r2c8wP/5r7X32mTn77LN7FdK2bdvm5+e3nXnWe370x5584olHH3l0965dH/jg+88666yjCwtf+tKdO3fumpmZXWIaDBaOXHj05tmjW7tCZud6H73t4re8/aTrr7r3uacWrvzpMz5+2zt/8eqvP/J3L0azC6444dRTvy/yb7ns+A/90nmf/ujOh/752a1v23LDTZf8xrUPPXrXwWNP7d/695c/s+/Ir3/gwaOvLnX7X5Y//10n3vI3lx96YeG3f/6h7+w4dOUH33TDH1y8afNs02zP4y9ef/V9+5840pQ4YwfswPoOzPR61//Jhe/72XNm+8j27vzTf//UDbvnDy4uO+ucy7bc+JlLL7j4tBm2Yjqw//Av/Mi9ex97+YY/uuiMN2+54aoHorzZnnfxiV945N3NYWSef+7w9e+9b+e9h7rlg/5T39503dLs5l4PBCAEZmZmTjzx+O3bt9+74769e/eefvrpx2w+5qWXDoFFV1111Z133tk9PfL79u07ePBgUz7X5KabAQ7Zobax6fUGM73kSlSyAQrUcNPS1mVeDo72bv/U7lu/csUn7rj00fuf/fGfPGfHXU8Dmsdvnbv9/h/+5Icf2fG1Z3u9ZNDhmVcXXl188J8O7H1s/nt7Dh+6ceEjf3zR177yvYsuO+XN55/w5zfvWh+aELLznhd/7yMP/9pN77jlr971/P5X3/DGY+JvmiKXevMvH/3cb+0yNOmGkx0odgD/uD/3yV1vv/yUt1508r13/ddNP7dz5albzz/m45975/kXndqtAkCPP2nuxDds2ryljV26DdbOCyid6rkeAzKwMmNnCSBC0IZCYgo/3IyXanETupIQiWVYiUwDziySjdRwcRk11WDPPYd/dfuOd79362lvOv4v//CJv77tP1C8MD/46m37nnn6cO6D+6ceP/Jnv7Pn4P5XkV88vPTLP7Hjyu3b3vqOE598+MiXb33gnq+CsKPTP35m/8Khhz503bnnX3Lq7CxlQfIrhxe/+cCBv/jdPTv+9sDoLtzCDtiBYQee27vwm9c+eO2N5336V3YP1/Do2NP6191ywbYzT3jphYVubb/f/9jnLx0cXdq8pf/wN1b593t4/uiTu1489rhN3bOe2nfo4IGhflA7WJzpqRX+SYuPM0HJxKiAkijU7Wr9fC1uDo2aNRGdwymO+zNpuj1cyaNv333osX/5Dq5wMEj/U3jl4OCzN+5e1tPTu4988ebvNqfjr+qLv/9dsI+0HjTFIzLo8+479n/jy8/+4BXHv+envv/kU7Y89+yRf7j9mSfvf3lkuDqia1fbgf/HDjz54Pwn3v/NxaPL//nDksMHFj92zSMpehq2qMHFYLV/wv+5Z/7DF3+9Cc/iVPxjX1hYpTUIs9gbIMoUOBFvDqcMVJQ2gw63WH5Ul5sSQZGBOeAvkT7LEOtntg2254JV9vBiWRy9DJqrnIOiJfx/ZpW/p9UbN6VLvaOvDh6/60X8NmXO2AE7sEEHVoUm+sS/5VcOr0K6kcPhxIVXSk8EYfbN3oE+SU5RoeEj8KRp+8gBhxqMu3YwdPI6ByFrQI2CHjMEaJBd5flopnf2Ce9bpytX2QE7YAc24sCZx12TTycnsWKYJuksxSFRmkuIqZGpFjfzwGK72Bkk5RZ/Ekajdua5Ay/l9t7bATtgB6bswAvPN7dDOElH1Bl0XMLqH1KO6gSmhKz1FVTkppCeJuYCZRIkri9lulPeTK+/vkrX2gE7YAcmdqBDGAEzL/xxz4KgaN4VDFN3fbMV0IE4soO00pvkzvb6nfr2JOfsgB2wAxt3AIRJnRA0jDb7s+k5pMSgqG6WP0cNWTHeZIwJHUqKN1stvDneppm5OTyS6mQH7IAdqOIACAMU4dlCAUns5IOGcXu9CTfHGLoiN6GC1BQhg5vYRmZx+HHNhYXlj1yNcQVuagfsgB1Y1wEQpmERGmp5kyuFWi2M5+ETmtbtpq2sy80cb/JmUBtj8pOV3cfcu7Fnq8w5O2AH7MC0HMDng/gRIeJTCI3nupEVRDUKn1GKwG7koJW52YzPOXs6ICZ5A4s7/OneIFKhN3bADtiBKTvAD1bGsqFAGXxkVmjiRo8nFY5akZsAImSJktKWWElhOfYU7QuVupkdsAN2YAMONE8dAUpBo0EUEZrjsagiN0l0xphUyIc2FVqykD9IqMPTSBuwwafaATtgB8ocACGFHbYmIxHTIQQNAGUKgU4EVEGq+xwSxUlEEpQkxQ7b5g0lBUrdxA7YATswqQMkpMAT+yATuJSZmSLQwu4rxptQkObpEKwHj1KgGdLydQTxC+W6mR2wA3ZgAgcAnxTDaZdCuA594hVohT1X5CbXNyFLAvlWok4ATOU6bGBfKNfN7IAdsAMTOgDcEEeEZQBT8/QEocIZegxda57OSDMLAem5tiB5CZ7M8w/+F5BUhxxv7YAdsAM1HFC4SVyKQf1ZfoJIjAJKWwhlaI1QUC/eTHFmjD9YTOQMzFNoSFWrERpdbQfsgB3YoAMJOYk46S4RMZpIOlb39bgpGZym82cxHnTPWCfUU+Q5llo3tgN2wA5M6ECLHOIyAjsuJUYMF5Hm6xxvQhQUiY+8SHxCSDvRnZpZjxKIzixlvZMdsAN2oJYDM3wNG9GDl5qLm3n6ywETr8rGrhtv6jY6uQ5QipUKPolRFjIxGHWyA3bADtR1IOIzUAis1FKnuKQxEbwxgOOmNNXiJmguUpKWQUwGlhKmw5aW5VpLr8nt7IAdsAPDDrTEYY4wSvWMQBOmUJNgNXzuyqNa3OyiGwJDVzN8Ut4cO2MH7IAdqOmASBnf/hshHLk5q28D7s55X2duQhPDXgKSCwmxmJAOtONlpIAZx052wA7YgZoOxGR3QFwKSGQTCBrHKgIzVciKEalWvIlhQ4SEkJzBTmbwXg/pK9U44hJcbQfsgB0ocQALm6QO8JNxyfit5MxlbSpyE/EmYEmdYqYoKdEoyOCEZJUvU+VDO2AH7MBUHQjQRICJ78nozyGwa5cTyc8xAFqLmwx5+Zl5Sgli4nDIhhb5Q8U+sAN2wA5M34FhKg6ar5xgCMrITuTUo5MFY9fiJoZWvJkkBDrzAQjaPA1QoNFN7IAdsAMbdkDhJZ/fRMIr5FJ/DOBi+p4KSnYVudkGmLGayQA0LXo2ipHJ8kvUuo0dsAN2YFIHACDhprkbRCSpZHguPLr/itxsB5dMvSQ0Q1IkNTJbi5yzA3agsgOgTw7m0h5zYhbmcVGaKnLJWvtq3JQWiNJiK3HZimbUyV/qRWYtaS63A3bADkzNARCIQGJ/5KUyjDeZUwHeKpeANXLMWu+R6/FLkKgnYzEJhiBN1qMYWzb6197VI4VOs8HP7Ol99pLe3MvT7HPdvl7o9a7p9e5et83UK7/V+9aFvQun3q07tAP/Gx04+SS+IoPhJNnIb8gIQIE/DN5ypInDklQ33oQC8RJ8zPykKGqTPlK1W8FKJztgB+zA1B1ghCbupMBN4MENIe5FJNUXDluNmxp/gNcgJUnYUbjEYqPlWAXF46gtvCg3swN2wA4sc4C8FI1YHvNfrWYSR+LSGCiqNk9vNGdSUhvIKYVjy2x6c8YO2AE7MIkDgUoQiEjCH83UGbsFjiKoi9qR3deNN9NrN6mCXzCUsI4jkT3LHSnSDeyAHbADG3NAtASD0Av+NHxsItBEpbJBKnOTaIxf7puDEB0LDih0sgN2wA7UdQA3U0ScWC7s9/uINwkiToLzyApB88F6+7rcRFwZkhRaNury59MlbIxFhfUuxHV2wA7YgbUdSNNdIgmoDOwoo/vqbVy3dg+dmrrczMFwUtYZt8PQTqmzdsAO2IEqDmQIRbwZE/aYmyOqw49I+j/g8+lx8SmcJOyR+C3q/JIMak+pzeUS7+2AHbADU3Ygf6cQugWNZmcZMhI+ASDVlrOodrwJWRqCt62gSjqxATklHxknO2AH7MBr4IBm5TGOQMRP5eBdHykQ7YukhTKqcTNWNPk1lkBjS8fI4QJYD/Ghv1Csm9kBO2AHJnMAX2aZ4zZSB0lfb4k85sDacEbcoirarLGtxc0QwkEpJOuUiNDWztRTpeq8sQN2wA5UcYDYRICJvtO3CmnxEBNhsTJjqIyctbhJcREWSw/y0BNYD4xKK+1p3oPHAyc7YAfsQCUHxMREyQQg4kmfVcee+TRpHyWgIjcV9TZ4hBDkeRiRZuBUpcqOEup6O2AH7MCGHGhIw5vTAyEy1jfT85IM78oGqMjNIHd+UgpyUpb4BPiJT4rk7XUnO2AH7EB9BwidmPhqrPQ9wMjH5JiQKkoVucnxuZxATnJlgUmaYp8OipUWXY4b2QE7YAfWcgBUZLwmSJKQ4hOohPwSZusqWevcofK67/UQNKkm3ckiPjsApVwnO2AH7MBr4ADgE6/gZChHJAmU2rGgCeRKpNSNN4XLhHMyXtikLFxAYqbQWqLUbeyAHbADkzsQD42TQgDnIC8P6qgTwJXhsy43WzjiWallhBTiYUJ8vmlyN3ymHbADdqDEASKoRSTiTYacwVFm2AWxVJBqcZOCkCizFdoNhZNaLS0U6HQTO2AH7MAGHdBtFvSBKI4fyRGdIqBbSuubhQPU4ma6B8T7+swCo9oR5/EbmqGyLC4uvBw3swN2wA6s5gC4k4PLnGtYhPYzaeZexqNa3IQQgDKCTl2EuAnhpDvJSYzyR2HyapfpMjtgB+zA1BwANIM96jE+bqOJOikKIqUpctl4Fe+nh448SwchoS2J4uQ9VeT6MrluZQfsgB2YxAFFaYEg3p/OAFLgJnASnaUd1+JmgndohRgpao5a0Yw8S7W6nR2wA3ZgQgciVAMZCZwUaDKHHzJIN1wYkBbxqOI8nZdHfIrhXTFRFhKlmi2d7IAdsAM1HSATFWqCRsFH8IkvBY5wU7Fd4fh1uYnvAWaMmaPfHIQKoizURTTVhZLdzA7YATswtgPATiZRu2SowgCStoW91uJmRLuDxcW0oBCCV8TADD3baynU7GZ2wA7YgTEdaAkpavKuNdCD38zLcUhUb32TkfCgBSX1QWAUoCpnxrx4N7cDdsAObMCBFKsxYmPCTuBUvoXoiAFqxZsYlpo0SYc0fZsHDnN02T6ihI8LZd6PkOpqO2AH7MDEDpA0YBAxpARAIXyLVyIpjhsDRBW5CW3poXxCPRGTgSblBS1549+fs4y/RW/tgB2o6ADDOCSwsh2E0CScmKI48NS2WCNXmZsEPANgaUvCobBQ3BqaXWwH7IAdmMQBwDH4mGmpTkSmeI9cYae1uYmXKicl3Df5AClrclFq5Z0dsAN2oIYDZGYzv42oM9FJBykO7Yaja6uoxc1lESVZDkIG6kMNP1av1C3MZd7bATtgB6bsQARp3W0K3NInhZogb+S4tbjJqbk4mbi+8tvXVL8MryPluoEdsAN2YFIHAJ2gZuoAmGIUit8cvRUSqRY3oYsKoIYLnFzjDKUhcSatJaB46DImtcPn2QE7YAfWd0A4yogcBg8pJBKV4qgiN8nyjPHgI5nOEtxm59uWhdNSoetb4lo7YAfswLoOLAvSxErgU1TCiZ2HzdftRpW1nntH54SmtC2LjQHN0EWC4sfkHP3X5BZ2wA5s0IH45lw995hZCTQtRXTHkjFS5XhzkJ/OTA/lE6bAfpCfrKdcg3OMvzA3tQN2YCIHSJ3O9FwxHR/fVGFeSyzkZ+V4k2CkEjxfyiVNBJdKLEsCdSfrsYl8mPikk87q9f8NgfnEHYx74gm93ud7vflxT9tY+3N7526sA59tB/7PORCBXA7VQMsEonQ3htPkkmuuyM3Ae1bY1cP3LjdRJmW+rUTqFNts7vV+aIrdjewKUf0PjGzkBnbADlR1IN0Z4hgReAI+mUQZoGUCKs7TIUCfs1SE2XkOiS+8y5Nzqs9T+TLBbmUH7IAdmMQB0IbrhfEeD4WVwA+nwboTE3Geikd3XpebHD+tKTDuBO55J51z9xwNc7VztEq3sAN2wA5s0AEyEVFaF43pmR8W6oebklSRm2Bj+oo4rWriUHQHKGcbbJZIdBs7YAfswFQcaLmoG0EgkmJN9N1Me4vAWZGb1JLDSgSV8cym1hWaYh053pzKfxHuxA7YgfUcIGh4I4iw1G9uDJgKlmzQsinXrrqvxc0YPibhWlZIdMQzVHx+EzqpNBWuqsyFdsAO2IHpOZBjzS578iphQ6LXmZv5aoPjSR00xU0hPGsqmKJVvph8gvd2wA7YgQoOKIoTIMmjNBUmoCKKG+tOS614s73spI96ubQ52xmRVQqb29bO2QE7YAfqOCBIsmvdHAr6AEwK61hXnjoUKz+poGWGN1df0y0q7NMnLPnJplZmmyvo103sgB2wAxM4AOQwzGQAByIJTEKmClg2DohqcTPHlZqGE+nUDIaGNkpUTZefvB4nO2AH7EANBwAg0kcECgxxFHA0gxP5vHo4cvxa3Dz22OOkSgJEd+TET+z12co4VIisRt7YATtgB+o5IEJyrTDFmhqJhRHG4Y41S8rCzlrcPOONp1NER2Geuas0b9jGyQ7YATtQ2wHObZuVTM3Z8d6MWa4ZairM4ZFHKhFSi5svzc8HKENshJVZE5XlqBn5IqElF+M2dsAO2IHVHcjMjPdsKvhkQ2TSI+8Jq6ufvay0FjchcrbfpyzKjbAzBZ8EOl96RyXaEPdOdsAO2IG6DgA6KdBM44BORFA8DBkT9jIFtbh5dHGwaQ4vW4qwMgeaUMiEl70n+YSq2Fmm1q3sgB2wAxtzQPFboDI60tf28LEfBnllUVwtbs71+3ObNkGWokviUhK5jfk7MwpEC4XqdG/sgB2wA5M5APiIQkCmOIRegEkcEZb4iXe2qcnIAWpxE9jcvHlzzNGhhIgMdVlRBJr8miEnO2AH7EBlBxRHLttoSEV2bUWZjFrcRLzZ5zxdxMQWLFdkrHk6gQ+10Cq5ZUrdyg7YATswqQPkzUrc5NsvwFF8BLxw2bAaN+c2pfk4gckAObZAJTJtlMkweVInfJ4dsAN2oNSBlkE4g2uaTIrdtA2sFvKoFjfxdCnee5R1EZtivV7nAdWKNgVMg7P0r93t7IAdmNgBYDFRMnfBY0WhnKkzBZBWBqVRO7StxU28vgMqKEiPleJ72ZhVieboOqBUlDnZATtgB14bB4hFQGfx6CLXChOHlvS9lmPAcIym417WYHExTqE6op6U1ENIXGcIXsY2mnlrB+yAHajmAFcIE3e459FivAtYxUCUItAiJtXiJr9FKKJNMZOCmvhXkuPI4Wa1/0rcsR2wA10HWiCKoKzit5Pz8SPSSMTiM5zdc9bK1+JmvDJO6MTQ6UOgEK41BmpMgjo4XUuiy+2AHbADU3AgqLNym8PPwGfJQLW4CT7iSaT49soW4GlBgcIzOIP1JVLdxg7YATswoQOkEP4AQeJR3E9nYJfuWLPbFkqjBqnFTRIyeCktIVXKILStHEPpqCtxvR2wA3ZgLQfIS0KJKAo+gkN5/ZDP+cSh4LRWH215LW5CEBcRKJSD4fsx0pjp3SM6Ui0h6mQH7IAdqOtAer0mgCNKcs0QKQiFQnGoFEYZZ9NXTB5SDHb6cnfxE8ME0IOmHDWXT1+Be7QDdsAOZAcCkiRlG6upTIwiRstpVIub+XsyGl3UlhOyYn8+9t4O2AE7UNmB5i56xGqcpJOh+InYDRFdC9QRWmpxE8PGrXLhMnR10JkhmipGiHS1HbADdmCDDmju25KR7CE5E6HGQ1E1bkIklLRiuuua7fVTc9umLXfODtgBOzBFB1KoxhCTCQ9uIrrkfRcUAFbiacyOo8H622rcpBoBXuPj6VLobgiZAmIFyO3/ANZX6lo7YAfswKQOBHzIR+VaNiWgjtdvLW4mRHZIuYzl6TLGU+vWdsAO2IFJHIipbaKQPlKJfBdTCjpLIVqLmynyDbG4zKywueJGYJNpqpyxA3bADkzXAd5uIWsYaHKOmwiVBgFA+bsCU2tpqMbNLGtISRxIdCL9WrpcbgfsgB2YvgPkJzgUy4OEKEjEXS4pWzesxc0mHqYihZtcWRBM+coPShXhVTt9c9yjHbADdqDjQEJk5qNe58EAs+Gk4Nk5Yd1sLW7GxFyhr/iYRBCTfJVciDU01/27caUdsAPTciDN0xVsos+Y7+IILAoO8d51A9FRo/IrgGokgZwq8EvF5GhI7Yy2oqBT56wdsAN2YIoOpCl5t0dCE5QCiIiq4Ge3fs18tXgzRGAbyiBAlESoOeCXWLYSDc81/3JcYQfswBQdCOp08UP6kFEaJLZFQKrFTa1vxutGVurIYNcFhNgpmuOu7IAdsAMrHGhnvPgQTsJOYmZUAVqAVRGQanFTgydiQtsydrafFM0LDSsu0gV2wA7YgSk6sNS8FQP8AZFAycESXpTBl8ghCZpl1MTHjaaoq9sVXkDfJXcwHFuW5nBT2uMGUvdU5+2AHbAD03dgRrQjJXO8iTizWUcUmYqCTSirxU3cnIrrlsiWodBFoarrbqdvknu0A3bADnQdIHEw++UmBXAtmbjIiZAzw6l72ir5WtxcMRQEMuGuEFLkIybuztlTuXd2wA7YgSk7IFgCQUIRblCze2wCQPG8DwpTUDdi7FrcFLmpgcKYApJDRGfArAYjNLraDtgBO7BRBxIg2Y3uA5FRKQsQ6bHy4iFqcRPPtpPsXOVU4pFAT1gynzeq9cYO2AE7UNMBIpLUYVJYyYOI5yJ4w6vWSdLXN97U+gEE8pc/ii2pFLqgLOOUF+FkB+yAHajuAAK3xCPissNHRp+AVKQyGbXiTb4WVEoCoFrTbMWFtgg9y3S6lR2wA3Zgcgdm8Kpiwohrhkpp4qtjRXKobipHjVOLmwI7BmesyUS687eL+VTl2FMOeWMH7EA9B0ieNNFNARwgSSQN9PGcZqGzTEEtbmpe3rJd8KRKas3spGiUqK5MrVvZATtgByZ3QPBMxAGHGIFmAEWIl+E0Yoh63ETPDRGZIS55s4ihZ5Yak/gREl1tB+yAHdiwA5zzkpOpo/gUOHGkig6uCkaqxc12aC7B8kj6+NQU8Bm1cQH5MtoznLMDdsAOTNmBWNccgD8d8IhNPE4YYnRXMm4tbjL8DQHaasE1CjqypLVzXCLYbeyAHbADkzhA3uD7K/NsN24CZWCCp0BROhrZey1uiun8ms30CCc0SWZopSwoTEgdKdIN7IAdsAMbdSBCtByocc/5b+YovxOY0+Jcv+5otbiZmA4R+oGWJgJOyljOVCRz3WtwpR2wA3agxAGBiMwJCiGMwye/eWIUEVJFQKrFTVBcl5Hi3hRrcvLeykp1bUHJhbuNHbADdmBsBxoe8TFOHqiA8Mkc6qBpZO/VuBkjhySRkVp52D6HlJok2SOluoEdsAN2YEIHOoRkdBnTXW0DT7GOmMpHjlGLm4JhjjmbYJhypLKB/EiBbmAH7IAdmIYDKUIDgZCL6JJ5JnQf28Jxan0vW4TCWHbNy5jSI2amqbouggUqLJTrZnbADtiByRxIpEnhnEAZKE0zdD7R2e8XIbFWvAkcQpJUxYafbRoMFnHBWWQCZnqaajInfJYdsAN2oMiBmJRjq4zoGXEdeBr8RDdz/X5JZ0VwLelolTYEZw5+JS3fFCL3icv0cdFVTnWRHbADdmCaDvBrhIaeeWfnKQTlPuI5vE2uZND/BqCpUcIlmd7VAAAAAElFTkSuQmCC"}))}B.isMDXComponent=!0}}]);