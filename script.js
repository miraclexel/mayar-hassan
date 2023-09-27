


var modal = document.getElementById("pictureModal");
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

	//onclick of an image container, need to open up a modal with the buttons that have the id of that ingredient,
	$("#main").on('click', '.img-cont', function(){
		var dataSRC= $(this).data('src');

		var dataName = $(this).data('name');


		//change the inner contents of the modal

		const modalInner = document.querySelector('#modal-content')

		modalInner.innerHTML = `
		<div id="modal-content">
		  <h4> ${dataName} </h4>
		  <img src="${dataSRC}" alt="${dataName}" >
	  </div>`


    modal.style.display = "block";

  })

// When the user clicks on <span> (x), close the modal
  span.onclick = function() {
		  modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}


// in charge of seeing what's on screen so that we can scroll in the images

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            console.log('intersected');
            entry.target.classList.remove('hidden');
            entry.target.classList.add('show');
        } else {
            console.log('not intersected');
            entry.target.classList.remove('show');
        }

        
    })
})

const hiddenPics = document.querySelectorAll('.hidden');
hiddenPics.forEach((elm) => observer.observe(elm));


