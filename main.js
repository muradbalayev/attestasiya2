class Msg{
    constructor(user_name,send_time,msg_text){
        this.user_name=user_name;
        this.send_time=send_time;
        this.msg_text=msg_text;
    }
    toHtml(){
        return `<p>${this.send_time} ${this.user_name}: ${this.msg_text}</ p>< /b>`;

    }
    
}
class Msngr{
    constructor(user_name,send_time,msg_text){
        this.user_name=user_name;
        this.send_time=send_time;
        this.msg_text=msg_text;

    }
    show_history() {
    }
    send(author, text){
    }
}
    let now = new Date();
    let newDate=`${now.getHours()}:${now.getMinutes()}`;
  document.querySelector("#send").addEventListener("click",addTexts);

  function addTexts(){
    let author=document.querySelector("#name").value;
    let text=document.querySelector("#msg").value;
    document.querySelector(".siyahi").innerHTML+=
    `
    <div style="border:1px solid black; width:max-content;">
    <p>Istifadəçi: ${author}</p>
    <p>Göndərdiyi mətn: ${text}</p>
    </div>`;
    }

document.querySelector("#show").addEventListener("click",addDate);

function addDate(){

    document.querySelector(".siyahi").innerHTML+=`<div style="border:1px solid black; margin-top:10px; width:max-content;">
    Göndərilən tarix: ${newDate}</div>`;
}