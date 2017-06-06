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
    "id": "v-fashion",
    "description": null,
    "data": {
        "type": "vocab"
    },
    "children": [
        {
            "children": [
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Bald Caps",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "441"
                        },
                        {
                            "children": [],
                            "name": "Costume Accessory Sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "442"
                        },
                        {
                            "children": [],
                            "name": "Costume Capes",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "443"
                        },
                        {
                            "children": [],
                            "name": "Costume Gloves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "444"
                        },
                        {
                            "children": [],
                            "name": "Costume Hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "445"
                        },
                        {
                            "children": [],
                            "name": "Costume Special Effects",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "446"
                        },
                        {
                            "children": [],
                            "name": "Costume Tobacco Products",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "447"
                        },
                        {
                            "children": [],
                            "name": "Pretend Jewelry",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "448"
                        }
                    ],
                    "name": "Costume Accessories",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "440"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Baby & Toddler Belts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "450"
                        },
                        {
                            "children": [],
                            "name": "Baby & Toddler Gloves & Mittens",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "451"
                        },
                        {
                            "children": [],
                            "name": "Baby & Toddler Hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "452"
                        },
                        {
                            "children": [],
                            "name": "Baby Protective Wear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "453"
                        }
                    ],
                    "name": "Baby & Toddler Clothing Accessories",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "449"
                },
                {
                    "children": [],
                    "name": "Balaclavas",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "454"
                },
                {
                    "children": [],
                    "name": "Bandanas & Headties",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "455"
                },
                {
                    "children": [],
                    "name": "Belt Buckles",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "456"
                },
                {
                    "children": [],
                    "name": "Belts",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "457"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Bridal Veils",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "459"
                        }
                    ],
                    "name": "Bridal Accessories",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "458"
                },
                {
                    "children": [],
                    "name": "Button Studs",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "460"
                },
                {
                    "children": [],
                    "name": "Collar Stays",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "461"
                },
                {
                    "children": [],
                    "name": "Cufflinks",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "462"
                },
                {
                    "children": [],
                    "name": "Decorative Fans",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "463"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Arm Warmers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "465"
                        },
                        {
                            "children": [],
                            "name": "Ear Muffs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "466"
                        },
                        {
                            "children": [],
                            "name": "Fingerless Gloves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "467"
                        },
                        {
                            "children": [],
                            "name": "Gloves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "468"
                        },
                        {
                            "children": [],
                            "name": "Hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "469"
                        },
                        {
                            "children": [],
                            "name": "Mittens & Hand Muffs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "470"
                        },
                        {
                            "children": [],
                            "name": "Neck Warmers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "471"
                        },
                        {
                            "children": [],
                            "name": "Scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "472"
                        },
                        {
                            "children": [],
                            "name": "Sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "473"
                        }
                    ],
                    "name": "Cold Weather Accessories",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "464"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Sunglass Lens Replacements",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "475"
                        },
                        {
                            "children": [],
                            "name": "Clear Glass",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "476"
                        },
                        {
                            "children": [],
                            "name": "Sunglasses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "477"
                        }
                    ],
                    "name": "Eyewear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "474"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Hair Bun & Volume Shapers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "479"
                        },
                        {
                            "children": [],
                            "name": "Hair Combs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "480"
                        },
                        {
                            "children": [],
                            "name": "Hair Extensions",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "481"
                        },
                        {
                            "children": [],
                            "name": "Hair Forks & Sticks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "482"
                        },
                        {
                            "children": [],
                            "name": "Hair Nets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "483"
                        },
                        {
                            "children": [],
                            "name": "Hair Pins, Claws & Clips",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "484"
                        },
                        {
                            "children": [],
                            "name": "Hair Wreaths",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "485"
                        },
                        {
                            "children": [],
                            "name": "Headbands",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "486"
                        },
                        {
                            "children": [],
                            "name": "Ponytail Holders",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "487"
                        },
                        {
                            "children": [],
                            "name": "Tiaras",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "488"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Wig Caps",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "490"
                                },
                                {
                                    "children": [],
                                    "name": "Wig Glue & Tape",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "491"
                                }
                            ],
                            "name": "Wig Accessories",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "489"
                        },
                        {
                            "children": [],
                            "name": "Wigs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "492"
                        }
                    ],
                    "name": "Hair Accessories",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "478"
                },
                {
                    "children": [],
                    "name": "sashes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "493"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Fascinators",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "495"
                        },
                        {
                            "children": [],
                            "name": "Headdresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "496"
                        },
                        {
                            "children": [],
                            "name": "Turbans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "497"
                        }
                    ],
                    "name": "Headwear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "494"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Belt Buckles",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "499"
                        }
                    ],
                    "name": "belts",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "498"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Anklets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "501"
                        },
                        {
                            "children": [],
                            "name": "Body Jewelry",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "502"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Wristbands",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "504"
                                }
                            ],
                            "name": "Bracelets",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "503"
                        },
                        {
                            "children": [],
                            "name": "Brooches & Lapel Pins",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "505"
                        },
                        {
                            "children": [],
                            "name": "Charms & Pendants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "506"
                        },
                        {
                            "children": [],
                            "name": "Earrings",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "507"
                        },
                        {
                            "children": [],
                            "name": "Jewelry Sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "508"
                        },
                        {
                            "children": [],
                            "name": "Necklaces",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "509"
                        },
                        {
                            "children": [],
                            "name": "Rings",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "510"
                        },
                        {
                            "children": [],
                            "name": "Tie Clips",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "511"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Watch Bands",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "513"
                                },
                                {
                                    "children": [],
                                    "name": "Watch Stickers & Decals",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "514"
                                },
                                {
                                    "children": [],
                                    "name": "Watch Winders",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "515"
                                }
                            ],
                            "name": "Watch Accessories",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "512"
                        },
                        {
                            "children": [],
                            "name": "Watches",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "516"
                        }
                    ],
                    "name": "jewellery",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "500"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Boot Liners",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "518"
                        },
                        {
                            "children": [],
                            "name": "Gaiters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "519"
                        },
                        {
                            "children": [],
                            "name": "Shoe Covers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "520"
                        },
                        {
                            "children": [],
                            "name": "Shoelaces",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "521"
                        },
                        {
                            "children": [],
                            "name": "Spurs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "522"
                        }
                    ],
                    "name": "Shoe Accessories",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "517"
                },
                {
                    "children": [],
                    "name": "Gloves",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "523"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Small Bags",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "525"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Phone Cases",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "527"
                                },
                                {
                                    "children": [],
                                    "name": "Wash Bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "528"
                                },
                                {
                                    "children": [],
                                    "name": "Belt Bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "529"
                                }
                            ],
                            "name": "Small Bags",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "526"
                        },
                        {
                            "children": [],
                            "name": "backpacks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "530"
                        },
                        {
                            "children": [],
                            "name": "Tote-bags",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "531"
                        },
                        {
                            "children": [],
                            "name": "Diaper Bags",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "532"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Baguettes",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "534"
                                },
                                {
                                    "children": [],
                                    "name": "Bowling",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "535"
                                },
                                {
                                    "children": [],
                                    "name": "Day Clutches",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "536"
                                },
                                {
                                    "children": [],
                                    "name": "Evening Bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "537"
                                },
                                {
                                    "children": [],
                                    "name": "Hobos",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "538"
                                },
                                {
                                    "children": [],
                                    "name": "Totes",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "539"
                                },
                                {
                                    "children": [],
                                    "name": "Wristlets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "540"
                                }
                            ],
                            "name": "Handbags & Purses",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "533"
                        },
                        {
                            "children": [],
                            "name": "Handbag Accessories",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "541"
                        },
                        {
                            "children": [
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "Checkpoint-friendly Laptop Cases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "544"
                                        },
                                        {
                                            "children": [],
                                            "name": "Hard Drive Cases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "545"
                                        },
                                        {
                                            "children": [],
                                            "name": "Laptop Backpacks",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "546"
                                        },
                                        {
                                            "children": [],
                                            "name": "Laptop Messenger Bags",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "547"
                                        },
                                        {
                                            "children": [],
                                            "name": "Laptop Sleeves & Slipcases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "548"
                                        },
                                        {
                                            "children": [],
                                            "name": "Netbook Cases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "549"
                                        },
                                        {
                                            "children": [],
                                            "name": "Projector Cases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "550"
                                        },
                                        {
                                            "children": [],
                                            "name": "Rolling & Wheeled Laptop Cases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "551"
                                        }
                                    ],
                                    "name": "Briefcases & Laptop Bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "543"
                                },
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "Carry-Ons",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "553"
                                        },
                                        {
                                            "children": [],
                                            "name": "Garment Bags",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "554"
                                        },
                                        {
                                            "children": [],
                                            "name": "Hardside Luggage",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "555"
                                        },
                                        {
                                            "children": [],
                                            "name": "Matching Sets",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "556"
                                        },
                                        {
                                            "children": [],
                                            "name": "Rolling Luggage",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "557"
                                        },
                                        {
                                            "children": [],
                                            "name": "Totes",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "558"
                                        },
                                        {
                                            "children": [],
                                            "name": "Luggage Tags",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "559"
                                        },
                                        {
                                            "children": [],
                                            "name": "Packing Cubes",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "560"
                                        },
                                        {
                                            "children": [],
                                            "name": "Packing Folders",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "561"
                                        },
                                        {
                                            "children": [],
                                            "name": "Shoe Bags",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "562"
                                        }
                                    ],
                                    "name": "Travel & Shopping Bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "552"
                                },
                                {
                                    "children": [],
                                    "name": "Duffel & Gym Bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "563"
                                },
                                {
                                    "children": [],
                                    "name": "Fanny, Waist Packs",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "564"
                                },
                                {
                                    "children": [],
                                    "name": "Other Travel & Shopping Bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "565"
                                },
                                {
                                    "children": [],
                                    "name": "Reusable Eco Bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "566"
                                }
                            ],
                            "name": "Backpacks & Bookbags",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "542"
                        }
                    ],
                    "name": "bags",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "524"
                },
                {
                    "children": [],
                    "name": "Masks",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "567"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Hard Hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "569"
                        },
                        {
                            "children": [],
                            "name": "Baseball Caps",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "570"
                        },
                        {
                            "children": [],
                            "name": "Berets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "571"
                        },
                        {
                            "children": [],
                            "name": "Bowlers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "572"
                        },
                        {
                            "children": [],
                            "name": "Cowboy Hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "573"
                        },
                        {
                            "children": [],
                            "name": "Derby Hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "574"
                        },
                        {
                            "children": [],
                            "name": "Fedoras",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "575"
                        },
                        {
                            "children": [],
                            "name": "Knit Caps & Beanies",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "576"
                        },
                        {
                            "children": [],
                            "name": "Newsboy Caps",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "577"
                        },
                        {
                            "children": [],
                            "name": "Straw Hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "578"
                        },
                        {
                            "children": [],
                            "name": "Sun Hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "579"
                        },
                        {
                            "children": [],
                            "name": "Visors",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "580"
                        }
                    ],
                    "name": "Hats",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "568"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Cashmere scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "582"
                        },
                        {
                            "children": [],
                            "name": "Knit scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "583"
                        },
                        {
                            "children": [],
                            "name": "Prints & Patterns scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "584"
                        },
                        {
                            "children": [],
                            "name": "Rectangular scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "585"
                        },
                        {
                            "children": [],
                            "name": "Silk scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "586"
                        },
                        {
                            "children": [],
                            "name": "Square scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "587"
                        },
                        {
                            "children": [],
                            "name": "Wool scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "588"
                        }
                    ],
                    "name": "Scarves",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "581"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "bowling socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "591"
                                },
                                {
                                    "children": [],
                                    "name": "basketball socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "592"
                                },
                                {
                                    "children": [],
                                    "name": "cycling socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "593"
                                },
                                {
                                    "children": [],
                                    "name": "football socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "594"
                                },
                                {
                                    "children": [],
                                    "name": "golf socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "595"
                                },
                                {
                                    "children": [],
                                    "name": "hiking socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "596"
                                },
                                {
                                    "children": [],
                                    "name": "Ice hokey socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "597"
                                },
                                {
                                    "children": [],
                                    "name": "running socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "598"
                                },
                                {
                                    "children": [],
                                    "name": "skateboarding socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "599"
                                },
                                {
                                    "children": [],
                                    "name": "Snowboarding socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "600"
                                },
                                {
                                    "children": [],
                                    "name": "soccer socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "601"
                                },
                                {
                                    "children": [],
                                    "name": "tennis socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "602"
                                },
                                {
                                    "children": [],
                                    "name": "voley ball socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "603"
                                }
                            ],
                            "name": "sport socks",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "590"
                        },
                        {
                            "children": [],
                            "name": "Hoisery",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "604"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Crew Socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "606"
                                },
                                {
                                    "children": [],
                                    "name": "Dress Socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "607"
                                }
                            ],
                            "name": "Mens-socks",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "605"
                        },
                        {
                            "children": [],
                            "name": "Ankle Socks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "608"
                        },
                        {
                            "children": [],
                            "name": "Boots Socks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "609"
                        },
                        {
                            "children": [],
                            "name": "Footies",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "610"
                        },
                        {
                            "children": [],
                            "name": "Trouser Socks & Knee-Highs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "611"
                        }
                    ],
                    "name": "socks",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "589"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Bow Ties",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "613"
                        },
                        {
                            "children": [],
                            "name": "Neck Ties",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "614"
                        }
                    ],
                    "name": "Ties & Cummerbunds",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "612"
                },
                {
                    "children": [],
                    "name": "Umbrellas",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "615"
                },
                {
                    "children": [],
                    "name": "Handkerchiefs",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "616"
                },
                {
                    "children": [],
                    "name": "Collar Tips",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "617"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Business & Credit Card Cases",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "619"
                        },
                        {
                            "children": [],
                            "name": "Checkbook Holder",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "620"
                        },
                        {
                            "children": [],
                            "name": "ID & Badge Holders",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "621"
                        },
                        {
                            "children": [],
                            "name": "Other Men's ID & Doc Holders",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "622"
                        },
                        {
                            "children": [],
                            "name": "Passport Holders",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "623"
                        },
                        {
                            "children": [],
                            "name": "Business & Credit Card Cases",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "624"
                        },
                        {
                            "children": [],
                            "name": "Key Chains, Rings & Cases",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "625"
                        },
                        {
                            "children": [],
                            "name": "Organizers & Day Planners",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "626"
                        },
                        {
                            "children": [],
                            "name": "Money Clips",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "627"
                        },
                        {
                            "children": [],
                            "name": "Coin Purses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "628"
                        },
                        {
                            "children": [],
                            "name": "Passport Holders",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "629"
                        },
                        {
                            "children": [],
                            "name": "Travel Wallets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "630"
                        }
                    ],
                    "name": "Wallets & Key Organizers",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "618"
                }
            ],
            "name": "Accessories",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "id": "439"
        },
        {
            "children": [
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Snowboarding bibs",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "4"
                                },
                                {
                                    "children": [],
                                    "name": "Bicycle bibs",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "5"
                                }
                            ],
                            "name": "sport bibs",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "3"
                        }
                    ],
                    "name": "bibs",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "2"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "basketball jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "8"
                                },
                                {
                                    "children": [],
                                    "name": "bowling jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "9"
                                },
                                {
                                    "children": [],
                                    "name": "climbing jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "10"
                                },
                                {
                                    "children": [],
                                    "name": "football jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "11"
                                },
                                {
                                    "children": [],
                                    "name": "golf jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "12"
                                },
                                {
                                    "children": [],
                                    "name": "running jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "13"
                                },
                                {
                                    "children": [],
                                    "name": "voley ball jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "14"
                                },
                                {
                                    "children": [],
                                    "name": "Bicycle jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "15"
                                }
                            ],
                            "name": "sport jerseys",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "7"
                        }
                    ],
                    "name": "jerseys",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "6"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Bicycle skin suits",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "18"
                                }
                            ],
                            "name": "sport skin suits",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "17"
                        }
                    ],
                    "name": "skin suits",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "16"
                },
                {
                    "children": [],
                    "name": "blazers",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "19"
                },
                {
                    "children": [],
                    "name": "cardigan",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "20"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Parkas",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "22"
                        },
                        {
                            "children": [],
                            "name": "Trench Coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "23"
                        },
                        {
                            "children": [],
                            "name": "Cashmere Coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "24"
                        },
                        {
                            "children": [],
                            "name": "Suede coat",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "25"
                        },
                        {
                            "children": [],
                            "name": "Shearling Coat",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "26"
                        },
                        {
                            "children": [],
                            "name": "Microfiber Coat",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "27"
                        },
                        {
                            "children": [],
                            "name": "Wool coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "28"
                        },
                        {
                            "children": [],
                            "name": "Puffer coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "29"
                        },
                        {
                            "children": [],
                            "name": "Short Coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "30"
                        }
                    ],
                    "name": "coats",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "21"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "tennis dresses",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "33"
                                },
                                {
                                    "children": [],
                                    "name": "dance dresses",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "34"
                                }
                            ],
                            "name": "sport dresses",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "32"
                        },
                        {
                            "children": [],
                            "name": "Knitted Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "35"
                        },
                        {
                            "children": [],
                            "name": "Jersey Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "36"
                        },
                        {
                            "children": [],
                            "name": "Summer Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "37"
                        },
                        {
                            "children": [],
                            "name": "Dirndl & Costumes",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "38"
                        },
                        {
                            "children": [],
                            "name": "Bridal Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "39"
                        },
                        {
                            "children": [],
                            "name": "Maxi Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "40"
                        },
                        {
                            "children": [],
                            "name": "Cocktail Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "41"
                        },
                        {
                            "children": [],
                            "name": "Maternity dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "42"
                        },
                        {
                            "children": [],
                            "name": "Baby Doll",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "43"
                        },
                        {
                            "children": [],
                            "name": "Formal & Special Occasions",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "44"
                        },
                        {
                            "children": [],
                            "name": "Jumpers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "45"
                        },
                        {
                            "children": [],
                            "name": "Shifts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "46"
                        },
                        {
                            "children": [],
                            "name": "Shirtdresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "47"
                        },
                        {
                            "children": [],
                            "name": "Sundresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "48"
                        },
                        {
                            "children": [],
                            "name": "Sweater Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "49"
                        },
                        {
                            "children": [],
                            "name": "Tank",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "50"
                        },
                        {
                            "children": [],
                            "name": "Wrap",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "51"
                        },
                        {
                            "children": [],
                            "name": "Day-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "52"
                        }
                    ],
                    "name": "dresses",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "31"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "skiing hoodies",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "55"
                                }
                            ],
                            "name": "sport hoodies",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "54"
                        }
                    ],
                    "name": "hoodies",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "53"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "boxing jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "58"
                                },
                                {
                                    "children": [],
                                    "name": "cycling jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "59"
                                },
                                {
                                    "children": [],
                                    "name": "football jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "60"
                                },
                                {
                                    "children": [],
                                    "name": "golf jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "61"
                                },
                                {
                                    "children": [],
                                    "name": "hiking jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "62"
                                },
                                {
                                    "children": [],
                                    "name": "running jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "63"
                                },
                                {
                                    "children": [],
                                    "name": "skateboarding jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "64"
                                },
                                {
                                    "children": [],
                                    "name": "Snowboarding jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "65"
                                },
                                {
                                    "children": [],
                                    "name": "soccer jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "66"
                                },
                                {
                                    "children": [],
                                    "name": "tennis jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "67"
                                },
                                {
                                    "children": [],
                                    "name": "Motorcycle Jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "68"
                                },
                                {
                                    "children": [],
                                    "name": "golf jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "69"
                                }
                            ],
                            "name": "sport jackets",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "57"
                        },
                        {
                            "children": [],
                            "name": "Puffers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "70"
                        },
                        {
                            "children": [],
                            "name": "Rain & Outdoor Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "71"
                        },
                        {
                            "children": [],
                            "name": "Capes",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "72"
                        },
                        {
                            "children": [],
                            "name": "Blazers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "73"
                        },
                        {
                            "children": [],
                            "name": "Athletic Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "74"
                        },
                        {
                            "children": [],
                            "name": "Fleece Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "75"
                        },
                        {
                            "children": [],
                            "name": "Gilets & Waistcoats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "76"
                        },
                        {
                            "children": [],
                            "name": "Lightweight Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "77"
                        },
                        {
                            "children": [],
                            "name": "Down Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "78"
                        },
                        {
                            "children": [],
                            "name": "Denim Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "79"
                        },
                        {
                            "children": [],
                            "name": "Winter Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "80"
                        },
                        {
                            "children": [],
                            "name": "Sport Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "81"
                        },
                        {
                            "children": [],
                            "name": "Maternity Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "82"
                        },
                        {
                            "children": [],
                            "name": "Motorcycle Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "83"
                        },
                        {
                            "children": [],
                            "name": "Suede Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "84"
                        },
                        {
                            "children": [],
                            "name": "Leather Jacket",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "85"
                        },
                        {
                            "children": [],
                            "name": "Shearling Jacket",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "86"
                        },
                        {
                            "children": [],
                            "name": "Microfiber Jacket",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "87"
                        }
                    ],
                    "name": "jackets",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "56"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Maternity Pantyhose",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "89"
                        }
                    ],
                    "name": "Pantyhose",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "88"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Maternity Panties",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "91"
                        }
                    ],
                    "name": "Panties",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "90"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Maternity outfits & sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "93"
                        }
                    ],
                    "name": "Outfits & Sets",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "92"
                },
                {
                    "children": [],
                    "name": "skorts",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "94"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "track pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "97"
                                },
                                {
                                    "children": [],
                                    "name": "golf pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "98"
                                },
                                {
                                    "children": [],
                                    "name": "rock climbing pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "99"
                                },
                                {
                                    "children": [],
                                    "name": "yoga pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "100"
                                },
                                {
                                    "children": [],
                                    "name": "cycling pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "101"
                                },
                                {
                                    "children": [],
                                    "name": "football pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "102"
                                },
                                {
                                    "children": [],
                                    "name": "hiking pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "103"
                                },
                                {
                                    "children": [],
                                    "name": "Ice hokey pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "104"
                                },
                                {
                                    "children": [],
                                    "name": "skateboarding pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "105"
                                },
                                {
                                    "children": [],
                                    "name": "Snowboarding pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "106"
                                },
                                {
                                    "children": [],
                                    "name": "soccer pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "107"
                                },
                                {
                                    "children": [],
                                    "name": "tennis pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "108"
                                },
                                {
                                    "children": [],
                                    "name": "Hunting & Tactical Pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "109"
                                },
                                {
                                    "children": [],
                                    "name": "Motorcycle Pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "110"
                                }
                            ],
                            "name": "sport pants",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "96"
                        },
                        {
                            "children": [],
                            "name": "Business Pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "111"
                        },
                        {
                            "children": [],
                            "name": "Casual pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "112"
                        },
                        {
                            "children": [],
                            "name": "Joggers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "113"
                        },
                        {
                            "children": [],
                            "name": "Rain pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "114"
                        },
                        {
                            "children": [],
                            "name": "Maternity pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "115"
                        },
                        {
                            "children": [],
                            "name": "Cargo-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "116"
                        },
                        {
                            "children": [],
                            "name": "Carpenter",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "117"
                        },
                        {
                            "children": [],
                            "name": "Corduroy",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "118"
                        },
                        {
                            "children": [],
                            "name": "Chinos-and-khakis",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "119"
                        },
                        {
                            "children": [],
                            "name": "Dress & Formal",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "120"
                        },
                        {
                            "children": [],
                            "name": "Overalls",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "121"
                        },
                        {
                            "children": [],
                            "name": "Cropped Pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "122"
                        },
                        {
                            "children": [],
                            "name": "Knits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "123"
                        },
                        {
                            "children": [],
                            "name": "Wide-leg pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "124"
                        },
                        {
                            "children": [],
                            "name": "Corduroys",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "125"
                        },
                        {
                            "children": [],
                            "name": "Overalls pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "126"
                        }
                    ],
                    "name": "Pants",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "95"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Bootcut-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "128"
                        },
                        {
                            "children": [],
                            "name": "Cropped-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "129"
                        },
                        {
                            "children": [],
                            "name": "Distressed-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "130"
                        },
                        {
                            "children": [],
                            "name": "Flare-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "131"
                        },
                        {
                            "children": [],
                            "name": "Maternity jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "132"
                        },
                        {
                            "children": [],
                            "name": "Relaxed-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "133"
                        },
                        {
                            "children": [],
                            "name": "Skinny-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "134"
                        },
                        {
                            "children": [],
                            "name": "Stretch-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "135"
                        },
                        {
                            "children": [],
                            "name": "Slim Jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "136"
                        },
                        {
                            "children": [],
                            "name": "Straight leg jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "137"
                        }
                    ],
                    "name": "jeans",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "127"
                },
                {
                    "children": [],
                    "name": "Jumpsuits",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "138"
                },
                {
                    "children": [],
                    "name": "Rompers",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "139"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Fleece jumpers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "141"
                        }
                    ],
                    "name": "jumpers",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "140"
                },
                {
                    "children": [],
                    "name": "Leggings",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "142"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "boxing shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "145"
                                },
                                {
                                    "children": [],
                                    "name": "hiking shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "146"
                                },
                                {
                                    "children": [],
                                    "name": "cycling shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "147"
                                },
                                {
                                    "children": [],
                                    "name": "Ice hokey shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "148"
                                },
                                {
                                    "children": [],
                                    "name": "tennis shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "149"
                                },
                                {
                                    "children": [],
                                    "name": "basketball shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "150"
                                },
                                {
                                    "children": [],
                                    "name": "bowling shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "151"
                                },
                                {
                                    "children": [],
                                    "name": "Fitness & Exercise shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "152"
                                },
                                {
                                    "children": [],
                                    "name": "golf shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "153"
                                },
                                {
                                    "children": [],
                                    "name": "soccer shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "154"
                                }
                            ],
                            "name": "sport shirts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "144"
                        },
                        {
                            "children": [
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "skiing t shirts",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "157"
                                        }
                                    ],
                                    "name": "sport t-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "156"
                                },
                                {
                                    "children": [],
                                    "name": "Print T-Shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "158"
                                },
                                {
                                    "children": [],
                                    "name": "Pattern T-Shirt",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "159"
                                },
                                {
                                    "children": [],
                                    "name": "Uni T-Shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "160"
                                }
                            ],
                            "name": "T-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "155"
                        },
                        {
                            "children": [],
                            "name": "longsleeve-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "161"
                        },
                        {
                            "children": [],
                            "name": "shortsleeve-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "162"
                        },
                        {
                            "children": [],
                            "name": "Button-Downs & Oxfords",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "163"
                        },
                        {
                            "children": [],
                            "name": "Dress Shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "164"
                        },
                        {
                            "children": [],
                            "name": "Henley & Rugby Shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "165"
                        },
                        {
                            "children": [],
                            "name": "Polos",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "166"
                        },
                        {
                            "children": [],
                            "name": "Button down shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "167"
                        },
                        {
                            "children": [],
                            "name": "Turtlenecks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "168"
                        },
                        {
                            "children": [],
                            "name": "Casual shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "169"
                        }
                    ],
                    "name": "shirts",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "143"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "basketball shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "172"
                                },
                                {
                                    "children": [],
                                    "name": "bowling shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "173"
                                },
                                {
                                    "children": [],
                                    "name": "cycling shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "174"
                                },
                                {
                                    "children": [],
                                    "name": "football shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "175"
                                },
                                {
                                    "children": [],
                                    "name": "hiking shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "176"
                                },
                                {
                                    "children": [],
                                    "name": "Ice hokey shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "177"
                                },
                                {
                                    "children": [],
                                    "name": "running shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "178"
                                },
                                {
                                    "children": [],
                                    "name": "skateboarding shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "179"
                                },
                                {
                                    "children": [],
                                    "name": "skiing shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "180"
                                },
                                {
                                    "children": [],
                                    "name": "tennis shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "181"
                                },
                                {
                                    "children": [],
                                    "name": "voleyball shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "182"
                                },
                                {
                                    "children": [],
                                    "name": "Boxing Shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "183"
                                },
                                {
                                    "children": [],
                                    "name": "Bicycle shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "184"
                                },
                                {
                                    "children": [],
                                    "name": "Martial Arts Shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "185"
                                },
                                {
                                    "children": [],
                                    "name": "golf shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "186"
                                },
                                {
                                    "children": [],
                                    "name": "climbing shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "187"
                                },
                                {
                                    "children": [],
                                    "name": "soccer shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "188"
                                },
                                {
                                    "children": [],
                                    "name": "running shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "189"
                                }
                            ],
                            "name": "sport shorts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "171"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Casual",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "191"
                                },
                                {
                                    "children": [],
                                    "name": "Denim",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "192"
                                },
                                {
                                    "children": [],
                                    "name": "Dress",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "193"
                                }
                            ],
                            "name": "Maternity shorts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "190"
                        },
                        {
                            "children": [],
                            "name": "Bermuda Shorts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "194"
                        },
                        {
                            "children": [],
                            "name": "Casual",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "195"
                        },
                        {
                            "children": [],
                            "name": "Culottes",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "196"
                        },
                        {
                            "children": [],
                            "name": "Cutoffs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "197"
                        },
                        {
                            "children": [],
                            "name": "Denim",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "198"
                        },
                        {
                            "children": [],
                            "name": "Denim Shorts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "199"
                        },
                        {
                            "children": [],
                            "name": "Dress",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "200"
                        },
                        {
                            "children": [],
                            "name": "Knits & Elastic Waist",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "201"
                        },
                        {
                            "children": [],
                            "name": "Khaki",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "202"
                        },
                        {
                            "children": [
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "tennis  skorts",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "205"
                                        }
                                    ],
                                    "name": "sport skorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "204"
                                }
                            ],
                            "name": "skorts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "203"
                        }
                    ],
                    "name": "shorts",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "170"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "tennis skirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "208"
                                },
                                {
                                    "children": [],
                                    "name": "dance skirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "209"
                                }
                            ],
                            "name": "sport skirts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "207"
                        },
                        {
                            "children": [],
                            "name": "Maternity skirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "210"
                        },
                        {
                            "children": [],
                            "name": "Mid-length-skirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "211"
                        },
                        {
                            "children": [],
                            "name": "Mini-skirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "212"
                        },
                        {
                            "children": [],
                            "name": "Long skirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "213"
                        }
                    ],
                    "name": "skirts",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "206"
                },
                {
                    "children": [],
                    "name": "Costumes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "214"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Loungewear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "216"
                        },
                        {
                            "children": [],
                            "name": "Nightgowns",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "217"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Bathrobes",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "219"
                                }
                            ],
                            "name": "Robes",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "218"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Pajama Bottoms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "221"
                                },
                                {
                                    "children": [],
                                    "name": "Pajama Sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "222"
                                },
                                {
                                    "children": [],
                                    "name": "Pajama Tops",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "223"
                                }
                            ],
                            "name": "pajamas",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "220"
                        },
                        {
                            "children": [],
                            "name": "Sleep Shirts & Nightgowns",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "224"
                        }
                    ],
                    "name": "sleepwear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "215"
                },
                {
                    "children": [],
                    "name": "sportswear",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "225"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Suit Vests",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "227"
                        },
                        {
                            "children": [],
                            "name": "Suit Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "228"
                        },
                        {
                            "children": [],
                            "name": "Tuxedo Jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "229"
                        },
                        {
                            "children": [],
                            "name": "Tuxedos",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "230"
                        },
                        {
                            "children": [],
                            "name": "Tuxedo Pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "231"
                        },
                        {
                            "children": [],
                            "name": "Dress Suits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "232"
                        },
                        {
                            "children": [],
                            "name": "Pantsuits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "233"
                        },
                        {
                            "children": [],
                            "name": "Skirt Suits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "234"
                        },
                        {
                            "children": [],
                            "name": "Tuxedos",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "235"
                        },
                        {
                            "children": [],
                            "name": "Suit Sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "236"
                        },
                        {
                            "children": [],
                            "name": "Rain suits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "237"
                        }
                    ],
                    "name": "suits",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "226"
                },
                {
                    "children": [],
                    "name": "sweats",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "238"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "cardigan-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "240"
                        },
                        {
                            "children": [],
                            "name": "cashmere-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "241"
                        },
                        {
                            "children": [],
                            "name": "crewneck-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "242"
                        },
                        {
                            "children": [],
                            "name": "half-zip-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "243"
                        },
                        {
                            "children": [],
                            "name": "Sweaters vests",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "244"
                        },
                        {
                            "children": [],
                            "name": "Turtlenecks-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "245"
                        },
                        {
                            "children": [],
                            "name": "Polos",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "246"
                        },
                        {
                            "children": [],
                            "name": "v-neck-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "247"
                        },
                        {
                            "children": [],
                            "name": "Shrugs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "248"
                        },
                        {
                            "children": [],
                            "name": "Tunics",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "249"
                        },
                        {
                            "children": [],
                            "name": "twin sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "250"
                        }
                    ],
                    "name": "sweaters",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "239"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Dirndls",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "252"
                        },
                        {
                            "children": [],
                            "name": "Hakama Trousers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "253"
                        },
                        {
                            "children": [],
                            "name": "Japanese Black Formal Wear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "254"
                        },
                        {
                            "children": [],
                            "name": "Kimono Outerwear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "255"
                        },
                        {
                            "children": [],
                            "name": "Kimonos",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "256"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Baptism & Communion Dresses",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "258"
                                }
                            ],
                            "name": "Religious Ceremonial Clothing",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "257"
                        },
                        {
                            "children": [],
                            "name": "Saris & Lehengas",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "259"
                        },
                        {
                            "children": [],
                            "name": "Traditional Leather Pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "260"
                        },
                        {
                            "children": [],
                            "name": "Yukata",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "261"
                        }
                    ],
                    "name": "Traditional & Ceremonial Clothing",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "251"
                },
                {
                    "children": [],
                    "name": "sweatshirt",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "262"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Board Shorts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "264"
                        },
                        {
                            "children": [],
                            "name": "Briefs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "265"
                        },
                        {
                            "children": [],
                            "name": "Racing",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "266"
                        },
                        {
                            "children": [],
                            "name": "Rash Guards",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "267"
                        },
                        {
                            "children": [],
                            "name": "Trunks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "268"
                        },
                        {
                            "children": [],
                            "name": "Cover-Ups",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "269"
                        },
                        {
                            "children": [],
                            "name": "One Pieces",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "270"
                        },
                        {
                            "children": [],
                            "name": "racing",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "271"
                        },
                        {
                            "children": [],
                            "name": "rash guards",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "272"
                        },
                        {
                            "children": [],
                            "name": "Separates",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "273"
                        },
                        {
                            "children": [],
                            "name": "Tankinis",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "274"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Bikini Top",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "276"
                                },
                                {
                                    "children": [],
                                    "name": "Bikini Bottom",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "277"
                                }
                            ],
                            "name": "Two-Piece, Bikinis",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "275"
                        }
                    ],
                    "name": "swimwear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "263"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "tank tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "279"
                        },
                        {
                            "children": [],
                            "name": "Button-front-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "280"
                        },
                        {
                            "children": [],
                            "name": "Camisole-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "281"
                        },
                        {
                            "children": [],
                            "name": "Halter-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "282"
                        },
                        {
                            "children": [],
                            "name": "Longsleeve-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "283"
                        },
                        {
                            "children": [],
                            "name": "Shortsleeve-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "284"
                        },
                        {
                            "children": [],
                            "name": "Tank-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "285"
                        },
                        {
                            "children": [],
                            "name": "Maternity Tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "286"
                        }
                    ],
                    "name": "tops",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "278"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Sport Trousers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "288"
                        }
                    ],
                    "name": "trousers",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "287"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Sport underwear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "290"
                        },
                        {
                            "children": [],
                            "name": "Jock Straps",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "291"
                        },
                        {
                            "children": [],
                            "name": "Thongs & G-Strings",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "292"
                        },
                        {
                            "children": [],
                            "name": "Mens-boxers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "293"
                        },
                        {
                            "children": [],
                            "name": "Mens-briefs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "294"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Bottoms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "296"
                                },
                                {
                                    "children": [],
                                    "name": "Sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "297"
                                },
                                {
                                    "children": [],
                                    "name": "Tops",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "298"
                                }
                            ],
                            "name": "Thermal Underwear",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "295"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Abdominal Support",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "300"
                                },
                                {
                                    "children": [],
                                    "name": "Belly Bands",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "301"
                                },
                                {
                                    "children": [],
                                    "name": "Bra Extenders,",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "302"
                                },
                                {
                                    "children": [],
                                    "name": "Camisoles",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "303"
                                }
                            ],
                            "name": "Maternity-intimates",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "299"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Bras",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "305"
                                },
                                {
                                    "children": [],
                                    "name": "Dresses",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "306"
                                },
                                {
                                    "children": [],
                                    "name": "Sleepwear",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "307"
                                },
                                {
                                    "children": [],
                                    "name": "Tops",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "308"
                                }
                            ],
                            "name": "Nursing",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "304"
                        },
                        {
                            "children": [],
                            "name": "Camisoles & Camisole Sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "309"
                        },
                        {
                            "children": [
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "Adhesive Bras",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "312"
                                        },
                                        {
                                            "children": [],
                                            "name": "Breast Petals",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "313"
                                        },
                                        {
                                            "children": [],
                                            "name": "Bra Extenders,",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "314"
                                        },
                                        {
                                            "children": [],
                                            "name": "Pads & Enhancers",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "315"
                                        },
                                        {
                                            "children": [],
                                            "name": "Breast Petals",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "316"
                                        },
                                        {
                                            "children": [],
                                            "name": "Lingerie Bags",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "317"
                                        },
                                        {
                                            "children": [],
                                            "name": "Lingerie Tape",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "318"
                                        },
                                        {
                                            "children": [],
                                            "name": "Straps",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "319"
                                        }
                                    ],
                                    "name": "accessories",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "311"
                                },
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "Bralettes",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "321"
                                        },
                                        {
                                            "children": [],
                                            "name": "Convertible",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "322"
                                        },
                                        {
                                            "children": [],
                                            "name": "Demicup",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "323"
                                        },
                                        {
                                            "children": [],
                                            "name": "Mastectom",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "324"
                                        },
                                        {
                                            "children": [],
                                            "name": "Minimizers",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "325"
                                        },
                                        {
                                            "children": [],
                                            "name": "Push-Up",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "326"
                                        },
                                        {
                                            "children": [],
                                            "name": "Sports Bras",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "327"
                                        },
                                        {
                                            "children": [],
                                            "name": "Strapless",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "328"
                                        }
                                    ],
                                    "name": "bras",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "320"
                                },
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "Bodysuits",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "330"
                                        },
                                        {
                                            "children": [],
                                            "name": "Camisoles",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "331"
                                        },
                                        {
                                            "children": [],
                                            "name": "Control Panties",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "332"
                                        },
                                        {
                                            "children": [],
                                            "name": "Control Slips",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "333"
                                        },
                                        {
                                            "children": [],
                                            "name": "Thigh Slimmers",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "334"
                                        },
                                        {
                                            "children": [],
                                            "name": "Waist Cinchers,",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "335"
                                        }
                                    ],
                                    "name": "Shapewear",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "329"
                                },
                                {
                                    "children": [],
                                    "name": "Garter Belts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "336"
                                },
                                {
                                    "children": [],
                                    "name": "Corsets & Bustiers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "337"
                                },
                                {
                                    "children": [],
                                    "name": "Breast Forms, Enhancers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "338"
                                },
                                {
                                    "children": [],
                                    "name": "Stockings & Thigh-Highs",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "339"
                                },
                                {
                                    "children": [],
                                    "name": "Lingerie",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "340"
                                },
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "Garter Belts",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "342"
                                        },
                                        {
                                            "children": [],
                                            "name": "Garters",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "343"
                                        }
                                    ],
                                    "name": "Lingerie Accessories",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "341"
                                },
                                {
                                    "children": [],
                                    "name": "long johns",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "344"
                                },
                                {
                                    "children": [],
                                    "name": "Leg Warmers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "345"
                                },
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "Bikinis,",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "347"
                                        },
                                        {
                                            "children": [],
                                            "name": "Boy Shorts,",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "348"
                                        },
                                        {
                                            "children": [],
                                            "name": "Briefs",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "349"
                                        },
                                        {
                                            "children": [],
                                            "name": "G-Strings",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "350"
                                        },
                                        {
                                            "children": [],
                                            "name": "Hipsters",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "351"
                                        },
                                        {
                                            "children": [],
                                            "name": "Tangas",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "352"
                                        },
                                        {
                                            "children": [],
                                            "name": "Thongs",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "353"
                                        }
                                    ],
                                    "name": "panties",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "346"
                                },
                                {
                                    "children": [
                                        {
                                            "children": [],
                                            "name": "Full Slips",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "355"
                                        },
                                        {
                                            "children": [],
                                            "name": "Half Slips",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "356"
                                        }
                                    ],
                                    "name": "Slips",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "354"
                                },
                                {
                                    "children": [
                                        {
                                            "children": [
                                                {
                                                    "children": [],
                                                    "name": "football tights",
                                                    "data": {
                                                        "type": "concept",
                                                        "depth": 5
                                                    },
                                                    "id": "359"
                                                },
                                                {
                                                    "children": [],
                                                    "name": "skateboarding tights",
                                                    "data": {
                                                        "type": "concept",
                                                        "depth": 5
                                                    },
                                                    "id": "360"
                                                },
                                                {
                                                    "children": [],
                                                    "name": "Bicycle tights",
                                                    "data": {
                                                        "type": "concept",
                                                        "depth": 5
                                                    },
                                                    "id": "361"
                                                }
                                            ],
                                            "name": "sport tights",
                                            "data": {
                                                "type": "concept",
                                                "depth": 6
                                            },
                                            "id": "358"
                                        },
                                        {
                                            "children": [],
                                            "name": "Control Top",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "362"
                                        },
                                        {
                                            "children": [],
                                            "name": "Matte",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "363"
                                        },
                                        {
                                            "children": [],
                                            "name": "Mesh & Net",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "364"
                                        },
                                        {
                                            "children": [],
                                            "name": "Opaque",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "365"
                                        },
                                        {
                                            "children": [],
                                            "name": "Patterned",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "id": "366"
                                        }
                                    ],
                                    "name": "Tights",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "id": "357"
                                },
                                {
                                    "children": [],
                                    "name": "thongs",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "367"
                                }
                            ],
                            "name": "Women-intimates",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "310"
                        }
                    ],
                    "name": "underwear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "289"
                },
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "football vests",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "370"
                                },
                                {
                                    "children": [],
                                    "name": "climbing robes",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "371"
                                },
                                {
                                    "children": [],
                                    "name": "Hunting & Fishing Vests",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "372"
                                }
                            ],
                            "name": "sports vests",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "369"
                        }
                    ],
                    "name": "vests",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "368"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Peasant Blouses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "374"
                        }
                    ],
                    "name": "Blouses",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "373"
                },
                {
                    "children": [],
                    "name": "Camis",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "375"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Baby & Toddler Bottoms",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "377"
                        },
                        {
                            "children": [],
                            "name": "Baby & Toddler Diaper Covers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "378"
                        },
                        {
                            "children": [],
                            "name": "Baby & Toddler Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "379"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Fleece",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "381"
                                },
                                {
                                    "children": [],
                                    "name": "Vests",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "382"
                                },
                                {
                                    "children": [],
                                    "name": "Rain Wear",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "383"
                                },
                                {
                                    "children": [],
                                    "name": "Jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "384"
                                },
                                {
                                    "children": [],
                                    "name": "Snow Wear",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "385"
                                },
                                {
                                    "children": [],
                                    "name": "Puffers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "386"
                                },
                                {
                                    "children": [],
                                    "name": "Sport",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "387"
                                }
                            ],
                            "name": "Baby & Toddler Outerwear",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "380"
                        },
                        {
                            "children": [],
                            "name": "Baby & Toddler Outfits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "388"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Sleepsacks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "390"
                                },
                                {
                                    "children": [],
                                    "name": "Robes",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "391"
                                },
                                {
                                    "children": [],
                                    "name": "Blanket Sleepers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "392"
                                },
                                {
                                    "children": [],
                                    "name": "Sets & Pajamas",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "393"
                                }
                            ],
                            "name": "Baby & Toddler Sleepwear",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "389"
                        },
                        {
                            "children": [],
                            "name": "Baby & Toddler Socks & Tights",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "394"
                        },
                        {
                            "children": [],
                            "name": "Baby & Toddler Swimwear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "395"
                        },
                        {
                            "children": [],
                            "name": "Baby & Toddler Tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "396"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Pant Sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "398"
                                },
                                {
                                    "children": [],
                                    "name": "Skirt Sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "399"
                                },
                                {
                                    "children": [],
                                    "name": "Short Sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "400"
                                }
                            ],
                            "name": "Clothing Sets",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "397"
                        },
                        {
                            "children": [],
                            "name": "Baby One-Pieces",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "401"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Tights",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "403"
                                },
                                {
                                    "children": [],
                                    "name": "Undershirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "404"
                                },
                                {
                                    "children": [],
                                    "name": "Socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "405"
                                },
                                {
                                    "children": [],
                                    "name": "Pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "406"
                                }
                            ],
                            "name": "Toddler Underwear",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "402"
                        }
                    ],
                    "name": "Baby & Toddler Clothing",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "376"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Contractor Pants & Coveralls",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "408"
                        },
                        {
                            "children": [],
                            "name": "Flight Suits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "409"
                        },
                        {
                            "children": [],
                            "name": "Military Uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "410"
                        },
                        {
                            "children": [],
                            "name": "School Uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "411"
                        },
                        {
                            "children": [],
                            "name": "Security Uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "412"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Baseball Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "414"
                                },
                                {
                                    "children": [],
                                    "name": "Basketball Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "415"
                                },
                                {
                                    "children": [],
                                    "name": "Cheerleading Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "416"
                                },
                                {
                                    "children": [],
                                    "name": "Cricket Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "417"
                                },
                                {
                                    "children": [],
                                    "name": "Football Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "418"
                                },
                                {
                                    "children": [],
                                    "name": "Hockey Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "419"
                                },
                                {
                                    "children": [],
                                    "name": "Martial Arts Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "420"
                                },
                                {
                                    "children": [],
                                    "name": "Officiating Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "421"
                                },
                                {
                                    "children": [],
                                    "name": "Soccer Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "422"
                                },
                                {
                                    "children": [],
                                    "name": "Softball Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "423"
                                },
                                {
                                    "children": [],
                                    "name": "Wrestling Uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "424"
                                }
                            ],
                            "name": "Sports Uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "413"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Chef's Hats",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "426"
                                },
                                {
                                    "children": [],
                                    "name": "Chef's Jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "427"
                                },
                                {
                                    "children": [],
                                    "name": "Chef's Pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "428"
                                }
                            ],
                            "name": "Chef's Uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "425"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Scrub Caps",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "430"
                                },
                                {
                                    "children": [],
                                    "name": "Scrub Jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "431"
                                },
                                {
                                    "children": [],
                                    "name": "Scrub Pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "432"
                                },
                                {
                                    "children": [],
                                    "name": "Scrub Sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "433"
                                },
                                {
                                    "children": [],
                                    "name": "Scrub Shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "434"
                                }
                            ],
                            "name": "Medical Uniforms & Scrubs",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "429"
                        }
                    ],
                    "name": "Uniforms",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "407"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Bridal Party Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "436"
                        },
                        {
                            "children": [],
                            "name": "Wedding Dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "437"
                        },
                        {
                            "children": [],
                            "name": "White Coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "438"
                        }
                    ],
                    "name": "Wedding & Bridal Party Dresses",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "435"
                }
            ],
            "name": "Clothes",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "id": "1"
        },
        {
            "children": [
                {
                    "children": [],
                    "name": "black",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "676"
                },
                {
                    "children": [],
                    "name": "white",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "677"
                },
                {
                    "children": [],
                    "name": "red",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "678"
                }
            ],
            "name": "color",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "id": "675"
        },
        {
            "children": [
                {
                    "children": [],
                    "name": "buttons",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "690"
                },
                {
                    "children": [],
                    "name": "zip",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "691"
                }
            ],
            "name": "features",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "id": "689"
        },
        {
            "children": [
                {
                    "children": [],
                    "name": "wool",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "680"
                },
                {
                    "children": [],
                    "name": "silk",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "681"
                },
                {
                    "children": [],
                    "name": "cashmere",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "682"
                },
                {
                    "children": [],
                    "name": "microfiber",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "683"
                },
                {
                    "children": [],
                    "name": "wool",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "684"
                },
                {
                    "children": [],
                    "name": "silk",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "685"
                },
                {
                    "children": [],
                    "name": "leather",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "686"
                },
                {
                    "children": [],
                    "name": "suede",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "687"
                },
                {
                    "children": [],
                    "name": "shearling",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "688"
                }
            ],
            "name": "material (add a relation to clothes )",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "id": "679"
        },
        {
            "children": [
                {
                    "children": [],
                    "name": "floral",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "673"
                },
                {
                    "children": [],
                    "name": "zibra",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "674"
                }
            ],
            "name": "pattern",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "id": "672"
        },
        {
            "children": [
                {
                    "children": [],
                    "name": "Crib shoes(Gir/ boy)",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "632"
                },
                {
                    "children": [],
                    "name": "First Walkers (Girl/ boy)",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "633"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Brogues & Lace-Ups",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "635"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Slippers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "637"
                                }
                            ],
                            "name": "Business Slippers",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "636"
                        }
                    ],
                    "name": "Business Shoes",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "634"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Wellies",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "639"
                        },
                        {
                            "children": [],
                            "name": "Heeled Boots",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "640"
                        },
                        {
                            "children": [],
                            "name": "Cowboy & Biker Boots",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "641"
                        },
                        {
                            "children": [],
                            "name": "Lace-Up Boots",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "642"
                        },
                        {
                            "children": [],
                            "name": "Wellies",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "643"
                        },
                        {
                            "children": [],
                            "name": "Ankle Boots",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "644"
                        },
                        {
                            "children": [],
                            "name": "Snow Boots",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "645"
                        }
                    ],
                    "name": "boots",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "638"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Moccasins",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "647"
                        },
                        {
                            "children": [],
                            "name": "Espadrilles",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "648"
                        },
                        {
                            "children": [
                                {
                                    "children": [],
                                    "name": "Sporty Lace-Ups",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "650"
                                },
                                {
                                    "children": [],
                                    "name": "Boat Shoes",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "id": "651"
                                }
                            ],
                            "name": "Lace-Ups",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "id": "649"
                        }
                    ],
                    "name": "flats",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "646"
                },
                {
                    "children": [],
                    "name": "Mules-and-clogs",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "652"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Flat Sandals",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "654"
                        },
                        {
                            "children": [],
                            "name": "High Sandals",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "655"
                        },
                        {
                            "children": [],
                            "name": "Classic Sandals",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "656"
                        }
                    ],
                    "name": "sandals",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "653"
                },
                {
                    "children": [],
                    "name": "wedges",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "657"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "name": "Low-top Sneakers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "659"
                        },
                        {
                            "children": [],
                            "name": "High-top Sneakers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "id": "660"
                        }
                    ],
                    "name": "sneakers",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "id": "658"
                },
                {
                    "children": [],
                    "name": "athletic shoes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "661"
                },
                {
                    "children": [],
                    "name": "Flats & Oxfords",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "662"
                },
                {
                    "children": [],
                    "name": "Heels",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "663"
                },
                {
                    "children": [],
                    "name": "Occupational",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "664"
                },
                {
                    "children": [],
                    "name": "Slippers",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "665"
                },
                {
                    "children": [],
                    "name": "Formal",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "666"
                },
                {
                    "children": [],
                    "name": "Flip Flops",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "667"
                },
                {
                    "children": [],
                    "name": "Casual",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "668"
                },
                {
                    "children": [],
                    "name": "slip-ons-shoes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "669"
                },
                {
                    "children": [],
                    "name": "Costume shoes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "670"
                },
                {
                    "children": [],
                    "name": "Ballerinas",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "id": "671"
                }
            ],
            "name": "Shoes",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "id": "631"
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
              style.fontSize = "1em";
              style.color = "#000";

          } else if(node._depth == 2){
              style.fontSize = "0.9em";
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
