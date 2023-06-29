let dataSet=[];
$('#serachButton').click(function(){
    let firstName=$('#firstName').val();
    dataSet.forEach(function(element){
     
        if(element.first_name==firstName){
            $('#idRow').empty();
            $('#idRow').append(`
          
            <div class="col-3 p-2">
                <div class="card" >
                <div class="card-title"  style="  text-align: right;" ><b id="idNumber">${element.id}</b></div>
  <img src="${element.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">FIRST NAME :<span class="fw-bold ms-2">${element.first_name}</span></h5>
    <h5 class="card-title">LAST NAME :  <span class="fw-bold ms-2">${element.last_name}</span></h5>
    <p class="card-text"><span class="fw-bold">Emial</span>${element.email}</p>
  </div>
</div></div>

            `)
        }
    })
  
})

// $("#back").click(function(){
//     window.alert("ok");
//     $("#idRow").show();
// })

$.ajax({
    method: "GET",
    url: "https://reqres.in/api/users?page=2",
    datatype: "JSON",
    success: function (response) {
dataSet=response.data;
       
        response.data.forEach(
            function (element) {
                $('#idRow').append(`
                <div class="col-3 p-2">
                <div class="card" >
                <div class="card-title"  style="  text-align: right;" ><b id="idNumber">${element.id}</b></div>
  <img src="${element.avatar}" class="card-img-top" alt="...">
  
</div>
<div class="card-body">
    <h5 class="card-title">FIRST NAME :<span class="fw-bold ms-2" style="color:red;">${element.first_name}</span></h5>
  </div>
</div>
                `)
          
            }
        )
    }, error: function () {

    }
})