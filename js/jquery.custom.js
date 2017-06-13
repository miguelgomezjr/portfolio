
$('document').ready(function() {
      $.ajax({            
            url: "get_images.php", 
            type: "POST",          
            dataType: "HTML", 
            success: function( data ) { 
                $('#images').append(data);
            },
            error: function(jqXHR, data ) {        
                alert ('Ajax request Failed.');    
            }
        }); 
   });