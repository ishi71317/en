myImage = new Array(                     

  "piresult.png","piresult1.png"
);
myNowCnt = -1;                        
function myChange(){



                
           

 if (myNowCnt == myImage.length-1){      
    myNowCnt=0;              
                    
       }               
  else{
myNowCnt++;  

}
  document.sshow.src = myImage[myNowCnt];  
  setTimeout( "myChange()" , 200 );          


}
  

