
// 
const createActivity = function(data) {
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

// `http://www.boredapi.com/api/activity?type=${data}`

$(document).ready(function(){
  $('.exampleBubble').submit( event => {
    event.preventDefault();
    const data = $('#myInput').val()

    $.ajax({
      url: '/postStuff',
      method: 'POST',
      data: {data}
    }).then((res) => console.log(res));

    $.ajax({
      url: `http://www.boredapi.com/api/activity?type=${data}`,
      method: 'GET',
    }).then((res) => {
      const $activity = createActivity(res)
      $('.myTarget').empty().append($activity)
    })
    $('.myTarget').on('click', '.newActivity', function(){
      $(this).toggleClass('changeRed')
    } )
  })
});
