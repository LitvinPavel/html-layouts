$('#accordionExample').on('show.bs.collapse', function(e) {
  $(`#btn${e.target.id} div`).css('color', 'rgb(255, 100, 0)')
  $(`#btn${e.target.id} i`).css('transform', 'rotate(90deg)')
})
$('#accordionExample').on('hide.bs.collapse', function(e) {
  $(`#btn${e.target.id} div`).css('color', 'black')
  $(`#btn${e.target.id} i`).css('transform', 'rotate(0deg)')
})