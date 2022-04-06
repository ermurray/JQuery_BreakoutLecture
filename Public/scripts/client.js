

const createActvity = function(data) {
  // const activityTitle = data.activity
  return (
    $(
      `<article>
        <div>
          <h1 class="newActivity">${data.activity}</h1>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        </div>
      </article>`
    )
  );


}


$(document).ready(function(){


  $('.examplebubble').submit(function(event){
    event.preventDefault();
    const data = $("#myInput").val()
    console.log('this', this);
    console.log('going to get activity');
    console.log('value', data);
    $.ajax({
      url: '/postStuff',
      method: 'POST',
      data: {data}
    })

    $.ajax({
      url: `http://www.boredapi.com/api/activity?type=${data}`,

      
    }).then((res)=>{
      const $activity =  createActvity(res)
      console.log('this is an activity', res)
      $(".myTarget")
      // .empty()
      .append($activity)
    })
  })
  $('.myTarget').on('click','.newActivity', function(){
    $(this).toggleClass('changeRed')
  })


})
