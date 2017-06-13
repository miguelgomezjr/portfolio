        
<?php 
 
$img_dir = "img/portfolio/".$_POST['project']."/";
 
$images = scandir($img_dir);
 
$html = '';
 
$html .='<ul>';
foreach($images as $img)    { 
        if($img === '.' || $img === '..') {continue;}       
 
            if (  (preg_match('/.jpg/',$img))  ||  (preg_match('/.gif/',$img)) || (preg_match('/.tiff/',$img)) || (preg_match('/.png/',$img)) ) {               
 
             $html .='<li> 
                    <img src="'.$img_dir.$img.'" ></li>' ; 
            } else { continue; }    
    } 
$html .='</ul>' ; 
 
echo $html ;


?>