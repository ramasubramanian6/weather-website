
    // <div class="input">
    // <input type="text" id="city" placeholder="Enter the city name">
    // <button type="submit" id="but">Submit</button>
    // <div class="condition">
    // <div class="degree">
    // <div id="n">30^c</div>
    // <div class="img">
    // <img src=" " alt="Current Weather condition">
    // <div class="details">
    // <div class="wc">Weather</div>
    // <div class="dt">date and time</div>
    // <div class="lastupdate">LastUpdated Time</div>


  async function apicall(city)
  {
    try
    {
        const api_url=`https://api.weatherapi.com/v1/current.json?key=db2b95a531e74710988135030241205&q=${city}&aqi=no`;
        const api_call=await fetch(api_url);
        const data=await api_call.json()
        const current_temp=data.current.temp_c;
        const weatext=data.current.condition.text
        const img=data.current.condition.icon;
        const dt=data.location.localtime;
        const ls=data.current.last_updated;
        console.log(ls);
        show(current_temp,weatext,img,dt,ls);
    }
    catch(error)
    {
        console.log("Error in data");
    }
  }
  const form = document.querySelector(".form1");

  form.addEventListener("submit",function(e)
{
    e.preventDefault()
    const cityName = document.getElementById("city").value;

    apicall(cityName)

})


const degree1 =document.querySelector("#n");
const cond=document.querySelector(".wc");
const img1=document.querySelector("img");
const dt1=document.querySelector(".dt")
const lst1=document.querySelector(".lastupdate");

function show(current,weatext,img,dtt,lst11)
{
    degree1.innerText=current+'°C';
    cond.innerText=weatext;
    img1.src=img;
    dt1.innerText="Local Time : "+dtt;
    lst1.innerText="last Updated time  : "+lst11;
    
}
