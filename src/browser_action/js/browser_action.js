var jcRange = document.getElementById("jcProbability");
var probabilityText = document.getElementById("probability");
chrome.storage.local.get("jcProbability", function(items) 
{
    var jcProbability = items.jcProbability;
    
    jcRange.value = jcProbability === undefined ? 0.5 : jcProbability;

    changeProbabilityText();

    jcRange.addEventListener("input", function()
    {
        changeProbabilityText();
        updateChromeStorage();
    });

    function changeProbabilityText()
    {
        probabilityText.innerHTML = jcRange.value;
    }

    function updateChromeStorage()
    {
        chrome.storage.local.set({"jcProbability" : jcRange.value}, function()
        {
            if (chrome.runtime.lastError)
            {
                console.log(chrome.runtime.lastError);
                return;
            }
            console.log("Input range: " + jcRange.value);
            console.log("Stored probability: " + chrome.storage.local.get("jcProbability", function(items)
                        {
                            console.log(items);
                        }));
        });
    }
});
