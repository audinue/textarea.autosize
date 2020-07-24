addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll('textarea.autosize'), function (textarea) {
    textarea.value = textarea.value
    resize({ target: textarea })
  })
  addEventListener('input', resize)
  function resize (e) {
    var target = e.target
    if (target.nodeName === 'TEXTAREA' 
        && target.classList.contains('autosize')) {
      target.style.height = 'auto'
      target.style.height = target.scrollHeight + 'px'
    }
  }
})
