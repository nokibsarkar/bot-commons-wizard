const defaultState = {
    step: 1,
    config: {
        "debug": false,
        "enableLicensePreference": true,
        "fileExtensions": ["png", "gif", "jpg", "jpeg", "tiff", "tif", "xcf", "pdf", "mid", "ogg", "ogv", "svg", "djvu", "ogg", "ogv", "oga", "flac", "wav", "webm"],
        "apiUrl": "//commons.wikimedia.org/w/api.php",
        "flickrApiUrl": "http://api.flickr.com/services/rest/?",
        "flickrApiKey": "XXX",
        "autoAdd": {
            "categories": ["Uploaded with UploadWizard"],
            "wikitext": ""
        },
        "missingCategoriesWikiText": "{{subst:unc}}",
        "display": {
            "headerLabel": "",
            "thanksLabel": ""
        },
        "tutorial": {
            "skip": false,
            "template": "Licensing_tutorial_$1.svg",
            "width": 720,
            "helpdeskCoords": "27, 1319, 691, 1384"
        },
        "fields": [{
            "wikitext": "",
            "label": "",
            "maxLength": 25,
            "initialValue": "",
            "required": false
        }],
        "defaults": {
            "categories": [],
            "description": ""
        },
        "uwLanguages": {
            "ab": "Abkhazian",
            "ace": "Achinese",
            "aa": "Afar",
            "af": "Afrikaans",
            "ak": "Akan",
            "sq": "Albanian",
            "als": "Alemannisch",
            "am": "Amharic",
            "grc": "Ancient Greek",
            "ar": "Arabic",
            "an": "Aragonese",
            "arc": "Aramaic",
            "hy": "Armenian",
            "rup": "Aromanian",
            "roa-rup": "Aromanian",
            "as": "Assamese",
            "ast": "Asturian",
            "av": "Avaric",
            "ay": "Aymara",
            "az": "Azerbaijani",
            "bm": "Bambara",
            "bjn": "Banjar",
            "map-bms": "Basa Banyumasan",
            "ba": "Bashkir",
            "eu": "Basque",
            "bar": "Bavarian",
            "be": "Belarusian",
            "be-tarask": "Belarusian (Taraškievica orthography)",
            "bn": "Bengali",
            "bh": "Bihari",
            "bcl": "Bikol Central",
            "bpy": "Bishnupria Manipuri",
            "bi": "Bislama",
            "bs": "Bosnian",
            "pt-br": "Brazilian Portuguese",
            "br": "Breton",
            "bug": "Buginese",
            "bg": "Bulgarian",
            "my": "Burmese",
            "frc": "Cajun French",
            "yue": "Cantonese",
            "zh-yue": "Cantonese",
            "ca": "Catalan",
            "ceb": "Cebuano",
            "ch": "Chamorro",
            "cbk-zam": "Chavacano de Zamboanga",
            "ce": "Chechen",
            "chr": "Cherokee",
            "chy": "Cheyenne",
            "zh": "Chinese",
            "zh-cn": "Chinese (China)",
            "zh-hk": "Chinese (Hong Kong)",
            "zh-min-nan": "Chinese (Min Nan)",
            "zh-sg": "Chinese (Singapore)",
            "zh-tw": "Chinese (Taiwan)",
            "cho": "Choctaw",
            "cu": "Church Slavic",
            "cv": "Chuvash",
            "zh-classical": "Classical Chinese",
            "sei": "Cmique Itom",
            "ksh": "Colognian",
            "kw": "Cornish",
            "co": "Corsican",
            "cr": "Cree",
            "mus": "Creek",
            "crh": "Crimean Turkish",
            "crh-cyrl": "Crimean Turkish (Cyrillic script)",
            "hr": "Croatian",
            "cs": "Czech",
            "da": "Danish",
            "pdc": "Deitsch",
            "dv": "Divehi",
            "nl": "Dutch",
            "dz": "Dzongkha",
            "ike-latn": "Eastern Canadian (Latin script)",
            "mhr": "Eastern Mari",
            "arz": "Egyptian Spoken Arabic",
            "eml": "Emiliano-Romagnolo",
            "en": "English",
            "myv": "Erzya",
            "eo": "Esperanto",
            "et": "Estonian",
            "ee": "Ewe",
            "ext": "Extremaduran",
            "fo": "Faroese",
            "hif": "Fiji Hindi",
            "fj": "Fijian",
            "fi": "Finnish",
            "frp": "Franco-Provençal",
            "fr": "French",
            "fur": "Friulian",
            "ff": "Fulah",
            "gag": "Gagauz",
            "gl": "Galician",
            "gan": "Gan",
            "lg": "Ganda",
            "ka": "Georgian",
            "de": "German",
            "aln": "Gheg Albanian",
            "glk": "Gilaki",
            "got": "Gothic",
            "el": "Greek",
            "gn": "Guarani",
            "gu": "Gujarati",
            "ht": "Haitian",
            "hak": "Hakka",
            "ha": "Hausa",
            "haw": "Hawaiian",
            "he": "Hebrew",
            "hz": "Herero",
            "hil": "Hiligaynon",
            "mrj": "Hill Mari",
            "hi": "Hindi",
            "ho": "Hiri Motu",
            "hu": "Hungarian",
            "is": "Icelandic",
            "io": "Ido",
            "ig": "Igbo",
            "ilo": "Iloko",
            "id": "Indonesian",
            "ia": "Interlingua",
            "ie": "Interlingue",
            "iu": "Inuktitut",
            "ik": "Inupiaq",
            "ga": "Irish",
            "it": "Italian",
            "ja": "Japanese",
            "jv": "Javanese",
            "kab": "Kabyle",
            "kl": "Kalaallisut",
            "xal": "Kalmyk",
            "kn": "Kannada",
            "kr": "Kanuri",
            "kaa": "Kara-Kalpak",
            "krc": "Karachay-Balkar",
            "ks": "Kashmiri",
            "csb": "Kashubian",
            "kk": "Kazakh",
            "km": "Khmer",
            "ki": "Kikuyu",
            "krj": "Kinaray-a",
            "rw": "Kinyarwanda",
            "ky": "Kirghiz",
            "kv": "Komi",
            "kg": "Kongo",
            "ko": "Korean",
            "avk": "Kotava",
            "kj": "Kuanyama",
            "ku": "Kurdish",
            "lad": "Ladino",
            "lo": "Lao",
            "ltg": "Latgalian",
            "la": "Latin",
            "lv": "Latvian",
            "lez": "Lezghian",
            "lij": "Ligure",
            "li": "Limburgish",
            "ln": "Lingala",
            "lfn": "Lingua Franca Nova",
            "lzh": "Literary Chinese",
            "lt": "Lithuanian",
            "jbo": "Lojban",
            "nds": "Low German",
            "nds-nl": "Low Saxon (Netherlands)",
            "sli": "Lower Silesian",
            "dsb": "Lower Sorbian",
            "loz": "Lozi",
            "lb": "Luxembourgish",
            "mk": "Macedonian",
            "mg": "Malagasy",
            "ms": "Malay",
            "ml": "Malayalam",
            "mt": "Maltese",
            "gv": "Manx",
            "mi": "Maori",
            "arn": "Mapuche",
            "mr": "Marathi",
            "mh": "Marshallese",
            "mzn": "Mazanderani",
            "cdo": "Min Dong Chinese",
            "nan": "Min Nan Chinese",
            "min": "Minangkabau",
            "mwl": "Mirandese",
            "lus": "Mizo",
            "mdf": "Moksha",
            "mo": "Moldavian",
            "mn": "Mongolian",
            "nah": "Nahuatl",
            "na": "Nauru",
            "nv": "Navajo",
            "ng": "Ndonga",
            "nap": "Neapolitan",
            "ne": "Nepali",
            "new": "Newari",
            "pih": "Norfuk / Pitkern",
            "frr": "Northern Frisian",
            "se": "Northern Sami",
            "nso": "Northern Sotho",
            "no": "Norwegian (bokmål)",
            "nb": "Norwegian Bokmål",
            "nn": "Norwegian Nynorsk",
            "nrm": "Nouormand",
            "nov": "Novial",
            "ny": "Nyanja",
            "oc": "Occitan",
            "ang": "Old English",
            "or": "Oriya",
            "om": "Oromo",
            "os": "Ossetic",
            "pi": "Pali",
            "pam": "Pampanga",
            "pag": "Pangasinan",
            "pap": "Papiamento",
            "ps": "Pashto",
            "fa": "Persian",
            "pcd": "Picard",
            "pms": "Piedmontese",
            "pdt": "Plautdietsch",
            "pl": "Polish",
            "pnt": "Pontic",
            "pt": "Portuguese",
            "pa": "Punjabi",
            "pfl": "Pälzisch",
            "qu": "Quechua",
            "rmy": "Romani",
            "ro": "Romanian",
            "rm": "Romansh",
            "rn": "Rundi",
            "ru": "Russian",
            "rue": "Rusyn",
            "sah": "Sakha",
            "sm": "Samoan",
            "sgs": "Samogitian",
            "bat-smg": "Samogitian",
            "sg": "Sango",
            "sa": "Sanskrit",
            "sc": "Sardinian",
            "sdc": "Sassaresu",
            "sco": "Scots",
            "gd": "Scottish Gaelic",
            "stq": "Seeltersk",
            "sr": "Serbian",
            "sr-ec": "Serbian (Cyrillic script)",
            "sr-el": "Serbian (Latin script)",
            "sh": "Serbo-Croatian",
            "sn": "Shona",
            "ii": "Sichuan Yi",
            "scn": "Sicilian",
            "szl": "Silesian",
            "simple": "Simple English",
            "zh-hans": "Simplified Chinese",
            "sd": "Sindhi",
            "si": "Sinhala",
            "sk": "Slovak",
            "sl": "Slovenian",
            "so": "Somali",
            "ckb": "Sorani Kurdish",
            "azb": "South Azerbaijani",
            "bcc": "Southern Balochi",
            "sma": "Southern Sami",
            "st": "Southern Sotho",
            "es": "Spanish",
            "srn": "Sranan Tongo",
            "su": "Sundanese",
            "sw": "Swahili",
            "ss": "Swati",
            "sv": "Swedish",
            "gsw": "Swiss German",
            "shi": "Tachelhit",
            "tl": "Tagalog",
            "ty": "Tahitian",
            "tg": "Tajik",
            "tg-cyrl": "Tajik (Cyrillic script)",
            "tg-latn": "Tajik (Latin script)",
            "ta": "Tamil",
            "tt": "Tatar",
            "te": "Telugu",
            "tet": "Tetum",
            "th": "Thai",
            "bo": "Tibetan",
            "ti": "Tigrinya",
            "tpi": "Tok Pisin",
            "tokipona": "Toki Pona",
            "to": "Tongan",
            "zh-hant": "Traditional Chinese",
            "ts": "Tsonga",
            "tn": "Tswana",
            "tum": "Tumbuka",
            "tr": "Turkish",
            "tk": "Turkmen",
            "tyv": "Tuvinian",
            "tw": "Twi",
            "udm": "Udmurt",
            "uk": "Ukrainian",
            "hsb": "Upper Sorbian",
            "ur": "Urdu",
            "ug": "Uyghur",
            "uz": "Uzbek",
            "ve": "Venda",
            "vep": "Veps",
            "vi": "Vietnamese",
            "vo": "Volapük",
            "fiu-vro": "Võro",
            "wa": "Walloon",
            "war": "Waray",
            "cy": "Welsh",
            "vls": "West-Vlams",
            "fy": "Western Frisian",
            "pnb": "Western Punjabi",
            "wo": "Wolof",
            "wuu": "Wu",
            "xh": "Xhosa",
            "yi": "Yiddish",
            "yo": "Yoruba",
            "diq": "Zazaki",
            "zea": "Zeeuws",
            "za": "Zhuang",
            "zu": "Zulu",
            "lmo": "lumbaart",
            "roa-tara": "tarandíne",
            "vec": "vèneto",
            "be-x-old": "беларуская (тарашкевіца)",
            "bxr": "буряад",
            "lbe": "лакку"
        },
        "licenses": {
            "cc-by-sa-3.0": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0",
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-gfdl": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-gfdl",
                "templates": ["GFDL", "cc-by-sa-3.0"],
                "icons": ["cc-by", "cc-sa"]
            },
            "cc-by-sa-3.0-at": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-at",
                "templates": ["cc-by-sa-3.0-at"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/at/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-de": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-de",
                "templates": ["cc-by-sa-3.0-de"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/de/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-ee": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-ee",
                "templates": ["cc-by-sa-3.0-ee"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/ee/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-es": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-es",
                "templates": ["cc-by-sa-3.0-es"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/es/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-hr": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-hr",
                "templates": ["cc-by-sa-3.0-hr"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/hr/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-lu": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-lu",
                "templates": ["cc-by-sa-3.0-lu"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/lu/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-nl": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-nl",
                "templates": ["cc-by-sa-3.0-nl"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/nl/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-no": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-no",
                "templates": ["cc-by-sa-3.0-no"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/no/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-pl": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-pl",
                "templates": ["cc-by-sa-3.0-pl"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/pl/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-3.0-ro": {
                "msg": "mwe-upwiz-license-cc-by-sa-3.0-ro",
                "templates": ["cc-by-sa-3.0-ro"],
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/3.0/ro/",
                "languageCodePrefix": "deed."
            },
            "cc-by-3.0": {
                "msg": "mwe-upwiz-license-cc-by-3.0",
                "icons": ["cc-by"],
                "url": "//creativecommons.org/licenses/by/3.0/",
                "languageCodePrefix": "deed."
            },
            "cc-zero": {
                "msg": "mwe-upwiz-license-cc-zero",
                "icons": ["cc-zero"],
                "url": "//creativecommons.org/publicdomain/zero/1.0/",
                "languageCodePrefix": "deed."
            },
            "own-pd": {
                "msg": "mwe-upwiz-license-own-pd",
                "icons": ["cc-zero"],
                "templates": ["cc-zero"]
            },
            "cc-by-sa-2.5": {
                "msg": "mwe-upwiz-license-cc-by-sa-2.5",
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/2.5/",
                "languageCodePrefix": "deed."
            },
            "cc-by-2.5": {
                "msg": "mwe-upwiz-license-cc-by-2.5",
                "icons": ["cc-by"],
                "url": "//creativecommons.org/licenses/by/2.5/",
                "languageCodePrefix": "deed."
            },
            "cc-by-sa-2.0": {
                "msg": "mwe-upwiz-license-cc-by-sa-2.0",
                "icons": ["cc-by", "cc-sa"],
                "url": "//creativecommons.org/licenses/by-sa/2.0/",
                "languageCodePrefix": "deed."
            },
            "cc-by-2.0": {
                "msg": "mwe-upwiz-license-cc-by-2.0",
                "icons": ["cc-by"],
                "url": "//creativecommons.org/licenses/by/2.0/",
                "languageCodePrefix": "deed."
            },
            "fal": {
                "msg": "mwe-upwiz-license-fal",
                "templates": ["FAL"]
            },
            "pd-old-100": {
                "msg": "mwe-upwiz-license-pd-old-100",
                "templates": ["PD-old-100"]
            },
            "pd-old": {
                "msg": "mwe-upwiz-license-pd-old",
                "templates": ["PD-old"]
            },
            "pd-art": {
                "msg": "mwe-upwiz-license-pd-art",
                "templates": ["PD-Art"]
            },
            "pd-us": {
                "msg": "mwe-upwiz-license-pd-us",
                "templates": ["PD-US"]
            },
            "pd-usgov": {
                "msg": "mwe-upwiz-license-pd-usgov",
                "templates": ["PD-USGov"]
            },
            "pd-usgov-nasa": {
                "msg": "mwe-upwiz-license-pd-usgov-nasa",
                "templates": ["PD-USGov-NASA"]
            },
            "pd-ineligible": {
                "msg": "mwe-upwiz-license-pd-ineligible"
            },
            "pd-textlogo": {
                "msg": "mwe-upwiz-license-pd-textlogo",
                "templates": ["trademarked", "PD-textlogo"]
            },
            "attribution": {
                "msg": "mwe-upwiz-license-attribution"
            },
            "gfdl": {
                "msg": "mwe-upwiz-license-gfdl",
                "templates": ["GFDL"]
            },
            "none": {
                "msg": "mwe-upwiz-license-none",
                "templates": ["subst:uwl"]
            },
            "custom": {
                "msg": "mwe-upwiz-license-custom",
                "templates": ["subst:Custom license marker added by UW"],
                "url": "//commons.wikimedia.org/wiki/Commons:Copyright_tags"
            }
        },
        "licenseCategory": "License tags",
        "licenseTagFilters": ["self"],
        "licensing": {
            "defaultType": "ownwork",
            "ownWorkDefault": "choice",
            "ownWork": {
                "type": "or",
                "template": "self",
                "licenses": ["cc-by-sa-3.0", "cc-by-3.0", "cc-zero"],
                "defaults": ["cc-by-sa-3.0"]
            },
            "thirdParty": {
                "type": "or",
                "licenseGroups": [{
                    "head": "mwe-upwiz-license-cc-head",
                    "subhead": "mwe-upwiz-license-cc-subhead",
                    "licenses": ["cc-by-sa-3.0", "cc-by-sa-2.5", "cc-by-3.0", "cc-by-2.5", "cc-zero"]
                }, {
                    "head": "mwe-upwiz-license-flickr-head",
                    "subhead": "mwe-upwiz-license-flickr-subhead",
                    "prependTemplates": ["flickrreview"],
                    "licenses": ["cc-by-sa-2.0", "cc-by-2.0", "pd-usgov"]
                }, {
                    "head": "mwe-upwiz-license-public-domain-usa-head",
                    "subhead": "mwe-upwiz-license-public-domain-usa-subhead",
                    "licenses": ["pd-us", "pd-art"]
                }, {
                    "head": "mwe-upwiz-license-usgov-head",
                    "licenses": ["pd-usgov", "pd-usgov-nasa"]
                }, {
                    "head": "mwe-upwiz-license-custom-head",
                    "special": "custom",
                    "licenses": ["custom"]
                }, {
                    "head": "mwe-upwiz-license-none-head",
                    "licenses": ["none"]
                }]
            }
        },
        "thumbnailWidth": 100,
        "thumbnailMaxHeight": 100,
        "largeThumbnailWidth": 500,
        "largeThumbnailMaxHeight": 500,
        "maxAuthorLength": 10000,
        "minAuthorLength": 1,
        "maxSourceLength": 10000,
        "minSourceLength": 5,
        "maxTitleLength": 500,
        "minTitleLength": 5,
        "maxDescriptionLength": 10000,
        "minDescriptionLength": 5,
        "maxOtherInformationLength": 10000,
        "maxSimultaneousConnections": 3,
        "maxUploads": 50,
        "maxPhpUploadSize": 104857600,
        "maxMwUploadSize": 524288000,
        "minCustomLicenseLength": 6,
        "maxCustomLicenseLength": 10000,
        "languageTemplateFixups": {
            "tl": "tgl"
        },
        "enableFirefogg": true,
        "transcodeExtensionList": ["avi", "asf", "asx", "wmv", "wmx", "dv", "rm", "ra", "3gp", "mkv", "mp4", "m4v", "mov", "qt", "mpeg", "mpeg2", "mp2", "mpg", "mts"],
        "firefoggEncodeSettings": {
            "maxSize": "1920x1080",
            "videoQuality": 7,
            "audioQuality": 3,
            "noUpscaling": "true",
            "videoCodec": "vp8"
        },
        "feedbackPage": "Commons:Upload_Wizard_feedback",
        "bugList": "https://bugzilla.wikimedia.org/buglist.cgi?query_format=advanced&component=UploadWizard&resolution=---&product=MediaWiki+extensions",
        "translateHelp": "//translatewiki.net/w/i.php?title=Special:Translate&group=ext-uploadwizard",
        "altUploadForm": {
            "default": "Commons:Upload",
            "ast": "Commons:Upload/ast",
            "be-tarask": "Commons:Upload/be-tarask",
            "bg": "Commons:Upload/bg",
            "bn": "Commons:Upload/bn",
            "ca": "Commons:Upload/ca",
            "cs": "Commons:Upload/cs",
            "da": "Commons:Upload/da",
            "de": "Commons:Hochladen",
            "el": "Commons:Upload/el",
            "en": "Commons:Upload",
            "eo": "Commons:Upload/eo",
            "es": "Commons:Upload/es",
            "et": "Commons:Upload/et",
            "eu": "Commons:Upload/eu",
            "ext": "Commons:Upload/ext",
            "fa": "Commons:Upload/fa",
            "fi": "Commons:Tallenna",
            "fo": "Commons:Upload/fo",
            "fr": "Commons:Téléverser",
            "fy": "Commons:Upload/fy",
            "gl": "Commons:Upload/gl",
            "he": "Commons:Upload/he",
            "hr": "Commons:Upload/hr",
            "hu": "Commons:Upload/hu",
            "hy": "Commons:Upload/hy",
            "is": "Commons:Upload/is",
            "it": "Commons:Upload/it",
            "ja": "Commons:Upload/ja",
            "ka": "Commons:Upload/ka",
            "km": "Commons:Upload/km",
            "ko": "Commons:Upload/ko",
            "ksh": "Commons:Upload/ksh",
            "ln": "Commons:Upload/ln",
            "lt": "Commons:Upload/lt",
            "mk": "Commons:Upload/mk",
            "ml": "Commons:Upload/ml",
            "mr": "Commons:Upload/mr",
            "nl": "Commons:Upload/nl",
            "no": "Commons:Upload/no",
            "pl": "Commons:Upload/pl",
            "pt": "Commons:Upload/pt",
            "pt-br": "Commons:Upload/pt-br",
            "ro": "Commons:Upload/ro",
            "ru": "Commons:Upload/ru",
            "sk": "Commons:Upload/sk",
            "sl": "Commons:Upload/sl",
            "sr": "Commons:Upload/sr",
            "sv": "Commons:Upload/sv",
            "th": "Commons:Upload/th",
            "tr": "Commons:Upload/tr",
            "uk": "Commons:Upload/uk",
            "vi": "Commons:Upload/vi",
            "yue": "Commons:Upload/yue",
            "zh": "Commons:Upload/zh-hans",
            "zh-hant": "Commons:Upload/zh-hant"
        },
        "useTitleBlacklistApi": true,
        "blacklistIssuesPage": "Commons:Upload_Wizard_blacklist_issues",
        "enableFormData": true,
        "enableMultiFileSelect": true,
        "enableChunked": true,
        "copyMetadataFeature": true,
        "startImmediately": true,
        "enableMultipleFiles": true,
        "disableResourceLoader": false,
        "UploadFromUrl": true
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case "step":
            return { ...state, step: action.payload };
        case "config.debug":
            return { ...state, config: { ...state.config, debug: action.payload } };
        case "config.enableLicensePreference":
            return { ...state, config: { ...state.config, enableLicensePreference: action.payload } };
        case "config.fileExtensions":
            return { ...state, config: { ...state.config, fileExtensions: action.payload } };
        case "config.apiUrl":
            return { ...state, config: { ...state.config, apiUrl: action.payload } };
        case "config.flickrApiUrl":
            return { ...state, config: { ...state.config, flickrApiUrl: action.payload } };
        case "config.flickrApiKey":
            return { ...state, config: { ...state.config, flickrApiKey: action.payload } };
        case "config.autoAdd.categories":
            return { ...state, config: { ...state.config, autoAdd: { ...state.config.autoAdd, categories: action.payload } } };
        case "config.autoAdd.wikitext":
            return { ...state, config: { ...state.config, autoAdd: { ...state.config.autoAdd, wikitext: action.payload } } };
        case "config.missingCategoriesWikiText":
            return { ...state, config: { ...state.config, missingCategoriesWikiText: action.payload } };
        case "config.display.headerLabel":
            return { ...state, config: { ...state.config, display: { ...state.config.display, headerLabel: action.payload } } };
        case "config.display.thanksLabel":
            return { ...state, config: { ...state.config, display: { ...state.config.display, thanksLabel: action.payload } } };
        case "config.tutorial.skip":
            return { ...state, config: { ...state.config, tutorial: { ...state.config.tutorial, skip: action.payload } } };
        case "config.tutorial.template":
            return { ...state, config: { ...state.config, tutorial: { ...state.config.tutorial, template: action.payload } } };
        case "config.tutorial.width":
            return { ...state, config: { ...state.config, tutorial: { ...state.config.tutorial, width: action.payload } } };
        case "config.tutorial.helpdeskCoords":
            return { ...state, config: { ...state.config, tutorial: { ...state.config.tutorial, helpdeskCoords: action.payload } } };
        case "config.fields":
            return { ...state, config: { ...state.config, fields: action.payload } };
        case "config.defaults.categories":
            return { ...state, config: { ...state.config, defaults: { ...state.config.defaults, categories: action.payload } } };
        case "config.defaults.description":
            return { ...state, config: { ...state.config, defaults: { ...state.config.defaults, description: action.payload } } };
        case "config.uwLanguages":
            return { ...state, config: { ...state.config, uwLanguages: action.payload } };
        case "config.licenses":
            return { ...state, config: { ...state.config, licenses: action.payload } };
        case "config.licenseCategory":
            return { ...state, config: { ...state.config, licenseCategory: action.payload } };
        case "config.licenseTagFilters":
            return { ...state, config: { ...state.config, licenseTagFilters: action.payload } };
        case "config.licensing":
            return { ...state, config: { ...state.config, licensing: action.payload } };
        case "config.thumbnailWidth":
            return { ...state, config: { ...state.config, thumbnailWidth: action.payload } };
        case "config.thumbnailMaxHeight":
            return { ...state, config: { ...state.config, thumbnailMaxHeight: action.payload } };
        case "config.largeThumbnailWidth":
            return { ...state, config: { ...state.config, largeThumbnailWidth: action.payload } };
        case "config.largeThumbnailMaxHeight":
            return { ...state, config: { ...state.config, largeThumbnailMaxHeight: action.payload } };
        case "config.maxAuthorLength":
            return { ...state, config: { ...state.config, maxAuthorLength: action.payload } };
        case "config.minAuthorLength":
            return { ...state, config: { ...state.config, minAuthorLength: action.payload } };
        case "config.maxSourceLength":
            return { ...state, config: { ...state.config, maxSourceLength: action.payload } };
        case "config.minSourceLength":
            return { ...state, config: { ...state.config, minSourceLength: action.payload } };
        case "config.maxTitleLength":
            return { ...state, config: { ...state.config, maxTitleLength: action.payload } };
        case "config.minTitleLength":
            return { ...state, config: { ...state.config, minTitleLength: action.payload } };
        case "config.maxDescriptionLength":
            return { ...state, config: { ...state.config, maxDescriptionLength: action.payload } };
        case "config.minDescriptionLength":
            return { ...state, config: { ...state.config, minDescriptionLength: action.payload } };
        case "config.maxOtherInformationLength":
            return { ...state, config: { ...state.config, maxOtherInformationLength: action.payload } };
        case "config.maxSimultaneousConnections":
            return { ...state, config: { ...state.config, maxSimultaneousConnections: action.payload } };
        case "config.maxUploads":
            return { ...state, config: { ...state.config, maxUploads: action.payload } };
        case "config.maxPhpUploadSize":
            return { ...state, config: { ...state.config, maxPhpUploadSize: action.payload } };
        case "config.maxMwUploadSize":
            return { ...state, config: { ...state.config, maxMwUploadSize: action.payload } };
        case "config.minCustomLicenseLength":
            return { ...state, config: { ...state.config, minCustomLicenseLength: action.payload } };
        case "config.maxCustomLicenseLength":
            return { ...state, config: { ...state.config, maxCustomLicenseLength: action.payload } };
        case "config.languageTemplateFixups":
            return { ...state, config: { ...state.config, languageTemplateFixups: action.payload } };
        case "config.enableFirefogg":
            return { ...state, config: { ...state.config, enableFirefogg: action.payload } };
        case "config.transcodeExtensionList":
            return { ...state, config: { ...state.config, transcodeExtensionList: action.payload } };
        case "config.firefoggEncodeSettings":
            return { ...state, config: { ...state.config, firefoggEncodeSettings: action.payload } };
        case "config.feedbackPage":
            return { ...state, config: { ...state.config, feedbackPage: action.payload } };
        case "config.bugList":
            return { ...state, config: { ...state.config, bugList: action.payload } };
        case "config.translateHelp":
            return { ...state, config: { ...state.config, translateHelp: action.payload } };
        case "config.altUploadForm":
            return { ...state, config: { ...state.config, altUploadForm: action.payload } };
        case "config.useTitleBlacklistApi":
            return { ...state, config: { ...state.config, useTitleBlacklistApi: action.payload } };
        case "config.blacklistIssuesPage":
            return { ...state, config: { ...state.config, blacklistIssuesPage: action.payload } };
        case "config.enableFormData":
            return { ...state, config: { ...state.config, enableFormData: action.payload } };
        case "config.enableMultiFileSelect":
            return { ...state, config: { ...state.config, enableMultiFileSelect: action.payload } };
        case "config.enableChunked":
            return { ...state, config: { ...state.config, enableChunked: action.payload } };
        case "config.copyMetadataFeature":
            return { ...state, config: { ...state.config, copyMetadataFeature: action.payload } };
        case "config.startImmediately":
            return { ...state, config: { ...state.config, startImmediately: action.payload } };
        case "config.enableMultipleFiles":
            return { ...state, config: { ...state.config, enableMultipleFiles: action.payload } };
        case "config.disableResourceLoader":
            return { ...state, config: { ...state.config, disableResourceLoader: action.payload } };
        case "config.UploadFromUrl":
            return { ...state, config: { ...state.config, UploadFromUrl: action.payload } };
        default:
            console.error("Unknown action type", action.type);
            return state;
    }

}
const Stepper = ({ steps, step, setStep }) => {
    return (
        <div className="flex flex-row justify-evenly w-full p-2 cursor-pointer">
            {steps.map((s, i) => {
                const isCompleted = i < step;
                const isActive = i === step;
                const divBg = isActive ? "bg-blue-800" : isCompleted ? "bg-blue-500" : "bg-blue-200";
                const indexBg = isActive ? "bg-violet-900" : isCompleted ? "bg-violet-500" : "bg-violet-200";
                return (
                    <div key={i} className={`${divBg} flex flex-col justify-center items-center text-center rounded-lg p-2  text-white`} onClick={() => setStep(i)}>
                        <span className={`text-white rounded-full ${indexBg} inline-block w-8`}>{i + 1}</span>
                        <span>{s}</span>
                    </div>
                )
            })}
        </div>
    )

}
const StageSelector = (step, props) => {
    switch (step) {
        default:
            return <></>;
    }
}
const WizardBuilder = () => {
}
export default WizardBuilder;