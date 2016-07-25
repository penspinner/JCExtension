

var readyStateCheckInterval = setInterval(function() 
{
    if (document.readyState === "complete") 
    {
        clearInterval(readyStateCheckInterval);
        
        var jcProbability; 
        chrome.storage.local.get("jcProbability", function(items)
        {
            console.log("Before: " + jcProbability);
            jcProbability = items.jcProbability;
            console.log("After: " + jcProbability);

            if (jcProbability === null || jcProbability === undefined)
            {
                jcProbability = 0.5;
                chrome.storage.local.set({"jcProbability": 0.5});
            }

            var random = Math.random();

            if (random < jcProbability)
            {
                console.log("Successful probability: " + jcProbability + " > " + random);
                var audio = new Audio('http://memberfiles.freewebs.com/20/20/67812020/podcast/John%20Cena%20-%20Your%20time%20is%20up.mp3');
                audio.play();
                audio.loop = true;

                window.setTimeout(function()
                {
                    var images = document.querySelectorAll("img");
                    var johnList = ["http://worldinsport.com/wp-content/uploads/2014/08/johncena.jpg",

                                    "http://www.pwpix.net/wp/wp-content/uploads/2015/04/john-cena-28361725.jpg",
                                    "http://www2.pictures.gi.zimbio.com/John+Cena+Lions+Gate+Premiere+See+No+Evil+nPMaSdcrckVl.jpg",

                                    "http://chaddukeswrestlingshow.com/wp-content/uploads/2011/12/JON-CENA-john-cena-17402034-500-308.jpg",

                                    "http://i.imgur.com/rGaAhA1.jpg",

                                    "http://i.imgur.com/UiHqlME.jpg",
                                    "https://370c91614d34bfed666d6ea8a80d96f0b81747b5.googledrive.com/host/0B6Pvjxj4eVP5WndLVkdOWG9DNHc/JohnCenaRarePhotos",

                                    "http://healthyceleb.com/wp-content/uploads/2013/08/WWE-John-Cena-Bodybuilding.jpg",

                                    "https://media.giphy.com/media/TNUR0OP8SkDZu/giphy.gif",

                                    "http://images.enstarz.com/data/images/full/3786/john-cena.jpg?w=580",

                                    "https://media.giphy.com/media/xpV6TcjeXotDG/giphy.gif"
                                   ];

                    for(var i = 0; i < images.length; i++)
                    {
                        var element = images[i];
                        element = element.setAttribute("src",
                                                       johnList[Math.floor(Math.random() * johnList.length)]);
                    }

                    var textNodes = [];
                    function walkNodeForText(node) 
                    {
                        if (node) 
                        {
                            node = node.firstChild;
                            while (node != null) 
                            {
                                switch (node.nodeType) 
                                {
                                    // Recurse into elements, documents, and document fragments
                                    case 1:
                                    case 9:
                                    case 11:
                                        walkNodeForText(node);
                                        break;
                                    // Add text nodes to the list of elements we want to modify
                                    case 3:
                                        textNodes.push(node);
                                        break;
                                }

                                node = node.nextSibling;
                            }
                        }
                    }
                    walkNodeForText(document.body);

                    textNodes.forEach(function(currentVal, index, array) 
                    {
                        var quoteList = [  
                                            " IF YOU WANT SOME COME GET SOME ",
                                            " THE ONLY REAL JOHN IS JOHN CENA ",
                                            " YOU CAN'T SEE ME ",
                                            " THE CHAMP IS HERE ",
                                            " ATTITUDE ADJUSTMENT ",
                                            " HUSTLE, LOYALTY, RESPECT ",
                                            " NEVER GIVE UP ",
                                            " U CAN'T SEE ME",
                                            " VINCE MCMAHON OWNS ME ",
                                            " WORD LIFE ",
                                            " BASIC THUGONOMICS ",
                                            " WHETHER FIGHTING OR SPITTING, MY DISCIPLINE IS UNFORGIVING! "
                                         ];

                        currentVal.nodeValue = currentVal.nodeValue.replace(/ the /gi, quoteList[Math.floor((Math.random() * 10))] );
                    });


                }, 4000);
            } else console.log("Failed probability: " + jcProbability + " < " + random);
        });
    }
}, 10);
