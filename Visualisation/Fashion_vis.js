var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
    "name": "Fashion",
    "queries": false,
    "description": "",
    "id": "v-fashion",
    "children": [
        {
            "id": "439",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "name": "Accessories",
            "children": [
                {
                    "id": "440",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Costume Accessories",
                    "children": [
                        {
                            "id": "441",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bald Caps",
                            "children": []
                        },
                        {
                            "id": "442",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Accessory Sets",
                            "children": []
                        },
                        {
                            "id": "443",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Capes",
                            "children": []
                        },
                        {
                            "id": "444",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Gloves",
                            "children": []
                        },
                        {
                            "id": "445",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Hats",
                            "children": []
                        },
                        {
                            "id": "446",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Special Effects",
                            "children": []
                        },
                        {
                            "id": "447",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Tobacco Products",
                            "children": []
                        },
                        {
                            "id": "448",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Pretend Jewelry",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "449",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Baby & Toddler Clothing Accessories",
                    "children": [
                        {
                            "id": "450",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Belts",
                            "children": []
                        },
                        {
                            "id": "451",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Gloves & Mittens",
                            "children": []
                        },
                        {
                            "id": "452",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Hats",
                            "children": []
                        },
                        {
                            "id": "453",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby Protective Wear",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "454",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Balaclavas",
                    "children": []
                },
                {
                    "id": "455",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Bandanas & Headties",
                    "children": []
                },
                {
                    "id": "456",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Belt Buckles",
                    "children": []
                },
                {
                    "id": "457",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Belts",
                    "children": []
                },
                {
                    "id": "458",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Bridal Accessories",
                    "children": [
                        {
                            "id": "459",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bridal Veils",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "460",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Button Studs",
                    "children": []
                },
                {
                    "id": "461",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Collar Stays",
                    "children": []
                },
                {
                    "id": "462",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Cufflinks",
                    "children": []
                },
                {
                    "id": "463",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Decorative Fans",
                    "children": []
                },
                {
                    "id": "464",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Cold Weather Accessories",
                    "children": [
                        {
                            "id": "465",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Arm Warmers",
                            "children": []
                        },
                        {
                            "id": "466",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Ear Muffs",
                            "children": []
                        },
                        {
                            "id": "467",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fingerless Gloves",
                            "children": []
                        },
                        {
                            "id": "468",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Gloves",
                            "children": []
                        },
                        {
                            "id": "469",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hats",
                            "children": []
                        },
                        {
                            "id": "470",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mittens & Hand Muffs",
                            "children": []
                        },
                        {
                            "id": "471",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Neck Warmers",
                            "children": []
                        },
                        {
                            "id": "472",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Scarves",
                            "children": []
                        },
                        {
                            "id": "473",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sets",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "474",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Eyewear",
                    "children": [
                        {
                            "id": "475",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sunglass Lens Replacements",
                            "children": []
                        },
                        {
                            "id": "476",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Clear Glass",
                            "children": []
                        },
                        {
                            "id": "477",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sunglasses",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "478",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Hair Accessories",
                    "children": [
                        {
                            "id": "479",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Bun & Volume Shapers",
                            "children": []
                        },
                        {
                            "id": "480",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Combs",
                            "children": []
                        },
                        {
                            "id": "481",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Extensions",
                            "children": []
                        },
                        {
                            "id": "482",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Forks & Sticks",
                            "children": []
                        },
                        {
                            "id": "483",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Nets",
                            "children": []
                        },
                        {
                            "id": "484",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Pins, Claws & Clips",
                            "children": []
                        },
                        {
                            "id": "485",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Wreaths",
                            "children": []
                        },
                        {
                            "id": "486",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Headbands",
                            "children": []
                        },
                        {
                            "id": "487",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Ponytail Holders",
                            "children": []
                        },
                        {
                            "id": "488",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tiaras",
                            "children": []
                        },
                        {
                            "id": "489",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Wig Accessories",
                            "children": [
                                {
                                    "id": "490",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Wig Caps",
                                    "children": []
                                },
                                {
                                    "id": "491",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Wig Glue & Tape",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "492",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wigs",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "493",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "sashes",
                    "children": []
                },
                {
                    "id": "494",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Headwear",
                    "children": [
                        {
                            "id": "495",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fascinators",
                            "children": []
                        },
                        {
                            "id": "496",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Headdresses",
                            "children": []
                        },
                        {
                            "id": "497",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Turbans",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "498",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "belts",
                    "children": [
                        {
                            "id": "499",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Belt Buckles",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "500",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "jewellery",
                    "children": [
                        {
                            "id": "501",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Anklets",
                            "children": []
                        },
                        {
                            "id": "502",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Body Jewelry",
                            "children": []
                        },
                        {
                            "id": "503",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Bracelets",
                            "children": [
                                {
                                    "id": "504",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Wristbands",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "505",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Brooches & Lapel Pins",
                            "children": []
                        },
                        {
                            "id": "506",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Charms & Pendants",
                            "children": []
                        },
                        {
                            "id": "507",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Earrings",
                            "children": []
                        },
                        {
                            "id": "508",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Jewelry Sets",
                            "children": []
                        },
                        {
                            "id": "509",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Necklaces",
                            "children": []
                        },
                        {
                            "id": "510",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rings",
                            "children": []
                        },
                        {
                            "id": "511",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tie Clips",
                            "children": []
                        },
                        {
                            "id": "512",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Watch Accessories",
                            "children": [
                                {
                                    "id": "513",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Watch Bands",
                                    "children": []
                                },
                                {
                                    "id": "514",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Watch Stickers & Decals",
                                    "children": []
                                },
                                {
                                    "id": "515",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Watch Winders",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "516",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Watches",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "517",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Shoe Accessories",
                    "children": [
                        {
                            "id": "518",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Boot Liners",
                            "children": []
                        },
                        {
                            "id": "519",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Gaiters",
                            "children": []
                        },
                        {
                            "id": "520",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shoe Covers",
                            "children": []
                        },
                        {
                            "id": "521",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shoelaces",
                            "children": []
                        },
                        {
                            "id": "522",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Spurs",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "523",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Gloves",
                    "children": []
                },
                {
                    "id": "524",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "bags",
                    "children": [
                        {
                            "id": "525",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Small Bags",
                            "children": []
                        },
                        {
                            "id": "526",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Small Bags",
                            "children": [
                                {
                                    "id": "527",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Phone Cases",
                                    "children": []
                                },
                                {
                                    "id": "528",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Wash Bags",
                                    "children": []
                                },
                                {
                                    "id": "529",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Belt Bags",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "530",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "backpacks",
                            "children": []
                        },
                        {
                            "id": "531",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tote-bags",
                            "children": []
                        },
                        {
                            "id": "532",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Diaper Bags",
                            "children": []
                        },
                        {
                            "id": "533",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Handbags & Purses",
                            "children": [
                                {
                                    "id": "534",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Baguettes",
                                    "children": []
                                },
                                {
                                    "id": "535",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bowling",
                                    "children": []
                                },
                                {
                                    "id": "536",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Day Clutches",
                                    "children": []
                                },
                                {
                                    "id": "537",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Evening Bags",
                                    "children": []
                                },
                                {
                                    "id": "538",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hobos",
                                    "children": []
                                },
                                {
                                    "id": "539",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Totes",
                                    "children": []
                                },
                                {
                                    "id": "540",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Wristlets",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "541",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Handbag Accessories",
                            "children": []
                        },
                        {
                            "id": "542",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Backpacks & Bookbags",
                            "children": [
                                {
                                    "id": "543",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Briefcases & Laptop Bags",
                                    "children": [
                                        {
                                            "id": "544",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Checkpoint-friendly Laptop Cases",
                                            "children": []
                                        },
                                        {
                                            "id": "545",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Hard Drive Cases",
                                            "children": []
                                        },
                                        {
                                            "id": "546",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Laptop Backpacks",
                                            "children": []
                                        },
                                        {
                                            "id": "547",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Laptop Messenger Bags",
                                            "children": []
                                        },
                                        {
                                            "id": "548",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Laptop Sleeves & Slipcases",
                                            "children": []
                                        },
                                        {
                                            "id": "549",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Netbook Cases",
                                            "children": []
                                        },
                                        {
                                            "id": "550",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Projector Cases",
                                            "children": []
                                        },
                                        {
                                            "id": "551",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Rolling & Wheeled Laptop Cases",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "552",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Travel & Shopping Bags",
                                    "children": [
                                        {
                                            "id": "553",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Carry-Ons",
                                            "children": []
                                        },
                                        {
                                            "id": "554",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Garment Bags",
                                            "children": []
                                        },
                                        {
                                            "id": "555",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Hardside Luggage",
                                            "children": []
                                        },
                                        {
                                            "id": "556",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Matching Sets",
                                            "children": []
                                        },
                                        {
                                            "id": "557",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Rolling Luggage",
                                            "children": []
                                        },
                                        {
                                            "id": "558",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Totes",
                                            "children": []
                                        },
                                        {
                                            "id": "559",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Luggage Tags",
                                            "children": []
                                        },
                                        {
                                            "id": "560",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Packing Cubes",
                                            "children": []
                                        },
                                        {
                                            "id": "561",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Packing Folders",
                                            "children": []
                                        },
                                        {
                                            "id": "562",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Shoe Bags",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "563",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Duffel & Gym Bags",
                                    "children": []
                                },
                                {
                                    "id": "564",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Fanny, Waist Packs",
                                    "children": []
                                },
                                {
                                    "id": "565",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Other Travel & Shopping Bags",
                                    "children": []
                                },
                                {
                                    "id": "566",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Reusable Eco Bags",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "567",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Masks",
                    "children": []
                },
                {
                    "id": "568",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Hats",
                    "children": [
                        {
                            "id": "569",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hard Hats",
                            "children": []
                        },
                        {
                            "id": "570",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baseball Caps",
                            "children": []
                        },
                        {
                            "id": "571",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Berets",
                            "children": []
                        },
                        {
                            "id": "572",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bowlers",
                            "children": []
                        },
                        {
                            "id": "573",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cowboy Hats",
                            "children": []
                        },
                        {
                            "id": "574",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Derby Hats",
                            "children": []
                        },
                        {
                            "id": "575",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fedoras",
                            "children": []
                        },
                        {
                            "id": "576",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knit Caps & Beanies",
                            "children": []
                        },
                        {
                            "id": "577",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Newsboy Caps",
                            "children": []
                        },
                        {
                            "id": "578",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Straw Hats",
                            "children": []
                        },
                        {
                            "id": "579",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sun Hats",
                            "children": []
                        },
                        {
                            "id": "580",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Visors",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "581",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Scarves",
                    "children": [
                        {
                            "id": "582",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cashmere scarves",
                            "children": []
                        },
                        {
                            "id": "583",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knit scarves",
                            "children": []
                        },
                        {
                            "id": "584",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Prints & Patterns scarves",
                            "children": []
                        },
                        {
                            "id": "585",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rectangular scarves",
                            "children": []
                        },
                        {
                            "id": "586",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Silk scarves",
                            "children": []
                        },
                        {
                            "id": "587",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Square scarves",
                            "children": []
                        },
                        {
                            "id": "588",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wool scarves",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "589",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "socks",
                    "children": [
                        {
                            "id": "590",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport socks",
                            "children": [
                                {
                                    "id": "591",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "bowling socks",
                                    "children": []
                                },
                                {
                                    "id": "592",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "basketball socks",
                                    "children": []
                                },
                                {
                                    "id": "593",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "cycling socks",
                                    "children": []
                                },
                                {
                                    "id": "594",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "football socks",
                                    "children": []
                                },
                                {
                                    "id": "595",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "golf socks",
                                    "children": []
                                },
                                {
                                    "id": "596",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "hiking socks",
                                    "children": []
                                },
                                {
                                    "id": "597",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Ice hokey socks",
                                    "children": []
                                },
                                {
                                    "id": "598",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "running socks",
                                    "children": []
                                },
                                {
                                    "id": "599",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "skateboarding socks",
                                    "children": []
                                },
                                {
                                    "id": "600",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snowboarding socks",
                                    "children": []
                                },
                                {
                                    "id": "601",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "soccer socks",
                                    "children": []
                                },
                                {
                                    "id": "602",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "tennis socks",
                                    "children": []
                                },
                                {
                                    "id": "603",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "voley ball socks",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "604",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hoisery",
                            "children": []
                        },
                        {
                            "id": "605",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Mens-socks",
                            "children": [
                                {
                                    "id": "606",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Crew Socks",
                                    "children": []
                                },
                                {
                                    "id": "607",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Dress Socks",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "608",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Ankle Socks",
                            "children": []
                        },
                        {
                            "id": "609",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Boots Socks",
                            "children": []
                        },
                        {
                            "id": "610",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Footies",
                            "children": []
                        },
                        {
                            "id": "611",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Trouser Socks & Knee-Highs",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "612",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Ties & Cummerbunds",
                    "children": [
                        {
                            "id": "613",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bow Ties",
                            "children": []
                        },
                        {
                            "id": "614",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Neck Ties",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "615",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Umbrellas",
                    "children": []
                },
                {
                    "id": "616",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Handkerchiefs",
                    "children": []
                },
                {
                    "id": "617",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Collar Tips",
                    "children": []
                },
                {
                    "id": "618",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Wallets & Key Organizers",
                    "children": [
                        {
                            "id": "619",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Business & Credit Card Cases",
                            "children": []
                        },
                        {
                            "id": "620",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Checkbook Holder",
                            "children": []
                        },
                        {
                            "id": "621",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "ID & Badge Holders",
                            "children": []
                        },
                        {
                            "id": "622",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Other Men's ID & Doc Holders",
                            "children": []
                        },
                        {
                            "id": "623",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Passport Holders",
                            "children": []
                        },
                        {
                            "id": "624",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Business & Credit Card Cases",
                            "children": []
                        },
                        {
                            "id": "625",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Key Chains, Rings & Cases",
                            "children": []
                        },
                        {
                            "id": "626",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Organizers & Day Planners",
                            "children": []
                        },
                        {
                            "id": "627",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Money Clips",
                            "children": []
                        },
                        {
                            "id": "628",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Coin Purses",
                            "children": []
                        },
                        {
                            "id": "629",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Passport Holders",
                            "children": []
                        },
                        {
                            "id": "630",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Travel Wallets",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": "1",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "name": "Clothes",
            "children": [
                {
                    "id": "2",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "bibs",
                    "children": [
                        {
                            "id": "3",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport bibs",
                            "children": [
                                {
                                    "id": "4",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snowboarding bibs",
                                    "children": []
                                },
                                {
                                    "id": "5",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bicycle bibs",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "6",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "jerseys",
                    "children": [
                        {
                            "id": "7",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport jerseys",
                            "children": [
                                {
                                    "id": "8",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "basketball jerseys",
                                    "children": []
                                },
                                {
                                    "id": "9",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "bowling jerseys",
                                    "children": []
                                },
                                {
                                    "id": "10",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "climbing jerseys",
                                    "children": []
                                },
                                {
                                    "id": "11",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "football jerseys",
                                    "children": []
                                },
                                {
                                    "id": "12",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "golf jerseys",
                                    "children": []
                                },
                                {
                                    "id": "13",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "running jerseys",
                                    "children": []
                                },
                                {
                                    "id": "14",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "voley ball jerseys",
                                    "children": []
                                },
                                {
                                    "id": "15",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bicycle jerseys",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "16",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "skin suits",
                    "children": [
                        {
                            "id": "17",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport skin suits",
                            "children": [
                                {
                                    "id": "18",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bicycle skin suits",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "19",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "blazers",
                    "children": []
                },
                {
                    "id": "20",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "cardigan",
                    "children": []
                },
                {
                    "id": "21",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "coats",
                    "children": [
                        {
                            "id": "22",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Parkas",
                            "children": []
                        },
                        {
                            "id": "23",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Trench Coats",
                            "children": []
                        },
                        {
                            "id": "24",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cashmere Coats",
                            "children": []
                        },
                        {
                            "id": "25",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suede coat",
                            "children": []
                        },
                        {
                            "id": "26",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shearling Coat",
                            "children": []
                        },
                        {
                            "id": "27",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Microfiber Coat",
                            "children": []
                        },
                        {
                            "id": "28",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wool coats",
                            "children": []
                        },
                        {
                            "id": "29",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Puffer coats",
                            "children": []
                        },
                        {
                            "id": "30",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Short Coats",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "31",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "dresses",
                    "children": [
                        {
                            "id": "32",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport dresses",
                            "children": [
                                {
                                    "id": "33",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "tennis dresses",
                                    "children": []
                                },
                                {
                                    "id": "34",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "dance dresses",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "35",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knitted Dresses",
                            "children": []
                        },
                        {
                            "id": "36",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Jersey Dresses",
                            "children": []
                        },
                        {
                            "id": "37",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Summer Dresses",
                            "children": []
                        },
                        {
                            "id": "38",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dirndl & Costumes",
                            "children": []
                        },
                        {
                            "id": "39",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bridal Dresses",
                            "children": []
                        },
                        {
                            "id": "40",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maxi Dresses",
                            "children": []
                        },
                        {
                            "id": "41",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cocktail Dresses",
                            "children": []
                        },
                        {
                            "id": "42",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity dresses",
                            "children": []
                        },
                        {
                            "id": "43",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby Doll",
                            "children": []
                        },
                        {
                            "id": "44",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Formal & Special Occasions",
                            "children": []
                        },
                        {
                            "id": "45",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Jumpers",
                            "children": []
                        },
                        {
                            "id": "46",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shifts",
                            "children": []
                        },
                        {
                            "id": "47",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shirtdresses",
                            "children": []
                        },
                        {
                            "id": "48",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sundresses",
                            "children": []
                        },
                        {
                            "id": "49",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sweater Dresses",
                            "children": []
                        },
                        {
                            "id": "50",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tank",
                            "children": []
                        },
                        {
                            "id": "51",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wrap",
                            "children": []
                        },
                        {
                            "id": "52",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Day-dresses",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "53",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "hoodies",
                    "children": [
                        {
                            "id": "54",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport hoodies",
                            "children": [
                                {
                                    "id": "55",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "skiing hoodies",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "56",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "jackets",
                    "children": [
                        {
                            "id": "57",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport jackets",
                            "children": [
                                {
                                    "id": "58",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "boxing jackets",
                                    "children": []
                                },
                                {
                                    "id": "59",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "cycling jackets",
                                    "children": []
                                },
                                {
                                    "id": "60",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "football jackets",
                                    "children": []
                                },
                                {
                                    "id": "61",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "golf jackets",
                                    "children": []
                                },
                                {
                                    "id": "62",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "hiking jackets",
                                    "children": []
                                },
                                {
                                    "id": "63",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "running jackets",
                                    "children": []
                                },
                                {
                                    "id": "64",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "skateboarding jackets",
                                    "children": []
                                },
                                {
                                    "id": "65",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snowboarding jackets",
                                    "children": []
                                },
                                {
                                    "id": "66",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "soccer jackets",
                                    "children": []
                                },
                                {
                                    "id": "67",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "tennis jackets",
                                    "children": []
                                },
                                {
                                    "id": "68",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Motorcycle Jackets",
                                    "children": []
                                },
                                {
                                    "id": "69",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "golf jackets",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "70",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Puffers",
                            "children": []
                        },
                        {
                            "id": "71",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rain & Outdoor Jackets",
                            "children": []
                        },
                        {
                            "id": "72",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Capes",
                            "children": []
                        },
                        {
                            "id": "73",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Blazers",
                            "children": []
                        },
                        {
                            "id": "74",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Athletic Jackets",
                            "children": []
                        },
                        {
                            "id": "75",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fleece Jackets",
                            "children": []
                        },
                        {
                            "id": "76",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Gilets & Waistcoats",
                            "children": []
                        },
                        {
                            "id": "77",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Lightweight Jackets",
                            "children": []
                        },
                        {
                            "id": "78",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Down Jackets",
                            "children": []
                        },
                        {
                            "id": "79",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Denim Jackets",
                            "children": []
                        },
                        {
                            "id": "80",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Winter Jackets",
                            "children": []
                        },
                        {
                            "id": "81",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sport Jackets",
                            "children": []
                        },
                        {
                            "id": "82",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity Jackets",
                            "children": []
                        },
                        {
                            "id": "83",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Motorcycle Jackets",
                            "children": []
                        },
                        {
                            "id": "84",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suede Jackets",
                            "children": []
                        },
                        {
                            "id": "85",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Leather Jacket",
                            "children": []
                        },
                        {
                            "id": "86",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shearling Jacket",
                            "children": []
                        },
                        {
                            "id": "87",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Microfiber Jacket",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "88",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Pantyhose",
                    "children": [
                        {
                            "id": "89",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity Pantyhose",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "90",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Panties",
                    "children": [
                        {
                            "id": "91",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity Panties",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "92",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Outfits & Sets",
                    "children": [
                        {
                            "id": "93",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity outfits & sets",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "94",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "skorts",
                    "children": []
                },
                {
                    "id": "95",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Pants",
                    "children": [
                        {
                            "id": "96",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport pants",
                            "children": [
                                {
                                    "id": "97",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "track pants",
                                    "children": []
                                },
                                {
                                    "id": "98",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "golf pants",
                                    "children": []
                                },
                                {
                                    "id": "99",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "rock climbing pants",
                                    "children": []
                                },
                                {
                                    "id": "100",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "yoga pants",
                                    "children": []
                                },
                                {
                                    "id": "101",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "cycling pants",
                                    "children": []
                                },
                                {
                                    "id": "102",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "football pants",
                                    "children": []
                                },
                                {
                                    "id": "103",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "hiking pants",
                                    "children": []
                                },
                                {
                                    "id": "104",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Ice hokey pants",
                                    "children": []
                                },
                                {
                                    "id": "105",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "skateboarding pants",
                                    "children": []
                                },
                                {
                                    "id": "106",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snowboarding pants",
                                    "children": []
                                },
                                {
                                    "id": "107",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "soccer pants",
                                    "children": []
                                },
                                {
                                    "id": "108",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "tennis pants",
                                    "children": []
                                },
                                {
                                    "id": "109",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hunting & Tactical Pants",
                                    "children": []
                                },
                                {
                                    "id": "110",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Motorcycle Pants",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "111",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Business Pants",
                            "children": []
                        },
                        {
                            "id": "112",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Casual pants",
                            "children": []
                        },
                        {
                            "id": "113",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Joggers",
                            "children": []
                        },
                        {
                            "id": "114",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rain pants",
                            "children": []
                        },
                        {
                            "id": "115",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity pants",
                            "children": []
                        },
                        {
                            "id": "116",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cargo-pants",
                            "children": []
                        },
                        {
                            "id": "117",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Carpenter",
                            "children": []
                        },
                        {
                            "id": "118",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Corduroy",
                            "children": []
                        },
                        {
                            "id": "119",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Chinos-and-khakis",
                            "children": []
                        },
                        {
                            "id": "120",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dress & Formal",
                            "children": []
                        },
                        {
                            "id": "121",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Overalls",
                            "children": []
                        },
                        {
                            "id": "122",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cropped Pants",
                            "children": []
                        },
                        {
                            "id": "123",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knits",
                            "children": []
                        },
                        {
                            "id": "124",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wide-leg pants",
                            "children": []
                        },
                        {
                            "id": "125",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Corduroys",
                            "children": []
                        },
                        {
                            "id": "126",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Overalls pants",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "127",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "jeans",
                    "children": [
                        {
                            "id": "128",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bootcut-jeans",
                            "children": []
                        },
                        {
                            "id": "129",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cropped-jeans",
                            "children": []
                        },
                        {
                            "id": "130",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Distressed-jeans",
                            "children": []
                        },
                        {
                            "id": "131",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Flare-jeans",
                            "children": []
                        },
                        {
                            "id": "132",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity jeans",
                            "children": []
                        },
                        {
                            "id": "133",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Relaxed-jeans",
                            "children": []
                        },
                        {
                            "id": "134",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Skinny-jeans",
                            "children": []
                        },
                        {
                            "id": "135",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Stretch-jeans",
                            "children": []
                        },
                        {
                            "id": "136",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Slim Jeans",
                            "children": []
                        },
                        {
                            "id": "137",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Straight leg jeans",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "138",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Jumpsuits",
                    "children": []
                },
                {
                    "id": "139",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Rompers",
                    "children": []
                },
                {
                    "id": "140",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "jumpers",
                    "children": [
                        {
                            "id": "141",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fleece jumpers",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "142",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Leggings",
                    "children": []
                },
                {
                    "id": "143",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "shirts",
                    "children": [
                        {
                            "id": "144",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport shirts",
                            "children": [
                                {
                                    "id": "145",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "boxing shirts",
                                    "children": []
                                },
                                {
                                    "id": "146",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "hiking shirts",
                                    "children": []
                                },
                                {
                                    "id": "147",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "cycling shirts",
                                    "children": []
                                },
                                {
                                    "id": "148",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Ice hokey shirts",
                                    "children": []
                                },
                                {
                                    "id": "149",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "tennis shirts",
                                    "children": []
                                },
                                {
                                    "id": "150",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "basketball shirts",
                                    "children": []
                                },
                                {
                                    "id": "151",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "bowling shirts",
                                    "children": []
                                },
                                {
                                    "id": "152",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Fitness & Exercise shirts",
                                    "children": []
                                },
                                {
                                    "id": "153",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "golf shirts",
                                    "children": []
                                },
                                {
                                    "id": "154",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "soccer shirts",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "155",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "T-shirts",
                            "children": [
                                {
                                    "id": "156",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "sport t-shirts",
                                    "children": [
                                        {
                                            "id": "157",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "skiing t shirts",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "158",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Print T-Shirts",
                                    "children": []
                                },
                                {
                                    "id": "159",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pattern T-Shirt",
                                    "children": []
                                },
                                {
                                    "id": "160",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Uni T-Shirts",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "161",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "longsleeve-shirts",
                            "children": []
                        },
                        {
                            "id": "162",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "shortsleeve-shirts",
                            "children": []
                        },
                        {
                            "id": "163",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Button-Downs & Oxfords",
                            "children": []
                        },
                        {
                            "id": "164",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dress Shirts",
                            "children": []
                        },
                        {
                            "id": "165",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Henley & Rugby Shirts",
                            "children": []
                        },
                        {
                            "id": "166",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Polos",
                            "children": []
                        },
                        {
                            "id": "167",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Button down shirts",
                            "children": []
                        },
                        {
                            "id": "168",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Turtlenecks",
                            "children": []
                        },
                        {
                            "id": "169",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Casual shirts",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "170",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "shorts",
                    "children": [
                        {
                            "id": "171",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport shorts",
                            "children": [
                                {
                                    "id": "172",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "basketball shorts",
                                    "children": []
                                },
                                {
                                    "id": "173",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "bowling shorts",
                                    "children": []
                                },
                                {
                                    "id": "174",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "cycling shorts",
                                    "children": []
                                },
                                {
                                    "id": "175",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "football shorts",
                                    "children": []
                                },
                                {
                                    "id": "176",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "hiking shorts",
                                    "children": []
                                },
                                {
                                    "id": "177",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Ice hokey shorts",
                                    "children": []
                                },
                                {
                                    "id": "178",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "running shorts",
                                    "children": []
                                },
                                {
                                    "id": "179",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "skateboarding shorts",
                                    "children": []
                                },
                                {
                                    "id": "180",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "skiing shorts",
                                    "children": []
                                },
                                {
                                    "id": "181",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "tennis shorts",
                                    "children": []
                                },
                                {
                                    "id": "182",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "voleyball shorts",
                                    "children": []
                                },
                                {
                                    "id": "183",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Boxing Shorts",
                                    "children": []
                                },
                                {
                                    "id": "184",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bicycle shorts",
                                    "children": []
                                },
                                {
                                    "id": "185",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Martial Arts Shorts",
                                    "children": []
                                },
                                {
                                    "id": "186",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "golf shorts",
                                    "children": []
                                },
                                {
                                    "id": "187",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "climbing shorts",
                                    "children": []
                                },
                                {
                                    "id": "188",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "soccer shorts",
                                    "children": []
                                },
                                {
                                    "id": "189",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "running shorts",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "190",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Maternity shorts",
                            "children": [
                                {
                                    "id": "191",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Casual",
                                    "children": []
                                },
                                {
                                    "id": "192",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Denim",
                                    "children": []
                                },
                                {
                                    "id": "193",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Dress",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "194",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bermuda Shorts",
                            "children": []
                        },
                        {
                            "id": "195",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Casual",
                            "children": []
                        },
                        {
                            "id": "196",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Culottes",
                            "children": []
                        },
                        {
                            "id": "197",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cutoffs",
                            "children": []
                        },
                        {
                            "id": "198",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Denim",
                            "children": []
                        },
                        {
                            "id": "199",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Denim Shorts",
                            "children": []
                        },
                        {
                            "id": "200",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dress",
                            "children": []
                        },
                        {
                            "id": "201",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knits & Elastic Waist",
                            "children": []
                        },
                        {
                            "id": "202",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Khaki",
                            "children": []
                        },
                        {
                            "id": "203",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "skorts",
                            "children": [
                                {
                                    "id": "204",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "sport skorts",
                                    "children": [
                                        {
                                            "id": "205",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "tennis  skorts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "206",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "skirts",
                    "children": [
                        {
                            "id": "207",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sport skirts",
                            "children": [
                                {
                                    "id": "208",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "tennis skirts",
                                    "children": []
                                },
                                {
                                    "id": "209",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "dance skirts",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "210",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity skirts",
                            "children": []
                        },
                        {
                            "id": "211",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mid-length-skirts",
                            "children": []
                        },
                        {
                            "id": "212",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mini-skirts",
                            "children": []
                        },
                        {
                            "id": "213",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Long skirts",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "214",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Costumes",
                    "children": []
                },
                {
                    "id": "215",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "sleepwear",
                    "children": [
                        {
                            "id": "216",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Loungewear",
                            "children": []
                        },
                        {
                            "id": "217",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Nightgowns",
                            "children": []
                        },
                        {
                            "id": "218",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Robes",
                            "children": [
                                {
                                    "id": "219",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bathrobes",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "220",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "pajamas",
                            "children": [
                                {
                                    "id": "221",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pajama Bottoms",
                                    "children": []
                                },
                                {
                                    "id": "222",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pajama Sets",
                                    "children": []
                                },
                                {
                                    "id": "223",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pajama Tops",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "224",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sleep Shirts & Nightgowns",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "225",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "sportswear",
                    "children": []
                },
                {
                    "id": "226",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "suits",
                    "children": [
                        {
                            "id": "227",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suit Vests",
                            "children": []
                        },
                        {
                            "id": "228",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suit Jackets",
                            "children": []
                        },
                        {
                            "id": "229",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tuxedo Jackets",
                            "children": []
                        },
                        {
                            "id": "230",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tuxedos",
                            "children": []
                        },
                        {
                            "id": "231",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tuxedo Pants",
                            "children": []
                        },
                        {
                            "id": "232",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dress Suits",
                            "children": []
                        },
                        {
                            "id": "233",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Pantsuits",
                            "children": []
                        },
                        {
                            "id": "234",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Skirt Suits",
                            "children": []
                        },
                        {
                            "id": "235",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tuxedos",
                            "children": []
                        },
                        {
                            "id": "236",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suit Sets",
                            "children": []
                        },
                        {
                            "id": "237",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rain suits",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "238",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "sweats",
                    "children": []
                },
                {
                    "id": "239",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "sweaters",
                    "children": [
                        {
                            "id": "240",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "cardigan-sweaters",
                            "children": []
                        },
                        {
                            "id": "241",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "cashmere-sweaters",
                            "children": []
                        },
                        {
                            "id": "242",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "crewneck-sweaters",
                            "children": []
                        },
                        {
                            "id": "243",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "half-zip-sweaters",
                            "children": []
                        },
                        {
                            "id": "244",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sweaters vests",
                            "children": []
                        },
                        {
                            "id": "245",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Turtlenecks-sweaters",
                            "children": []
                        },
                        {
                            "id": "246",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Polos",
                            "children": []
                        },
                        {
                            "id": "247",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "v-neck-sweaters",
                            "children": []
                        },
                        {
                            "id": "248",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shrugs",
                            "children": []
                        },
                        {
                            "id": "249",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tunics",
                            "children": []
                        },
                        {
                            "id": "250",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "twin sets",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "251",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Traditional & Ceremonial Clothing",
                    "children": [
                        {
                            "id": "252",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dirndls",
                            "children": []
                        },
                        {
                            "id": "253",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hakama Trousers",
                            "children": []
                        },
                        {
                            "id": "254",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Japanese Black Formal Wear",
                            "children": []
                        },
                        {
                            "id": "255",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Kimono Outerwear",
                            "children": []
                        },
                        {
                            "id": "256",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Kimonos",
                            "children": []
                        },
                        {
                            "id": "257",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Religious Ceremonial Clothing",
                            "children": [
                                {
                                    "id": "258",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Baptism & Communion Dresses",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "259",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Saris & Lehengas",
                            "children": []
                        },
                        {
                            "id": "260",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Traditional Leather Pants",
                            "children": []
                        },
                        {
                            "id": "261",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Yukata",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "262",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "sweatshirt",
                    "children": []
                },
                {
                    "id": "263",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "swimwear",
                    "children": [
                        {
                            "id": "264",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Board Shorts",
                            "children": []
                        },
                        {
                            "id": "265",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Briefs",
                            "children": []
                        },
                        {
                            "id": "266",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Racing",
                            "children": []
                        },
                        {
                            "id": "267",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rash Guards",
                            "children": []
                        },
                        {
                            "id": "268",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Trunks",
                            "children": []
                        },
                        {
                            "id": "269",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cover-Ups",
                            "children": []
                        },
                        {
                            "id": "270",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "One Pieces",
                            "children": []
                        },
                        {
                            "id": "271",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "racing",
                            "children": []
                        },
                        {
                            "id": "272",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "rash guards",
                            "children": []
                        },
                        {
                            "id": "273",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Separates",
                            "children": []
                        },
                        {
                            "id": "274",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tankinis",
                            "children": []
                        },
                        {
                            "id": "275",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Two-Piece, Bikinis",
                            "children": [
                                {
                                    "id": "276",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bikini Top",
                                    "children": []
                                },
                                {
                                    "id": "277",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bikini Bottom",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "278",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "tops",
                    "children": [
                        {
                            "id": "279",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "tank tops",
                            "children": []
                        },
                        {
                            "id": "280",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Button-front-tops",
                            "children": []
                        },
                        {
                            "id": "281",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Camisole-tops",
                            "children": []
                        },
                        {
                            "id": "282",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Halter-tops",
                            "children": []
                        },
                        {
                            "id": "283",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Longsleeve-tops",
                            "children": []
                        },
                        {
                            "id": "284",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shortsleeve-tops",
                            "children": []
                        },
                        {
                            "id": "285",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tank-tops",
                            "children": []
                        },
                        {
                            "id": "286",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity Tops",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "287",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "trousers",
                    "children": [
                        {
                            "id": "288",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sport Trousers",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "289",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "underwear",
                    "children": [
                        {
                            "id": "290",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sport underwear",
                            "children": []
                        },
                        {
                            "id": "291",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Jock Straps",
                            "children": []
                        },
                        {
                            "id": "292",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Thongs & G-Strings",
                            "children": []
                        },
                        {
                            "id": "293",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mens-boxers",
                            "children": []
                        },
                        {
                            "id": "294",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mens-briefs",
                            "children": []
                        },
                        {
                            "id": "295",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Thermal Underwear",
                            "children": [
                                {
                                    "id": "296",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bottoms",
                                    "children": []
                                },
                                {
                                    "id": "297",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sets",
                                    "children": []
                                },
                                {
                                    "id": "298",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tops",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "299",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Maternity-intimates",
                            "children": [
                                {
                                    "id": "300",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Abdominal Support",
                                    "children": []
                                },
                                {
                                    "id": "301",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Belly Bands",
                                    "children": []
                                },
                                {
                                    "id": "302",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bra Extenders,",
                                    "children": []
                                },
                                {
                                    "id": "303",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Camisoles",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "304",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Nursing",
                            "children": [
                                {
                                    "id": "305",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bras",
                                    "children": []
                                },
                                {
                                    "id": "306",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Dresses",
                                    "children": []
                                },
                                {
                                    "id": "307",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sleepwear",
                                    "children": []
                                },
                                {
                                    "id": "308",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tops",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "309",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Camisoles & Camisole Sets",
                            "children": []
                        },
                        {
                            "id": "310",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Women-intimates",
                            "children": [
                                {
                                    "id": "311",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "accessories",
                                    "children": [
                                        {
                                            "id": "312",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Adhesive Bras",
                                            "children": []
                                        },
                                        {
                                            "id": "313",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Breast Petals",
                                            "children": []
                                        },
                                        {
                                            "id": "314",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Bra Extenders,",
                                            "children": []
                                        },
                                        {
                                            "id": "315",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Pads & Enhancers",
                                            "children": []
                                        },
                                        {
                                            "id": "316",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Breast Petals",
                                            "children": []
                                        },
                                        {
                                            "id": "317",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Lingerie Bags",
                                            "children": []
                                        },
                                        {
                                            "id": "318",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Lingerie Tape",
                                            "children": []
                                        },
                                        {
                                            "id": "319",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Straps",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "320",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "bras",
                                    "children": [
                                        {
                                            "id": "321",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Bralettes",
                                            "children": []
                                        },
                                        {
                                            "id": "322",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Convertible",
                                            "children": []
                                        },
                                        {
                                            "id": "323",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Demicup",
                                            "children": []
                                        },
                                        {
                                            "id": "324",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Mastectom",
                                            "children": []
                                        },
                                        {
                                            "id": "325",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Minimizers",
                                            "children": []
                                        },
                                        {
                                            "id": "326",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Push-Up",
                                            "children": []
                                        },
                                        {
                                            "id": "327",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Sports Bras",
                                            "children": []
                                        },
                                        {
                                            "id": "328",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Strapless",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "329",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Shapewear",
                                    "children": [
                                        {
                                            "id": "330",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Bodysuits",
                                            "children": []
                                        },
                                        {
                                            "id": "331",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Camisoles",
                                            "children": []
                                        },
                                        {
                                            "id": "332",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Control Panties",
                                            "children": []
                                        },
                                        {
                                            "id": "333",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Control Slips",
                                            "children": []
                                        },
                                        {
                                            "id": "334",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Thigh Slimmers",
                                            "children": []
                                        },
                                        {
                                            "id": "335",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Waist Cinchers,",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "336",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Garter Belts",
                                    "children": []
                                },
                                {
                                    "id": "337",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Corsets & Bustiers",
                                    "children": []
                                },
                                {
                                    "id": "338",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Breast Forms, Enhancers",
                                    "children": []
                                },
                                {
                                    "id": "339",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Stockings & Thigh-Highs",
                                    "children": []
                                },
                                {
                                    "id": "340",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Lingerie",
                                    "children": []
                                },
                                {
                                    "id": "341",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Lingerie Accessories",
                                    "children": [
                                        {
                                            "id": "342",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Garter Belts",
                                            "children": []
                                        },
                                        {
                                            "id": "343",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Garters",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "344",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "long johns",
                                    "children": []
                                },
                                {
                                    "id": "345",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Leg Warmers",
                                    "children": []
                                },
                                {
                                    "id": "346",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "panties",
                                    "children": [
                                        {
                                            "id": "347",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Bikinis,",
                                            "children": []
                                        },
                                        {
                                            "id": "348",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Boy Shorts,",
                                            "children": []
                                        },
                                        {
                                            "id": "349",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Briefs",
                                            "children": []
                                        },
                                        {
                                            "id": "350",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "G-Strings",
                                            "children": []
                                        },
                                        {
                                            "id": "351",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Hipsters",
                                            "children": []
                                        },
                                        {
                                            "id": "352",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Tangas",
                                            "children": []
                                        },
                                        {
                                            "id": "353",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Thongs",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "354",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Slips",
                                    "children": [
                                        {
                                            "id": "355",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Full Slips",
                                            "children": []
                                        },
                                        {
                                            "id": "356",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Half Slips",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "357",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Tights",
                                    "children": [
                                        {
                                            "id": "358",
                                            "data": {
                                                "type": "concept",
                                                "depth": 6
                                            },
                                            "name": "sport tights",
                                            "children": [
                                                {
                                                    "id": "359",
                                                    "data": {
                                                        "type": "concept",
                                                        "depth": 5
                                                    },
                                                    "name": "football tights",
                                                    "children": []
                                                },
                                                {
                                                    "id": "360",
                                                    "data": {
                                                        "type": "concept",
                                                        "depth": 5
                                                    },
                                                    "name": "skateboarding tights",
                                                    "children": []
                                                },
                                                {
                                                    "id": "361",
                                                    "data": {
                                                        "type": "concept",
                                                        "depth": 5
                                                    },
                                                    "name": "Bicycle tights",
                                                    "children": []
                                                }
                                            ]
                                        },
                                        {
                                            "id": "362",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Control Top",
                                            "children": []
                                        },
                                        {
                                            "id": "363",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Matte",
                                            "children": []
                                        },
                                        {
                                            "id": "364",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Mesh & Net",
                                            "children": []
                                        },
                                        {
                                            "id": "365",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Opaque",
                                            "children": []
                                        },
                                        {
                                            "id": "366",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Patterned",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "367",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "thongs",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "368",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "vests",
                    "children": [
                        {
                            "id": "369",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "sports vests",
                            "children": [
                                {
                                    "id": "370",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "football vests",
                                    "children": []
                                },
                                {
                                    "id": "371",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "climbing robes",
                                    "children": []
                                },
                                {
                                    "id": "372",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hunting & Fishing Vests",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "373",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Blouses",
                    "children": [
                        {
                            "id": "374",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Peasant Blouses",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "375",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Camis",
                    "children": []
                },
                {
                    "id": "376",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Baby & Toddler Clothing",
                    "children": [
                        {
                            "id": "377",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Bottoms",
                            "children": []
                        },
                        {
                            "id": "378",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Diaper Covers",
                            "children": []
                        },
                        {
                            "id": "379",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Dresses",
                            "children": []
                        },
                        {
                            "id": "380",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Baby & Toddler Outerwear",
                            "children": [
                                {
                                    "id": "381",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Fleece",
                                    "children": []
                                },
                                {
                                    "id": "382",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Vests",
                                    "children": []
                                },
                                {
                                    "id": "383",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Rain Wear",
                                    "children": []
                                },
                                {
                                    "id": "384",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Jackets",
                                    "children": []
                                },
                                {
                                    "id": "385",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snow Wear",
                                    "children": []
                                },
                                {
                                    "id": "386",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Puffers",
                                    "children": []
                                },
                                {
                                    "id": "387",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sport",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "388",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Outfits",
                            "children": []
                        },
                        {
                            "id": "389",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Baby & Toddler Sleepwear",
                            "children": [
                                {
                                    "id": "390",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sleepsacks",
                                    "children": []
                                },
                                {
                                    "id": "391",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Robes",
                                    "children": []
                                },
                                {
                                    "id": "392",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Blanket Sleepers",
                                    "children": []
                                },
                                {
                                    "id": "393",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sets & Pajamas",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "394",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Socks & Tights",
                            "children": []
                        },
                        {
                            "id": "395",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Swimwear",
                            "children": []
                        },
                        {
                            "id": "396",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Tops",
                            "children": []
                        },
                        {
                            "id": "397",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Clothing Sets",
                            "children": [
                                {
                                    "id": "398",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pant Sets",
                                    "children": []
                                },
                                {
                                    "id": "399",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Skirt Sets",
                                    "children": []
                                },
                                {
                                    "id": "400",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Short Sets",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "401",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby One-Pieces",
                            "children": []
                        },
                        {
                            "id": "402",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Toddler Underwear",
                            "children": [
                                {
                                    "id": "403",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tights",
                                    "children": []
                                },
                                {
                                    "id": "404",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Undershirts",
                                    "children": []
                                },
                                {
                                    "id": "405",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Socks",
                                    "children": []
                                },
                                {
                                    "id": "406",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pants",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "407",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Uniforms",
                    "children": [
                        {
                            "id": "408",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Contractor Pants & Coveralls",
                            "children": []
                        },
                        {
                            "id": "409",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Flight Suits",
                            "children": []
                        },
                        {
                            "id": "410",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Military Uniforms",
                            "children": []
                        },
                        {
                            "id": "411",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "School Uniforms",
                            "children": []
                        },
                        {
                            "id": "412",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Security Uniforms",
                            "children": []
                        },
                        {
                            "id": "413",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sports Uniforms",
                            "children": [
                                {
                                    "id": "414",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Baseball Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "415",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Basketball Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "416",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Cheerleading Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "417",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Cricket Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "418",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Football Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "419",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hockey Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "420",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Martial Arts Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "421",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Officiating Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "422",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Soccer Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "423",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Softball Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "424",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Wrestling Uniforms",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "425",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Chef's Uniforms",
                            "children": [
                                {
                                    "id": "426",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Chef's Hats",
                                    "children": []
                                },
                                {
                                    "id": "427",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Chef's Jackets",
                                    "children": []
                                },
                                {
                                    "id": "428",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Chef's Pants",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "429",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Medical Uniforms & Scrubs",
                            "children": [
                                {
                                    "id": "430",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Scrub Caps",
                                    "children": []
                                },
                                {
                                    "id": "431",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Scrub Jackets",
                                    "children": []
                                },
                                {
                                    "id": "432",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Scrub Pants",
                                    "children": []
                                },
                                {
                                    "id": "433",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Scrub Sets",
                                    "children": []
                                },
                                {
                                    "id": "434",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Scrub Shirts",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "435",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Wedding & Bridal Party Dresses",
                    "children": [
                        {
                            "id": "436",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bridal Party Dresses",
                            "children": []
                        },
                        {
                            "id": "437",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wedding Dresses",
                            "children": []
                        },
                        {
                            "id": "438",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "White Coats",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": "631",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "name": "Shoes",
            "children": [
                {
                    "id": "632",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Crib shoes(Gir/ boy)",
                    "children": []
                },
                {
                    "id": "633",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "First Walkers (Girl/ boy)",
                    "children": []
                },
                {
                    "id": "634",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Business Shoes",
                    "children": [
                        {
                            "id": "635",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Brogues & Lace-Ups",
                            "children": []
                        },
                        {
                            "id": "636",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Business Slippers",
                            "children": [
                                {
                                    "id": "637",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Slippers",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "638",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "boots",
                    "children": [
                        {
                            "id": "639",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wellies",
                            "children": []
                        },
                        {
                            "id": "640",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Heeled Boots",
                            "children": []
                        },
                        {
                            "id": "641",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cowboy & Biker Boots",
                            "children": []
                        },
                        {
                            "id": "642",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Lace-Up Boots",
                            "children": []
                        },
                        {
                            "id": "643",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wellies",
                            "children": []
                        },
                        {
                            "id": "644",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Ankle Boots",
                            "children": []
                        },
                        {
                            "id": "645",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Snow Boots",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "646",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "flats",
                    "children": [
                        {
                            "id": "647",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Moccasins",
                            "children": []
                        },
                        {
                            "id": "648",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Espadrilles",
                            "children": []
                        },
                        {
                            "id": "649",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Lace-Ups",
                            "children": [
                                {
                                    "id": "650",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sporty Lace-Ups",
                                    "children": []
                                },
                                {
                                    "id": "651",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Boat Shoes",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "652",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Mules-and-clogs",
                    "children": []
                },
                {
                    "id": "653",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "sandals",
                    "children": [
                        {
                            "id": "654",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Flat Sandals",
                            "children": []
                        },
                        {
                            "id": "655",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "High Sandals",
                            "children": []
                        },
                        {
                            "id": "656",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Classic Sandals",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "657",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "wedges",
                    "children": []
                },
                {
                    "id": "658",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "sneakers",
                    "children": [
                        {
                            "id": "659",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Low-top Sneakers",
                            "children": []
                        },
                        {
                            "id": "660",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "High-top Sneakers",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "661",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "athletic shoes",
                    "children": []
                },
                {
                    "id": "662",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Flats & Oxfords",
                    "children": []
                },
                {
                    "id": "663",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Heels",
                    "children": []
                },
                {
                    "id": "664",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Occupational",
                    "children": []
                },
                {
                    "id": "665",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Slippers",
                    "children": []
                },
                {
                    "id": "666",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Formal",
                    "children": []
                },
                {
                    "id": "667",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Flip Flops",
                    "children": []
                },
                {
                    "id": "668",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Casual",
                    "children": []
                },
                {
                    "id": "669",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "slip-ons-shoes",
                    "children": []
                },
                {
                    "id": "670",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Costume shoes",
                    "children": []
                },
                {
                    "id": "671",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Ballerinas",
                    "children": []
                }
            ]
        }
    ],
    "queries": false
}
    //end
    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth - 50, h = infovis.offsetHeight - 50;
    
    //init Hypertree
    var ht = new $jit.Hypertree({
      //id of the visualization container
      injectInto: 'infovis',
      //canvas width and height
      width: w,
      height: h,
      //Change node and edge styles such as
      //color, width and dimensions.
      Node: {
          dim: 9,
          color: "#FF8C00"
      },
      Edge: {
          lineWidth: 2,
          color: "#6B8C45"
      },
      onBeforeCompute: function(node){
          Log.write("centering");
      },
      //Attach event handlers and add text to the
      //labels. This method is only triggered on label
      //creation
      onCreateLabel: function(domElement, node){
          domElement.innerHTML = node.name;
          $jit.util.addEvent(domElement, 'click', function () {
              ht.onClick(node.id, {
                  onComplete: function() {
                      ht.controller.onComplete();
                  }
              });
          });
      },
      //Change node styles when labels are placed
      //or moved.
      onPlaceLabel: function(domElement, node){
          var style = domElement.style;
          style.display = '';
          style.cursor = 'pointer';
          if (node._depth <= 1) {
              style.fontSize = "2em";
              style.color = "#000";

          } else if(node._depth == 2){
              style.fontSize = "1em";
              style.color = "#555";

          } else {
              style.display = 'none';
          }

          var left = parseInt(style.left);
          var w = domElement.offsetWidth;
          style.left = (left - w / 2) + 'px';
      },
      
      onComplete: function(){
          Log.write("done");
          
          //Build the right column relations list.
          //This is done by collecting the information (stored in the data property) 
          //for all the nodes adjacent to the centered node.
          var node = ht.graph.getClosestNodeToOrigin("current");
          var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
          html += "<ul>";
          node.eachAdjacency(function(adj){
              var child = adj.nodeTo;
              if (child.data) {
                  var rel = (child.data.band == node.name) ? child.data.relation : node.data.relation;
                  html += "<li>" + child.name + " " + "<div class=\"relation\">(relation: " + rel + ")</div></li>";
              }
          });
          html += "</ul>";
          $jit.id('inner-details').innerHTML = html;
      }
    });
    //load JSON data.
    ht.loadJSON(json);
    //compute positions and plot.
    ht.refresh();
    //end
    ht.controller.onComplete();
}
