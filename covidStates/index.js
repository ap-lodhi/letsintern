$.ajax({
    type: 'get',
    url:"https://api.covid19api.com/summary",
    success:function(responce){
        console.log(responce.Countries[0].Country)
        for(var i=0; i<responce.Countries.length; i++){
            var totalActive = responce.Countries[i].TotalConfirmed-responce.Countries[i].TotalRecovered
            var tablerow =`
            <tr><td> ${responce.Countries[i].Country}</td>
             <td> ${responce.Countries[i].TotalConfirmed}</td>  
             <td> ${totalActive}</td>
              <td> ${responce.Countries[i].TotalRecovered}</td>
              <td> ${responce.Countries[i].TotalDeaths}</td> </tr>`
            $('#tabody').append(tablerow)
        }
        $('#covidtable').DataTable()
    },
    error: function(error){
        console.log(error)
    }
}) 