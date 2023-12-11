/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/pacientes';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {     
      data.pacientes.forEach(item => insertList(item.age, item.gender, item.chestpain, item.restingBP, item.serumcholestrol, item.restingrelectro, item.maxheartrate, item.exerciseangia, item.oldpeak, item.slope, item.noofmajorvessels, item.target))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()


/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputAge, inputGender, inputChestpain, inputRestingBP, inputSerumcholestrol, inputFastingbloodsugar, inputRestingrelectro, inputMaxheartrate, inputExerciseangia, inputOldpeak, inputSlope, inputNoofmajorvessels, inputTarget) => {
  const formData = new FormData();
  formData.append('age', inputAge);
  formData.append('gender', inputGender);
  formData.append('chestpain', inputChestpain);
  formData.append('restingBP', inputRestingBP);
  formData.append('serumcholestrol', inputSerumcholestrol);
  formData.append('fastingbloodsugar', inputFastingbloodsugar);
  formData.append('restingrelectro', inputRestingrelectro);
  formData.append('maxheartrate', inputMaxheartrate);
  formData.append('exerciseangia', inputExerciseangia);
  formData.append('oldpeak', inputOldpeak);
  formData.append('slope', inputSlope);
  formData.append('noofmajorvessels', inputNoofmajorvessels);
  formData.append('target', inputTarget);

  var url = 'http://127.0.0.1:5000/paciente';
  fetch(url, {
    method: 'post',
    body: formData
  }).then((response) => response.json()).catch((error) => {
      console.error('Error:', error);
      alert(error);
    });
}

 
const newItem = () => {
  let inputAge = document.getElementById("age").value;
  let inputGender = document.getElementById("gender").value;
  let inputChestpain = document.getElementById("chestpain").value;
  let inputRestingBP = document.getElementById("restingBP").value;
  let inputSerumcholestrol = document.getElementById("serumcholestrol").value; 
  let inputFastingbloodsugar = document.getElementById("fastingbloodsugar").value;
  let inputRestingrelectro = document.getElementById("restingrelectro").value;
  let inputMaxheartrate = document.getElementById("maxheartrate").value;
  let inputExerciseangia = document.getElementById("exerciseangia").value;
  let inputOldpeak = document.getElementById("oldpeak").value;
  let inputSlope= document.getElementById("slope").value;
  let inputNoofmajorvessels= document.getElementById("noofmajorvessels").value;
  let inputTarget= document.getElementById("target").value;
  
   
  if (inputAge === '') {
    alert("Informe seus dados"); 
  } else {    
    insertList(inputAge, inputGender, inputChestpain, inputFastingbloodsugar, inputRestingBP, inputSerumcholestrol, inputRestingrelectro, inputMaxheartrate, inputExerciseangia, inputOldpeak, inputSlope, inputNoofmajorvessels, inputTarget);
    postItem(inputAge, inputGender, inputChestpain, inputFastingbloodsugar, inputRestingBP, inputSerumcholestrol, inputRestingrelectro, inputMaxheartrate, inputExerciseangia, inputOldpeak, inputSlope, inputNoofmajorvessels, inputTarget);
    alert('Foi tudo certo'); 
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (inputNomeUsuario, inputGender, inputChestpain, inputFastingbloodsugar, inputRestingBP, inputSerumcholestrol, inputRestingrelectro, inputMaxheartrate, inputExerciseangia, inputOldpeak, inputSlope, inputNoofmajorvessels, inputTarget) => {
  var item = [inputNomeUsuario, inputGender, inputChestpain, inputFastingbloodsugar, inputRestingBP, inputSerumcholestrol, inputRestingrelectro, inputMaxheartrate, inputExerciseangia, inputOldpeak, inputSlope, inputNoofmajorvessels, inputTarget]
  var table = document.getElementById('myTable');
  var row = table.insertRow();
  table.classList.remove('hidden');
  for (var i = 0; i < item.length-1; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  document.getElementById("age").value = '';
  document.getElementById("gender").value = '';
  document.getElementById("chestpain").value = '';
  document.getElementById("serumcholestrol").value = '';
  document.getElementById("restingBP").value = '';
  document.getElementById("fastingbloodsugar").value = '';
  document.getElementById("maxheartrate").value = '';
  document.getElementById("exerciseangia").value = '';
  document.getElementById("oldpeak").value = '';
  document.getElementById("slope").value = '';
  document.getElementById("noofmajorvessels").value = '';
  document.getElementById("target").value = ''; 
}