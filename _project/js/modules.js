var imageModule = (function() {
    return {
        carImages: {
            car1: 'http://codingfaculty.com',
            car2: 'http://codingfaculty.com', 
            car3: 'http://codingfaculty.com', 
            car4: 'http://codingfaculty.com', 
            car5: 'http://codingfaculty.com', 
            car6: 'http://codingfaculty.com', 
            car7: 'http://codingfaculty.com', 
            car8: 'http://codingfaculty.com'
        }, 
        
        insertImages: function() {
            var myArguments = '.'+arguments[0];
            var imageContainer = document.querySelector(myArguments);
            var output = "<div>";

            for(var key in this.carImages) {
                
                output += 'div class="col-lg-3 col-md-4 col-xs-6 thumb">';
                output += '<a class="thumbnail" href="'+this.carImages[key]+'">';
                output += '<img src="images/'+key+'.jpg'+'"alt="">';
                output += '</a>'; 
                output += '</div>'; 
                //console.log(this.carImages[key]);
            }; 

            for(var i = 0; i < imageContainer.length; i++) {
                imageContainer[i].innerHTML = output; 
            }
            output += '</div';
        }
    }
}) (); 