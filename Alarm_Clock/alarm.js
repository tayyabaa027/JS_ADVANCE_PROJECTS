const time = document.querySelector("p");
const btn = document.getElementById("setAlarm");
const period = document.getElementById("period");
const sec = document.getElementById("Seconds");
const min = document.getElementById("minute");
const hrs = document.getElementById("hour");
const alarmlist = document.getElementById("alarmList");
const sound = document.getElementById("alarmSound");
const btn1 = document.getElementById("stopalarm");
let alarms = [];
btn1.addEventListener("click",function(){
  sound.pause();
  sound.currentTime=0;
  sound.loop=false;
});
btn.addEventListener("click", () => {

    if (hrs.value && min.value && sec.value && period.value) {

        const alarmTime = `${hrs.value}:${min.value}:${sec.value} ${period.value}`;

        // Prevent duplicate alarms
        if (alarms.some(alarm => alarm.time === alarmTime)) {
            alert("This alarm already exists.");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            ${alarmTime}
            <button class="dlt">❌</button>
        `;

        alarmlist.appendChild(li);

        alarms.push({
            time: alarmTime,
            element: li
        });

        const deleteBtn = li.querySelector(".dlt");

        deleteBtn.addEventListener("click", () => {

            alarms = alarms.filter(alarm => alarm.element !== li);

            li.remove();

            if (alarms.length === 0) {
                sound.pause();
                sound.currentTime = 0;
            }
        });

    

        hrs.value = "";
        min.value = "";
        sec.value = "";
        period.value = "";
    }
});

setInterval(() => {

    const date = new Date();

    const currentTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    time.innerHTML = currentTime;

    alarms.forEach((alarm, index) => {

        if (alarm.time === currentTime) {

            sound.loop = true;
            sound.play();

            alarm.element.remove();
            
            alarms.splice(index, 1);
        }

    });

}, 1000);