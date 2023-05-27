/* cached service */
 window.onload = () => { 
   'use strict'; 
  
   if ('serviceWorker' in navigator) { 
     navigator.serviceWorker 
              .register('./cached.js') 
              .then(function() { console.log('Caches Service Registered (DONE)');  
                                console.log('Page Loaded');  
     }); 
   } 
 }