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
    "id": "v-fashion-2017-12-08",
    "children": [
        {
            "id": "accessories1",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "name": "Accessories",
            "children": [
                {
                    "id": "costume",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Costume",
                    "children": [
                        {
                            "id": "bald-caps",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bald Caps",
                            "children": []
                        },
                        {
                            "id": "costume-accessory-sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Accessory Sets",
                            "children": []
                        },
                        {
                            "id": "costume-capes",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Capes",
                            "children": []
                        },
                        {
                            "id": "costume-gloves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Gloves",
                            "children": []
                        },
                        {
                            "id": "costume-hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Hats",
                            "children": []
                        },
                        {
                            "id": "costume-special-effects",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Special Effects",
                            "children": []
                        },
                        {
                            "id": "costume-tobacco-products",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Costume Tobacco Products",
                            "children": []
                        },
                        {
                            "id": "pretend-jewelry",
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
                    "id": "babytoddler",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Baby&Toddler",
                    "children": [
                        {
                            "id": "baby-toddler-belts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Belts",
                            "children": []
                        },
                        {
                            "id": "baby-toddler-gloves-mittens",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Gloves & Mittens",
                            "children": []
                        },
                        {
                            "id": "baby-toddler-hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Hats",
                            "children": []
                        },
                        {
                            "id": "baby-protective-wear",
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
                    "id": "belt",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Belt",
                    "children": []
                },
                {
                    "id": "bridal",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Bridal",
                    "children": [
                        {
                            "id": "bridal-veils",
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
                    "id": "cold-weather",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Cold Weather",
                    "children": [
                        {
                            "id": "arm-warmers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Arm Warmers",
                            "children": []
                        },
                        {
                            "id": "ear-muffs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Ear Muffs",
                            "children": []
                        },
                        {
                            "id": "fingerless-gloves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fingerless Gloves",
                            "children": []
                        },
                        {
                            "id": "gloves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Gloves",
                            "children": []
                        },
                        {
                            "id": "hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hats",
                            "children": []
                        },
                        {
                            "id": "mittens-hand-muffs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mittens & Hand Muffs",
                            "children": []
                        },
                        {
                            "id": "neck-warmers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Neck Warmers",
                            "children": []
                        },
                        {
                            "id": "scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Scarves",
                            "children": []
                        },
                        {
                            "id": "sets1",
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
                    "id": "hair",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Hair",
                    "children": [
                        {
                            "id": "hair-bun-volume-shapers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Bun & Volume Shapers",
                            "children": []
                        },
                        {
                            "id": "hair-combs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Combs",
                            "children": []
                        },
                        {
                            "id": "hair-extensions",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Extensions",
                            "children": []
                        },
                        {
                            "id": "hair-forks-sticks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Forks & Sticks",
                            "children": []
                        },
                        {
                            "id": "hair-nets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Nets",
                            "children": []
                        },
                        {
                            "id": "hair-pins-claws-clips",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Pins, Claws & Clips",
                            "children": []
                        },
                        {
                            "id": "hair-wreaths",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hair Wreaths",
                            "children": []
                        },
                        {
                            "id": "headbands",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Headbands",
                            "children": []
                        },
                        {
                            "id": "ponytail-holders",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Ponytail Holders",
                            "children": []
                        },
                        {
                            "id": "tiaras",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tiaras",
                            "children": []
                        },
                        {
                            "id": "wig-accessories",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Wig Accessories",
                            "children": [
                                {
                                    "id": "wig-caps",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Wig Caps",
                                    "children": []
                                },
                                {
                                    "id": "wig-glue-tape",
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
                            "id": "wigs",
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
                    "id": "sashes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Sashes",
                    "children": []
                },
                {
                    "id": "bags",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Bags",
                    "children": [
                        {
                            "id": "small-bags",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Small Bags",
                            "children": []
                        },
                        {
                            "id": "small-bags1",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Small Bags",
                            "children": [
                                {
                                    "id": "phone-cases",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Phone Cases",
                                    "children": []
                                },
                                {
                                    "id": "wash-bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Wash Bags",
                                    "children": []
                                },
                                {
                                    "id": "belt-bags",
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
                            "id": "backpacks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "backpacks",
                            "children": []
                        },
                        {
                            "id": "tote-bags",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tote-bags",
                            "children": []
                        },
                        {
                            "id": "diaper-bags",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Diaper Bags",
                            "children": []
                        },
                        {
                            "id": "handbags-purses",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Handbags & Purses",
                            "children": [
                                {
                                    "id": "baguettes",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Baguettes",
                                    "children": []
                                },
                                {
                                    "id": "bowling",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bowling",
                                    "children": []
                                },
                                {
                                    "id": "day-clutches",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Day Clutches",
                                    "children": []
                                },
                                {
                                    "id": "evening-bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Evening Bags",
                                    "children": []
                                },
                                {
                                    "id": "hobos",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hobos",
                                    "children": []
                                },
                                {
                                    "id": "totes",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Totes",
                                    "children": []
                                },
                                {
                                    "id": "wristlets",
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
                            "id": "handbag-accessories",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Handbag Accessories",
                            "children": []
                        },
                        {
                            "id": "backpacks-bookbags",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Backpacks & Bookbags",
                            "children": [
                                {
                                    "id": "briefcases-laptop-bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Briefcases & Laptop Bags",
                                    "children": [
                                        {
                                            "id": "checkpoint-friendly-laptop-cases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Checkpoint-friendly Laptop Cases",
                                            "children": []
                                        },
                                        {
                                            "id": "hard-drive-cases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Hard Drive Cases",
                                            "children": []
                                        },
                                        {
                                            "id": "laptop-backpacks",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Laptop Backpacks",
                                            "children": []
                                        },
                                        {
                                            "id": "laptop-messenger-bags",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Laptop Messenger Bags",
                                            "children": []
                                        },
                                        {
                                            "id": "laptop-sleeves-slipcases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Laptop Sleeves & Slipcases",
                                            "children": []
                                        },
                                        {
                                            "id": "netbook-cases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Netbook Cases",
                                            "children": []
                                        },
                                        {
                                            "id": "projector-cases",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Projector Cases",
                                            "children": []
                                        },
                                        {
                                            "id": "rolling-wheeled-laptop-cases",
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
                                    "id": "travel-shopping-bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Travel & Shopping Bags",
                                    "children": [
                                        {
                                            "id": "carry-ons",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Carry-Ons",
                                            "children": []
                                        },
                                        {
                                            "id": "garment-bags",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Garment Bags",
                                            "children": []
                                        },
                                        {
                                            "id": "hardside-luggage",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Hardside Luggage",
                                            "children": []
                                        },
                                        {
                                            "id": "matching-sets",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Matching Sets",
                                            "children": []
                                        },
                                        {
                                            "id": "rolling-luggage",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Rolling Luggage",
                                            "children": []
                                        },
                                        {
                                            "id": "totes1",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Totes",
                                            "children": []
                                        },
                                        {
                                            "id": "luggage-tags",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Luggage Tags",
                                            "children": []
                                        },
                                        {
                                            "id": "packing-cubes",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Packing Cubes",
                                            "children": []
                                        },
                                        {
                                            "id": "packing-folders",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Packing Folders",
                                            "children": []
                                        },
                                        {
                                            "id": "shoe-bags",
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
                                    "id": "duffel-gym-bags",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Duffel & Gym Bags",
                                    "children": []
                                },
                                {
                                    "id": "fanny-waist-packs",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Fanny, Waist Packs",
                                    "children": []
                                },
                                {
                                    "id": "travel-shopping-bags1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Travel & Shopping Bags",
                                    "children": []
                                },
                                {
                                    "id": "reusable-eco-bags",
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
                    "id": "socks1",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Socks",
                    "children": [
                        {
                            "id": "sport-socks",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport Socks",
                            "children": [
                                {
                                    "id": "bowling-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bowling Socks",
                                    "children": []
                                },
                                {
                                    "id": "basketball-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Basketball Socks",
                                    "children": []
                                },
                                {
                                    "id": "cycling-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Cycling Socks",
                                    "children": []
                                },
                                {
                                    "id": "football-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Football Socks",
                                    "children": []
                                },
                                {
                                    "id": "golf-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Golf Socks",
                                    "children": []
                                },
                                {
                                    "id": "hiking-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hiking Socks",
                                    "children": []
                                },
                                {
                                    "id": "ice-hokey-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Ice Hokey Socks",
                                    "children": []
                                },
                                {
                                    "id": "running-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Running Socks",
                                    "children": []
                                },
                                {
                                    "id": "skateboarding-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Skateboarding Socks",
                                    "children": []
                                },
                                {
                                    "id": "snowboarding-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snowboarding Socks",
                                    "children": []
                                },
                                {
                                    "id": "soccer-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Soccer Socks",
                                    "children": []
                                },
                                {
                                    "id": "tennis-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tennis Socks",
                                    "children": []
                                },
                                {
                                    "id": "voley-ball-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Voley Ball Socks",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "hoisery",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hoisery",
                            "children": []
                        },
                        {
                            "id": "mens-socks",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Mens-Socks",
                            "children": [
                                {
                                    "id": "crew-socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Crew Socks",
                                    "children": []
                                },
                                {
                                    "id": "dress-socks",
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
                            "id": "ankle-socks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Ankle Socks",
                            "children": []
                        },
                        {
                            "id": "boots-socks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Boots Socks",
                            "children": []
                        },
                        {
                            "id": "footies",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Footies",
                            "children": []
                        },
                        {
                            "id": "trouser-socks-knee-highs",
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
                    "id": "wallets",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Wallets",
                    "children": [
                        {
                            "id": "business-credit-card-cases",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Business & Credit Card Cases",
                            "children": []
                        },
                        {
                            "id": "checkbook-holder",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Checkbook Holder",
                            "children": []
                        },
                        {
                            "id": "id-badge-holders",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "ID & Badge Holders",
                            "children": []
                        },
                        {
                            "id": "other-mens-id-doc-holders",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Other Men's ID & Doc Holders",
                            "children": []
                        },
                        {
                            "id": "passport-holders",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "PasSport Holders",
                            "children": []
                        },
                        {
                            "id": "business-credit-card-cases1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Business & Credit Card Cases",
                            "children": []
                        },
                        {
                            "id": "key-chains-rings-cases",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Key Chains, Rings & Cases",
                            "children": []
                        },
                        {
                            "id": "organizers-day-planners",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Organizers & Day Planners",
                            "children": []
                        },
                        {
                            "id": "money-clips",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Money Clips",
                            "children": []
                        },
                        {
                            "id": "coin-purses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Coin Purses",
                            "children": []
                        },
                        {
                            "id": "passport-holders1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "PasSport Holders",
                            "children": []
                        },
                        {
                            "id": "travel-wallets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Travel Wallets",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "balaclavas",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Balaclavas",
                    "children": []
                },
                {
                    "id": "bandanas-headties",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Bandanas & Headties",
                    "children": []
                },
                {
                    "id": "belt-buckles",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Belt Buckles",
                    "children": []
                },
                {
                    "id": "button-studs",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Button Studs",
                    "children": []
                },
                {
                    "id": "collar-stays",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Collar Stays",
                    "children": []
                },
                {
                    "id": "cufflinks",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Cufflinks",
                    "children": []
                },
                {
                    "id": "decorative-fans",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Decorative Fans",
                    "children": []
                },
                {
                    "id": "eyewear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Eyewear",
                    "children": [
                        {
                            "id": "sunglass-lens-replacements",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sunglass Lens Replacements",
                            "children": []
                        },
                        {
                            "id": "clear-glass",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Clear Glass",
                            "children": []
                        },
                        {
                            "id": "sunglasses",
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
                    "id": "headwear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Headwear",
                    "children": [
                        {
                            "id": "fascinators",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fascinators",
                            "children": []
                        },
                        {
                            "id": "headdresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Headdresses",
                            "children": []
                        },
                        {
                            "id": "turbans",
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
                    "id": "jewellery",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Jewellery",
                    "children": [
                        {
                            "id": "anklets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Anklets",
                            "children": []
                        },
                        {
                            "id": "body-jewelry",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Body Jewelry",
                            "children": []
                        },
                        {
                            "id": "bracelets",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Bracelets",
                            "children": [
                                {
                                    "id": "wristbands",
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
                            "id": "brooches-lapel-pins",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Brooches & Lapel Pins",
                            "children": []
                        },
                        {
                            "id": "charms-pendants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Charms & Pendants",
                            "children": []
                        },
                        {
                            "id": "earrings",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Earrings",
                            "children": []
                        },
                        {
                            "id": "jewelry-sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Jewelry Sets",
                            "children": []
                        },
                        {
                            "id": "necklaces",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Necklaces",
                            "children": []
                        },
                        {
                            "id": "rings",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rings",
                            "children": []
                        },
                        {
                            "id": "tie-clips",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tie Clips",
                            "children": []
                        },
                        {
                            "id": "watch-accessories",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Watch Accessories",
                            "children": [
                                {
                                    "id": "watch-bands",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Watch Bands",
                                    "children": []
                                },
                                {
                                    "id": "watch-stickers-decals",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Watch Stickers & Decals",
                                    "children": []
                                },
                                {
                                    "id": "watch-winders",
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
                            "id": "watches",
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
                    "id": "shoe-accessories",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Shoe Accessories",
                    "children": [
                        {
                            "id": "boot-liners",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Boot Liners",
                            "children": []
                        },
                        {
                            "id": "gaiters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Gaiters",
                            "children": []
                        },
                        {
                            "id": "shoe-covers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shoe Covers",
                            "children": []
                        },
                        {
                            "id": "shoelaces",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shoelaces",
                            "children": []
                        },
                        {
                            "id": "spurs",
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
                    "id": "gloves1",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Gloves",
                    "children": [
                        {
                            "id": "fingerless-gloves1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fingerless Gloves",
                            "children": []
                        },
                        {
                            "id": "velvet-gloves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Velvet Gloves",
                            "children": []
                        },
                        {
                            "id": "leather-gloves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Leather Gloves",
                            "children": []
                        },
                        {
                            "id": "wool-gloves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wool Gloves",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "masks",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Masks",
                    "children": []
                },
                {
                    "id": "hats1",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Hats",
                    "children": [
                        {
                            "id": "hard-hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hard Hats",
                            "children": []
                        },
                        {
                            "id": "baseball-caps",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baseball Caps",
                            "children": []
                        },
                        {
                            "id": "berets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Berets",
                            "children": []
                        },
                        {
                            "id": "bowlers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bowlers",
                            "children": []
                        },
                        {
                            "id": "cowboy-hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cowboy Hats",
                            "children": []
                        },
                        {
                            "id": "derby-hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Derby Hats",
                            "children": []
                        },
                        {
                            "id": "fedoras",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fedoras",
                            "children": []
                        },
                        {
                            "id": "knit-caps-beanies",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knit Caps & Beanies",
                            "children": []
                        },
                        {
                            "id": "newsboy-caps",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Newsboy Caps",
                            "children": []
                        },
                        {
                            "id": "straw-hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Straw Hats",
                            "children": []
                        },
                        {
                            "id": "sun-hats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sun Hats",
                            "children": []
                        },
                        {
                            "id": "visors",
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
                    "id": "scarves1",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Scarves",
                    "children": [
                        {
                            "id": "cashmere-scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cashmere Scarves",
                            "children": []
                        },
                        {
                            "id": "knit-scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knit Scarves",
                            "children": []
                        },
                        {
                            "id": "prints-patterns-scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Prints & Patterns Scarves",
                            "children": []
                        },
                        {
                            "id": "rectangular-scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rectangular Scarves",
                            "children": []
                        },
                        {
                            "id": "silk-scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Silk Scarves",
                            "children": []
                        },
                        {
                            "id": "square-scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Square Scarves",
                            "children": []
                        },
                        {
                            "id": "wool-scarves",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wool Scarves",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "ties-cummerbunds",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Ties & Cummerbunds",
                    "children": [
                        {
                            "id": "bow-ties",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bow Ties",
                            "children": []
                        },
                        {
                            "id": "neck-ties",
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
                    "id": "umbrellas",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Umbrellas",
                    "children": []
                },
                {
                    "id": "handkerchiefs",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Handkerchiefs",
                    "children": []
                },
                {
                    "id": "collar-tips",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Collar Tips",
                    "children": []
                },
                {
                    "id": "belt-buckles1",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Belt Buckles",
                    "children": []
                }
            ]
        },
        {
            "id": "clothes",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "name": "Clothes",
            "children": [
                {
                    "id": "coats",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Coats",
                    "children": [
                        {
                            "id": "parkas",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Parkas",
                            "children": []
                        },
                        {
                            "id": "trench-coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Trench Coats",
                            "children": []
                        },
                        {
                            "id": "cashmere-coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cashmere Coats",
                            "children": []
                        },
                        {
                            "id": "suede-coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suede Coats",
                            "children": []
                        },
                        {
                            "id": "shearling-coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shearling Coats",
                            "children": []
                        },
                        {
                            "id": "microfiber-coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Microfiber Coats",
                            "children": []
                        },
                        {
                            "id": "wool-coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wool Coats",
                            "children": []
                        },
                        {
                            "id": "puffer-coats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Puffer Coats",
                            "children": []
                        },
                        {
                            "id": "short-coats",
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
                    "id": "dresses",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Dresses",
                    "children": [
                        {
                            "id": "sport-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport Dresses",
                            "children": [
                                {
                                    "id": "tennis-dresses",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tennis Dresses",
                                    "children": []
                                },
                                {
                                    "id": "dance-dresses",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Dance Dresses",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "knitted-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knitted Dresses",
                            "children": []
                        },
                        {
                            "id": "jersey-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Jersey Dresses",
                            "children": []
                        },
                        {
                            "id": "summer-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Summer Dresses",
                            "children": []
                        },
                        {
                            "id": "dirndl-costumes",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dirndl & Costumes",
                            "children": []
                        },
                        {
                            "id": "bridal-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bridal Dresses",
                            "children": []
                        },
                        {
                            "id": "maxi-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maxi Dresses",
                            "children": []
                        },
                        {
                            "id": "cocktail-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cocktail Dresses",
                            "children": []
                        },
                        {
                            "id": "maternity-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity dresses",
                            "children": []
                        },
                        {
                            "id": "baby-doll",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby Doll",
                            "children": []
                        },
                        {
                            "id": "formal-special-occasions",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Formal & Special Occasions",
                            "children": []
                        },
                        {
                            "id": "jumpers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Jumpers",
                            "children": []
                        },
                        {
                            "id": "shirtdresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shirtdresses",
                            "children": []
                        },
                        {
                            "id": "sundresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sundresses",
                            "children": []
                        },
                        {
                            "id": "sweater-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sweater Dresses",
                            "children": []
                        },
                        {
                            "id": "tank",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tank",
                            "children": []
                        },
                        {
                            "id": "wrap",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wrap",
                            "children": []
                        },
                        {
                            "id": "day-dresses",
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
                    "id": "bibs",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Bibs",
                    "children": [
                        {
                            "id": "sport-bibs",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport bibs",
                            "children": [
                                {
                                    "id": "snowboarding-bibs",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snowboarding Bibs",
                                    "children": []
                                },
                                {
                                    "id": "bicycle-bibs",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bicycle Bibs",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "jerseys",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Jerseys",
                    "children": [
                        {
                            "id": "sport-jerseys",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport Jerseys",
                            "children": [
                                {
                                    "id": "basketball-jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Basketball Jerseys",
                                    "children": []
                                },
                                {
                                    "id": "bowling-jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bowling Jerseys",
                                    "children": []
                                },
                                {
                                    "id": "climbing-jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Climbing Jerseys",
                                    "children": []
                                },
                                {
                                    "id": "football-jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Football Jerseys",
                                    "children": []
                                },
                                {
                                    "id": "golf-jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Golf Jerseys",
                                    "children": []
                                },
                                {
                                    "id": "running-jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Running Jerseys",
                                    "children": []
                                },
                                {
                                    "id": "voley-ball-jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Voley Ball Jerseys",
                                    "children": []
                                },
                                {
                                    "id": "bicycle-jerseys",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bicycle Jerseys",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "jackets",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Jackets",
                    "children": [
                        {
                            "id": "sport-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport Jackets",
                            "children": [
                                {
                                    "id": "boxing-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Boxing Jackets",
                                    "children": []
                                },
                                {
                                    "id": "cycling-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Cycling Jackets",
                                    "children": []
                                },
                                {
                                    "id": "football-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Football Jackets",
                                    "children": []
                                },
                                {
                                    "id": "golf-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Golf Jackets",
                                    "children": []
                                },
                                {
                                    "id": "hiking-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hiking Jackets",
                                    "children": []
                                },
                                {
                                    "id": "running-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Running Jackets",
                                    "children": []
                                },
                                {
                                    "id": "skateboarding-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Skateboarding Jackets",
                                    "children": []
                                },
                                {
                                    "id": "snowboarding-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snowboarding Jackets",
                                    "children": []
                                },
                                {
                                    "id": "soccer-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Soccer Jackets",
                                    "children": []
                                },
                                {
                                    "id": "tennis-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tennis Jackets",
                                    "children": []
                                },
                                {
                                    "id": "motorcycle-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Motorcycle Jackets",
                                    "children": []
                                },
                                {
                                    "id": "golf-jackets1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Golf Jackets",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "puffers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Puffers",
                            "children": []
                        },
                        {
                            "id": "rain-outdoor-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rain & Outdoor Jackets",
                            "children": []
                        },
                        {
                            "id": "capes",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Capes",
                            "children": []
                        },
                        {
                            "id": "blazers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Blazers",
                            "children": []
                        },
                        {
                            "id": "athletic-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Athletic Jackets",
                            "children": []
                        },
                        {
                            "id": "fleece-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fleece Jackets",
                            "children": []
                        },
                        {
                            "id": "gilets-waistcoats",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Gilets & Waistcoats",
                            "children": []
                        },
                        {
                            "id": "lightweight-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Lightweight Jackets",
                            "children": []
                        },
                        {
                            "id": "down-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Down Jackets",
                            "children": []
                        },
                        {
                            "id": "denim-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Denim Jackets",
                            "children": []
                        },
                        {
                            "id": "winter-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Winter Jackets",
                            "children": []
                        },
                        {
                            "id": "sport-jackets1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sport Jackets",
                            "children": []
                        },
                        {
                            "id": "maternity-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity Jackets",
                            "children": []
                        },
                        {
                            "id": "motorcycle-jackets1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Motorcycle Jackets",
                            "children": []
                        },
                        {
                            "id": "suede-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suede Jackets",
                            "children": []
                        },
                        {
                            "id": "leather-jacket",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Leather Jacket",
                            "children": []
                        },
                        {
                            "id": "shearling-jacket",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shearling Jacket",
                            "children": []
                        },
                        {
                            "id": "microfiber-jacket",
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
                    "id": "skin-suits",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "skin suits",
                    "children": [
                        {
                            "id": "sport-skin-suits",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport skin suits",
                            "children": [
                                {
                                    "id": "bicycle-skin-suits",
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
                    "id": "blazers1",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Blazers",
                    "children": []
                },
                {
                    "id": "cardigan",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Cardigan",
                    "children": []
                },
                {
                    "id": "hoodies",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Hoodies",
                    "children": [
                        {
                            "id": "sport-hoodies",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport hoodies",
                            "children": [
                                {
                                    "id": "skiing-hoodies",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Skiing Hoodies",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "pantyhose",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Pantyhose",
                    "children": [
                        {
                            "id": "maternity-pantyhose",
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
                    "id": "panties",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Panties",
                    "children": [
                        {
                            "id": "maternity-panties",
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
                    "id": "outfits-sets",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Outfits & Sets",
                    "children": [
                        {
                            "id": "maternity-outfits-sets",
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
                    "id": "skorts",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Skorts",
                    "children": []
                },
                {
                    "id": "pants",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Pants",
                    "children": [
                        {
                            "id": "sport-pants",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport Pants",
                            "children": [
                                {
                                    "id": "track-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Track Pants",
                                    "children": []
                                },
                                {
                                    "id": "golf-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Golf Pants",
                                    "children": []
                                },
                                {
                                    "id": "rock-climbing-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Rock Climbing Pants",
                                    "children": []
                                },
                                {
                                    "id": "yoga-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Yoga Pants",
                                    "children": []
                                },
                                {
                                    "id": "cycling-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Cycling Pants",
                                    "children": []
                                },
                                {
                                    "id": "football-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Football Pants",
                                    "children": []
                                },
                                {
                                    "id": "hiking-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hiking Pants",
                                    "children": []
                                },
                                {
                                    "id": "ice-hokey-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Ice hokey Pants",
                                    "children": []
                                },
                                {
                                    "id": "skateboarding-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Skateboarding Pants",
                                    "children": []
                                },
                                {
                                    "id": "snowboarding-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snowboarding Pants",
                                    "children": []
                                },
                                {
                                    "id": "soccer-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Soccer Pants",
                                    "children": []
                                },
                                {
                                    "id": "tennis-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tennis Pants",
                                    "children": []
                                },
                                {
                                    "id": "hunting-tactical-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hunting & Tactical Pants",
                                    "children": []
                                },
                                {
                                    "id": "motorcycle-pants",
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
                            "id": "business-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Business Pants",
                            "children": []
                        },
                        {
                            "id": "casual-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Casual Pants",
                            "children": []
                        },
                        {
                            "id": "joggers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Joggers",
                            "children": []
                        },
                        {
                            "id": "rain-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rain pants",
                            "children": []
                        },
                        {
                            "id": "maternity-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity pants",
                            "children": []
                        },
                        {
                            "id": "cargo-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cargo-pants",
                            "children": []
                        },
                        {
                            "id": "carpenter",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Carpenter",
                            "children": []
                        },
                        {
                            "id": "corduroy",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Corduroy",
                            "children": []
                        },
                        {
                            "id": "chinos-and-khakis",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Chinos-and-khakis",
                            "children": []
                        },
                        {
                            "id": "dress-formal",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dress & Formal",
                            "children": []
                        },
                        {
                            "id": "overalls",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Overalls",
                            "children": []
                        },
                        {
                            "id": "cropped-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cropped Pants",
                            "children": []
                        },
                        {
                            "id": "knits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knits",
                            "children": []
                        },
                        {
                            "id": "wide-leg-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wide-leg pants",
                            "children": []
                        },
                        {
                            "id": "corduroys",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Corduroys",
                            "children": []
                        },
                        {
                            "id": "overalls-pants",
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
                    "id": "jeans",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "jeans",
                    "children": [
                        {
                            "id": "bootcut-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bootcut-jeans",
                            "children": []
                        },
                        {
                            "id": "cropped-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cropped-jeans",
                            "children": []
                        },
                        {
                            "id": "distressed-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Distressed-jeans",
                            "children": []
                        },
                        {
                            "id": "flare-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Flare-jeans",
                            "children": []
                        },
                        {
                            "id": "maternity-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity jeans",
                            "children": []
                        },
                        {
                            "id": "relaxed-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Relaxed-jeans",
                            "children": []
                        },
                        {
                            "id": "skinny-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Skinny-jeans",
                            "children": []
                        },
                        {
                            "id": "stretch-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Stretch-jeans",
                            "children": []
                        },
                        {
                            "id": "slim-jeans",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Slim Jeans",
                            "children": []
                        },
                        {
                            "id": "straight-leg-jeans",
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
                    "id": "jumpsuits",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Jumpsuits",
                    "children": []
                },
                {
                    "id": "rompers",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Rompers",
                    "children": []
                },
                {
                    "id": "jumpers1",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Jumpers",
                    "children": [
                        {
                            "id": "fleece-jumpers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Fleece Jumpers",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "leggings",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Leggings",
                    "children": []
                },
                {
                    "id": "shirts",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Shirts",
                    "children": [
                        {
                            "id": "sport-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport Shirts",
                            "children": [
                                {
                                    "id": "boxing-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Boxing Shirts",
                                    "children": []
                                },
                                {
                                    "id": "hiking-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hiking Shirts",
                                    "children": []
                                },
                                {
                                    "id": "cycling-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Cycling Shirts",
                                    "children": []
                                },
                                {
                                    "id": "ice-hokey-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Ice Hokey Shirts",
                                    "children": []
                                },
                                {
                                    "id": "tennis-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tennis Shirts",
                                    "children": []
                                },
                                {
                                    "id": "basketball-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Basketball Shirts",
                                    "children": []
                                },
                                {
                                    "id": "bowling-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bowling Shirts",
                                    "children": []
                                },
                                {
                                    "id": "fitness-exercise-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Fitness & Exercise Shirts",
                                    "children": []
                                },
                                {
                                    "id": "golf-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Golf Shirts",
                                    "children": []
                                },
                                {
                                    "id": "soccer-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Soccer Shirts",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "t-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "T-Shirts",
                            "children": [
                                {
                                    "id": "sport-t-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Sport t-Shirts",
                                    "children": [
                                        {
                                            "id": "skiing-t-shirts",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Skiing T-Shirts",
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "id": "print-t-shirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Print T-Shirts",
                                    "children": []
                                },
                                {
                                    "id": "pattern-t-shirt",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pattern T-Shirt",
                                    "children": []
                                },
                                {
                                    "id": "uni-t-shirts",
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
                            "id": "longsleeve-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Longsleeve-Shirts",
                            "children": []
                        },
                        {
                            "id": "shortsleeve-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shortsleeve-Shirts",
                            "children": []
                        },
                        {
                            "id": "button-downs-oxfords",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Button-Downs & Oxfords",
                            "children": []
                        },
                        {
                            "id": "dress-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dress Shirts",
                            "children": []
                        },
                        {
                            "id": "henley-rugby-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Henley & Rugby Shirts",
                            "children": []
                        },
                        {
                            "id": "polos",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Polos",
                            "children": []
                        },
                        {
                            "id": "button-down-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Button down Shirts",
                            "children": []
                        },
                        {
                            "id": "turtlenecks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Turtlenecks",
                            "children": []
                        },
                        {
                            "id": "casual-shirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Casual Shirts",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "shorts",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Shorts",
                    "children": [
                        {
                            "id": "sport-shorts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport Shorts",
                            "children": [
                                {
                                    "id": "basketball-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Basketball Shorts",
                                    "children": []
                                },
                                {
                                    "id": "bowling-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bowling Shorts",
                                    "children": []
                                },
                                {
                                    "id": "cycling-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Cycling Shorts",
                                    "children": []
                                },
                                {
                                    "id": "football-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Football Shorts",
                                    "children": []
                                },
                                {
                                    "id": "hiking-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hiking Shorts",
                                    "children": []
                                },
                                {
                                    "id": "ice-hokey-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Ice Hokey Shorts",
                                    "children": []
                                },
                                {
                                    "id": "running-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Running Shorts",
                                    "children": []
                                },
                                {
                                    "id": "skateboarding-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Skateboarding Shorts",
                                    "children": []
                                },
                                {
                                    "id": "skiing-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Skiing Shorts",
                                    "children": []
                                },
                                {
                                    "id": "tennis-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tennis Shorts",
                                    "children": []
                                },
                                {
                                    "id": "voleyball-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Voleyball Shorts",
                                    "children": []
                                },
                                {
                                    "id": "boxing-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Boxing Shorts",
                                    "children": []
                                },
                                {
                                    "id": "bicycle-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bicycle Shorts",
                                    "children": []
                                },
                                {
                                    "id": "martial-arts-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Martial Arts Shorts",
                                    "children": []
                                },
                                {
                                    "id": "golf-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Golf Shorts",
                                    "children": []
                                },
                                {
                                    "id": "climbing-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Climbing Shorts",
                                    "children": []
                                },
                                {
                                    "id": "soccer-shorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Soccer Shorts",
                                    "children": []
                                },
                                {
                                    "id": "running-shorts1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Running Shorts",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "maternity-shorts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Maternity Shorts",
                            "children": [
                                {
                                    "id": "casual",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Casual",
                                    "children": []
                                },
                                {
                                    "id": "denim",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Denim",
                                    "children": []
                                },
                                {
                                    "id": "dress",
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
                            "id": "bermuda-shorts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bermuda Shorts",
                            "children": []
                        },
                        {
                            "id": "casual1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Casual",
                            "children": []
                        },
                        {
                            "id": "culottes",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Culottes",
                            "children": []
                        },
                        {
                            "id": "cutoffs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cutoffs",
                            "children": []
                        },
                        {
                            "id": "denim1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Denim",
                            "children": []
                        },
                        {
                            "id": "denim-shorts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Denim Shorts",
                            "children": []
                        },
                        {
                            "id": "dress1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dress",
                            "children": []
                        },
                        {
                            "id": "knits-elastic-waist",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Knits & Elastic Waist",
                            "children": []
                        },
                        {
                            "id": "khaki",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Khaki",
                            "children": []
                        },
                        {
                            "id": "skorts1",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "skorts",
                            "children": [
                                {
                                    "id": "sport-skorts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Sport Skorts",
                                    "children": [
                                        {
                                            "id": "tennis-skorts",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Tennis  Skorts",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "skirts",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Skirts",
                    "children": [
                        {
                            "id": "sport-skirts",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sport Skirts",
                            "children": [
                                {
                                    "id": "tennis-skirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tennis Skirts",
                                    "children": []
                                },
                                {
                                    "id": "dance-skirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Dance Skirts",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "maternity-skirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Maternity Skirts",
                            "children": []
                        },
                        {
                            "id": "mid-length-skirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mid-length-Skirts",
                            "children": []
                        },
                        {
                            "id": "mini-skirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mini-Skirts",
                            "children": []
                        },
                        {
                            "id": "long-skirts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Long Skirts",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "costumes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Costumes",
                    "children": []
                },
                {
                    "id": "sleepwear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Sleepwear",
                    "children": [
                        {
                            "id": "loungewear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Loungewear",
                            "children": []
                        },
                        {
                            "id": "nightgowns",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Nightgowns",
                            "children": []
                        },
                        {
                            "id": "robes",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Robes",
                            "children": [
                                {
                                    "id": "bathrobes",
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
                            "id": "pajamas",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Pajamas",
                            "children": [
                                {
                                    "id": "pajama-bottoms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pajama Bottoms",
                                    "children": []
                                },
                                {
                                    "id": "pajama-sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pajama Sets",
                                    "children": []
                                },
                                {
                                    "id": "pajama-tops",
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
                            "id": "sleep-shirts-nightgowns",
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
                    "id": "suits",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Suits",
                    "children": [
                        {
                            "id": "suit-vests",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suit Vests",
                            "children": []
                        },
                        {
                            "id": "suit-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suit Jackets",
                            "children": []
                        },
                        {
                            "id": "tuxedo-jackets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tuxedo Jackets",
                            "children": []
                        },
                        {
                            "id": "tuxedos",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tuxedos",
                            "children": []
                        },
                        {
                            "id": "tuxedo-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tuxedo Pants",
                            "children": []
                        },
                        {
                            "id": "dress-suits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dress Suits",
                            "children": []
                        },
                        {
                            "id": "pantsuits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Pantsuits",
                            "children": []
                        },
                        {
                            "id": "skirt-suits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Skirt Suits",
                            "children": []
                        },
                        {
                            "id": "tuxedos1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tuxedos",
                            "children": []
                        },
                        {
                            "id": "suit-sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Suit Sets",
                            "children": []
                        },
                        {
                            "id": "rain-suits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rain Suits",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "sweats",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Sweats",
                    "children": []
                },
                {
                    "id": "sweaters",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Sweaters",
                    "children": [
                        {
                            "id": "cardigan-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cardigan-Sweaters",
                            "children": []
                        },
                        {
                            "id": "cashmere-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cashmere-Sweaters",
                            "children": []
                        },
                        {
                            "id": "crewneck-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Crewneck-Sweaters",
                            "children": []
                        },
                        {
                            "id": "half-zip-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Half-Zip-Sweaters",
                            "children": []
                        },
                        {
                            "id": "sweaters-vests",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sweaters vests",
                            "children": []
                        },
                        {
                            "id": "turtlenecks-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Turtlenecks-Sweaters",
                            "children": []
                        },
                        {
                            "id": "polos1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Polos",
                            "children": []
                        },
                        {
                            "id": "v-neck-sweaters",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "V-Neck-Sweaters",
                            "children": []
                        },
                        {
                            "id": "shrugs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shrugs",
                            "children": []
                        },
                        {
                            "id": "tunics",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tunics",
                            "children": []
                        },
                        {
                            "id": "twin-sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Twin Sets",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "traditional-ceremonial",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Traditional & Ceremonial",
                    "children": [
                        {
                            "id": "dirndls",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Dirndls",
                            "children": []
                        },
                        {
                            "id": "hakama-trousers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Hakama Trousers",
                            "children": []
                        },
                        {
                            "id": "japanese-black-formal-wear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Japanese Black Formal Wear",
                            "children": []
                        },
                        {
                            "id": "kimono-outerwear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Kimono Outerwear",
                            "children": []
                        },
                        {
                            "id": "kimonos",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Kimonos",
                            "children": []
                        },
                        {
                            "id": "religious-ceremonial-clothing",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Religious Ceremonial Clothing",
                            "children": [
                                {
                                    "id": "baptism-communion-dresses",
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
                            "id": "saris-lehengas",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Saris & Lehengas",
                            "children": []
                        },
                        {
                            "id": "traditional-leather-pants",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Traditional Leather Pants",
                            "children": []
                        },
                        {
                            "id": "yukata",
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
                    "id": "sweatshirt",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Sweatshirt",
                    "children": []
                },
                {
                    "id": "swimwear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Swimwear",
                    "children": [
                        {
                            "id": "board-shorts",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Board Shorts",
                            "children": []
                        },
                        {
                            "id": "briefs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Briefs",
                            "children": []
                        },
                        {
                            "id": "racing",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Racing",
                            "children": []
                        },
                        {
                            "id": "rash-guards",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rash Guards",
                            "children": []
                        },
                        {
                            "id": "trunks",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Trunks",
                            "children": []
                        },
                        {
                            "id": "cover-ups",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cover-Ups",
                            "children": []
                        },
                        {
                            "id": "one-pieces",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "One Pieces",
                            "children": []
                        },
                        {
                            "id": "racing1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Racing",
                            "children": []
                        },
                        {
                            "id": "rash-guards1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Rash Guards",
                            "children": []
                        },
                        {
                            "id": "separates",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Separates",
                            "children": []
                        },
                        {
                            "id": "tankinis",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tankinis",
                            "children": []
                        },
                        {
                            "id": "two-piece-bikinis",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Two-Piece, Bikinis",
                            "children": [
                                {
                                    "id": "bikini-top",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bikini Top",
                                    "children": []
                                },
                                {
                                    "id": "bikini-bottom",
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
                    "id": "tops",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Tops",
                    "children": [
                        {
                            "id": "tank-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tank Tops",
                            "children": []
                        },
                        {
                            "id": "button-front-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Button-Front-tops",
                            "children": []
                        },
                        {
                            "id": "camisole-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Camisole-tops",
                            "children": []
                        },
                        {
                            "id": "halter-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Halter-tops",
                            "children": []
                        },
                        {
                            "id": "longsleeve-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Longsleeve-tops",
                            "children": []
                        },
                        {
                            "id": "shortsleeve-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Shortsleeve-tops",
                            "children": []
                        },
                        {
                            "id": "tank-tops1",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Tank-tops",
                            "children": []
                        },
                        {
                            "id": "maternity-tops",
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
                    "id": "trousers",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Trousers",
                    "children": [
                        {
                            "id": "sport-trousers",
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
                    "id": "underwear",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Underwear",
                    "children": [
                        {
                            "id": "sport-underwear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Sport Underwear",
                            "children": []
                        },
                        {
                            "id": "jock-straps",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Jock Straps",
                            "children": []
                        },
                        {
                            "id": "thongs-g-strings",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Thongs & G-Strings",
                            "children": []
                        },
                        {
                            "id": "mens-boxers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mens-Boxers",
                            "children": []
                        },
                        {
                            "id": "mens-briefs",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Mens-Briefs",
                            "children": []
                        },
                        {
                            "id": "thermal-underwear",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Thermal Underwear",
                            "children": [
                                {
                                    "id": "bottoms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bottoms",
                                    "children": []
                                },
                                {
                                    "id": "sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sets",
                                    "children": []
                                },
                                {
                                    "id": "tops1",
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
                            "id": "maternity-intimates",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Maternity-Intimates",
                            "children": [
                                {
                                    "id": "abdominal-support",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Abdominal Support",
                                    "children": []
                                },
                                {
                                    "id": "belly-bands",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Belly Bands",
                                    "children": []
                                },
                                {
                                    "id": "bra-extenders",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bra Extenders",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "nursing",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Nursing",
                            "children": [
                                {
                                    "id": "bras",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Bras",
                                    "children": []
                                },
                                {
                                    "id": "dresses1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Dresses",
                                    "children": []
                                },
                                {
                                    "id": "sleepwear1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sleepwear",
                                    "children": []
                                },
                                {
                                    "id": "tops2",
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
                            "id": "camisoles-camisole-sets",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Camisoles & Camisole Sets",
                            "children": []
                        },
                        {
                            "id": "women-intimates",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Women-intimates",
                            "children": [
                                {
                                    "id": "accessories",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Accessories",
                                    "children": [
                                        {
                                            "id": "adhesive-bras",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Adhesive Bras",
                                            "children": []
                                        },
                                        {
                                            "id": "breast-petals",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Breast Petals",
                                            "children": []
                                        },
                                        {
                                            "id": "bra-extenders1",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Bra Extenders,",
                                            "children": []
                                        },
                                        {
                                            "id": "pads-enhancers",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Pads & Enhancers",
                                            "children": []
                                        },
                                        {
                                            "id": "breast-petals1",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Breast Petals",
                                            "children": []
                                        },
                                        {
                                            "id": "lingerie-bags",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Lingerie Bags",
                                            "children": []
                                        },
                                        {
                                            "id": "lingerie-tape",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Lingerie Tape",
                                            "children": []
                                        },
                                        {
                                            "id": "straps",
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
                                    "id": "bras1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Bras",
                                    "children": [
                                        {
                                            "id": "bralettes",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Bralettes",
                                            "children": []
                                        },
                                        {
                                            "id": "convertible",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Convertible",
                                            "children": []
                                        },
                                        {
                                            "id": "demicup",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Demicup",
                                            "children": []
                                        },
                                        {
                                            "id": "mastectom",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Mastectom",
                                            "children": []
                                        },
                                        {
                                            "id": "minimizers",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Minimizers",
                                            "children": []
                                        },
                                        {
                                            "id": "push-up",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Push-Up",
                                            "children": []
                                        },
                                        {
                                            "id": "sports-bras",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Sports Bras",
                                            "children": []
                                        },
                                        {
                                            "id": "strapless",
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
                                    "id": "shapewear",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Shapewear",
                                    "children": [
                                        {
                                            "id": "bodysuits",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Bodysuits",
                                            "children": []
                                        },
                                        {
                                            "id": "camisoles",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Camisoles",
                                            "children": []
                                        },
                                        {
                                            "id": "control-panties",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Control Panties",
                                            "children": []
                                        },
                                        {
                                            "id": "control-slips",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Control Slips",
                                            "children": []
                                        },
                                        {
                                            "id": "thigh-slimmers",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Thigh Slimmers",
                                            "children": []
                                        },
                                        {
                                            "id": "waist-cinchers",
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
                                    "id": "garter-belts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Garter Belts",
                                    "children": []
                                },
                                {
                                    "id": "corsets-bustiers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Corsets & Bustiers",
                                    "children": []
                                },
                                {
                                    "id": "breast-forms-enhancers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Breast Forms, Enhancers",
                                    "children": []
                                },
                                {
                                    "id": "stockings-thigh-highs",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Stockings & Thigh-Highs",
                                    "children": []
                                },
                                {
                                    "id": "lingerie",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Lingerie",
                                    "children": []
                                },
                                {
                                    "id": "lingerie-accessories",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Lingerie Accessories",
                                    "children": [
                                        {
                                            "id": "garter-belts1",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Garter Belts",
                                            "children": []
                                        },
                                        {
                                            "id": "garters",
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
                                    "id": "long-johns",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Long Johns",
                                    "children": []
                                },
                                {
                                    "id": "leg-warmers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Leg Warmers",
                                    "children": []
                                },
                                {
                                    "id": "panties1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Panties",
                                    "children": [
                                        {
                                            "id": "bikinis",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Bikinis,",
                                            "children": []
                                        },
                                        {
                                            "id": "boy-shorts",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Boy Shorts",
                                            "children": []
                                        },
                                        {
                                            "id": "briefs1",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Briefs",
                                            "children": []
                                        },
                                        {
                                            "id": "g-strings",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "G-Strings",
                                            "children": []
                                        },
                                        {
                                            "id": "hipsters",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Hipsters",
                                            "children": []
                                        },
                                        {
                                            "id": "tangas",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Tangas",
                                            "children": []
                                        },
                                        {
                                            "id": "thongs",
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
                                    "id": "slips",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Slips",
                                    "children": [
                                        {
                                            "id": "full-slips",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Full Slips",
                                            "children": []
                                        },
                                        {
                                            "id": "half-slips",
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
                                    "id": "tights",
                                    "data": {
                                        "type": "concept",
                                        "depth": 5
                                    },
                                    "name": "Tights",
                                    "children": [
                                        {
                                            "id": "sport-tights",
                                            "data": {
                                                "type": "concept",
                                                "depth": 6
                                            },
                                            "name": "Sport tights",
                                            "children": [
                                                {
                                                    "id": "football-tights",
                                                    "data": {
                                                        "type": "concept",
                                                        "depth": 5
                                                    },
                                                    "name": "Football tights",
                                                    "children": []
                                                },
                                                {
                                                    "id": "skateboarding-tights",
                                                    "data": {
                                                        "type": "concept",
                                                        "depth": 5
                                                    },
                                                    "name": "Skateboarding tights",
                                                    "children": []
                                                },
                                                {
                                                    "id": "bicycle-tights",
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
                                            "id": "control-top",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Control Top",
                                            "children": []
                                        },
                                        {
                                            "id": "matte",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Matte",
                                            "children": []
                                        },
                                        {
                                            "id": "mesh-net",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Mesh & Net",
                                            "children": []
                                        },
                                        {
                                            "id": "opaque",
                                            "data": {
                                                "type": "concept",
                                                "depth": 4
                                            },
                                            "name": "Opaque",
                                            "children": []
                                        },
                                        {
                                            "id": "patterned",
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
                                    "id": "thongs1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Thongs",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "vests",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Vests",
                    "children": [
                        {
                            "id": "sports-vests",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sports Vests",
                            "children": [
                                {
                                    "id": "football-vests",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Football Vests",
                                    "children": []
                                },
                                {
                                    "id": "climbing-robes",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Climbing Robes",
                                    "children": []
                                },
                                {
                                    "id": "hunting-fishing-vests",
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
                    "id": "blouses",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Blouses",
                    "children": [
                        {
                            "id": "peasant-blouses",
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
                    "id": "camis",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Camis",
                    "children": []
                },
                {
                    "id": "baby-toddler",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Baby & Toddler",
                    "children": [
                        {
                            "id": "baby-toddler-bottoms",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Bottoms",
                            "children": []
                        },
                        {
                            "id": "baby-toddler-diaper-covers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Diaper Covers",
                            "children": []
                        },
                        {
                            "id": "baby-toddler-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Dresses",
                            "children": []
                        },
                        {
                            "id": "baby-toddler-outerwear",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Baby & Toddler Outerwear",
                            "children": [
                                {
                                    "id": "fleece",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Fleece",
                                    "children": []
                                },
                                {
                                    "id": "vests1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Vests",
                                    "children": []
                                },
                                {
                                    "id": "rain-wear",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Rain Wear",
                                    "children": []
                                },
                                {
                                    "id": "jackets1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Jackets",
                                    "children": []
                                },
                                {
                                    "id": "snow-wear",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Snow Wear",
                                    "children": []
                                },
                                {
                                    "id": "puffers1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Puffers",
                                    "children": []
                                },
                                {
                                    "id": "sport",
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
                            "id": "baby-toddler-outfits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Outfits",
                            "children": []
                        },
                        {
                            "id": "baby-toddler-sleepwear",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Baby & Toddler Sleepwear",
                            "children": [
                                {
                                    "id": "sleepsacks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sleepsacks",
                                    "children": []
                                },
                                {
                                    "id": "robes1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Robes",
                                    "children": []
                                },
                                {
                                    "id": "blanket-sleepers",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Blanket Sleepers",
                                    "children": []
                                },
                                {
                                    "id": "sets-pajamas",
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
                            "id": "baby-toddler-socks-tights",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Socks & Tights",
                            "children": []
                        },
                        {
                            "id": "baby-toddler-swimwear",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Swimwear",
                            "children": []
                        },
                        {
                            "id": "baby-toddler-tops",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby & Toddler Tops",
                            "children": []
                        },
                        {
                            "id": "clothing-sets",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Clothing Sets",
                            "children": [
                                {
                                    "id": "pant-sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Pant Sets",
                                    "children": []
                                },
                                {
                                    "id": "skirt-sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Skirt Sets",
                                    "children": []
                                },
                                {
                                    "id": "short-sets",
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
                            "id": "baby-one-pieces",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Baby One-Pieces",
                            "children": []
                        },
                        {
                            "id": "toddler-underwear",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Toddler Underwear",
                            "children": [
                                {
                                    "id": "tights1",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Tights",
                                    "children": []
                                },
                                {
                                    "id": "undershirts",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "UnderShirts",
                                    "children": []
                                },
                                {
                                    "id": "socks",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Socks",
                                    "children": []
                                },
                                {
                                    "id": "pants1",
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
                    "id": "uniforms",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Uniforms",
                    "children": [
                        {
                            "id": "contractor-pants-coveralls",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Contractor Pants & Coveralls",
                            "children": []
                        },
                        {
                            "id": "flight-suits",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Flight Suits",
                            "children": []
                        },
                        {
                            "id": "military-uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Military Uniforms",
                            "children": []
                        },
                        {
                            "id": "school-uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "School Uniforms",
                            "children": []
                        },
                        {
                            "id": "security-uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Security Uniforms",
                            "children": []
                        },
                        {
                            "id": "sports-uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Sports Uniforms",
                            "children": [
                                {
                                    "id": "baseball-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Baseball Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "basketball-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Basketball Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "cheerleading-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Cheerleading Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "cricket-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Cricket Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "football-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Football Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "hockey-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Hockey Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "martial-arts-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Martial Arts Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "officiating-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Officiating Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "soccer-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Soccer Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "softball-uniforms",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Softball Uniforms",
                                    "children": []
                                },
                                {
                                    "id": "wrestling-uniforms",
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
                            "id": "chefs-uniforms",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Chef's Uniforms",
                            "children": [
                                {
                                    "id": "chefs-hats",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Chef's Hats",
                                    "children": []
                                },
                                {
                                    "id": "chefs-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Chef's Jackets",
                                    "children": []
                                },
                                {
                                    "id": "chefs-pants",
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
                            "id": "medical-uniforms-scrubs",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Medical Uniforms & Scrubs",
                            "children": [
                                {
                                    "id": "scrub-caps",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Scrub Caps",
                                    "children": []
                                },
                                {
                                    "id": "scrub-jackets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Scrub Jackets",
                                    "children": []
                                },
                                {
                                    "id": "scrub-pants",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Scrub Pants",
                                    "children": []
                                },
                                {
                                    "id": "scrub-sets",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Scrub Sets",
                                    "children": []
                                },
                                {
                                    "id": "scrub-shirts",
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
                    "id": "wedding-bridal-party-dresses",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Wedding & Bridal Party Dresses",
                    "children": [
                        {
                            "id": "bridal-party-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Bridal Party Dresses",
                            "children": []
                        },
                        {
                            "id": "wedding-dresses",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wedding Dresses",
                            "children": []
                        },
                        {
                            "id": "white-coats",
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
            "id": "shoes",
            "data": {
                "type": "concept",
                "depth": 2
            },
            "name": "Shoes",
            "children": [
                {
                    "id": "boots",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Boots",
                    "children": [
                        {
                            "id": "wellies",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Wellies",
                            "children": []
                        },
                        {
                            "id": "heeled-boots",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Heeled Boots",
                            "children": []
                        },
                        {
                            "id": "cowboy-biker-boots",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Cowboy & Biker Boots",
                            "children": []
                        },
                        {
                            "id": "lace-up-boots",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Lace-Up Boots",
                            "children": []
                        },
                        {
                            "id": "ankle-boots",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Ankle Boots",
                            "children": []
                        },
                        {
                            "id": "snow-boots",
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
                    "id": "flats",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Flats",
                    "children": [
                        {
                            "id": "moccasins",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Moccasins",
                            "children": []
                        },
                        {
                            "id": "espadrilles",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Espadrilles",
                            "children": []
                        },
                        {
                            "id": "lace-ups",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Lace-Ups",
                            "children": [
                                {
                                    "id": "sporty-lace-ups",
                                    "data": {
                                        "type": "concept",
                                        "depth": 3
                                    },
                                    "name": "Sporty Lace-Ups",
                                    "children": []
                                },
                                {
                                    "id": "boat-shoes",
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
                    "id": "sandals",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Sandals",
                    "children": [
                        {
                            "id": "flat-sandals",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Flat Sandals",
                            "children": []
                        },
                        {
                            "id": "high-sandals",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "High Sandals",
                            "children": []
                        },
                        {
                            "id": "classic-sandals",
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
                    "id": "sneakers",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Sneakers",
                    "children": [
                        {
                            "id": "low-top-sneakers",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Low-top Sneakers",
                            "children": []
                        },
                        {
                            "id": "high-top-sneakers",
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
                    "id": "crib-shoes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Crib Shoes",
                    "children": []
                },
                {
                    "id": "first-walkers",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "First Walkers ",
                    "children": []
                },
                {
                    "id": "business-shoes",
                    "data": {
                        "type": "concept",
                        "depth": 3
                    },
                    "name": "Business Shoes",
                    "children": [
                        {
                            "id": "brogues-lace-ups",
                            "data": {
                                "type": "concept",
                                "depth": 2
                            },
                            "name": "Brogues & Lace-Ups",
                            "children": []
                        },
                        {
                            "id": "business-slippers",
                            "data": {
                                "type": "concept",
                                "depth": 4
                            },
                            "name": "Business Slippers",
                            "children": [
                                {
                                    "id": "slippers",
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
                    "id": "mules-and-clogs",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Mules-and-clogs",
                    "children": []
                },
                {
                    "id": "wedges",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Wedges",
                    "children": []
                },
                {
                    "id": "athletic-shoes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Athletic Shoes",
                    "children": []
                },
                {
                    "id": "flats-oxfords",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Flats & Oxfords",
                    "children": []
                },
                {
                    "id": "heels",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Heels",
                    "children": []
                },
                {
                    "id": "occupational",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Occupational",
                    "children": []
                },
                {
                    "id": "slippers1",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Slippers",
                    "children": []
                },
                {
                    "id": "formal",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Formal",
                    "children": []
                },
                {
                    "id": "flip-flops",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Flip Flops",
                    "children": []
                },
                {
                    "id": "casual2",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Casual",
                    "children": []
                },
                {
                    "id": "slip-ons-shoes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Slip-Ons-Shoes",
                    "children": []
                },
                {
                    "id": "costume-shoes",
                    "data": {
                        "type": "concept",
                        "depth": 1
                    },
                    "name": "Costume shoes",
                    "children": []
                },
                {
                    "id": "ballerinas",
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
          lineWidth: 0.5,
          color: "#111"
      },
      onBeforeCompute: function(node){
          
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
              style.fontSize = "1.5em";
              style.color = "#000";
              style.backgroundColor="#fff"

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
