const BilanganPrima = (x) =>{
    for(let i = 2; i<x; i++){
        if(x % i == 0){
            console.log("input = " + x +" bukan bilangan prima")
            break
        }
        console.log("input = " + x +"  bilangan prima")
        break
} }
BilanganPrima(3)
BilanganPrima(4)
BilanganPrima(10)
BilanganPrima(17)


const lampu = (N) =>{
  
  let awal = 1
  let n = 4
  let isActive  = false
  
  console.log(`Lampu awal mati`)
  
  for(let i = awal; i <= n; i++){
    if((N % i) === 0){
      isActive = !isActive
    }
  }
  console.log(`${N}   = ${isActive ? "Menyala":"Mati"}`)
}
lampu(5)

