
document.addEventListener("DOMContentLoaded", function() { 
        const formEl = document.querySelector('form');
        // console.log(formEl);
        formEl.addEventListener('submit',function(event){
        event.preventDefault();
        const cmtName = document.getElementById('name');
        const cmtEmail = document.getElementById('email');
        const cmtText = document.getElementById('comment-text');

        // <ul class="comments">

        //     <li class="comment">
        //         <div class="avatar">
        //             <img src="./assets/comment-1.jpg" alt="picture of commenter's avatar">
        //         </div>
        //         <div class="flex-container">                           
        //             <p class="cmt-date"><time datetime="2018-10-09 00:00">Tuesday October 9th, 2018</time> by Jeremy</p>
        //             <p class="cmt-text">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis omnis harum fugit id dolores inventore quisquam optio perferendis corrupti! Deserunt praesentium quas voluptatum accusantium natus autem id libero dicta ducimus pariatur ipsam est unde alias dolores incidunt vitae ut a placeat, corporis temporibus dolorum.
        //             </p>
        //         </div>
        //     </li>
        
        const ulEl = document.querySelector('.comments');
        const liEl = document.createElement('li');
        liEl.classList.add('comment');
        // div with image and class avatar
        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');

        const avatarImg = document.createElement('img');
        avatarImg.src='./assets/pexels-lone-jensen-2156311.jpg';
        avatarImg.alt='default avatar';

        avatarDiv.appendChild(avatarImg);
        liEl.appendChild(avatarDiv);
        ulEl.appendChild(liEl);
        console.log(ulEl);

        // div with class flex-container
        const textDiv = document.createElement('div');
        textDiv.classList.add('flex-container');

        // get current time stamp
        const timeStamp = document.createElement('p');
        timeStamp.classList.add('cmt-date');
        const currentDate = new Date();
        const currentDayofWeek = currentDate.getDay();
        const days = ["day","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let dayName = days[currentDayofWeek];
        const currentDateOfMonth = currentDate.getDate();
        let superScript = "";
        if (currentDateOfMonth === 1) {
            superScript = "st";
        } else if (currentDateOfMonth === 2) {
            superScript = "nd";
        } else {
            superScript = "th";
        }
        const currentMonth = currentDate.getMonth(); 
        const months = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];
        let MonthName = months[currentMonth];
        const currentYear = currentDate.getFullYear();

        // In the format Tuesday October 9th, 2018
        const dateString = dayName +" "+ MonthName +" "+ currentDateOfMonth+superScript +", "+currentYear;
        // console.log(dateString);

        timeStamp.appendChild(document.createTextNode(dateString));
        textDiv.appendChild(timeStamp);
        console.log(textDiv);
    })
});


