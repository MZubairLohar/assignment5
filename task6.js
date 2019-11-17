function mirror(n_ray, base_ray) {

    var r_ray = n_ray.slice(0, base_ray);
    var result = n_ray.concat(r_ray.reverse());
    
    return result;
    }
 
    
    var n_ray = [];
    var base_ray = parseInt(prompt("Define array length: "));
    
    for (var i = 0; i < base_ray; i++) {
    
    n_ray[i] = prompt("Please enter array element at index" + i);
    }
    
    
    var final = mirror(n_ray, base_ray);
    
    document.write("<h1>User array: " + n_ray + "</h1><br>");
    document.write("<h1>Mirrored array: " + final + "</h1><br>");