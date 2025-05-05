const studets=[];
const tablebody=document

document.getElementById("studentForm").addEventListener("sumbit",function(e){
    e.preventDefault();

    const name=document.getElementById("name").value.trim();
    const lastName=document.getElementById("lastName").value.trim();
    const grade=document.getElementById("grade").value.trim();

    if (grade <1 || grade >7 || !name || !lastName || isNaN(grade)){
        alert("Error Datos Incorrectos")
        return
    }
    //guardar datos en el Array

    const studets=(name,lastName,grade);
    studets.push(studets);
    addStudentToTable(studets); 


    //console.log(studets)
    this.reset();
});

function addStudentToTable(studets){
    const row=document.createElement("tr")
    row.innerHTML=
    `<td>${studets.name}</td>
    <td>${studets.lastName}</td>
    <td>${studets.grade}</td>`;
    tablebody.appendChild(row);
}

