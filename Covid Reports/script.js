async function data(){
    try{
    let url="https://data.covid19india.org/v4/min/data.min.json"
    let con_fetch=await fetch(url)
    let con_json=await con_fetch.json()
    
    document.querySelector(".card-heads1").innerText="ERODE"
    let state_data1=(`covid:confirmed : ${con_json.TN.districts.Erode.delta.confirmed}`)
    document.querySelector(".p1").innerText=state_data1
    let state_data2=(`covid:recovered : ${con_json.TN.districts.Erode.delta.recovered}`)
    document.querySelector(".p2").innerText=state_data2
    let state_data3=(`covid-7:confirmed : ${con_json.TN.districts.Erode.delta7.confirmed}`)
    document.querySelector(".p3").innerText=state_data3
    let state_data4=(`covid-7:recovered : ${con_json.TN.districts.Erode.delta7.recovered}`)
    document.querySelector(".p4").innerText=state_data4
    let state_data5=(`covid-21_14:confirmed : ${con_json.TN.districts.Erode.delta21_14.confirmed}`)
    document.querySelector(".p5").innerText=state_data5
    let population1=(`POPULATIONS : ${con_json.TN.districts.Erode.meta.population}`)
    document.querySelector(".card-footers1").innerText=population1
    
    document.querySelector(".card-heads2").innerText="SALEM"
    let state_data6=(`covid:confirmed : ${con_json.TN.districts.Salem.delta.confirmed}`)
    document.querySelector(".p6").innerText=state_data6
    let state_data7=(`covid:recovered : ${con_json.TN.districts.Salem.delta.recovered}`)
    document.querySelector(".p7").innerText=state_data7
    let state_data8=(`covid-7:confirmed : ${con_json.TN.districts.Salem.delta7.confirmed}`)
    document.querySelector(".p8").innerText=state_data8
    let state_data9=(`covid-7:recovered : ${con_json.TN.districts.Salem.delta7.recovered}`)
    document.querySelector(".p9").innerText=state_data9
    let state_data10=(`covid-21_14:confirmed : ${con_json.TN.districts.Salem.delta21_14.confirmed}`)
    document.querySelector(".p10").innerText=state_data10
    let population2=(`POPULATIONS : ${con_json.TN.districts.Salem.meta.population}`)
    document.querySelector(".card-footers2").innerText=population2
    
    document.querySelector(".card-heads3").innerText="TANJAVUR"
    let state_data11=(`covid:confirmed : ${con_json.TN.districts.Thanjavur.delta.confirmed}`)
    document.querySelector(".p11").innerText=state_data11
    let state_data12=(`covid:recovered : ${con_json.TN.districts.Thanjavur.delta.recovered}`)
    document.querySelector(".p12").innerText=state_data12
    let state_data13=(`covid-7:confirmed : ${con_json.TN.districts.Thanjavur.delta7.confirmed}`)
    document.querySelector(".p13").innerText=state_data13
    let state_data14=(`covid-7:recovered : ${con_json.TN.districts.Thanjavur.delta7.recovered}`)
    document.querySelector(".p14").innerText=state_data14
    let state_data15=(`covid-21_14:confirmed : ${con_json.TN.districts.Thanjavur.delta21_14.confirmed}`)
    document.querySelector(".p15").innerText=state_data15
    let population3=(`POPULATIONS : ${con_json.TN.districts.Thanjavur.meta.population}`)
    document.querySelector(".card-footers3").innerText=population3
    
    document.querySelector(".card-heads4").innerText="KARUR"
    let state_data16=(`covid:confirmed : ${con_json.TN.districts.Karur.delta.confirmed}`)
    document.querySelector(".p16").innerText=state_data16
    let state_data17=(`covid:recovered : ${con_json.TN.districts.Karur.delta.recovered}`)
    document.querySelector(".p17").innerText=state_data17
    let state_data18=(`covid-7:confirmed : ${con_json.TN.districts.Karur.delta7.confirmed}`)
    document.querySelector(".p18").innerText=state_data18
    let state_data19=(`covid-7:recovered : ${con_json.TN.districts.Karur.delta7.recovered}`)
    document.querySelector(".p19").innerText=state_data19
    let state_data20=(`covid-21_14:confirmed : ${con_json.TN.districts.Karur.delta21_14.confirmed}`)
    document.querySelector(".p20").innerText=state_data20
    let population4=(`POPULATIONS : ${con_json.TN.districts.Karur.meta.population}`)
    document.querySelector(".card-footers4").innerText=population4
    
    document.querySelector(".card-heads5").innerText="TIRUPUR"
    let state_data21=(`covid:confirmed : ${con_json.TN.districts.Tiruppur.delta.confirmed}`)
    document.querySelector(".p21").innerText=state_data21
    let state_data22=(`covid:recovered : ${con_json.TN.districts.Tiruppur.delta.recovered}`)
    document.querySelector(".p22").innerText=state_data22
    let state_data23=(`covid-7:confirmed : ${con_json.TN.districts.Tiruppur.delta7.confirmed}`)
    document.querySelector(".p23").innerText=state_data23
    let state_data24=(`covid-7:recovered : ${con_json.TN.districts.Tiruppur.delta7.recovered}`)
    document.querySelector(".p24").innerText=state_data24
    let state_data25=(`covid-21_14:confirmed : ${con_json.TN.districts.Tiruppur.delta21_14.confirmed}`)
    document.querySelector(".p25").innerText=state_data25
    let population5=(`POPULATIONS : ${con_json.TN.districts.Tiruppur.meta.population}`)
    document.querySelector(".card-footers5").innerText=population5
    
    document.querySelector(".card-heads6").innerText="NAMAKKAL"
    let state_data26=(`covid:confirmed : ${con_json.TN.districts.Namakkal.delta.confirmed}`)
    document.querySelector(".p26").innerText=state_data26
    let state_data27=(`covid:recovered : ${con_json.TN.districts.Namakkal.delta.recovered}`)
    document.querySelector(".p27").innerText=state_data27
    let state_data28=(`covid-7:confirmed : ${con_json.TN.districts.Namakkal.delta7.confirmed}`)
    document.querySelector(".p28").innerText=state_data28
    let state_data29=(`covid-7:recovered : ${con_json.TN.districts.Namakkal.delta7.recovered}`)
    document.querySelector(".p29").innerText=state_data29
    let state_data30=(`covid-21_14:confirmed : ${con_json.TN.districts.Namakkal.delta21_14.confirmed}`)
    document.querySelector(".p30").innerText=state_data30
    let population6=(`POPULATIONS : ${con_json.TN.districts.Namakkal.meta.population}`)
    document.querySelector(".card-footers6").innerText=population6
    
}
catch(e){
    console.log(e)
    console.log("this api not valid")
}
   
}
data()