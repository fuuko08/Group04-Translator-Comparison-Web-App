jQuery(function($) {
    // click translate btn to get output 
    $("#translateBtn").click(function() {
        
        var firstString = $("#textarea1").val();

        var secondString = $("#textarea2").val();

        highLight(firstString, secondString);
    });
    //functiono to split the out strings into arrays
    function highLight(firstString, secondString) {        
        var firstStringArray = firstString.split(" ");        
        var secondStringArray = secondString.split(" ");

        var highlightPosArray = [];
// function to put all the unmatched words into and array
        jQuery.each(firstStringArray, function(indexArr2, itemArr2){

            if(itemArr2 == secondStringArray[indexArr2]){
                console.log("correct");
            }else{
                console.log("highlight word: " + secondStringArray[indexArr2]);
                highlightPosArray.push(indexArr2);
            }
        }); 
// function to highlight the unmatched words and render it back to the textarea
            if(highlightPosArray.length>0){
                var finalString ="";
                jQuery.each(highlightPosArray, function(currentIndex, currentItem){
                    secondStringArray[currentItem] = "<strong>"+secondStringArray[currentItem]+"</strong>";
                });
                $('#testArea').val("");
                
                jQuery.each(secondStringArray, function(currentIndex, currentItem){
                    finalString += currentItem + " ";
                });

                $('#testArea').append(finalString);
                console.log(finalString);
                $('#translo-translate').append(finalString);
            }        
        };
    
    

        // click the clear btn to clear all text
    $("#clearBtn").click(function(event) {
        event.preventDefault();
        $("#testArea").empty();
    })
});