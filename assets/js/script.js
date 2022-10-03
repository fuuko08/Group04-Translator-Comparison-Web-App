jQuery(function($) {

    // click translate btn to get output 
    $("#translateBtn").click(async function() {        
        let result = await requestTranslateServer();        
        if(result != null ){
            let firstString = result[0];
            let secondString = result[1];   
            if(result[0] != null && result[1] != null){       
                highLight(firstString, secondString);
            }            
        }
    });

    //function to split the out strings into arrays
    function highLight(firstString, secondString) {        
        var firstStringArray = firstString.split(" ");        
        var secondStringArray = secondString.split(" ");
        $("#googleForm").append(firstString);    
        var highlightPosArray = [];

// function to put all the unmatched words into and array
        jQuery.each(firstStringArray, function(indexArr2, itemArr2){
            if(itemArr2 == secondStringArray[indexArr2]){               
            }else{                
                highlightPosArray.push(indexArr2);
            }
        }); 

// function to highlight the unmatched words and render it back to the textarea
            if(highlightPosArray.length>0){
                var finalString ="";
                jQuery.each(highlightPosArray, function(currentIndex, currentItem){
                    secondStringArray[currentItem] = "<strong>"+secondStringArray[currentItem]+"</strong>";
                });
                $('#deeplForm').empty();
                
                jQuery.each(secondStringArray, function(currentIndex, currentItem){
                    finalString += currentItem + " ";
                });

                $('#deeplForm').append(finalString);
            }        
        };
    
        // click the clear btn to clear all text
    $("#clearBtn").click(function() {
        $("#deeplForm").empty();
        $("#googleForm").empty();
        $("#englishForm").val("");
    })

        // function save dropdown option to localstorage and reload
    $(function() {
        $("#languageDropdownList").on("change", function() {
            localStorage.setItem("languages", this.value);
        });
        if(localStorage.getItem("languages")) {
            $("#languageDropdownList").val(localStorage.getItem("languages"));
        }       
    });
});