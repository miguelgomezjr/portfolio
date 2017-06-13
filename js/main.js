$(document).ready(function(){
	$('.portfolio-item').click(function(){
		$('html,body').scrollTop(0);
		$('.project-view').show();
		var title = $(this).find('.project-title').html();
		var description = $(this).find('.project-title').attr('desc');
		var agency = $(this).find('.project-title').attr('agency');
		var project_role = $(this).find('.project-role').html();
		var images_folder_name = title.replace(/ /g, "-").toLowerCase();
		$('.project-view #project-title').html(title);
		$('.project-view #project-description').html(description);
		$('.project-view #project-agency').html(agency);
		$('.project-view #project-role').html(project_role);
		loadImages(images_folder_name);
	});

	$('.close').click(function(){
		$('.project-view').hide();
	});
});

function loadImages(project){
	$.ajax({            
		url: "get_images.php", 
		type: "POST",   
		data: {project: project},       
		dataType: "HTML", 
		success: function( data ) { 
			$('#portfolio-images').html(data);
		},
		error: function(jqXHR, data ) {        
			alert ('Ajax request Failed.');    
		}
	}); 	
}
