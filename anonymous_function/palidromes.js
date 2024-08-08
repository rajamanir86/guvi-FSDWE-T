let palind = function(x) {
    for (const i of x) {
 
       if(i === (String(i).split('').reverse().join(''))) {
          console.log(i);
       }
    }
 
 }   
 
 
 
 palind(['carecar', 'radar', 'madam', 'did', 'cannot']);