let charData="";
let resultData="";
const historyData=[];

const evaluates=(a)=>{
    form.screen.value+=a;
    character=form.screen.value;
    charData=character;
}
const del=()=>{
    var num=form.screen.value;
    form.screen.value=num.substring(0,num.length-1);
}
const ac=()=>{
    form.screen.value=" ";
}
const equal=()=>{
    var calc=form.screen.value;
    var result=eval(calc);
    form.screen.value=result;
    resultData=result;
    historyData.push({"character":charData,"results":resultData});
    showLogData();
}

const sin=()=>{
    var trigon=form.screen.value;
    var res=Math.sin(trigon);
    form.screen.value=res;

}
const cos=()=>{
    var trigon=form.screen.value;
    var res=Math.cos(trigon);
    form.screen.value=res;

}
const tan=()=>{
    var trigon=form.screen.value;
    var res=Math.tan(trigon);
    form.screen.value=res;

}
const pi=()=>{
    var pai=form.screen.value*3.141;
    form.screen.value=pai;
}
function showLogData(){
    localStorage.setItem("textInput",JSON.stringify(historyData));
}

    