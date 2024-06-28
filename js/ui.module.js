




class ui{





    display(target_container,arr){




        var cartonna=``;


        for(var i=0 ; i<arr.length ; ++i){


         var temp=arr[i].short_description;
         var temp_arr=temp.split(' ');
         var temp_str=temp_arr.slice(0,8).join(',')


            cartonna=cartonna+`


            

                 <div class="col-xl-3 col-lg-4 col-md-6">
                <div data-id="${arr[i].id}" class="card h-100 bg-transparent text-white" >
                   <div class="card-body">
                      <figure class="position-relative">
                         <img class="card-img-top object-fit-cover h-100" src="${arr[i].thumbnail}" alt="${arr[i].title} image">
                      
                      </figure>
          
                      <figcaption>
          
                         <div class="hstack justify-content-between">
                            <h3 class="h6 small">${arr[i].title}</h3>
                            <span class="badge text-bg-primary p-2">Free</span>
                         </div>
          
                         <p class="card-text small text-center opacity-50 pt-1 fw">
                            ${temp_str}
                         </p>
          
                      </figcaption>
                   </div>
          
                   <footer class="card-footer small hstack justify-content-between">
          
                      <span class="badge bg-color">${arr[i].genre
                      }</span>
                      <span class="badge bg-color">${arr[i].platform}</span>
          
                   </footer>
                </div>
             </div>
            
            `
        }

        target_container.innerHTML=cartonna;


    }

    display_details(target_container,arr){


      var cartonna=``;



      for(var i=0 ; i<arr.length ; ++i){

         cartonna=cartonna+`

         <div class="container">
           <header class="hstack justify-content-between">
              <h1 class="text-center h3 py-4">Details Game</h1>
              <button class="btn-close btn-close-white" id="btnClose"></button>
           </header>
           <div class="row g-4" id="detailsContent">
     <div class="col-md-4">
     <img src="${arr[i].thumbnail}" class="w-100" alt="${arr[i].title} image">
  </div>
  <div class="col-md-8">
     <h3>Title: ${arr[i].title}</h3>
     <p>Category: <span class="badge text-bg-info">${arr[i].category}</span> </p>
     <p>Platform: <span class="badge text-bg-info">${arr[i].platform}</span> </p>
     <p>Status: <span class="badge text-bg-info">${arr[i].status}</span> </p>
     <p class="small">${arr[i].description}</p>
     <a class="btn btn-outline-warning mb-3" target="_blank" href="${arr[i].game_url}">Show Game</a>
  </div>
     
     </div>
        </div>
         
         
         `
      }

      target_container.innerHTML=cartonna;



    }
}


export {ui}