fetch ('./pashal.json').then(res => {
  return res.json()
}).then(data => {
  if (data.message !== '') {
    let mess = document.createElement('div'),
        header = document.querySelector('header')
        $(mess).css('position', 'fixed')
        $(mess).css('background', 'white')
        $(mess).css('height', '100vh')
        $(mess).css('width', '100vw')
        $(mess).css('z-index', 9999999999)
        $(mess).css('text-align', 'center')
        $(mess).css('top', '20%')
        $(mess).css('font-size', '30px')
    mess.innerHTML = data.message
    document.body.insertBefore(mess, header);
  }
})