module.exports=function(e){var i={};function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}return l.m=e,l.c=i,l.d=function(e,i,t){l.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,i){if(1&i&&(e=l(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var a in e)l.d(t,a,function(i){return e[i]}.bind(null,a));return t},l.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(i,"a",i),i},l.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},l.p="",l(l.s=0)}([function(e,i,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t,a=function(){function e(e,i){for(var l=0;l<i.length;l++){var t=i[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(i,l,t){return l&&e(i.prototype,l),t&&e(i,t),i}}(),s=l(1),o=(t=s)&&t.__esModule?t:{default:t};function m(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function y(e,i){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!=typeof i&&"function"!=typeof i?e:i}var n=l(2).emojis,r=function(e){function i(){var e,l,t;m(this,i);for(var a=arguments.length,s=Array(a),o=0;o<a;o++)s[o]=arguments[o];return l=t=y(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(s))),t.state={},y(t,l)}return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(e,i):e.__proto__=i)}(i,e),a(i,[{key:"render",value:function(){var e=this.props,i=e.data,l=e.symbol,t=e.label,a=void 0===t?"custom Emoji":t,s=e.fontSize,m=n.filter((function(e){return e.id===i}))[0];return o.default.createElement("span",{role:"img","aria-label":i&&m.label||a,style:{fontSize:s}},i&&m.emoji||l)}}]),i}(s.Component);i.default=r},function(e,i){e.exports=require("react")},function(e){e.exports=JSON.parse('{"emojis":[{"id":"FACE_WITH_TEARS_OF_JOY","emoji":"😂","label":"Face with tears of joy","type":"smileys"},{"id":"SMILING_FACE_WITH_OPEN_MOUTH_AND_SMILING_EYES","emoji":"😄","label":"Smiling face with open mouth and smiling eyes","type":"smileys"},{"id":"SMILING_FACE_WITH_OPEN_MOUTH","emoji":"😃","label":"Smiling face with open mouth","type":"smileys"},{"id":"GRINNING_FACE","emoji":"😀","label":"Grinning face","type":"smileys"},{"id":"SMILING_FACE_WITH_SMILING_EYE","emoji":"😊","label":"Smiling face with similing eye","type":"smileys"},{"id":"WINKING_FACE","emoji":"😉","label":"winking face","type":"smileys"},{"id":"SMILING_FACE_WITH_HEART_EYE","emoji":"😍","label":"Smilign face with heart eye","type":"smileys"},{"id":"FACE_THROWING_KISS","emoji":"😘","label":"Face throwing a kiss","type":"smileys"},{"id":"KISSING_FACE_WITH_CLOSING_EYE","emoji":"😚","label":"Kissing face with closing eye","type":"smileys"},{"id":"KISSING_FACE","emoji":"😗","label":"Kissing face","type":"smileys"},{"id":"FACE_WITH_TONGUE_1","emoji":"😜","label":"Face with Stuck-Out Tongue and Winking Eye","type":"smileys"},{"id":"FACE_WITH_TONGUE_2","emoji":"😝","label":"Face with Stuck-Out Tongue and Tightly-Closed Eyes","type":"smileys"},{"id":"FACE_WITH_TONGUE_3","emoji":"😛","label":"Face with Stuck-Out Tongue","type":"smileys"},{"id":"FLUSHED_FACE","emoji":"😳","label":"Flushed Face","type":"smileys"},{"id":"GRINNING_FACE_WITH_SMILIGN_EYES","emoji":"😁","label":"Grinning Face with Smiling Eyes","type":"smileys"},{"id":"PENSIVE_FACE","emoji":"😔","label":"Pensive face","type":"smileys"},{"id":"RELIEVED_FACE","emoji":"😌","label":"Relieved face","type":"smileys"},{"id":"UNAMUSED_FACE","emoji":"😒","label":"Unamused face","type":"smileys"},{"id":"DISAPPOINTED_FACE","emoji":"😞","label":"Disappointed face","type":"smileys"},{"id":"PERSEVERING_FACE","emoji":"😣","label":"Persevering Face","type":"smileys"},{"id":"CRYING_FACE","emoji":"😢","label":"Crying face","type":"smileys"},{"id":"LOUDLY_CRYING_FACE","emoji":"😭","label":"Loudly Crying Face","type":"smileys"},{"id":"SLEEPY_FACE","emoji":"😪","label":"Sleepy Face","type":"smileys"},{"id":"DISAPPOINTED_BUT_RELIEVED_FACE","emoji":"😥","label":"Disappointed but Relieved Face","type":"smileys"},{"id":"FACE_WITH_OPEN_MOUTH_AND_COLD_SWEAT","emoji":"😰","label":"Face with Open Mouth and Cold Sweat","type":"smileys"},{"id":"SMILING_FACE_WITH_OPEN_MOUTH_AND_COLD_SWEAT","emoji":"😅","label":"Smiling Face with Open Mouth and Cold Sweat","type":"smileys"},{"id":"FACE_WITH_RAISED_EYEBROW","emoji":"🤨","label":"face with raised eyebrow","type":"smileys"},{"id":"FACE_WITH_MONOCOLE","emoji":"🧐","label":"Face with monocole","type":"smileys"},{"id":"NERD_FACE","emoji":"🤓","label":"Nerd face","type":"smileys"},{"id":"SMILING_FACE_WITH_SUNGLASSES","emoji":"😎","label":"smiling face with sunglasses","type":"smileys"},{"id":"STAR_STRUCK","emoji":"🤩","label":"star-struck","type":"smileys"},{"id":"PARTYING_FACE","emoji":"🥳","label":"partying face","type":"smileys"},{"id":"SLIGHTLY_FROWNING_FACE","emoji":"🙁","label":"slightly frowning face","type":"smileys"},{"id":"FROWNING_FACE","emoji":"☹️","label":"frowning face","type":"smileys"},{"id":"FACE_WITH_STEAM_FROM_NOSE","emoji":"😤","label":"face with steam from nose","type":"smileys"},{"id":"ANGRY_FACE","emoji":"😠","label":"angry face","type":"smileys"},{"id":"POUTING_FACE","emoji":"😡","label":"pouting face","type":"smileys"},{"id":"FACE_WITH_SYMBOLS_ON_MOUTH","emoji":"🤬","label":"face with symbols on mouth","type":"smileys"},{"id":"EXPLODING_HEAD","emoji":"🤯","label":"exploding head","type":"smileys"},{"id":"HOT_FACE","emoji":"🥵","label":"hot face","type":"smileys"},{"id":"FACE_SCREAMING_IN_FEAR","emoji":"😱","label":"face screaming in fear ","type":"smileys"},{"id":"FEARFUL_FACE","emoji":"😨","label":"fearful face","type":"smileys"},{"id":"HUGGING_FACE","emoji":"🤗","label":"hugging face","type":"smileys"},{"id":"THINKING_FACE","emoji":"🤔","label":"thinking face","type":"smileys"},{"id":"FACE_WITH_HAND_OVER_MOUTH","emoji":"🤭","label":"face with hand over mouth","type":"smileys"},{"id":"YAWNING_FACE","emoji":"🤭","label":"yawning face","type":"smileys"},{"id":"SHUSHING_FACE","emoji":"🤫","label":"shushing face ","type":"smileys"},{"id":"LYING_FACE","emoji":"🤥","label":"lying face","type":"smileys"},{"id":"FACE_WITHOUT_MOUTH","emoji":"😶","label":"face without mouth ","type":"smileys"},{"id":"NEUTRAL_FACE","emoji":"😐","label":"neutral face","type":"smileys"},{"id":"EXPRESSIONLESS_FACE","emoji":"😑","label":"expressionless face","type":"smileys"},{"id":"GRIMACING_FACE","emoji":"😬","label":"grimacing face ","type":"smileys"},{"id":"FACE_WITH_ROLLING_EYES","emoji":"🙄","label":"face with rolling eyes ","type":"smileys"},{"id":"MONEY_MOUTH_FACE","emoji":"🤑","label":"money mouth face","type":"smileys"},{"id":"SMILING_FACE_WITH_HORNS","emoji":"😈","label":"smilign face with horns ","type":"smileys"},{"id":"PILE_OF_POO","emoji":"💩","label":"pile of poo","type":"smileys"},{"id":"GHOST","emoji":"👻","label":"ghost","type":"smileys"},{"id":"SKULL","emoji":"💀","label":"skull","type":"smileys"},{"id":"ALIEN","emoji":"👽","label":"Alien","type":"smileys"},{"id":"ROBOT","emoji":"🤖","label":"robot","type":"smileys"},{"id":"PALMS_UP_TOGETHER","emoji":"🤲","label":"palms up together ","type":"smileys"},{"id":"OPEN_HANDS","emoji":"👐","label":"Open hands","type":"smileys"},{"id":"RAISING_HANDS","emoji":"🙌","label":"raising hands ","type":"smileys"},{"id":"CLAPPING_HANDS","emoji":"👏","label":"clapping hands ","type":"smileys"},{"id":"HANDSHAKE","emoji":"🤝","label":"handshake","type":"smileys"},{"id":"THUMBS_UP","emoji":"👍","label":"thumbs up","type":"smileys"},{"id":"THUMBS_DOWN","emoji":"👎","label":"thumbs down","type":"smileys"},{"id":"ONCOMING_FIST","emoji":"👊","label":"oncoming fist","type":"smileys"},{"id":"RAISED_FIST","emoji":"✊","label":"raised fist","type":"smileys"},{"id":"LEFT_FACING_FIST","emoji":"🤛","label":"left facing fist","type":"smileys"},{"id":"RIGHT_FACING_FIST","emoji":"🤜","label":"right facing fist ","type":"smileys"},{"id":"CROSSED_FINGERS","emoji":"🤞","label":"Crossed fingers","type":"smileys"},{"id":"VICTORY_HAND","emoji":"✌️","label":"victory hand ","type":"smileys"},{"id":"LOVE_YOU_GESTURE","emoji":"🤟","label":"love you gesture","type":"smileys"},{"id":"OK_HAND","emoji":"👌","label":"ok hand","type":"smileys"},{"id":"PINCHING_HAND","emoji":"🤏","label":"pinching hand ","type":"smileys"},{"id":"WAVING_HAND","emoji":"👋","label":"Waving hand ","type":"smileys"},{"id":"FLEXED_BICEPS","emoji":"💪","label":"flexed biceps","type":"smileys"},{"id":"WRITING_HAND","emoji":"✍️","label":"writing hand","type":"smileys"},{"id":"FOLDED_HANDS","emoji":"🙏","label":"folded hands ","type":"smileys"},{"id":"KISS_MARK","emoji":"💋","label":"Kiss mark","type":"smileys"},{"id":"BRAIN","emoji":"🧠","label":"brain","type":"smileys"},{"id":"GIRL","emoji":"👧","label":"girl","type":"smileys"},{"id":"BOY","emoji":"👦","label":"Boy","type":"smileys"},{"id":"WOMAN","emoji":"👩","label":"Woman","type":"smileys"},{"id":"PERSON","emoji":"🧑","label":"Person","type":"smileys"},{"id":"MAN","emoji":"👨","label":"Man","type":"smileys"},{"id":"WOMAN_CURLY_HAIR","emoji":"👩‍🦱","label":"Woman curly hair","type":"smileys"},{"id":"MAN_CURLY_HAIR","emoji":"👨‍🦱","label":"man curly hair","type":"smileys"},{"id":"WOMAN_RED_HAIR","emoji":"👩‍🦰","label":"woman red hair","type":"smileys"},{"id":"MAN_RED_HAIR","emoji":"👨‍🦰","label":"man red hair","type":"smileys"},{"id":"MAN_BLOND_HAIR","emoji":"👱","label":"man blond hair","type":"smileys"},{"id":"WOMAN_BLOND_HAIR","emoji":"👱‍♀️","label":"Woman blond hair","type":"smileys"},{"id":"WOMAN_WHITE_HAIR","emoji":"👩‍🦳","label":"Woman white hair","type":"smileys"},{"id":"MAN_WHITE_HAIR","emoji":"👨‍🦳","label":"Man white hair","type":"smileys"},{"id":"WOMAN_BALD","emoji":"👩‍🦲","label":"Woman bald","type":"smileys"},{"id":"MAN_BALD","emoji":"👨‍🦲","label":"Man bald","type":"smileys"},{"id":"MAN_BEARD","emoji":"🧔","label":"Man beard","type":"smileys"},{"id":"OLD_WOMAN","emoji":"👵","label":"Old woman","type":"smileys"},{"id":"OLD_PERSON","emoji":"🧓","label":"Old person","type":"smileys"},{"id":"OLD_MAN","emoji":"👴","label":"Old man","type":"smileys"},{"id":"MAN_WITH_CHINESE_CAP","emoji":"👲","label":"Man with chinese cap","type":"smileys"},{"id":"MAN_WEARIN_TURBAN","emoji":"👳","label":"Person man wearin turban","type":"smileys"},{"id":"WOMAN_WEARIN_TURBAN","emoji":"👳‍♀️","label":"Woman wearin turban","type":"smileys"},{"id":"WOMAN_WITH_HEADSCARF","emoji":"🧕","label":"Woman with headscarf","type":"smileys"},{"id":"POLICE_OFFICIER","emoji":"👮","label":"Police officier","type":"smileys"},{"id":"WOMAN_POLICE_OFFICIER","emoji":"👮‍♀️","label":"Woman police officier","type":"smileys"},{"id":"CONSTRUCTION_WORKER","emoji":"👷","label":"Construction worker","type":"smileys"},{"id":"WOMAN_CONSTRUCTION_WORKER","emoji":"👷‍♀️","label":"Woman construction worker","type":"smileys"},{"id":"COUPLE_WITH_HEART","emoji":"👩‍❤️‍👨","label":"Couple with heart","type":"smileys"},{"id":"FAMILY_WOMAN_MAN_BOY","emoji":"👩‍❤️‍👨","label":"Family woman man boy","type":"smileys"},{"id":"DOG_FACE","emoji":"🐶","label":"Dog face","type":"Animals & nature"},{"id":"CAT_FACE","emoji":"🐱","label":"Cat face","type":"Animals & nature"},{"id":"MOUSE_FACE","emoji":"🐭","label":"Mouse face","type":"Animals & nature"},{"id":"HAMSTER","emoji":"🐹","label":"Hamster","type":"Animals & nature"},{"id":"RABBIT","emoji":"🐰","label":"Rabbit","type":"Animals & nature"},{"id":"FOX","emoji":"🦊","label":"Fox","type":"Animals & nature"},{"id":"BEAR","emoji":"🐻","label":"Bear","type":"Animals & nature"},{"id":"PANDA","emoji":"🐼","label":"Panda","type":"Animals & nature"},{"id":"KOALA","emoji":"🐨","label":"Koala","type":"Animals & nature"},{"id":"TIGER","emoji":"🐯","label":"Tiger","type":"Animals & nature"},{"id":"COW","emoji":"🐮","label":"Cow","type":"Animals & nature"},{"id":"PIG","emoji":"🐷","label":"PIG","type":"Animals & nature"},{"id":"FROG","emoji":"🐸","label":"Frog","type":"Animals & nature"},{"id":"MONKEY","emoji":"🐵","label":"Monkey","type":"Animals & nature"},{"id":"SEE_NO_EVIL_MONKEY","emoji":"🙈","label":"Monkey","type":"Animals & nature"},{"id":"SUN_WITH_FACE","emoji":"🌞","label":"sun with face ","type":"Animals & nature"},{"id":"FULL_MOON_FACE","emoji":"🌝","label":"Full moon","type":"Animals & nature"},{"id":"CRESCENT_MOON","emoji":"🌙","label":"crescent moon ","type":"Animals & nature"},{"id":"STARS","emoji":"⭐","label":"stars","type":"Animals & nature"},{"id":"SPRAKLES","emoji":"✨","label":"sprakles ","type":"Animals & nature"},{"id":"FIRE","emoji":"🔥","label":"fire ","type":"Animals & nature"},{"id":"SOCCER_BALL","emoji":"⚽","label":"Soccer ball","type":"Activity"},{"id":"BASKET_BALL","emoji":"🏀","label":"Basket ball","type":"Activity"},{"id":"DIRECT_HIT","emoji":"🎯","label":"Direct hit","type":"Activity"},{"id":"TROPHY","emoji":"🏆","label":"Trophy","type":"Activity"},{"id":"ARTISIT_PALETTE","emoji":"🎨","label":"Artist palette","type":"Activity"},{"id":"CLAPPER_BOARD","emoji":"🎬","label":"Clapper board","type":"Activity"},{"id":"WATCH","emoji":"⌚","label":"Watch","type":"Objects"},{"id":"LAPTOP_COMPUTER","emoji":"💻","label":"Laptop computer","type":"Objects"},{"id":"ALARM_CLOCK","emoji":"⏰","label":"Alarm clock","type":"Objects"},{"id":"LIGHT_BULB","emoji":"💡","label":"Light bulb","type":"Objects"},{"id":"KEY","emoji":"🔑","label":"Key","type":"Objects"},{"id":"LOCKED_WITH_PEN","emoji":"🔏","label":"Locked with pen","type":"Objects"},{"id":"LOCKED_WITH_KEY","emoji":"🔐","label":"Locked with key","type":"Objects"},{"id":"LOCKED","emoji":"🔒","label":"Locked","type":"Objects"},{"id":"UNLOCKED","emoji":"🔓","label":"Unlocked","type":"Objects"},{"id":"RED_HEART","emoji":"❤️","label":"red heart","type":"Symbols"},{"id":"BLACK_HEART","emoji":"🖤","label":"Black heart","type":"Symbols"},{"id":"CHECK_MARK_BUTTON","emoji":"✅","label":"Check mark button","type":"Symbols"},{"id":"CROSS_MARK","emoji":"❌","label":"Cross mark","type":"Symbols"},{"id":"MEGAPHONE","emoji":"📣","label":"Megaphone","type":"Symbols"},{"id":"MUTED_SPEAKER","emoji":"🔇","label":"Muted speaker","type":"Symbols"},{"id":"NO_ENTRY","emoji":"⛔","label":"No entry","type":"Symbols"}]}')}]);