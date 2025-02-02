function Solve(a, b, c){ 
    if(b*b == 4*a*c){ 
        return (-b/(2*a)).toFixed(3); 
    } 
    return (b*b - 4*a*c) < 0  
        ? "no uncomplex solutions"
        :  "first - " + ((-b + Math.sqrt(b*b - 4*a*c)) / (2*a)).toFixed(3) +  
            ", second - " + (((-b - Math.sqrt(b*b - 4*a*c)) / (2*a))).toFixed(3); 
}