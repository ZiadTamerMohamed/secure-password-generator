  const values = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+[]{}<>?|'
};

let len = document.getElementById("length")

let gen = document.getElementById("generate")

len.addEventListener("input", ()=>{
  let lenV = document.getElementById("length-value")
  lenV.innerText = len.value
})

gen.onclick = ()=>{
  let generatedPassword = generatePassword()
  let out = document.getElementById("password")
  out.value = generatedPassword
}

function generatePassword(){
  let l = +len.value
  let chars = ""

  // THIS IS THE LONG WAY TO DO IT
  let up = document.getElementById("uppercase")
  let lw = document.getElementById("lowercase")
  let nums = document.getElementById("numbers")
  let syms = document.getElementById("symbols")
  if(up.checked){
    chars+= values.uppercase
  }
  if(lw.checked){
    chars+= values.lowercase
  }
  if(nums.checked){
    chars+= values.numbers
  }
  if(syms.checked){
    chars+= values.symbols
  }

  // OR THIS IS THE SHORT WAY TO DO IT
  // for( let k in values){
  //   if(document.getElementById(k).checked){
  //     chars+= values[k]
  //   }
  // }

  if(chars.length === 0){
    alert("select options to generate password")
  }

  let pass = "";
  for (let i = 0; i < l; i++) {
    const rand = Math.floor(Math.random() * chars.length);
    pass += chars[rand];
  }
  return pass
}

function copyPassword(){
  let out = document.getElementById("password")
  navigator.clipboard.writeText(out.value)

  alert("copied")
}
