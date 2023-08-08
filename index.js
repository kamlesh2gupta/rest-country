function getAPIData(){
    var name = "bharat"
    if(document.getElementById("search").value){
        name = document.getElementById("search").value
        document.getElementById("search").value = ""
    }

    var request = new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/"+name)
    request.send()

    request.addEventListener("load",()=>{
        var [data] = JSON.parse(request.responseText)
       document.getElementById("name").innerHTML =  data.name.official
       document.getElementById("capital").innerHTML =  data.capital[0]
       document.getElementById("flags").src =  data.flags.svg
       document.getElementById("region").innerHTML =  data.region
       document.getElementById("subregion").innerHTML =  data.subregion
       document.getElementById("continents").innerHTML =  data.continents[0]
       document.getElementById("population").innerHTML =  data.population
       document.getElementById("area").innerHTML =  data.area
       document.getElementById("borders").innerHTML =  data.borders
       document.getElementById("timeZones").innerHTML =  data.timezones
       document.getElementById("independent").innerHTML =  data.independent
       document.getElementById("unMember").innerHTML =  data.unMember
       document.getElementById("landlocked").innerHTML =  data.landlocked
       document.getElementById("maps").href =  data.maps.googleMaps
    })
}
getAPIData()


getAPIData()