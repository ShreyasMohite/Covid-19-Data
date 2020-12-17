const getdata = (countryname) => {
    let inx;
    fetch("https://api.covid19api.com/summary").then((data) => {
        //console.log(data);
        return data.json();
    }).then((actual_data) => {
        //console.log(actual_data);
        //console.log(actual_data.Countries[76]);
        let lengths = actual_data.Countries.length;
        for (let x = 0; x < lengths; x++) {
            //let datas = actual_data.Countries[x].Country;

            //let country = document.getElementById("selects").value;
            if (actual_data.Countries[x].Country == countryname) {
                //console.log(x);
                inx = x;
            }

        }
        let country_name = document.getElementById("country_name");
        let todaycases = document.getElementById("newcases");
        let todaydeath = document.getElementById("newdeath");
        let todayrecover = document.getElementById("newrecovered");
        let totalcases = document.getElementById("totalcases");
        let totaldeath = document.getElementById("totaldeaths");
        let totalrecovered = document.getElementById("totalrecovered");


        let apidata = actual_data.Countries[inx];

        let country = apidata.Country;
        country_name.innerHTML = country;

        let newcases = apidata.NewConfirmed;
        todaycases.innerHTML = newcases;

        let newdeath = apidata.NewDeaths;
        todaydeath.innerHTML = newdeath;

        let newrecover = apidata.NewRecovered;
        todayrecover.innerHTML = newrecover;

        let totalconfirmed = apidata.TotalConfirmed;
        totalcases.innerHTML = totalconfirmed;

        let totaldeaths = apidata.TotalDeaths;
        totaldeath.innerHTML = totaldeaths;

        let totalrecover = apidata.TotalRecovered;
        totalrecovered.innerHTML = totalrecover;





    }).catch((error) => {
        console.log(error);
    })
}




const data = () => {
    let country = document.getElementById("selects").value;
    getdata(country)
}