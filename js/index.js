


import {ui} from './ui.module.js'
import {game}  from './games.module.js'
import { game_details } from './details.module.js';



var uiDisplayer=new ui();
let games_container=document.getElementById("games-container")

var links=document.querySelectorAll(".nav-link")
let detail=document.getElementById("details")


links.forEach(function(ele){
    
    
    ele.addEventListener('click',function(){
        

        
        links.forEach(function(ele){
            
            ele.classList.remove("active")
        })

        ele.classList.add("active")

       
        document.getElementById("sp").classList.remove("d-none")

        
        
   
        
       
        
        get_games(ele.innerHTML)
    })
    
})


var arr=[]
var games=[]
var this_game=[];


function click_card(){

    
    
    let card=document.querySelectorAll(".card-body")
    let detail=document.getElementById("details")


    console.log(card)
    
    
    card.forEach(function(ele){
        
        ele.addEventListener('click',function(){


            let this_id=ele.parentElement.getAttribute("data-id")

            console.log(this_id)
            
            
            document.getElementById("games-all").classList.add("d-none")
            detail.classList.remove("d-none")


            document.getElementById("sp").classList.remove("d-none")

         
            get_game_details(this_id);
          
            
        })
    })
    
    
}

function close_details(){

  


        document.getElementById("btnClose").onclick=function(){
          
            let detail=document.getElementById("details")
            detail.classList.add("d-none")
            document.getElementById("games-all").classList.remove("d-none")
            detail.innerHTML=""
    
    
        }
    
    
}


async function main(){
    
    
    get_games("MMORPG")

   
  
    
}

main()

async function get_games(category){
    



    try{

        var response= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,{
            
            headers:{
                
                'x-rapidapi-key': '900f1da9dbmsh9d40c864cc261a4p1acc93jsn5bec7e314e4c',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                
            }
        })
        
        
        arr= await response.json()
    
    
    
        document.getElementById("sp").classList.add("d-none")
    
    
    
        
        
        console.log(arr)
        
        games=[];
        
        for(var i=0 ; i<arr.length ; ++i){
            
            
            
            
            games.push(new game(arr[i].id,arr[i].thumbnail,arr[i].title,arr[i].short_description,arr[i].genre
                ,arr[i].platform))
            }
            console.log(games)
            
            uiDisplayer.display(games_container,games)
    
            click_card();
            

    }

    catch(err){


        console.log(err)
    }
    

    
    
    
        
        
        
        
        
}

async function get_game_details(id){



    try{

        var response= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}'`,{
            
            headers:{
                
                'x-rapidapi-key': '900f1da9dbmsh9d40c864cc261a4p1acc93jsn5bec7e314e4c',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                
            }
        })
        
        
        arr= await response.json()
        
        document.getElementById("sp").classList.add("d-none")
        
        console.log(arr)
        
        this_game=[];
    
        console.log(arr.length)
        this_game.push(new game_details(arr.id,arr.thumbnail,arr.title,arr.genre,arr.platform,arr.status
            ,arr.description,arr.game_url))
        
    
            console.log(this_game)
            
            uiDisplayer.display_details(detail,this_game)
    
            close_details();

    }



    catch(err){

        console.log
    }
}

    






