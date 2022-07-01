function openProject(evt, projectName, nameResumo) {
  let i, tabcontent, tablinks, resumes;
  // ocultando os conteudos
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // adionando classe ativa no tab button
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // mostrando o elemento ativo na tela
  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.className += " active";
  // pegando o resumo pelo id
  resumes = document.getElementsByClassName("resumes");
  for (i = 0; i < resumes.length; i++) {
    resumes[i].style.display = "none";
  }
  // mostrando resumo
  document.getElementById(nameResumo).style.display = "block";
  
}

document.getElementById("defaultOpen").click();